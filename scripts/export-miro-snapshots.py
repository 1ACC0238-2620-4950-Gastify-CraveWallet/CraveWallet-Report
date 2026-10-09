"""Render portable report snapshots from the saved native Miro canvas SVG.

The input is a board read, not a hard-coded model. SVG/PNG and diagrams.net
are offline derivatives; Miro remains the collaborative editing source.
Miro's read API preserves attachment sides but does not expose connector bend
points. Offline elbow routing is recomputed; this is not a Miro UI export.
Requires Python 3 and Pillow; run from any directory.
"""
from pathlib import Path
from html import unescape
import json, math, re
import xml.etree.ElementTree as E
from PIL import Image, ImageDraw, ImageFont

ROOT=Path(__file__).resolve().parents[1]
SOURCE=ROOT/'docs/diagrams/chapter_2'
OUT=ROOT/'docs/images/chapter_2'
NS='{http://www.w3.org/2000/svg}'
INK='#1a1a1a'
manifest=json.loads((SOURCE/'miro-board.json').read_text(encoding='utf-8'))
native=E.parse(SOURCE/'miro-board.svg').getroot()

def font(size,bold=False):
    name='arialbd.ttf' if bold else 'arial.ttf'
    candidates=[Path('C:/Windows/Fonts')/name,Path('/usr/share/fonts/truetype/dejavu')/('DejaVuSans-Bold.ttf' if bold else 'DejaVuSans.ttf')]
    return ImageFont.truetype(next(str(p) for p in candidates if p.exists()),int(size))

def plain(e):
    text=''.join(e.itertext()) if not e.get('data-content') else e.get('data-content')
    # Miro reads rich text as HTML strings; decode before converting line breaks.
    text=unescape(text)
    text=re.sub(r'<br\s*/?>','\n',text,flags=re.I)
    return re.sub(r'<[^>]+>','',text).strip()

def wrap(copy,width,ft,draw):
    lines=[]
    for p in copy.split('\n'):
        line=''
        for word in p.split():
            trial=(line+' '+word).strip()
            if line and draw.textlength(trial,font=ft)>width:
                lines.append(line);line=word
            else:line=trial
        lines.append(line)
    return lines

