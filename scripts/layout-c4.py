"""Apply compact native Structurizr layout; business content stays in the DSL.

Input: JSON exported by Structurizr. Output: JSON consumed by the same renderer.
Coordinates and connector vertices are the only view changes. No image drawing.
"""
import json, sys
from pathlib import Path

source, target = map(Path, sys.argv[1:3])
workspace = json.loads(source.read_text(encoding='utf-8'))
elements, identifiers, relationships = {}, {}, {}
def visit(value):
    if isinstance(value, dict):
        if 'id' in value and ('name' in value or 'containerId' in value or 'softwareSystemId' in value):
            elements[value['id']] = value
            identifier = value.get('properties', {}).get('structurizr.dsl.identifier')
            if identifier: identifiers[identifier] = value['id']
        if 'sourceId' in value and 'destinationId' in value:
            relationships[value['id']] = value
        for item in value.values(): visit(item)
    elif isinstance(value, list):
        for item in value: visit(item)
visit(workspace['model'])

layouts = {
    'SystemContext': {'visitor':(400,100),'user':(2000,100),'cw':(1200,750),'rates':(100,1500),'calendar':(900,1500),'places':(1700,1500),'stripe':(2500,1500)},
    'Containers': {'visitor':(700,100),'landing':(700,750),'user':(1500,100),'mobile':(1500,750),'api':(2300,750),'remote':(3100,750),'calendar':(700,2100),'local':(1500,1450),'rates':(2300,2100),'stripe':(3100,100),'places':(3100,2100)},
    'SubscriptionComponents': {'mobile':(1750,100),'subController':(1750,750),'subService':(1750,1200),'subDomain':(800,1800),'exchange':(1500,1800),'subRepo':(2200,1800),'planAccess':(2900,1800),'rates':(100,1800),'remote':(1750,3050),'premiumService':(2900,2400)},
    'DeliveryComponents': {'mobile':(800,100),'deliveryController':(800,750),'deliveryService':(800,1200),'deliveryDomain':(100,1800),'deliveryRepo':(800,1800),'placesAdapter':(1500,1800),'remote':(800,2400),'places':(2400,1800)},
    'PremiumComponents': {'mobile':(100,100),'premiumController':(100,750),'webhook':(1800,750),'premiumService':(950,1200),'premiumDomain':(100,1800),'premiumRepo':(950,1800),'gateway':(1800,1800),'remote':(950,2400),'stripe':(2700,750)},
}
special = {
    'SystemContext': {('cw','stripe'):[(2200,1200)],('stripe','cw'):[(2700,650)],('user','stripe'):[(3200,650),(3200,1650)]},
    'Containers': {('mobile','stripe'):[(2200,500),(3000,500)],('api','stripe'):[(3850,550)],('stripe','api'):[(2950,650)]},
    'PremiumComponents': {('mobile','stripe'):[(850,550),(2450,550)]},
    'SubscriptionComponents': {('exchange','rates'):[(1400,1650),(550,1650)]},
}
reverse = {id:key for key,id in identifiers.items()}
for group in ('systemContextViews','containerViews','componentViews'):
    for view in workspace['views'].get(group, []):
        positions = layouts[view['key']]
        view.pop('automaticLayout', None)
        view['dimensions']={'width':max(x for x,y in positions.values())+1000,'height':max(y for x,y in positions.values())+700}
        for item in view['elements']:
            identifier = reverse[item['id']]
            if identifier not in positions: raise ValueError(f"Unplaced {identifier} in {view['key']}")
            item['x'], item['y'] = positions[identifier]
        for item in view['relationships']:
            rel=relationships[item['id']]
            pair=(reverse[rel['sourceId']],reverse[rel['destinationId']])
            points=special.get(view['key'],{}).get(pair)
            item.pop('vertices',None)
            if points: item['vertices']=[{'x':x,'y':y} for x,y in points]
            item['position']=50

# Nested deployment nodes retain Structurizr's own automatic layout.
# Larger components prevent class names being squeezed into short boxes.
styles=workspace['views']['configuration']['styles']['elements']
next(s for s in styles if s['tag']=='Component').update(width=550,height=300,fontSize=26)
target.parent.mkdir(parents=True,exist_ok=True)
with target.open('w', encoding='utf-8', newline='\n') as stream:
    stream.write(json.dumps(workspace,ensure_ascii=False,indent=2)+'\n')
print('Saved native layout for six C4 views (deployment uses automatic layout).')
