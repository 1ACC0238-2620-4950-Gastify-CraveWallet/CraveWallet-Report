"""Check TB1 source integrity without generating a PDF (requires Pandoc).

Checks story preservation, citation keys, figure/table references and local
Markdown image paths. It does not certify interviews, experiments or grading.
"""
from pathlib import Path
from urllib.parse import unquote
import json
import re
import subprocess

ROOT = Path(__file__).resolve().parents[1]
FILES = ['README.md', 'docs/chapter_1.md', 'docs/chapter_2.md', 'docs/chapter_3.md', 'docs/chapter_4.md', 'docs/closing.md']
errors = []
bib = (ROOT/'references.bib').read_text(encoding='utf-8')
keys = set(re.findall(r'@\w+\{([^,]+),', bib))
sources = []

def walk(node):
    if isinstance(node, dict):
        yield node
        for value in node.values(): yield from walk(value)
    elif isinstance(node, list):
        for value in node: yield from walk(value)

for name in FILES:
    path = ROOT/name
    text = path.read_text(encoding='utf-8')
    sources.append(text)
    for group in re.findall(r'\[([^\]\n]*@[a-zA-Z][^\]\n]*)\]', text):
        for key in re.findall(r'@([a-zA-Z][\w-]*)', group):
            if key not in keys: errors.append(f'{name}: undefined citation {key}')
    if re.search(r'\[\[PENDIENTE|Acceptance Criteria \(continuación\)', text):
        errors.append(f'{name}: unresolved template marker')
    result = subprocess.run(['pandoc',str(path),'--from=markdown-yaml_metadata_block','--to=json'],capture_output=True,text=True,encoding='utf-8',check=True)
    doc=json.loads(result.stdout)
    for node in walk(doc):
        if node.get('t')=='Image':
            src=unquote(node['c'][2][0])
            if not src.startswith(('http://','https://','data:')) and not (path.parent/src).is_file():
                errors.append(f'{name}: missing image {src}')
    for label,n in re.findall(r'\*(Figura|Tabla) (\d+)\.',text):
        if not re.search(r'\b'+label.lower()+r' '+n+r'\b',text,re.I):
            errors.append(f'{name}: missing reference to {label} {n}')
    # Check references outside the caption itself, plus a nearby source.
    for match in re.finditer(r'\*(Figura|Tabla) (\d+)\.[^\n]*',text):
        label,n=match.group(1),match.group(2)
        other=text[:match.start()]+text[match.end():]
        if not re.search(r'\b'+label.lower()+r' '+n+r'\b',other,re.I):
            errors.append(f'{name}: {label} {n} is not cited in prose')
        if 'Fuente:' not in text[match.end():match.end()+5500]:
            errors.append(f'{name}: no nearby source for {label} {n}')

joined='\n'.join(sources)
story_ids=set(re.findall(r'\| Story ID \| (\w+) \|',joined))
expected={f'US{i:02}' for i in range(1,41)}|{f'TS{i:02}' for i in range(1,7)}|{f'SP{i:02}' for i in range(1,7)}
if story_ids != expected: errors.append('Story IDs differ: '+str(story_ids ^ expected))
for kind, count in [('Figura',127),('Tabla',160)]:
    nums=[int(n) for n in re.findall(r'\*'+kind+r' (\d+)\.',joined)]
    if nums!=list(range(1,count+1)): errors.append(f'{kind} numbering is not sequential ({len(nums)} captions)')
for context in ['Subscription Management','Delivery Expense Management','Premium & Billing']:
    if context not in joined: errors.append('Missing context '+context)
if errors:
    print('\n'.join(errors))
    raise SystemExit(1)
print('TB1: 52 stories, 127 figures, 160 tables; citation keys and image paths verified.')
print('Sources parse with Pandoc. Experimental evidence and final export still require review.')
