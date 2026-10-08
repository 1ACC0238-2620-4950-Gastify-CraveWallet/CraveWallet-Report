"""Generate the report's strategic DDD figures and editable diagrams.net source.

Requires Python 3 and Pillow. Run from any directory; paths are repo-relative.
Canvas layout and message notation adapted from DDD Crew (CC BY 4.0).
"""
from pathlib import Path
from html import escape
import math
import xml.etree.ElementTree as ET
from PIL import Image, ImageDraw, ImageFont

ROOT = Path(__file__).resolve().parents[1]
OUT = ROOT / 'docs/images/chapter_2'
SOURCE = ROOT / 'docs/diagrams/chapter_2'
SOURCE.mkdir(parents=True, exist_ok=True)
FONT_DIR = Path('C:/Windows/Fonts')
INK, BORDER = '#18324a', '#8196a8'
COLORS = {'C': '#176aa5', 'Q': '#6557a5', 'R': '#39714e', 'E': '#a65018'}
PAGES = []

def font(size, bold=False):
    candidates = [FONT_DIR / ('arialbd.ttf' if bold else 'arial.ttf'),
                  Path('/usr/share/fonts/truetype/dejavu') / ('DejaVuSans-Bold.ttf' if bold else 'DejaVuSans.ttf')]
    for path in candidates:
        if path.exists():
            return ImageFont.truetype(str(path), size)
    raise RuntimeError('Install Arial or DejaVu Sans to reproduce text wrapping.')

