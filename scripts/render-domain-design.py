"""Render editable SVG and PNG diagrams for the AV1 domain design (Pillow).

The message-flow and context-map notation adapts DDD Crew resources:
https://github.com/ddd-crew/domain-message-flow-modelling
https://github.com/ddd-crew/context-mapping
Those adapted diagrams are distributed under CC BY-SA 4.0 by Gastify.
Other diagrams are original Gastify designs using C4/UML conventions.
Run from any directory. All geometry and text are defined here.
"""
from pathlib import Path
import math
from html import escape
from PIL import Image, ImageDraw, ImageFont

OUT = Path(__file__).resolve().parents[1] / 'docs/images/chapter_2'
FONTS = Path('C:/Windows/Fonts')

class Canvas:
    def __init__(self, width, height, title, subtitle):
        self.w, self.h = width, height
        self.im = Image.new('RGB', (width, height), 'white')
        self.d = ImageDraw.Draw(self.im)
        self.svg = [f'<svg xmlns="http://www.w3.org/2000/svg" width="{width}" height="{height}" viewBox="0 0 {width} {height}">', '<rect width="100%" height="100%" fill="white"/>']
        self.text(40, 25, title, 34, True)
        self.text(40, 77, subtitle, 23)

    def font(self, size, bold=False):
        return ImageFont.truetype(str(FONTS / ('arialbd.ttf' if bold else 'arial.ttf')), size)

    def text(self, x, y, s, size=24, bold=False, color='#18324a'):
        self.d.text((x,y), s, font=self.font(size,bold), fill=color)
        self.svg.append(f'<text x="{x}" y="{y}" dominant-baseline="text-before-edge" font-family="Arial, sans-serif" font-size="{size}" font-weight="{"bold" if bold else "normal"}" fill="{color}">{escape(s)}</text>')

    def wrap(self, s, width, size=24, bold=False):
        lines, line = [], ''
        for word in s.split():
            trial = (line+' '+word).strip()
            if self.d.textlength(trial,font=self.font(size,bold)) > width and line:
                lines.append(line); line = word
            else: line = trial
        if line: lines.append(line)
        return lines

    def rect(self, x,y,w,h, fill='#edf3f8', stroke='#7990a5'):
        self.d.rectangle((x,y,x+w,y+h), fill=fill, outline=stroke, width=2)
        self.svg.append(f'<rect x="{x}" y="{y}" width="{w}" height="{h}" fill="{fill}" stroke="{stroke}" stroke-width="2"/>')

    def box(self,x,y,w,h,title,body,kind=''):
        self.rect(x,y,w,h)
        yy=y+13
        if kind: self.text(x+15,yy,kind,20); yy+=28
        for line in self.wrap(title,w-30,25,True): self.text(x+15,yy,line,25,True); yy+=31
        yy+=8
        for line in self.wrap(body,w-30,23):
            if yy+28 > y+h: raise ValueError('Box overflow: '+title)
            self.text(x+15,yy,line,23); yy+=28

    def line(self,points,color='#486075',arrow=True,dashed=False):
        self.d.line(points,fill=color,width=3)
        coords=' '.join(f'{x},{y}' for x,y in points)
        dash=' stroke-dasharray="8 6"' if dashed else ''
        self.svg.append(f'<polyline points="{coords}" fill="none" stroke="{color}" stroke-width="3"{dash}/>')
        if arrow:
            x,y=points[-1]; a,b=points[-2]; theta=math.atan2(y-b,x-a)
            p=[(x,y),(x-15*math.cos(theta-.45),y-15*math.sin(theta-.45)),(x-15*math.cos(theta+.45),y-15*math.sin(theta+.45))]
            self.d.polygon(p,fill=color)
            self.svg.append('<polygon points="'+' '.join(f'{a},{b}' for a,b in p)+f'" fill="{color}"/>')

    def footer(self, text='Fuente: Gastify. Propuesta de diseño; implementación y pruebas pendientes.'):
        for i, line in enumerate(self.wrap(text,self.w-80,21)):
            self.text(40,self.h-69+i*25,line,21)

    def save(self,name):
        OUT.mkdir(parents=True,exist_ok=True)
        (OUT/(name+'.svg')).write_text('\n'.join(self.svg+['</svg>']),encoding='utf-8')
        self.im.save(OUT/(name+'.png'))

def sequence(c,y,title,actors,messages):
    c.text(40,y,title,29,True)
    xs=[210+i*440 for i in range(len(actors))]
    for x,actor in zip(xs,actors):
        c.box(x-170,y+50,340,92,actor,'')
        c.line([(x,y+142),(x,y+170+len(messages)*80)],arrow=False,dashed=True,color='#a6b4c1')
    for i,(src,dst,kind,label,data) in enumerate(messages):
        yy=y+180+i*80; col={'C':'#1467a1','Q':'#5365a0','R':'#476f50','E':'#a34f17'}[kind]
        if src==dst:
            x=xs[src]; c.line([(x,yy+40),(x+85,yy+40),(x+85,yy+62),(x,yy+62)],color=col)
            tx=x+105
        else:
            c.line([(xs[src],yy+53),(xs[dst],yy+53)],color=col)
            tx=min(xs[src],xs[dst])+12
        c.rect(tx-4,yy-3, min(1250,c.w-tx-24),50,'#ffffff','#ffffff')
        c.text(tx,yy,f'{i+1} [{kind}] {label}',23,True,col)
        c.text(tx,yy+27,data,21,color=col)

