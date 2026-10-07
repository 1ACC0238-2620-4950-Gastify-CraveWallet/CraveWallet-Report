"""Refresh the GitHub bibliography from the cited BibTeX entries (Pandoc).

No PDF is generated. The PDF bibliography remains managed by citeproc.
"""
from pathlib import Path
from html.parser import HTMLParser
import subprocess
import tempfile

ROOT=Path(__file__).resolve().parents[1]
class Entries(HTMLParser):
    def __init__(self):
        super().__init__();self.depth=0;self.parts=[];self.entries=[]
    def handle_starttag(self,tag,attrs):
        if tag=='div':
            if self.depth: self.depth+=1
            elif 'csl-entry' in dict(attrs).get('class',''):
                self.depth=1;self.parts=[]
    def handle_endtag(self,tag):
        if tag=='div' and self.depth:
            self.depth-=1
            if not self.depth: self.entries.append(' '.join(''.join(self.parts).split()))
    def handle_data(self,data):
        if self.depth: self.parts.append(data)

with tempfile.TemporaryDirectory(prefix='cravewallet-bibliography-') as tmp:
    html=Path(tmp)/'references.html'
    subprocess.run(['pandoc','README.md','docs/chapter_1.md','docs/chapter_2.md','docs/closing.md','--from=markdown-yaml_metadata_block','--to=html','--metadata-file=config/format.yaml','--citeproc','--bibliography=references.bib','--csl=config/apa.csl','--output='+str(html)],cwd=ROOT,check=True)
    parser=Entries();parser.feed(html.read_text(encoding='utf-8'))
    if not parser.entries: raise RuntimeError('No bibliography produced; preserve closing.md')
    path=ROOT/'docs/closing.md';text=path.read_text(encoding='utf-8')
    start=text.index('# Bibliografía');end=text.index('# Anexos',start)
    section='# Bibliografía\n\n<!-- pdf:only\n::: {#refs}\n:::\n-->\n\n<!-- pdf:omit-start -->\n\n'
    section+='\n\n'.join(parser.entries)+'\n\n<!-- pdf:omit-end -->\n\n'
    path.write_text(text[:start]+section+text[end:],encoding='utf-8',newline='\n')
    print(f'Synchronized {len(parser.entries)} cited bibliography entries.')