class Figure:
    def __init__(self, name, title, subtitle, height=1300, width=1800):
        self.name, self.w, self.h = name, width, height
        self.im = Image.new('RGB', (width, height), 'white')
        self.draw = ImageDraw.Draw(self.im)
        self.svg = [f'<svg xmlns="http://www.w3.org/2000/svg" width="{width}" height="{height}" viewBox="0 0 {width} {height}">', '<rect width="100%" height="100%" fill="white"/>']
        self.model = ET.Element('mxGraphModel', page='1', pageWidth=str(width), pageHeight=str(height))
        self.mxroot = ET.SubElement(self.model, 'root')
        ET.SubElement(self.mxroot, 'mxCell', id='0')
        ET.SubElement(self.mxroot, 'mxCell', id='1', parent='0')
        self.idx = 1
        self.text(40, 26, title, 34, True, width=width-80)
        self.text(40, 78, subtitle, 23, width=width-80)

    def cell(self, text, style, x, y, w, h):
        self.idx += 1
        cell = ET.SubElement(self.mxroot, 'mxCell', id=str(self.idx), value=text, style=style, vertex='1', parent='1')
        ET.SubElement(cell, 'mxGeometry', x=str(x), y=str(y), width=str(w), height=str(h), **{'as': 'geometry'})
        return cell

    def wrap(self, text, size, bold, width):
        result = []
        for paragraph in text.split('\n'):
            line = ''
            for word in paragraph.split():
                trial = f'{line} {word}'.strip()
                if self.draw.textlength(trial, font=font(size, bold)) > width and line:
                    result.append(line)
                    line = word
                else:
                    line = trial
            result.append(line)
        return result

    def text(self, x, y, text, size=24, bold=False, color=INK, width=500, max_height=None):
        if not text:
            return 0
        lines = self.wrap(text, size, bold, width)
        step = size + 7
        if max_height is not None and len(lines)*step > max_height:
            raise ValueError(f'{self.name}: text overflows: {text}')
        for i, line in enumerate(lines):
            yy = y+i*step
            if yy+size > self.h-5 or x+self.draw.textlength(line, font=font(size, bold)) > self.w-5:
                raise ValueError(f'{self.name}: text outside figure: {line}')
            self.draw.text((x, yy), line, font=font(size, bold), fill=color, anchor='lt')
            self.svg.append(f'<text x="{x}" y="{yy+size}" font-family="Arial,sans-serif" font-size="{size}" font-weight="{"bold" if bold else "normal"}" fill="{color}">{escape(line)}</text>')
        self.cell('\n'.join(lines), f'text;html=0;align=left;verticalAlign=top;whiteSpace=wrap;overflow=hidden;fontFamily=Arial;fontSize={size};fontStyle={1 if bold else 0};fontColor={color};', x, y, width, len(lines)*step+8)
        return len(lines)*step

    def rect(self, x, y, w, h, fill='white', stroke=BORDER, dashed=False):
        self.draw.rectangle((x,y,x+w,y+h), fill=fill, outline=stroke, width=2)
        self.svg.append(f'<rect x="{x}" y="{y}" width="{w}" height="{h}" fill="{fill}" stroke="{stroke}" stroke-width="2" {"stroke-dasharray=\"10 6\"" if dashed else ""}/>')
        self.cell('', f'rounded=0;fillColor={fill};strokeColor={stroke};dashed={1 if dashed else 0};', x,y,w,h)

    def block(self, x,y,w,h,title,body,fill='#f0f5fa',kind=None):
        self.rect(x,y,w,h,fill)
        yy = y+15
        if kind:
            self.text(x+16,yy,kind,21,width=w-32)
            yy += 32
        yy += self.text(x+16,yy,title,27,True,width=w-32) + 12
        self.text(x+16,yy,body,24,width=w-32,max_height=y+h-yy-10)

    def line(self, points, color=INK, arrow=True, dashed=False):
        self.draw.line(points, fill=color, width=3)
        pts = ' '.join(f'{x},{y}' for x,y in points)
        self.svg.append(f'<polyline points="{pts}" fill="none" stroke="{color}" stroke-width="3" {"stroke-dasharray=\"8 7\"" if dashed else ""}/>')
        if arrow:
            (x0,y0),(x,y)=points[-2:]
            a = math.atan2(y-y0,x-x0)
            triangle = [(x,y),(x-15*math.cos(a-.45),y-15*math.sin(a-.45)),(x-15*math.cos(a+.45),y-15*math.sin(a+.45))]
            self.draw.polygon(triangle, fill=color)
            self.svg.append(f'<polygon points="{" ".join(f"{px},{py}" for px,py in triangle)}" fill="{color}"/>')
        self.idx += 1
        cell = ET.SubElement(self.mxroot, 'mxCell', id=str(self.idx), edge='1', parent='1', style=f'endArrow={"block" if arrow else "none"};strokeColor={color};strokeWidth=3;dashed={1 if dashed else 0};')
        geom=ET.SubElement(cell,'mxGeometry',relative='1',**{'as':'geometry'})
        ET.SubElement(geom,'mxPoint',x=str(points[0][0]),y=str(points[0][1]),**{'as':'sourcePoint'})
        ET.SubElement(geom,'mxPoint',x=str(points[-1][0]),y=str(points[-1][1]),**{'as':'targetPoint'})
        if len(points)>2:
            arr=ET.SubElement(geom,'Array',**{'as':'points'})
            for x,y in points[1:-1]: ET.SubElement(arr,'mxPoint',x=str(x),y=str(y))

    def label(self,x,y,text,w=460,size=23):
        lines=self.wrap(text,size,False,w)
        self.rect(x-6,y-5,w+12,len(lines)*(size+7)+8,'white','white')
        self.text(x,y,text,size,width=w)

    def save(self,credit='Fuente: Gastify. Diseño propuesto; implementación y validación pendientes.'):
        self.text(40,self.h-56,credit,20,width=self.w-80)
        self.svg.append('</svg>')
        (OUT/f'{self.name}.svg').write_text('\n'.join(self.svg),encoding='utf-8')
        self.im.save(OUT/f'{self.name}.png')
        PAGES.append(self)