class Snapshot:
    def __init__(self,name,w,h):
        self.name=name;self.w=w;self.h=h
        self.im=Image.new('RGB',(w,h),'white');self.draw=ImageDraw.Draw(self.im)
        self.svg=E.Element('svg',xmlns='http://www.w3.org/2000/svg',width=str(w),height=str(h),viewBox=f'0 0 {w} {h}')
        E.SubElement(self.svg,'rect',width=str(w),height=str(h),fill='#ffffff')
        self.mx=E.Element('mxGraphModel',page='1',pageWidth=str(w),pageHeight=str(h))
        self.mxroot=E.SubElement(self.mx,'root');E.SubElement(self.mxroot,'mxCell',id='0');E.SubElement(self.mxroot,'mxCell',id='1',parent='0')
        self.idx=1
    def cell(self,value,style,x,y,w,h):
        self.idx+=1
        c=E.SubElement(self.mxroot,'mxCell',id=str(self.idx),value=value,style=style,vertex='1',parent='1')
        E.SubElement(c,'mxGeometry',x=str(x),y=str(y),width=str(w),height=str(h),**{'as':'geometry'})
    def text(self,x,y,w,h,copy,size,bold=False,align='left',middle=False,color=INK,miro_id=None):
        ft=font(size,bold);lines=wrap(copy,w,ft,self.draw);step=size*1.15
        needed=len(lines)*step
        if needed>h+12: raise ValueError(f'{self.name}: text height {needed:.0f}>{h:.0f}: {copy}')
        if middle:y+=(h-needed)/2
        for i,line in enumerate(lines):
            xx=x
            if align=='center':xx=x+(w-self.draw.textlength(line,font=ft))/2
            yy=y+i*step
            self.draw.text((xx,yy),line,font=ft,fill=color,anchor='lt')
            t=E.SubElement(self.svg,'text',x=str(xx),y=str(yy+size*.88),fill=color,**{'font-family':'Arial,sans-serif','font-size':str(size),'font-weight':'bold' if bold else 'normal'})
            if miro_id:t.set('data-miro-id',miro_id)
            t.text=line
        self.cell(copy,f'text;html=0;align={align};verticalAlign=top;whiteSpace=wrap;fontFamily=Arial;fontSize={size};fontStyle={1 if bold else 0};fontColor={color};',x,y,w,max(h,needed))
    def shape(self,e):
        x,y,w,h=[float(e.get(a,0)) for a in ['x','y','width','height']]
        fill=e.get('fill','#ffffff');stroke=e.get('stroke','#757575');kind=e.get('data-shape','rectangle')
        kw={'x':str(x),'y':str(y),'width':str(w),'height':str(h),'fill':fill,'stroke':stroke,'stroke-width':'2','data-miro-id':e.get('data-miro-id','')}
        if e.get('stroke-dasharray'):kw['stroke-dasharray']=e.get('stroke-dasharray')
        if kind=='round_rectangle':kw['rx']='12';self.draw.rounded_rectangle((x,y,x+w,y+h),radius=12,fill=fill,outline=stroke,width=2)
        else:self.draw.rectangle((x,y,x+w,y+h),fill=fill,outline=stroke,width=2)
        E.SubElement(self.svg,'rect',kw)
        if kind=='can':
            self.draw.ellipse((x,y,x+w,y+40),fill=fill,outline=stroke,width=2)
            E.SubElement(self.svg,'ellipse',cx=str(x+w/2),cy=str(y+20),rx=str(w/2),ry='20',fill=fill,stroke=stroke,**{'stroke-width':'2'})
        copy=plain(e)
        self.cell('',f'rounded={1 if kind=="round_rectangle" else 0};fillColor={fill};strokeColor={stroke};dashed={1 if e.get("stroke-dasharray") else 0};',x,y,w,h)
        if copy:self.text(x+16,y+12,w-32,h-24,copy,float(e.get('data-font-size',25)),align=e.get('data-text-align','center'),middle=e.get('data-text-align-vertical','middle')=='middle',color=e.get('data-text-color',INK),miro_id=e.get('data-miro-id'))
    def connector(self,e,nodes):
        a=nodes[e.get('data-start')];b=nodes[e.get('data-end')]
        def anchor(n,side):
            x,y,w,h=[float(n.get(k)) for k in ['x','y','width','height']]
            return {'top':(x+w/2,y),'bottom':(x+w/2,y+h),'left':(x,y+h/2),'right':(x+w,y+h/2)}[side]
        ss=e.get('data-start-side','right');es=e.get('data-end-side','left')
        s=anchor(a,ss);t=anchor(b,es);points=[s,t]
        if e.get('data-shape')=='elbowed':
            if ss in ['left','right'] and es in ['left','right']:
                mid=(s[0]+t[0])/2
                if ss==es:mid=min(s[0],t[0])-50 if ss=='left' else max(s[0],t[0])+50
                points=[s,(mid,s[1]),(mid,t[1]),t]
            elif ss in ['top','bottom'] and es in ['top','bottom']:
                mid=(s[1]+t[1])/2
                if ss==es:mid=min(s[1],t[1])-70 if ss=='top' else max(s[1],t[1])+70
                points=[s,(s[0],mid),(t[0],mid),t]
            elif ss in ['left','right']:points=[s,(t[0],s[1]),t]
            else:points=[s,(s[0],t[1]),t]
        color=e.get('stroke','#313131')
        self.draw.line(points,fill=color,width=2)
        E.SubElement(self.svg,'polyline',points=' '.join(f'{x},{y}' for x,y in points),fill='none',stroke=color,**{'stroke-width':'2','data-miro-id':e.get('data-miro-id','')})
        u,v=points[-2],points[-1];angle=math.atan2(v[1]-u[1],v[0]-u[0])
        tri=[v,(v[0]-14*math.cos(angle-.45),v[1]-14*math.sin(angle-.45)),(v[0]-14*math.cos(angle+.45),v[1]-14*math.sin(angle+.45))]
        self.draw.polygon(tri,fill=color)
        E.SubElement(self.svg,'polygon',points=' '.join(f'{x},{y}' for x,y in tri),fill=color)
        self.idx+=1
        c=E.SubElement(self.mxroot,'mxCell',id=str(self.idx),value=plain(e),edge='1',parent='1',style='edgeStyle=orthogonalEdgeStyle;endArrow=classic;html=0;strokeColor=#313131;fontSize=22;')
        geo=E.SubElement(c,'mxGeometry',relative='1',**{'as':'geometry'})
        for pt,role in [(s,'sourcePoint'),(t,'targetPoint')]:E.SubElement(geo,'mxPoint',x=str(pt[0]),y=str(pt[1]),**{'as':role})
        arr=E.SubElement(geo,'Array',**{'as':'points'})
        for p in points[1:-1]:E.SubElement(arr,'mxPoint',x=str(p[0]),y=str(p[1]))
        copy=plain(e)
        if copy:
            seg=max(zip(points,points[1:]),key=lambda p:math.dist(*p))
            mx,my=(seg[0][0]+seg[1][0])/2,(seg[0][1]+seg[1][1])/2
            size=18 if copy.isdigit() or math.dist(*seg)<180 else 22
            fw=min(700,max(32,self.draw.textlength(copy,font=font(size))+20))
            lines=wrap(copy,fw-20,font(size),self.draw);fh=len(lines)*size*1.15+10
            self.draw.rectangle((mx-fw/2,my-fh/2,mx+fw/2,my+fh/2),fill='white')
            E.SubElement(self.svg,'rect',x=str(mx-fw/2),y=str(my-fh/2),width=str(fw),height=str(fh),fill='#ffffff')
            self.text(mx-fw/2+10,my-fh/2+5,fw-20,fh-10,copy,size,align='center')
    def save(self):
        self.im.save(OUT/(self.name+'.png'))
        E.indent(self.svg);E.ElementTree(self.svg).write(OUT/(self.name+'.svg'),encoding='utf-8',xml_declaration=True)

