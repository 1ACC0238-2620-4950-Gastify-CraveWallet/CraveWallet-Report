-- Presentation rules only: all content remains in the Markdown source.
local stringify = pandoc.utils.stringify
local function latex(s) return pandoc.RawBlock('latex', s) end

function Para(para)
  -- Keep a strategic-design table caption with the first rows of its table.
  local number = tonumber(stringify(para):match('^Tabla (%d+)%.'))
  if number and number >= 86 and number <= 94 then
    local space = number <= 89 and 520 or 100
    return {latex('\\needspace{' .. space .. 'pt}'), para}
  end
end

function Table(tbl)
  local n = #tbl.colspecs
  local head = stringify(tbl.head)
  local widths = {}
  for i = 1, n do widths[i] = 1 / n end
  local landscape = head:match('CraveWallet') and head:match('Spendee')
  local smart = head:match('Alcanzable')
  local story = head:match('Campo') and stringify(tbl):match('Story ID')
  local canvas = n == 2 and head:match('Campo') and stringify(tbl):match('Comunicación entrante')
  local flow = n == 3 and head:match('Orden y tipo')
  local short = flow or smart or (n == 2 and head:match('Campo') and not canvas) or head:match('Value Object')
  if head:match('Integrante') and head:match('Información') then
    widths = {0.30, 0.70}
  elseif head:match('Integrante') then widths = {0.25, 0.75}
  elseif n == 2 and (head:match('Campo') or head:match('Término')) then widths = {0.25, 0.75}
  elseif n == 3 and head:match('Orden y tipo') then widths = {0.12, 0.28, 0.60}
  elseif head:match('Alcanzable') then widths = {0.24, 0.27, 0.31, 0.18}
  elseif head:match('Story Points') then widths = {0.07, 0.12, 0.57, 0.13, 0.11}
  elseif head:match('Tarea') and n == 5 then widths = {0.44, 0.14, 0.14, 0.14, 0.14}
  elseif head:match('User Story') and n == 2 then widths = {0.16, 0.84}
  elseif head:match('Epic ID') then widths = {0.12, 0.26, 0.62}
  elseif head:match('Característica') and n == 3 then widths = {0.46, 0.12, 0.42}
  elseif head:match('Value Object') and n == 3 then widths = {0.30, 0.38, 0.32}
  elseif landscape then widths = {0.16, 0.21, 0.21, 0.21, 0.21}
  end
  for i = 1, n do tbl.colspecs[i] = {pandoc.AlignLeft, widths[i] or 1/n} end
  local out = pandoc.List()
  if landscape then out:insert(latex('\\begin{landscape}')) end
  if story then
    -- Reserve the complete story so its ID and scenarios stay together.
    local chars = #stringify(tbl)
    out:insert(latex('\\needspace{' .. math.min(620, 145 + chars * 0.18) .. 'pt}'))
  elseif smart then
    out:insert(latex('\\needspace{300pt}'))
  else
    out:insert(latex('\\needspace{80pt}'))
  end
  out:insert(latex('\\begin{reporttable}'))
  if short then
    -- Short forms fit on one page. Ordinary tabular avoids longtable's empty
    -- continuation headers when a heading/form is pushed to the next page.
    local tex = pandoc.write(pandoc.Pandoc({tbl}), 'latex')
    tex = tex:gsub('\\begin{longtable}%[%]', '\\begin{tabular}')
    tex = tex:gsub('\\endhead%s*\\bottomrule\\noalign{}%s*\\endlastfoot', '')
    tex = tex:gsub('\\end{longtable}', '\\bottomrule\\end{tabular}')
    out:insert(latex('\\begin{minipage}{\\linewidth}\n' .. tex .. '\n\\end{minipage}'))
  else
    out:insert(tbl)
  end
  out:insert(latex('\\end{reporttable}'))
  if landscape then out:insert(latex('\\end{landscape}')) end
  return out
end