def sequence(name,title,actors,messages,note):
    # Each message has its own order, direction, type, name and payload.
    h=290+len(messages)*101+120
    f=Figure(name,title,'C: comando | Q: consulta | R: respuesta | E: hecho confirmado. Orden propio del escenario.',h)
    xs=[210+i*440 for i in range(len(actors))]
    for x,(actor,kind) in zip(xs,actors):
        f.block(x-165,140,330,100,actor,'',kind=kind)
        f.line([(x,240),(x,h-155)],BORDER,False,True)
    for i,(order,typ,src,dst,msg,payload) in enumerate(messages):
        y=290+i*101
        a,b=xs[src],xs[dst]
        xx=min(a,b)+12
        if src==dst:
            f.line([(a,y+63),(a+72,y+63),(a+72,y+85),(a,y+85)],COLORS[typ])
            xx=a+90
        else:
            f.line([(a,y+83),(b,y+83)],COLORS[typ])
        width=f.w-xx-35
        f.rect(xx-4,y-3,width+8,78,'white','white')
        f.text(xx,y,f'{order} [{typ}] {msg}',24,True,COLORS[typ],width)
        f.text(xx,y+33,payload,22,False,COLORS[typ],width,max_height=50)
    f.text(40,h-112,note,22,width=1720)
    f.save('Fuente: Gastify; notación adaptada de DDD Crew, Domain Message Flow Modelling. CC BY 4.0.')

sequence('message-flow-subscription','A. Registrar una suscripción y preparar el aviso',
 [('Aplicación móvil','Cliente'),('Suscripciones','Bounded Context'),('Premium & Billing','Bounded Context'),('Calendario','Sistema externo')],[
 ('1','C',0,1,'RegisterSubscription','Identidad autenticada; nombre, importe, moneda, categoría, ciclo y próxima fecha.'),
 ('2','Q',1,2,'GetPlanAccess','userId'),('3','R',2,1,'PlanAccess','Nivel, límite y vigencia. Suscripciones comprueba su cantidad de registros activos.'),
 ('4','E',1,1,'SubscriptionRegistered','subscriptionId, userId, nextBillingDate; después de confirmar la persistencia.'),
 ('5','R',1,0,'Registro confirmado','Suscripción y datos del aviso; calendario todavía no confirmado.'),
 ('6','C',0,3,'Crear recordatorio','subscriptionId, título e instante 24 horas antes; requiere permiso del usuario.'),
 ('7','R',3,0,'Resultado del calendario','eventId creado, error o permiso denegado.')],
 'Rechazo por límite: detener el alta antes del paso 4. El importe original se conserva.')

sequence('message-flow-delivery','B. Registrar un gasto y comparar el presupuesto',
 [('Aplicación móvil','Cliente'),('Gastos','Bounded Context'),('MonthlyBudget','Agregado de Gastos')],[
 ('1','C',0,1,'RegisterExpense','Identidad autenticada; requestId, comercio, importe PEN, categoría y fecha.'),
 ('2','E',1,1,'DeliveryExpenseRegistered','expenseId, userId, amount, expenseDate; después de persistir.'),
 ('3','C',1,2,'Aplicar gasto al período','expenseId, userId, importe y período. Aplicar una sola vez.'),
 ('4','E',2,1,'MonthlyLimitExceeded (condicional)','budgetId, userId, período, límite y acumulado; solo si el acumulado supera el límite.'),
 ('5','Q',0,1,'Consultar resumen mensual','userId y período'),('6','R',1,0,'Resumen mensual','Total, límite configurado, saldo y condición de exceso.')],
 'MonthlyBudget pertenece a Gastos; no es otro contexto. Google Places es una ayuda opcional.')