def flows():
    c=Canvas(1800,1750,'Domain Message Flows | Registro','C: comando   Q: consulta   R: respuesta   E: evento confirmado. Cada escenario tiene su propio orden.')
    sequence(c,130,'A. Registrar suscripción y preparar aviso',['Aplicación móvil','Subscription Management','Premium & Billing','Calendario'],[
        (0,1,'C','RegisterSubscription','userId, nombre, importe, moneda, ciclo, próxima fecha'),
        (1,2,'Q','GetPlanAccess','userId'),
        (2,1,'R','PlanAccess','nivel y límite; rechazar alta si ya se alcanzó'),
        (1,1,'E','SubscriptionRegistered','subscriptionId, userId, nextBillingDate'),
        (1,0,'R','Registro confirmado','registro y datos del recordatorio'),
        (0,3,'C','Crear recordatorio','subscriptionId, título y fecha/hora; requiere permiso'),
        (3,0,'R','Resultado de calendario','eventId o error; no afirmar éxito si se denegó permiso'),
    ])
    sequence(c,950,'B. Registrar gasto y comparar presupuesto',['Aplicación móvil','Delivery Expense Mgmt.','MonthlyBudget'],[
        (0,1,'C','RegisterExpense','userId, requestId, comercio, monto y fecha'),
        (1,1,'E','DeliveryExpenseRegistered','expenseId, userId, amount, expenseDate'),
        (1,2,'C','Aplicar gasto al período','una sola actualización; evitar duplicar un reintento'),
        (2,1,'E','MonthlyLimitExceeded (condicional)','solo si hay límite y el acumulado lo supera'),
        (0,1,'Q','Consultar resumen mensual','userId, año y mes'),
        (1,0,'R','Resumen mensual','total, límite, saldo y exceso'),
    ])
    c.footer('Fuente: Gastify; notación adaptada de DDD Crew, Domain Message Flow Modelling. CC BY-SA 4.0.'); c.save('domain-message-flows-registration')
    c=Canvas(1800,1630,'Domain Message Flows | Premium','El checkout no confirma un pago. El webhook externo se verifica antes de cambiar el acceso.')
    sequence(c,130,'C. Activar o renovar el plan propio',['Aplicación móvil','Premium & Billing','Stripe'],[
        (0,1,'C','Iniciar checkout','userId y precio configurado'),
        (1,2,'C','Crear sesión de suscripción','correlación de usuario, cliente y operación'),
        (2,0,'R','Sesión de checkout (vía backend)','el usuario completa el pago; acceso aún pendiente'),
        (2,1,'E','invoice.paid (externo)','eventId, factura y suscripción; verificar y reconciliar'),
        (1,1,'E','PlanUpgradedToPremium','Free pasa a Premium; una renovación solo actualiza vigencia'),
        (0,1,'Q','Consultar plan / recibir respuesta','nivel y período confirmado; no solo retorno del checkout'),
    ])
    sequence(c,870,'D. Cancelar renovación y volver a Free',['Aplicación móvil','Premium & Billing','Stripe'],[
        (0,1,'C','Cancelar renovación','userId; conservar período pagado'),
        (1,2,'C','Cancelar al fin del período','solicitud y confirmación con fecha de vigencia'),
        (2,1,'E','customer.subscription.deleted','notificación verificada del fin; reconciliar estado'),
        (1,1,'E','PlanDowngradedToFree','planId, userId; conservar trazabilidad de facturación'),
        (0,1,'Q','Consultar plan / recibir respuesta','Free; tratamiento del exceso pendiente del equipo'),
    ])
    c.footer('Fuente: Gastify; notación adaptada de DDD Crew, Domain Message Flow Modelling. CC BY-SA 4.0.'); c.save('domain-message-flows-premium')

def context_map():
    c=Canvas(1800,1200,'CraveWallet | Context Map propuesto','U: upstream. D: downstream. Las flechas muestran influencia del modelo, no peticiones HTTP.')
    for x,title,body in [(40,'ExchangeRate-API [U]','Cotizaciones externas'),(630,'Stripe [U]','Facturación y notificaciones'),(1220,'Google Places [U]','Sugerencias de comercios')]:
        c.box(x,160,535,155,title,body,'Sistema externo')
    c.box(40,510,535,225,'Subscription Management [D]','Core. Portafolio y renovaciones. Consume acceso de Premium. Conserva su propio modelo.','Bounded Context')
    c.box(630,510,535,225,'Premium & Billing [D / U]','Generic. D de Stripe; U de Suscripciones. Nivel, vigencia y límite del plan propio.','Bounded Context')
    c.box(1220,510,535,225,'Delivery Expense Management [D]','Supporting. Gastos y presupuesto mensual. Comercio manual o sugerido.','Bounded Context')
    for x in [307,897,1487]:
        c.line([(x,315),(x,510)])
        c.rect(x-125,365,260,78,'#ffffff','#ffffff')
        c.text(x-80,371,'ACL en D',25,True)
        c.text(x-100,411,'traduce al modelo local',20)
    c.line([(897,735),(897,900),(307,900),(307,735)])
    c.text(350,815,'Customer/Supplier propuesto',26,True)
    c.text(350,851,'GetPlanAccess: nivel y límite',23)
    c.rect(40,970,1715,110,'#f5f7fa')
    c.text(60,987,'Suscripciones / Gastos: Separate Ways para sus modelos.',26,True)
    c.text(60,1030,'El Dashboard compone consultas. Compartir userId no establece un Shared Kernel ni una Partnership.',23)
    c.footer('Fuente: Gastify; adaptación de DDD Crew, Context Mapping. CC BY-SA 4.0. Contratos por validar.'); c.save('context-map-revised')

if __name__ == '__main__':
    flows(); context_map()
    print('Rendered message flows and context map')
