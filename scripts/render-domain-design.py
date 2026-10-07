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

    def table(self,x,y,w,title,fields):
        h=96+len(fields)*38
        self.rect(x,y,w,h,'#ffffff')
        self.rect(x,y,w,70,'#edf3f8')
        self.text(x+15,y+20,title,27,True)
        for i,field in enumerate(fields): self.text(x+16,y+90+i*38,field,22)

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

def labelled_edge(c, points, label, x, y, width=400):
    c.line(points)
    lines=c.wrap(label,width,21)
    c.rect(x-6,y-3,width+12,len(lines)*26+6,'#ffffff','#ffffff')
    for i,line in enumerate(lines): c.text(x,y+i*26,line,21)

def components(kind):
    titles={'subscription':'Subscription Management','delivery':'Delivery Expense Management','premium':'Premium & Billing'}
    c=Canvas(1800,1600,'C4 | Componentes de '+titles[kind],'Componentes propuestos dentro del contenedor REST API Backend (Java / Spring Boot).')
    c.rect(20,370,1750,865,'#ffffff','#9aaabb')
    c.text(40,380,'REST API Backend — módulo '+titles[kind],25,True)
    c.box(40,150,510,150,'Mobile App','Formularios y consultas; Flutter/Dart','Contenedor')
    provider={'subscription':'ExchangeRate-API','delivery':'Google Places','premium':'Stripe'}[kind]
    c.box(1220,150,510,150,provider,'Proveedor externo','Sistema externo')
    ctrl={'subscription':'SubscriptionController','delivery':'DeliveryExpenseController','premium':'PremiumController'}[kind]
    c.box(40,430,510,180,ctrl,'Entrada autenticada. Traduce request / response.','Componente')
    svc={'subscription':'SubscriptionApplicationService','delivery':'DeliveryExpenseApplicationService','premium':'PremiumApplicationService'}[kind]
    c.box(620,720,510,190,svc,'Coordina reglas, repositorios y transacciones; publica después de confirmar.','Componente')
    model={'subscription':'Subscription + objetos de valor','delivery':'DeliveryExpense + MonthlyBudget','premium':'SubscriptionPlan + BillingPeriod'}[kind]
    c.box(40,1030,510,180,'Modelo de dominio',model+'. Invariantes y eventos locales.','Componente')
    repo={'subscription':'JpaSubscriptionRepository','delivery':'JpaExpense / BudgetRepository','premium':'JpaPlanRepository'}[kind]
    c.box(620,1030,510,180,repo,'Implementa puertos de persistencia y traduce entidades.','Componente')
    c.box(620,1330,510,170,'Remote Database','PostgreSQL; tablas propias del módulo.','Contenedor')
    adapter={'subscription':'ExchangeRateApiAdapter','delivery':'GooglePlacesAdapter','premium':'StripeWebhookAdapter'}[kind]
    body='ACL. Traduce respuesta externa a conceptos locales.' if kind!='premium' else 'Entrada verificada desde StripeWebhookController. Deduplicación y correlación.'
    c.box(1220,430,510,180,adapter,body,'Componente')
    if kind=='premium':
        c.box(1220,1030,510,180,'StripeGatewayAdapter','Salida: checkout y cancelación; implementa PaymentGatewayPort.','Componente')
    else:
        body='Consulta nivel y límite a Premium; contrato local.' if kind=='subscription' else 'Expone resumen y exceso al cliente; no garantiza notificación push.'
        c.box(1220,1030,510,180,'Colaboración del caso de uso',body,'Contrato / manejador')
    labelled_edge(c,[(295,300),(295,430)],'HTTPS / JSON; usuario autenticado',70,320,460)
    labelled_edge(c,[(295,610),(295,675),(875,675),(875,720)],'Comandos y consultas',390,635)
    labelled_edge(c,[(1475,300),(1475,430)],'Webhook verificado' if kind=='premium' else 'Consulta / respuesta HTTPS',1270,328)
    labelled_edge(c,[(1475,610),(1475,675),(875,675),(875,720)],'Evento traducido' if kind=='premium' else 'Puerto: consulta y resultado traducido',1135,635,540)
    labelled_edge(c,[(620,815),(295,815),(295,1030)],'Invoca invariantes',110,870)
    labelled_edge(c,[(875,910),(875,1030)],'Puerto de repositorio',685,944)
    labelled_edge(c,[(1130,815),(1475,815),(1475,1030)],'Puerto de salida' if kind=='premium' else 'Contrato / lectura de estado',1230,875,485)
    labelled_edge(c,[(875,1210),(875,1330)],'JPA / JDBC',725,1260)
    if kind=='premium':
        c.line([(1730,1115),(1775,1115),(1775,225),(1730,225)])
        c.text(1240,1247,'La salida y el webhook usan adaptadores distintos.',22)
    c.footer(); c.save(kind+'-components-revised')