sequence('message-flow-premium-activation','C. Activar o renovar Premium tras un pago confirmado',
 [('Aplicación móvil','Cliente'),('Premium & Billing','Bounded Context'),('Stripe','Sistema externo')],[
 ('1','C',0,1,'Iniciar checkout','Identidad autenticada y precio del catálogo del servidor.'),
 ('2','C',1,2,'Crear sesión de suscripción','userId correlacionado, cliente y priceId; entorno de prueba.'),
 ('3a','R',2,1,'Sesión creada','sessionId y enlace de checkout.'),('3b','R',1,0,'Abrir checkout','Enlace de la sesión; el usuario completa el pago con Stripe.'),
 ('4','E',2,1,'invoice.paid (externo)','eventId, invoiceId, customerId y subscriptionId; firma, correlación y estado verificados.'),
 ('5','E',1,1,'PlanUpgradedToPremium','planId, userId, período; renovación: actualizar vigencia sin repetir transición.'),
 ('6a','Q',0,1,'Consultar acceso','userId'),('6b','R',1,0,'PlanAccess','Nivel y vigencia confirmados; mostrar pendiente hasta recibir confirmación válida.')],
 'El webhook llega al backend. Deduplicar eventId; reconciliar notificaciones fuera de orden.')

sequence('message-flow-premium-cancellation','D. Cancelar la renovación y volver a Free',
 [('Aplicación móvil','Cliente'),('Premium & Billing','Bounded Context'),('Stripe','Sistema externo')],[
 ('1','C',0,1,'Cancelar renovación','Identidad autenticada; conservar el período ya pagado.'),
 ('2a','C',1,2,'Cancelar al fin del período','subscriptionId correlacionado; cancel_at_period_end.'),
 ('2b','R',2,1,'Cancelación programada','Estado y fecha de fin del período pagado; acceso Premium aún vigente.'),
 ('2c','R',1,0,'Confirmación de solicitud','Renovación cancelada y vigencia restante; si falla, informar sin confirmar.'),
 ('3','E',2,1,'customer.subscription.deleted (al finalizar)','eventId, subscriptionId y estado; verificar, deduplicar y reconciliar vigencia.'),
 ('4','E',1,1,'PlanDowngradedToFree','planId, userId; después del fin del acceso pagado.'),
 ('5a','Q',0,1,'Consultar acceso','userId'),('5b','R',1,0,'PlanAccess','Free y límite vigente. Política de registros excedentes pendiente del equipo.')],
 'Entre 2c y 3 transcurre el período restante. Cancelar Premium no altera servicios de terceros.')

