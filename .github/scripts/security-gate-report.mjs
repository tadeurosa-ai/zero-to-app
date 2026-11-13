#!/usr/bin/env node
// Agrega os 3 SARIF (Opengrep/Trivy/Betterleaks) num relatório HTML único e
// decide se algo CRÍTICO foi achado (aciona notificação no Telegram).
//
// Critério de "crítico":
// - Opengrep/Trivy: qualquer resultado com level "error" (SARIF padrão pra
//   severidade máxima — Semgrep/Opengrep mapeia ERROR->error, Trivy mapeia
//   CRITICAL/HIGH->error).
// - Betterleaks: QUALQUER resultado conta — segredo vazado nunca é "baixa
//   prioridade", não existe threshold de severidade pra isso.
import { readFile, writeFile } from 'node:fs/promises';
import { existsSync } from 'node:fs';

const FONTES = [
  { nome: 'Opengrep', arquivo: 'opengrep-sarif/opengrep.sarif', criterioCritico: 'level-error' },
  { nome: 'Trivy', arquivo: 'trivy-sarif/trivy.sarif', criterioCritico: 'level-error' },
  { nome: 'Betterleaks', arquivo: 'betterleaks-sarif/betterleaks.sarif', criterioCritico: 'qualquer-resultado' },
];

async function lerSarif(caminho) {
  if (!existsSync(caminho)) return { existe: false, resultados: [] };
  try {
    const bruto = await readFile(caminho, 'utf8');
    const doc = JSON.parse(bruto);
    const resultados = (doc.runs || []).flatMap((r) => r.results || []);
    return { existe: true, resultados };
  } catch (e) {
    return { existe: true, erro: e.message, resultados: [] };
  }
}

function achouCritico(resultados, criterio) {
  if (criterio === 'qualquer-resultado') return resultados.length > 0;
  return resultados.some((r) => r.level === 'error');
}

function escapeHtml(s) {
  return String(s ?? '').replace(/[&<>"']/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));
}

function localizacao(r) {
  const loc = r.locations?.[0]?.physicalLocation;
  if (!loc) return '—';
  const uri = loc.artifactLocation?.uri || '?';
  const linha = loc.region?.startLine ? `:${loc.region.startLine}` : '';
  return `${uri}${linha}`;
}

async function main() {
  const secoes = [];
  let algumCritico = false;

  for (const fonte of FONTES) {
    const { existe, erro, resultados } = await lerSarif(fonte.arquivo);
    const critico = existe && !erro && achouCritico(resultados, fonte.criterioCritico);
    if (critico) algumCritico = true;

    const linhas = resultados.slice(0, 200).map((r) => `
      <tr>
        <td>${escapeHtml(r.level || '—')}</td>
        <td>${escapeHtml(r.ruleId || '—')}</td>
        <td>${escapeHtml(localizacao(r))}</td>
        <td>${escapeHtml(r.message?.text || '—')}</td>
      </tr>`).join('');

    secoes.push(`
      <section>
        <h2>${escapeHtml(fonte.nome)} ${critico ? '🔴' : '🟢'}</h2>
        <p>${!existe ? 'Sem SARIF (job pode ter falhado).' : erro ? `Erro ao ler: ${escapeHtml(erro)}` : `${resultados.length} achado(s).`}</p>
        ${resultados.length ? `<table><thead><tr><th>Nível</th><th>Regra</th><th>Local</th><th>Mensagem</th></tr></thead><tbody>${linhas}</tbody></table>` : ''}
      </section>`);
  }

  const agora = new Date().toLocaleString('pt-BR', { timeZone: 'America/Sao_Paulo' });
  const html = `<!doctype html>
<html lang="pt-BR"><head><meta charset="utf-8"><title>security-gate — relatório</title>
<style>
  body{font-family:system-ui,sans-serif;max-width:960px;margin:40px auto;padding:0 16px;color:#1a1a1a}
  h1{font-size:22px} h2{font-size:16px;margin-top:32px}
  table{width:100%;border-collapse:collapse;font-size:13px;margin-top:8px}
  th,td{border:1px solid #ddd;padding:6px 8px;text-align:left;vertical-align:top}
  th{background:#f4f4f4}
  .resumo{padding:12px 16px;border-radius:8px;margin:16px 0;font-weight:600}
  .resumo.critico{background:#fee2e2;color:#991b1b}
  .resumo.ok{background:#dcfce7;color:#166534}
</style></head>
<body>
  <h1>security-gate — zero-to-app</h1>
  <p>Gerado em ${agora} (horário de Brasília)</p>
  <div class="resumo ${algumCritico ? 'critico' : 'ok'}">${algumCritico ? '🔴 Achado CRÍTICO — ver seção abaixo' : '🟢 Nenhum achado crítico nesta rodada'}</div>
  ${secoes.join('\n')}
</body></html>`;

  await writeFile('relatorio.html', html, 'utf8');

  const githubOutput = process.env.GITHUB_OUTPUT;
  if (githubOutput) {
    await writeFile(githubOutput, `critico=${algumCritico}\n`, { flag: 'a' });
  }
  console.log(algumCritico ? 'CRÍTICO encontrado.' : 'Nenhum crítico.');
}

main();
