"""Render the summary of section 2.5.1.3 as SVG and PNG (requires Pillow).

Adapted from https://github.com/ddd-crew/bounded-context-canvas.
Diagram and its vector source: CC BY-SA 4.0, Gastify.
Run from any directory; outputs are resolved relative to this script.
The full canvases, including assumptions and metrics, are in chapter_2.md.
"""
from pathlib import Path
import textwrap
from html import escape
from PIL import Image, ImageDraw, ImageFont

ROOT = Path(__file__).resolve().parents[1]
OUT = ROOT / 'docs/images/chapter_2'
WIDTH, HEIGHT = 1800, 1610
FONT_DIR = Path('C:/Windows/Fonts')
NORMAL = FONT_DIR / 'arial.ttf'
BOLD = FONT_DIR / 'arialbd.ttf'
panels = [
    ('Subscription Management', 'Gestión de suscripciones', [
        ('Propósito', 'Anticipar renovaciones y conocer el importe estimado en soles de los compromisos recurrentes.'),
        ('Clasificación y roles', 'Core. Gestiona el ciclo de vida del registro y proporciona información para planificar gastos.'),
        ('Entradas / colaboradores', 'Móvil: registrar, editar, marcar cancelada y consultar. Premium: nivel y límite. API: cotización traducida.'),
        ('Salidas / colaboradores', 'Premium: consultar acceso. API: solicitar cotización. Móvil: portafolio y datos del recordatorio.'),
        ('Lenguaje y reglas', 'Suscripción, importe original, renovación. Cancelar el registro conserva su historial; no cancela el servicio externo.'),
        ('Supuestos y verificación', 'Datos introducidos por el usuario. Comprobar fechas del recordatorio y su retiro al cancelar; aún sin mediciones.'),
        ('Preguntas abiertas', 'Número máximo en Free; exceso al dejar Premium; hora de renovación y reprogramación del aviso.'),
    ]),
    ('Delivery Expense Management', 'Gestión de gastos de delivery', [
        ('Propósito', 'Registrar gastos de pedidos y comparar el acumulado del período con el límite mensual del usuario.'),
        ('Clasificación y roles', 'Supporting. Registra gastos, mantiene el presupuesto y produce resúmenes del consumo.'),
        ('Entradas / colaboradores', 'Móvil: registrar gasto, cambiar límite y consultar. Google Places: sugerencias de comercios cuando se utilice.'),
        ('Salidas / colaboradores', 'Móvil: historial, resumen y advertencia. Google Places: búsqueda. Internos: gasto registrado y límite superado.'),
        ('Lenguaje y reglas', 'Gasto, comercio, período y límite. El exceso genera una advertencia; el comercio también puede ingresarse manualmente.'),
        ('Supuestos y verificación', 'Consumo registrado manualmente. Comparar sumas del mes y detectar duplicados tras sincronizar; aún sin mediciones.'),
        ('Preguntas abiertas', 'Corrección de gastos; sincronización; repetición del aviso de exceso; reducción del límite mensual.'),
    ]),
    ('Premium & Billing', 'Plan y facturación de CraveWallet', [
        ('Propósito', 'Mantener el nivel de acceso y la vigencia del plan del propio producto a partir de pagos confirmados.'),
        ('Clasificación y roles', 'Generic. Generación de ingresos propuesta. Gestiona la vigencia y suministra las reglas de acceso.'),
        ('Entradas / colaboradores', 'Móvil: checkout, consulta y cancelación. Stripe: notificaciones verificadas. Suscripciones: consulta de acceso.'),
        ('Salidas / colaboradores', 'Stripe: solicitudes de facturación. Móvil: sesión de pago y estado. Suscripciones: nivel y límite del plan.'),
        ('Lenguaje y reglas', 'Free, Premium, vigencia, pago confirmado. El checkout no activa Premium. Una confirmación repetida no duplica la transición.'),
        ('Supuestos y verificación', 'Precio y beneficios por validar; SP05–SP06 sin resultados disponibles. Medir discrepancias y transiciones duplicadas.'),
        ('Preguntas abiertas', 'Pago fallido; recuperación de notificaciones; reembolsos; regreso a Free; política comercial definitiva.'),
    ]),
]

img = Image.new('RGB', (WIDTH, HEIGHT), '#ffffff')
draw = ImageDraw.Draw(img)
svg = [f'<svg xmlns="http://www.w3.org/2000/svg" width="{WIDTH}" height="{HEIGHT}" viewBox="0 0 {WIDTH} {HEIGHT}">', '<rect width="100%" height="100%" fill="white"/>', '<metadata>Gastify. Adapted from DDD Crew Bounded Context Canvas. CC BY-SA 4.0.</metadata>']

def box(x, y, w, h, fill, stroke='#c7d0da'):
    draw.rectangle((x, y, x+w, y+h), fill=fill, outline=stroke, width=2)
    svg.append(f'<rect x="{x}" y="{y}" width="{w}" height="{h}" fill="{fill}" stroke="{stroke}" stroke-width="2"/>')

def text(x, y, value, size=23, bold=False, color='#172b40'):
    font = ImageFont.truetype(str(BOLD if bold else NORMAL), size)
    draw.text((x, y), value, font=font, fill=color)
    svg.append(f'<text x="{x}" y="{y}" dominant-baseline="text-before-edge" font-family="Arial, sans-serif" font-size="{size}" font-weight="{"bold" if bold else "normal"}" fill="{color}">{escape(value)}</text>')

text(42, 28, 'CraveWallet | Bounded Context Canvases', 38, True)
text(42, 82, 'Síntesis de la propuesta de diseño. Detalle y trazabilidad: sección 2.5.1.3.', 25)
for i, (name, subtitle, rows) in enumerate(panels):
    x, w = 42 + i*580, 556
    box(x, 140, w, 100, '#eaf0f6')
    text(x+18, 156, name, 25, True)
    text(x+18, 197, subtitle, 23)
    for j, (label, body) in enumerate(rows):
        y = 240 + j*178
        box(x, y, w, 178, '#ffffff')
        text(x+18, y+14, label, 24, True)
        lines = textwrap.wrap(body, width=43)
        if len(lines) > 4:
            raise ValueError(f'Text overflow: {name}/{label}')
        for k, line in enumerate(lines):
            text(x+18, y+53+k*28, line)

text(42, 1510, 'Fuente: Gastify; adaptación de DDD Crew, The Bounded Context Canvas (s. f.).', 23)
text(42, 1551, 'Licencia del diagrama adaptado: CC BY-SA 4.0. Métricas propuestas; sin resultados medidos.', 23)
svg.append('</svg>')
OUT.mkdir(parents=True, exist_ok=True)
(OUT / 'bounded-context-canvases.svg').write_text('\n'.join(svg), encoding='utf-8')
img.save(OUT / 'bounded-context-canvases.png')
print('Rendered bounded-context-canvases.svg and .png')