CANVASES = [
 ('canvas-subscription','Subscription Management','Gestión de suscripciones',
  'Anticipar renovaciones y estimar en soles los compromisos recurrentes que registra el usuario.',
  'Core\nModelo de negocio: engagement\nEvolución: custom built (propuesta)',
  'Execution: ciclo del registro\nAnalysis: portafolio y estimación',
  'Móvil (cliente)\nC: RegisterSubscription, editar, cancelar\nQ: detalle y portafolio\nR: registro, estado, resumen y datos del aviso',
  'Premium & Billing (U; proveedor)\nQ: GetPlanAccess(userId)\nR: nivel, límite y vigencia\nCustomer/Supplier propuesto\n\nExchangeRate-API (U; externo)\nQ/R: cotización USD/PEN y fecha\nACL: ExchangeRateApiAdapter',
  'Suscripción: registro de un compromiso con un tercero.\nImporte original: monto y moneda.\nEstimación PEN: valor de referencia.\nCancelada: estado del registro local.',
  'Comprobar límite antes del alta.\nConservar moneda original e historial.\nE: SubscriptionRegistered / SubscriptionCancelled.\nEl móvil ejecuta el aviso 24 h antes, con permiso.',
  'El usuario mantiene sus datos.\nLa conversión es una estimación.\nEl dispositivo admite recordatorios.',
  'Errores de anticipación del aviso.\nAvisos que persisten al cancelar.\nCambios que afectan a Premium.\nSin resultados medidos aún.',
  '¿Se confirma Free = cinco activos?\n¿Exceso al volver a Free?\n¿Hora, zona y reprogramación?'),
 ('canvas-delivery','Delivery Expense Management','Gestión de gastos de delivery',
  'Registrar pedidos pagados y comparar el gasto acumulado con el límite mensual del usuario.',
  'Supporting\nModelo de negocio: engagement\nEvolución: custom built (propuesta)',
  'Execution: gastos y presupuesto\nAnalysis: consumo por período',
  'Móvil (cliente)\nC: RegisterExpense, editar, eliminar, cambiar límite\nQ: historial y resumen\nR: total, límite, saldo y exceso',
  'Google Places (U; externo)\nQ: buscar comercios\nR: MerchantSuggestion\nACL: GooglePlacesAdapter\n\nSuscripciones: Separate Ways\nEl Dashboard compone lecturas, sin intercambio entre agregados.',
  'Gasto: importe registrado por pedido.\nComercio: negocio asociado.\nPeríodo: mes del gasto.\nLímite: tope elegido.\nExceso: acumulado superior al tope.',
  'DeliveryExpense y MonthlyBudget son agregados del mismo contexto.\nContar cada gasto una sola vez.\nE: DeliveryExpenseRegistered / MonthlyLimitExceeded.\nPermitir comercio manual.',
  'El usuario consigna sus pedidos.\nEl total refleja los gastos registrados.\nGoogle Places es opcional.',
  'Acumulado frente a suma del mes.\nDuplicados tras reintentar.\nAltas con Places no disponible.\nSin resultados medidos aún.',
  '¿Cuándo repetir aviso de exceso?\n¿Recalcular tras editar/eliminar?\n¿Reducir límite bajo el acumulado?'),
 ('canvas-premium','Premium & Billing','Plan y facturación de CraveWallet',
  'Mantener el nivel de acceso y su vigencia según la facturación confirmada del propio producto.',
  'Generic\nModelo de negocio: revenue\nEvolución: product (Stripe) con reglas propias',
  'Execution: acceso y vigencia\nGateway: traducción de facturación',
  'Móvil (cliente)\nC: iniciar checkout, cancelar renovación\nQ/R: acceso e historial\n\nSuscripciones (D; cliente)\nQ/R: GetPlanAccess / PlanAccess\nCustomer/Supplier propuesto\n\nStripe (U; externo)\nE: invoice.paid / customer.subscription.deleted\nACL verifica y traduce.',
  'Stripe (U; externo)\nC/R: crear checkout / sesión\nC/R: cancelar renovación / vigencia\nQ/R: reconciliar estado\nACL: StripeGatewayAdapter\n\nLas respuestas a consultas entrantes pertenecen a la misma colaboración.',
  'Free: nivel gratuito con límite.\nPremium: acceso pagado.\nVigencia: intervalo cubierto.\nPago confirmado: resultado verificado.\nCancelación: fin de la renovación propia.',
  'Activar tras pago verificado.\nNo repetir evento externo.\nRenovar actualiza la vigencia.\nCancelar conserva período pagado.\nE: PlanUpgradedToPremium / PlanDowngradedToFree.',
  'Facturación recurrente de prueba.\nPrecio y beneficios son propuestas.\nStripe provee estado de facturación.',
  'Activaciones sin confirmación.\nAcceso frente a vigencia.\nTransiciones duplicadas.\nSin resultados medidos aún.',
  '¿Pago fallido y reembolso?\n¿Recuperación de webhooks?\n¿Exceso al volver a Free?')
]
for name,title,spanish,purpose,strategy,roles,inbound,outbound,language,rules,assumptions,metrics,questions in CANVASES:
    f=Figure(name,f'Bounded Context Canvas | {title}',spanish+' | Propuesta de diseño | C: comando; Q: consulta; R: respuesta; E: evento',1450)
    f.block(40,135,760,235,'Purpose / Propósito',purpose,'#f5f8fb')
    f.block(800,135,555,235,'Strategic Classification',strategy,'#f5f8fb')
    f.block(1355,135,405,235,'Domain Roles',roles,'#f5f8fb')
    f.block(40,370,565,715,'Inbound Communication',inbound,'#edf6fd')
    f.block(605,370,550,350,'Ubiquitous Language',language,'#fffdf3')
    f.block(605,720,550,365,'Business Decisions',rules,'#f5f0fc')
    f.block(1155,370,605,715,'Outbound Communication',outbound,'#f0f8f2')
    f.block(40,1085,565,270,'Assumptions',assumptions)
    f.block(605,1085,550,270,'Verification Metrics',metrics)
    f.block(1155,1085,605,270,'Open Questions',questions)
    f.save('Fuente: Gastify; adaptación del Bounded Context Canvas v5 de DDD Crew. CC BY 4.0. Sin métricas ejecutadas.')

