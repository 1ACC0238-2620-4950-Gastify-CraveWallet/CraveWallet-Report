-- Preserve the merged-cell Lean UX Canvas in PDF exports.
-- Other HTML and Markdown tables are left to the existing report filters.
local function cell_latex(html)
  local doc = pandoc.read('<p>' .. html .. '</p>', 'html')
  local tex = pandoc.write(doc, 'latex', {wrap_text = 'none'})
  return tex:gsub('\\\\', '\\newline{}'):gsub('%s+$', '')
end

local function render_canvas(html)
  local number = html:match('data%-table%-number="(%d+)"') or '1'
  local out = {
    '\\begin{landscape}\\begingroup',
    '\\setstretch{1}\\fontsize{10}{11.5}\\selectfont',
    '\\setlength{\\parindent}{0pt}\\setlength{\\tabcolsep}{6pt}',
    '\\textbf{Tabla ' .. number .. '.} \\textit{Lean UX Canvas de CraveWallet.}\\par\\medskip',
    '\\begin{tabular}{*{6}{p{\\dimexpr\\linewidth/6-2\\tabcolsep-2\\arrayrulewidth\\relax}}}\\hline'
  }
  for row in html:gmatch('<tr>(.-)</tr>') do
    local cells = {}
    for tag, span, body in row:gmatch('<(t[hd])%s+colspan="(%d)">(.-)</t[hd]>') do
      local divisor = span == '3' and '2' or '3'
      local width = '\\dimexpr\\linewidth/' .. divisor .. '-2\\tabcolsep-2\\arrayrulewidth\\relax'
      local border = #cells == 0 and '|p{' or 'p{'
      cells[#cells+1] = '\\multicolumn{' .. span .. '}{' .. border .. width .. '}|}{' .. cell_latex(body) .. '}'
    end
    if #cells > 0 then
      out[#out+1] = table.concat(cells, ' & ') .. ' \\\\ \\hline'
    end
  end
  out[#out+1] = '\\end{tabular}\\par\\smallskip'
  out[#out+1] = '\\textit{Fuente: equipo Gastify; adaptado del Lean UX Canvas de Gothelf (2021).}\\par'
  out[#out+1] = '\\endgroup\\end{landscape}'
  return pandoc.RawBlock('latex', table.concat(out, '\n'))
end

function Pandoc(doc)
  if not FORMAT:match('latex') then return nil end
  local out, pending = pandoc.List(), nil
  for _, block in ipairs(doc.blocks) do
    local html = block.t == 'RawBlock' and block.format == 'html' and block.text or ''
    if not pending and html:match('<table%s+id="lean%-ux%-canvas"') then
      pending = pandoc.List({block})
    elseif pending then
      pending:insert(block)
      if html:match('</table>') then
        out:insert(render_canvas(pandoc.write(pandoc.Pandoc(pending), 'html', {wrap_text='none'})))
        pending = nil
      end
    else
      out:insert(block)
    end
  end
  if pending then error('Lean UX Canvas: missing closing table tag') end
  doc.blocks = out
  return doc
end