def databases():
    c=Canvas(1800,1000,'Persistencia | Subscription Management','PK: clave primaria. FK: clave foránea local. user_id: referencia al propietario autenticado.')
    c.table(40,180,530,'subscriptions',['PK id: UUID','user_id: UUID','name: VARCHAR(100)','original_amount: NUMERIC(12,2)','currency: CHAR(3)','category: VARCHAR(30)','status: VARCHAR(20)','periodicity: VARCHAR(20)','next_billing_date: DATE'])
    c.table(650,180,530,'subscription_charges',['PK id: UUID','FK subscription_id: UUID','amount: NUMERIC(12,2)','currency: CHAR(3)','charge_date: DATE','source: VARCHAR(30)'])
    c.table(1260,180,500,'exchange_rate_cache',['PK from_currency: CHAR(3)','PK to_currency: CHAR(3)','rate: NUMERIC(18,6)','fetched_at: TIMESTAMPTZ'])
    c.line([(570,440),(650,440)])
    c.text(54,760,'subscriptions 1 → 0..* subscription_charges. La caché es una dependencia de consulta.',24)
    c.text(54,805,'Importe original ≥ 0; rate > 0. Un cobro previsto no se registra como confirmado.',23)
    c.footer(); c.save('subscription-database-revised')
    c=Canvas(1800,1000,'Persistencia | Delivery Expense Management','Agrupación por propietario y período. Los dos agregados conservan claves propias.')
    c.table(60,180,770,'delivery_expenses',['PK id: UUID','user_id: UUID','request_id: UUID','amount: NUMERIC(12,2)','merchant_name: VARCHAR(120)','category: VARCHAR(30)','expense_date: DATE','created_at: TIMESTAMPTZ','UNIQUE (user_id, request_id)'])
    c.table(970,180,770,'monthly_budgets',['PK id: UUID','user_id: UUID','year: SMALLINT; month: SMALLINT','monthly_limit: NUMERIC(12,2)','accumulated: NUMERIC(12,2)','version: BIGINT','updated_at: TIMESTAMPTZ','UNIQUE (user_id, year, month)'])
    c.line([(830,470),(970,470)],arrow=False,dashed=True)
    c.text(60,819,'Agrupación lógica: user_id + año/mes de expense_date. Gastos y presupuesto son agregados distintos.',24)
    c.footer(); c.save('delivery-database-revised')
    c=Canvas(1800,1000,'Persistencia | Premium & Billing','Correlación de facturación y registro único del evento externo antes de aplicar cambios de acceso.')
    c.table(60,180,770,'user_plans',['PK id: UUID','user_id: UUID UNIQUE','plan_type: VARCHAR(20)','period_start: DATE; period_end: DATE','stripe_customer_id: VARCHAR(255)','stripe_subscription_id: VARCHAR(255)','updated_at: TIMESTAMPTZ'])
    c.table(970,180,770,'billing_events',['PK id: UUID','FK plan_id: UUID (tras correlación)','stripe_event_id: VARCHAR(255) UNIQUE','invoice_id: VARCHAR(255)','event_type: VARCHAR(100)','occurred_at: TIMESTAMPTZ','processed_at: TIMESTAMPTZ','processing_status: VARCHAR(30)'])
    c.line([(830,470),(970,470)])
    c.text(60,819,'user_plans 1 → 0..* billing_events. Una renovación actualiza el período; no duplica la transición.',24)
    c.footer(); c.save('premium-database-revised')