f=Figure('context-map-revised','CraveWallet | Context Map','U: proveedor del modelo; D: consumidor. La flecha representa influencia del modelo.',1200)
for x,title,body in [(40,'ExchangeRate-API [U]','Cotización y fecha'),(630,'Stripe [U]','Facturación y notificaciones'),(1220,'Google Places [U]','Sugerencias de comercios')]:
    f.block(x,145,540,170,title,body,kind='Sistema externo')
for x,title,body in [(40,'Suscripciones [D]','Subscription Management\nCore: portafolio y renovaciones'),(630,'Premium & Billing [D / U]','Generic: acceso y vigencia\nD de Stripe; U de Suscripciones'),(1220,'Gastos [D]','Delivery Expense Management\nSupporting: gastos y presupuesto')]:
    f.block(x,480,540,230,title,body,kind='Bounded Context')
for x in [310,900,1490]:
    f.line([(x,315),(x,480)])
    f.label(x-185,352,'ACL en el contexto D\nTraduce al modelo local',370)
f.line([(900,710),(900,890),(310,890),(310,710)])
f.label(350,776,'Customer/Supplier propuesto\nPremium [U/S] → Suscripciones [D/C]\nGetPlanAccess: nivel, límite y vigencia',510)
f.block(40,956,1720,135,'Suscripciones / Gastos: Separate Ways','No hay integración entre sus agregados. El cliente compone los resúmenes del Dashboard.')
f.save('Fuente: Gastify; notación adaptada de DDD Crew, Context Mapping. CC BY 4.0. Contratos propuestos.')

# Context and container figures use the same elements/relationships as workspace.dsl.
f=Figure('system-context-revised','C4 | Contexto del sistema CraveWallet','Nivel 1: personas y sistemas. CraveWallet incluye el cliente móvil y el backend.',1340)
f.block(650,140,540,175,'Usuario','Estudiante o profesional joven que controla compromisos y gastos.',kind='Persona')
f.block(650,490,540,260,'CraveWallet','Registra suscripciones y delivery; estima importes en soles, prepara avisos y administra su plan propio.','#daeafd',kind='Sistema de software')
f.block(40,440,445,170,'ExchangeRate-API','Cotizaciones USD/PEN.',kind='Sistema externo')
f.block(1370,250,390,185,'Stripe','Checkout y facturación del plan de CraveWallet.',kind='Sistema externo')
f.block(1370,620,390,170,'Google Places','Sugerencias de comercios.',kind='Sistema externo')
f.block(650,1040,540,175,'Calendario del dispositivo','Recordatorios con permiso del usuario.',kind='Sistema externo')
f.line([(920,315),(920,490)]); f.label(715,365,'Registra y consulta por el móvil',450)
f.line([(1190,250),(1295,250),(1295,280),(1370,280)])
f.label(1210,113,'Completa pago en checkout',535,21)
f.line([(650,540),(485,540)]); f.label(60,360,'Consulta cotización USD/PEN',465)
f.line([(1190,545),(1280,545),(1280,340),(1370,340)]); f.label(1220,165,'Solicita checkout y cancelación',520)
f.line([(1370,405),(1310,405),(1310,665),(1190,665)]); f.label(1250,452,'Notifica pago y\nfin del plan',455)
f.line([(1190,720),(1370,720)]); f.label(1300,835,'Consulta sugerencias',460)
f.line([(920,750),(920,1040)]); f.label(700,873,'Crea, reprograma o retira avisos\nmediante el cliente móvil',560)
f.save()

