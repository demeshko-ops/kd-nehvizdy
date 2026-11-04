import fs from 'fs';
let h = fs.readFileSync('site/index.html','utf8');
const zmeny = [];
const nahrad = (co, cim, nazev) => {
  const n = h.split(co).length - 1;
  if(n !== 1){ console.log('!! '+nazev+': vzor nalezen '+n+'x, cekam 1x'); process.exitCode = 1; return; }
  h = h.replace(co, cim); zmeny.push(nazev);
};

// 1) pomocne funkce: navod neni ukol
nahrad(
`function alive(){
  return [...kdMap.entries()]
    .map(([id,rec]) => ({id, rec, st: stavMap.get(id) || {stav:"Trvá", odpovida:"Externí", termin:"", terminText:"", terminZdroj:""}}))
    .sort((a,b)=>(a.rec.poradi||0)-(b.rec.poradi||0));
}`,
`function alive(){
  return [...kdMap.entries()]
    .map(([id,rec]) => ({id, rec, st: stavMap.get(id) || {stav:"Trvá", odpovida:"Externí", termin:"", terminText:"", terminZdroj:""}}))
    .sort((a,b)=>(a.rec.poradi||0)-(b.rec.poradi||0));
}
/* Návod pro klienta není úkol ze stavby: nepatří na nástěnku ani mezi všechny body. */
const jeNavod = klic => ((SCH.get(klic)||{}).typ === "NAVOD");
function aliveUkoly(){ return alive().filter(x => !jeNavod(x.rec.klic)); }`,
 'alive + jeNavod + aliveUkoly');

// 2) pocet na zalozkach Nastenka / Vsechny body
nahrad('  const n = alive().length;', '  const n = aliveUkoly().length;', 'pocet na zalozkach');

// 3) nastenka bez navodu
nahrad('function renderBoard(){\n  const scope = alive();',
        'function renderBoard(){\n  const scope = aliveUkoly();', 'nastenka bez navodu');

// 4) Vsechny body bez navodu, zalozka navodu ukazuje jen svoje body
nahrad('  const scope = alive().filter(x => klic==null || x.rec.klic===klic);',
        '  const scope = alive().filter(x => klic==null ? !jeNavod(x.rec.klic) : x.rec.klic===klic);',
        'vsechny body bez navodu');

// 5) zalozka navodu bez datumu
nahrad('...KD.map(k=>({k:"z"+k.klic, t:k.label, d:k.datum})),',
        '...KD.map(k=>({k:"z"+k.klic, t:k.label, d:k.typ==="NAVOD" ? "" : k.datum})),',
        'zalozka bez datumu');

// 6) zahlavi: vlastni metagrid pro navod
nahrad('    if(k) head = `<div class="meta"><dl class="metagrid">\n      <dt>Zápis</dt>',
`    if(k && k.typ==="NAVOD") head = \`<div class="meta"><dl class="metagrid">
      <dt>Soubor</dt><dd><strong>Budoucí návod pro klienta</strong></dd>
      <dt>Účel</dt><dd>\${esc(k.predmet)}</dd>
      <dt>Doplňuje se</dt><dd>\${esc(k.misto)}</dd>
      <dt>Podklad</dt><dd><span class="mono">\${esc(k.zdroj)}</span></dd>
    </dl><div class="note">\${esc(k.pozn)}</div></div>\`;
    else if(k) head = \`<div class="meta"><dl class="metagrid">
      <dt>Zápis</dt>`,
 'zahlavi navodu');

// 7) jine popisky poli v navodu
nahrad('function itemHtml(x, showKd){\n  const {id,rec,st}=x;',
        'function itemHtml(x, showKd){\n  const {id,rec,st}=x;\n  const jeN = jeNavod(rec.klic);',
        'priznak navodu v itemHtml');
nahrad('${poleBlok(id,"projednano","Projednáno",rec.projednano,"projednano")}',
        '${poleBlok(id,"projednano",jeN?"Kontext ze stavby":"Projednáno",rec.projednano,"projednano")}',
        'popisek projednano');
nahrad('${poleBlok(id,"rozhodnuto","Rozhodnuto",rec.rozhodnuto,"")}',
        '${poleBlok(id,"rozhodnuto",jeN?"Text do návodu":"Rozhodnuto",rec.rozhodnuto,"")}',
        'popisek rozhodnuto');
nahrad('${(isOwner||rec.ukol) ? poleBlok(id,"ukol","Úkol",rec.ukol,"ukol") : ""}',
        '${(isOwner||rec.ukol) ? poleBlok(id,"ukol",jeN?"K dořešení":"Úkol",rec.ukol,"ukol") : ""}',
        'popisek ukol');

if(process.exitCode) { console.log('NIC NEULOZENO'); process.exit(1); }
fs.writeFileSync('site/index.html', h);
console.log('hotovo, zmen: '+zmeny.length);
zmeny.forEach(z=>console.log('  - '+z));