def architecture():
    c=Canvas(1800,1320,'C4 | Contexto del sistema CraveWallet','El sistema incluye cliente móvil y backend. Se muestran usuarios y sistemas externos.')
    c.box(620,145,550,160,'Usuario','Estudiante o profesional joven que administra compromisos y gastos.','Persona')
    c.box(620,470,550,230,'CraveWallet','Registra suscripciones y gastos; muestra estimaciones en soles; prepara avisos; administra su plan propio.','Sistema de software')
    labelled_edge(c,[(895,305),(895,470)],'Registra y consulta mediante interfaz móvil',660,353,500)
    providers=[('ExchangeRate-API','Cotizaciones USD/PEN'),('Stripe','Facturación de CraveWallet'),('Google Places','Sugerencias de comercios'),('Calendario del dispositivo','Recordatorios con permisos')]
    for i,(name,body) in enumerate(providers):
        x=40+i*440
        c.box(x,970,400,190,name,body,'Sistema externo')
        labelled_edge(c,[(895,700),(895,840),(x+200,840),(x+200,970)],['Consulta cotización','Checkout / webhooks','Consulta sugerencias','Crear / retirar aviso'][i],x+12,889,375)
    c.text(40,1197,'Stripe notifica al backend. Los contratos y cobros de los servicios registrados quedan fuera del sistema.',23)
    c.footer(); c.save('system-context-revised')
    c=Canvas(1800,1540,'C4 | Contenedores de CraveWallet','Propuesta: aplicación móvil y backend modular; las bases local y remota tienen responsabilidades distintas.')
    c.box(40,150,510,140,'Usuario','Interactúa con la aplicación','Persona')
    c.rect(20,370,1110,970,'#ffffff','#9aaabb')
    c.text(40,383,'Sistema CraveWallet',27,True)
    c.box(40,460,510,220,'Mobile App','Flutter/Dart. Presentación, composición del Dashboard y permisos del calendario.','Contenedor')
    c.box(620,460,480,220,'REST API Backend','Java 21 / Spring Boot. Tres módulos de dominio y adaptadores.','Contenedor')
    c.box(40,1010,510,200,'Local Database','SQLite. Caché de lectura con fecha de actualización. Escritura offline pendiente de pruebas.','Contenedor')
    c.box(620,1010,480,200,'Remote Database','PostgreSQL. Estado canónico; tablas propias de cada módulo.','Contenedor')
    for y,name,body in [(150,'ExchangeRate-API','Cotizaciones'),(465,'Stripe','Checkout y notificaciones'),(780,'Google Places','Sugerencias'),(1095,'Calendario del dispositivo','Recordatorios con permiso')]:
        c.box(1220,y,510,155,name,body,'Sistema externo')
    labelled_edge(c,[(295,290),(295,460)],'Usa interfaz móvil',70,340)
    labelled_edge(c,[(550,570),(620,570)],'HTTPS / JSON',500,705,260)
    labelled_edge(c,[(295,680),(295,1010)],'Lee / actualiza caché',70,810)
    labelled_edge(c,[(860,680),(860,1010)],'JPA / JDBC',690,810)
    c.line([(1100,505),(1160,505),(1160,225),(1220,225)])
    c.line([(1100,570),(1220,570)])
    c.line([(1220,600),(1100,600)])
    c.line([(1100,630),(1160,630),(1160,855),(1220,855)])
    c.text(1170,355,'HTTPS',21)
    labelled_edge(c,[(550,650),(580,650),(580,1280),(1475,1280),(1475,1250)],'API del dispositivo desde el móvil',140,1240,420)
    c.text(40,1380,'El retorno del checkout no confirma acceso. Stripe envía webhooks al backend; no al cliente móvil.',24)
    c.footer(); c.save('containers-revised')

def impact_maps():
    maps = [
        ('01', 'Reducir cargos no anticipados ≥ 60 % en 90 días', [
            ('Revisar el aviso antes del cobro y decidir si mantiene el servicio.', 'Recordatorios: US12, US13, US14, US28, US36'),
        ]),
        ('02', 'Retención a 30 días > 45 % entre usuarios con ≥ 3 suscripciones', [
            ('Consultar el compromiso mensual y las próximas renovaciones.', 'Dashboard: US08, US09, US10, US27, US35'),
            ('Registrar las nuevas suscripciones para mantener el portafolio completo.', 'Registro: US04, US05, US34'),
        ]),
        ('03', 'Conversión a Premium ≥ 12 % del grupo que alcanza el límite Free en 6 meses', [
            ('Evaluar precio y beneficios al alcanzar el límite gratuito.', 'Plan Premium: US21, US22, US31, US39'),
        ]),
        ('04', 'NPS > 40 al terminar el primer semestre posterior al lanzamiento', [
            ('Comprender la propuesta y los planes antes de descargar la aplicación.', 'Landing page: US24, US25, US32'),
            ('Consultar importes en soles y anticipar renovaciones; evaluar su utilidad.', 'Experiencia principal: US15, US16, US17, US08, US12'),
        ]),
    ]
    for code, goal, branches in maps:
        c = Canvas(1800, 1000, 'CraveWallet | Impact Map BG'+code,
                   'Meta → actores → cambios de comportamiento → entregables. Las metas son hipótesis de evaluación.')
        for x, label in [(40,'¿Por qué?'),(470,'¿Quién?'),(900,'¿Cómo?'),(1330,'¿Qué?')]:
            c.text(x,150,label,27,True)
        c.box(40,370,380,220,'Objetivo de negocio',goal)
        c.box(470,370,380,220,'Actores propuestos','Camila Torres: estudiante. Renzo Salazar: profesional joven. Personas de diseño, no entrevistados reales.')
        c.line([(420,480),(470,480)])
        for i,(impact,deliverables) in enumerate(branches):
            y = 230 if len(branches)==2 and i==0 else 600 if len(branches)==2 else 370
            c.box(900,y,380,220,'Cambio esperado',impact)
            c.box(1330,y,420,220,'Historias propuestas',deliverables)
            c.line([(850,480),(875,480),(875,y+110),(900,y+110)])
            c.line([(1280,y+110),(1330,y+110)])
        c.footer('Fuente: elaboración de Gastify a partir de los objetivos y las historias de la sección 2.4.2. Resultados por validar.')
        c.save('impact-bg'+code+'-revised')

if __name__ == '__main__':
    flows(); context_map(); architecture(); databases()
    for kind in ['subscription','delivery','premium']: components(kind)
    impact_maps()
    print('Rendered message flows, context map, architecture, components, persistence and impact maps')