f=Figure('containers-revised','C4 | Contenedores de CraveWallet','Nivel 2: aplicaciones y almacenes. Los tres Bounded Contexts son módulos internos del backend.',1300,2200)
f.rect(40,330,1400,860,'#ffffff',BORDER,True)
f.text(650,352,'Sistema CraveWallet',28,True,width=450)
f.block(55,140,480,155,'Usuario','Interactúa con la aplicación.',kind='Persona')
f.block(55,430,480,245,'Mobile App','Flutter / Dart\nFormularios, Dashboard, permisos y recordatorios.','#daeafd',kind='Contenedor: aplicación móvil')
f.block(945,430,475,245,'REST API Backend','Java 21 / Spring Boot\nSuscripciones, Gastos y Premium; autenticación y adaptadores.','#daeafd',kind='Contenedor: aplicación servidor')
f.block(55,885,480,220,'Local Database','SQLite\nCaché de lectura con fecha de actualización.','#daeafd',kind='Contenedor: almacén de datos')
f.block(945,885,475,220,'Remote Database','PostgreSQL\nEstado canónico y tablas propiedad de cada módulo.','#daeafd',kind='Contenedor: almacén de datos')
for y,title,body in [(140,'ExchangeRate-API','Cotización USD/PEN'),(450,'Stripe','Checkout y webhooks'),(760,'Google Places','Sugerencias de comercios'),(1050,'Calendario del dispositivo','Avisos con permiso del usuario')]:
    f.block(1690,y,440,185,title,body,kind='Sistema externo')
f.line([(295,295),(295,430)]);f.label(95,350,'Usa formularios y resúmenes',440)
f.line([(535,560),(945,560)]);f.label(555,492,'Ejecuta casos de uso\nHTTPS / JSON',375)
f.line([(535,450),(575,450),(575,310),(1640,310),(1640,520),(1690,520)])
f.label(625,282,'Abre checkout del proveedor; HTTPS / Stripe checkout',810,21)
f.line([(295,675),(295,885)]);f.label(95,760,'Lee / actualiza caché\nSQLite API local',420)
f.line([(1182,675),(1182,885)]);f.label(1005,760,'Lee / persiste estado\nJPA / JDBC',420)
f.line([(1420,450),(1530,450),(1530,230),(1690,230)]);f.label(1490,335,'Consulta cotización\nHTTPS / JSON',200,21)
f.line([(1420,590),(1690,590)]);f.label(1460,475,'Crea checkout / cancela\nHTTPS / Stripe API',215,21)
f.line([(1690,630),(1420,630)]);f.label(1460,650,'Eventos al backend\nHTTPS / webhook firmado',215,21)
f.line([(1420,670),(1590,670),(1590,850),(1690,850)]);f.label(1460,790,'Consulta comercios\nHTTPS / JSON',215,21)
f.line([(535,650),(585,650),(585,1140),(1690,1140)])
f.label(680,1110,'Crea / reprograma / retira avisos; API nativa del dispositivo',750)
f.save()

document=ET.Element('mxfile',host='app.diagrams.net',version='24.7.17',type='device')
for page in PAGES:
    diagram=ET.SubElement(document,'diagram',id=page.name,name=page.name)
    diagram.append(page.model)
ET.indent(document)
ET.ElementTree(document).write(SOURCE/'strategic-design.drawio',encoding='utf-8',xml_declaration=True)
print(f'Generated {len(PAGES)} PNG/SVG figures and strategic-design.drawio.')
