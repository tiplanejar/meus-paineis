/* ==========================================================================
   painel.js — aparência de cada painel (área, cor e ícone)
   Usado por paineis.html para montar os cards.

   Para adicionar um painel novo: copie um bloco abaixo e troque o nome.
   A chave DEVE ser igual ao "nome" usado no usuarios.js (maiúsculas, com acento).
   Painel sem entrada aqui continua funcionando — usa o padrão azul.
   ========================================================================== */

window.PAINEL_ICONES = {
  grafico:     '<path d="M3 3v18h18"/><path d="M18 17V9M13 17V5M8 17v-3"/>',
  crescimento: '<path d="M22 7l-8.5 8.5-5-5L2 17"/><path d="M16 7h6v6"/>',
  predio:      '<path d="M3 21h18"/><path d="M5 21V7l7-4 7 4v14"/><path d="M9 9h.01M15 9h.01M9 13h.01M15 13h.01M9 17h.01M15 17h.01"/>',
  foguete:     '<path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z"/><path d="M12 15l-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z"/><path d="M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0"/>',
  dinheiro:    '<path d="M12 1v22"/><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/>',
  pessoas:     '<path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75"/>',
  livro:       '<path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"/><path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"/>',
  caixa:       '<path d="M16.5 9.4l-9-5.19"/><path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"/><path d="M3.27 6.96L12 12.01l8.73-5.05M12 22.08V12"/>',
  prancheta:   '<path d="M9 11l3 3L22 4"/><path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11"/>'
};

window.PAINEL_META = {
  "RESULTADO":         { area:"Diretoria",     icone:"grafico",     cor:"#1a6fc4", corLuz:"#e6f0fb" },
  "COMERCIAL":         { area:"Vendas",        icone:"crescimento", cor:"#0d9488", corLuz:"#e0f5f3" },
  "PLAN TOWER COLINA": { area:"Obra",          icone:"predio",      cor:"#4f46e5", corLuz:"#ebeafd" },
  "LANÇAMENTO":        { area:"Marketing",     icone:"foguete",     cor:"#d97706", corLuz:"#fdf1de" },
  "FINANCEIRO":        { area:"Financeiro",    icone:"dinheiro",    cor:"#16a34a", corLuz:"#e5f7ea" },
  "FOLHA":             { area:"RH",            icone:"pessoas",     cor:"#9333ea", corLuz:"#f4e9fd" },
  "CONTÁBIL":          { area:"Contabilidade", icone:"livro",       cor:"#475569", corLuz:"#eef1f5" },
  "SUPRIMENTOS":       { area:"Compras",       icone:"caixa",       cor:"#ea580c", corLuz:"#fdeee3" },
  "PROJETOS":          { area:"Engenharia",    icone:"prancheta",   cor:"#0891b2", corLuz:"#e0f4f9" }
};

/* Padrão para painel que não esteja no mapa acima */
window.PAINEL_PADRAO = { area:"Relatório", icone:"grafico", cor:"#004080", corLuz:"#e8f0fa" };

/* Devolve os metadados de um painel pelo nome, sempre com valores válidos. */
window.metaDoPainel = function (nome) {
  var m = window.PAINEL_META[String(nome || "").trim().toUpperCase()];
  return m || window.PAINEL_PADRAO;
};
