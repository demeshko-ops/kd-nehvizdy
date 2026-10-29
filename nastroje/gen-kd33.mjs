import fs from 'fs';
import { SCH, BODY, VAZBY } from './data-kd33.mjs';
const toIso = s => { const m=/^(\d{1,2})\.\s*(\d{1,2})\.\s*(\d{4})$/.exec(String(s||'').trim());
  return m ? `${m[3]}-${String(m[2]).padStart(2,'0')}-${String(m[1]).padStart(2,'0')}` : null; };

const rows = BODY.map(([kat,tema,projednano,rozhodnuto,ukol,kdo,termin,stav],i)=>{
  const n = String(i+1).padStart(2,'0'), iso = toIso(termin);
  return {id:'33-'+n, klic:'33', bod:'33/'+n, kat, tema, projednano, rozhodnuto, ukol: ukol||'',
    zdroj:SCH.zdroj, poradi:1500+i, vazby:[], stav: stav||'Trvá', odpovida:kdo,
    termin:iso, termin_text: iso?'':(termin||''), termin_zdroj: termin?'KD':'',
    hotovo_at:null, hotovo_kdo:''};
});
console.log('bodu:', rows.length);

// kontrola: vsechny odpovida znamy?
const ZNAMI = new Set(['Kret','Zeman','Demeshko','Savynets','Kuchař','Zavodnov','Jelinek','Hornsteiner','Vlastní parta','Externí']);
rows.forEach(r=>r.odpovida.split('|').forEach(k=>{ if(!ZNAMI.has(k.trim())) console.log('  !! neznamy odpovida:', k, r.bod); }));
// kontrola: termin_text neprazdny jen u slovnich
rows.forEach(r=>{ if(r.termin_text && !['ihned',''].includes(r.termin_text)) console.log('  ?? termin_text:', r.bod, r.termin_text); });
// kontrola: vazby ukazuji na existujici nove body
const NOVE = new Set(rows.map(r=>r.bod));
VAZBY.forEach(([z,na])=>{ if(!NOVE.has(na)) console.log('  !! vazba na neexistujici novy bod:', z, '->', na); });
// kontrola: stare id existuji
const stare = fs.readFileSync('/tmp/body.tsv','utf8').split('\n').map(l=>l.split('\t')[0]);
const S = new Set(stare);
VAZBY.forEach(([z])=>{ if(!S.has(z)) console.log('  !! stary bod neexistuje:', z); });
console.log('vazeb:', VAZBY.length);
// prehled stavu a odpovednych
const c={}; rows.forEach(r=>c[r.stav]=(c[r.stav]||0)+1); console.log('stavy:', JSON.stringify(c));
const o={}; rows.forEach(r=>o[r.odpovida]=(o[r.odpovida]||0)+1); console.log('odpovida:', JSON.stringify(o));

fs.writeFileSync('kd33-sch.json', JSON.stringify([SCH]));
fs.writeFileSync('kd33-body.json', JSON.stringify(rows));
fs.writeFileSync('kd33-vazby.json', JSON.stringify(VAZBY.map(([z,na,zav,proc])=>{
  const n = rows.find(r=>r.bod===na);
  return {z, v:{bod:n.bod, klic:'33', typ:SCH.typ, label:SCH.label, lokativ:SCH.lokativ, kratky:SCH.kratky,
    datum:SCH.datum, poradi:SCH.poradi, tema:n.tema, rozhodnuto:n.rozhodnuto, odpovida:n.odpovida,
    zaviraci:zav, proc}};
})));
console.log('velikosti:', ['kd33-sch.json','kd33-body.json','kd33-vazby.json'].map(f=>f+' '+fs.statSync(f).size).join(' | '));
