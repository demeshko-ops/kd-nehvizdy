import fs from 'fs';
import { SCH, BODY } from './data-navod.mjs';
const toIso = s => { const m=/^(\d{1,2})\.\s*(\d{1,2})\.\s*(\d{4})$/.exec(String(s||'').trim());
  return m ? `${m[3]}-${String(m[2]).padStart(2,'0')}-${String(m[1]).padStart(2,'0')}` : null; };
const rows = BODY.map(([kat,tema,projednano,rozhodnuto,ukol,kdo,termin,stav],i)=>{
  const n = String(i+1).padStart(2,'0'), iso = toIso(termin);
  return {id:'NAVOD-'+n, klic:'NAVOD', bod:'N/'+n, kat, tema, projednano, rozhodnuto, ukol: ukol||'',
    zdroj:SCH.zdroj, poradi:2000+i, vazby:[], stav: stav||'Pro info', odpovida:kdo,
    termin:iso, termin_text: iso?'':(termin||''), termin_zdroj: termin?'KD':'',
    hotovo_at:null, hotovo_kdo:''};
});
const ZNAMI = new Set(['Kret','Zeman','Demeshko','Savynets','Kuchař','Zavodnov','Jelinek','Hornsteiner','Vlastní parta','Externí']);
rows.forEach(r=>r.odpovida.split('|').forEach(k=>{ if(!ZNAMI.has(k.trim())) console.log('  !! neznamy:', k); }));
console.log('bodu:', rows.length, '| stavy:', JSON.stringify(rows.reduce((a,r)=>(a[r.stav]=(a[r.stav]||0)+1,a),{})));
fs.writeFileSync('navod-sch.json', JSON.stringify([SCH]));
fs.writeFileSync('navod-body.json', JSON.stringify(rows));
console.log('velikosti:', fs.statSync('navod-sch.json').size, '/', fs.statSync('navod-body.json').size, 'B');