drawio=E.Element('mxfile',host='app.diagrams.net',version='24.7.17',type='device')
for f in manifest['frames']:
    if f['name'] in {'system-context-revised','containers-revised'}:
        continue  # C4 is now exported from the canonical Structurizr model.
    g=next(x for x in native if x.get('data-miro-id')==f['miro_id'])
    snap=Snapshot(f['name'],2400,1560)
    nodes={x.get('id'):x for x in g if x.tag==NS+'rect' and x.get('data-type')!='frame'}
    backgrounds=[x for x in g if x.tag==NS+'rect' and x.get('data-type')!='frame' and not x.get('data-content')]
    for e in backgrounds:snap.shape(e)
    for c in native:
        if c.tag==NS+'line' and c.get('data-start') in nodes and c.get('data-end') in nodes:snap.connector(c,nodes)
    for e in g:
        if e.tag==NS+'rect' and e.get('data-type')!='frame' and e not in backgrounds:snap.shape(e)
        elif e.tag==NS+'textArea':
            x,y,w,h=[float(e.get(k,0)) for k in ['x','y','width','height']]
            snap.text(x,y,w,h,plain(e),float(e.get('font-size',26)),bold=e.get('font-weight')=='bold',color=e.get('fill',INK),miro_id=e.get('data-miro-id'))
    snap.save()
    page=E.SubElement(drawio,'diagram',id=f['name'],name=f['name']);page.append(snap.mx)
E.indent(drawio);E.ElementTree(drawio).write(SOURCE/'strategic-design.drawio',encoding='utf-8',xml_declaration=True)
print('Rendered 8 DDD PNG/SVG snapshots and diagrams.net pages from the saved Miro board read.')
