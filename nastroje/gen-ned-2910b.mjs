import fs from 'fs';
import { ROWS } from './data-ned-2910b.mjs';
const rows = ROWS.map(([id,byt,podlazi,mistnost,bod,poradi])=>({
  id, sekce:'nedodelky', podlazi, byt, mistnost, bod,
  hotovo:false, uzavrel:null, uzavreno_at:null, poznamka:null, poradi, skryto:false}));
const dup = rows.map(r=>r.id).filter((x,i,a)=>a.indexOf(x)!==i);
if(dup.length) { console.log('!! duplicitni id:', dup); process.exit(1); }
const RE=/^([A-ZÁČĎÉĚÍŇÓŘŠŤÚŮÝŽ]{2,5})\s*:\s*/;
rows.forEach(r=>{ if(!RE.test(r.bod)) console.log('  ?? bez profese:', r.id); });
const c={}; rows.forEach(r=>c[r.byt]=(c[r.byt]||0)+1);
console.log('radku:', rows.length, '|', JSON.stringify(c));
fs.writeFileSync('ned2910b.json', JSON.stringify(rows));
console.log('ned2910b.json', fs.statSync('ned2910b.json').size, 'B');