function Figure(fig)
  local raw, path
  fig:walk({RawInline = function(el)
    local found = el.text:match('\\detokenize{(.-)}')
    if found then raw = el.text; path = found end
  end})
  if not path then return nil end
  local wide = path:match('_class_diagram') or path:match('context_mapping')
    or path:match('big%-picture') or path:match('eventstorming%-flujos')
    or path:match('eventstorming%-premium') or path:match('eventstorming%-leyenda')
    or path:match('As%-Is') or path:match('lean_ux_canvas')
    or path:match('/canvas%-') or path:match('/message%-flow%-')
    or path:match('context%-map%-revised') or path:match('system%-context%-revised')
    or path:match('containers%-revised')
  if wide then
    fig = fig:walk({RawInline = function(el)
      el.text = el.text:gsub('width=6.25in,height=6.8in', 'width=8.7in,height=5.65in')
      return el
    end})
    if path:match('lean_ux_canvas') then
      return {latex('\\begin{landscape}'), fig,
        latex('\\par{\\small\\itshape Fuente: equipo Gastify; adaptado del Lean UX Canvas de Gothelf (2021).\\par}'),
        latex('\\end{landscape}')}
    end
    return {latex('\\begin{landscape}'), fig, latex('\\end{landscape}')}
  end
end

function Pandoc(doc)
  -- A landscape figure forces a page break. Keep its source on that same page
  -- rather than placing it alone at the top of the next portrait page.
  local out = pandoc.List()
  local i = 1
  while i <= #doc.blocks do
    local block = doc.blocks[i]
    local previous = doc.blocks[i - 1]
    local following = doc.blocks[i + 1]
    local strategic = false
    if previous and previous.t == 'Figure' then
      previous:walk({RawInline = function(el)
        strategic = strategic or el.text:match('/canvas%-') or el.text:match('/message%-flow%-')
          or el.text:match('context%-map%-revised') or el.text:match('system%-context%-revised')
          or el.text:match('containers%-revised')
      end})
    end
    if strategic and block.t == 'RawBlock' and block.text == '\\end{landscape}'
      and following and following.t == 'Para' and stringify(following):match('^Fuente:') then
      out:insert(following)
      out:insert(block)
      i = i + 2
    else
      out:insert(block)
      i = i + 1
    end
  end
  doc.blocks = out
  return doc
end

-- Constrain large screenshots to the printable area without changing the assets.
function Image(img)
  local path = img.src:gsub('%%(%x%x)', function(hex) return string.char(tonumber(hex, 16)) end)
  local file = io.open(path, 'rb')
  if file then file:close() else path = 'docs/' .. path end
  -- Team photos are the only chapter_1 images sized as portraits.
  local photo = img.src:match('chapter_1/') and not img.src:match('lean%-ux%-canvas')
  local size = photo and 'width=1.55in,height=2.15in' or 'width=6.25in,height=6.8in'
  return pandoc.RawInline('latex', '\\includegraphics[' .. size .. ',keepaspectratio]{\\detokenize{' .. path .. '}}')
end

local escapes = {['\\']='\\textbackslash{}', ['{']='\\{', ['}']='\\}',
  ['_']='\\_', ['%']='\\%', ['#']='\\#', ['&']='\\&', ['$']='\\$',
  ['^']='\\textasciicircum{}', ['~']='\\textasciitilde{}', [' ']='\\ '}
function Code(code)
  -- Identifiers and endpoint paths must wrap even inside narrow table columns.
  local text = code.text:gsub('≥', '>='):gsub('≤', '<=')
  local out = {}
  for _, c in utf8.codes(text) do
    local ch = utf8.char(c)
    out[#out+1] = escapes[ch] or ch
  end
  return pandoc.RawInline('latex', '\\texttt{' .. table.concat(out, '\\allowbreak{}') .. '}')
end

function Str(s)
  if s.text == '↔' then return pandoc.Math('InlineMath', '\\leftrightarrow') end
  if s.text:match('^https?://') then return pandoc.Link(s.text, s.text) end
end
