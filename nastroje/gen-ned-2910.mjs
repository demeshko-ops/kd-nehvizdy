import fs from 'fs';
import { BODY } from './data-ned-2910.mjs';
const pod = n => +n <= 10 ? '1. NP' : +n <= 24 ? '2. NP' : '3. NP';
const rows = BODY.map(([byt,mistnost,bod],i)=>({
  id:'kd2910-'+byt+'-'+String(i+1).padStart(2,'0'),
  sekce:'nedodelky', podlazi:pod(byt), byt, mistnost, bod,
  hotovo:false, uzavrel:null, uzavreno_at:null, poznamka:null,
  poradi:1000+i, skryto:false}));
const c={}; rows.forEach(r=>c[r.byt]=(c[r.byt]||0)+1);
console.log('radku:', rows.length, '| po bytech:', JSON.stringify(c));
const RE=/^([A-ZÁČĎÉĚÍŇÓŘŠŤÚŮÝŽ]{2,5})\s*:\s*/;
const p={}; rows.forEach(r=>{const m=RE.exec(r.bod); p[m?m[1]:'(bez tagu)']=(p[m?m[1]:'(bez tagu)']||0)+1;});
console.log('profese:', JSON.stringify(p));
const dup = rows.map(r=>r.id).filter((x,i,a)=>a.indexOf(x)!==i);
if(dup.length) console.log('!! duplicitni id:', dup);
fs.writeFileSync('ned2910.json', JSON.stringify(rows));
console.log('ned2910.json', fs.statSync('ned2910.json').size, 'B');
