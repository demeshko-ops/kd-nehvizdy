import fs from 'fs';
let p = fs.readFileSync('prestav.mjs','utf8');
const a = p.indexOf('// 3. popisek a build');
const b = p.indexOf('\n', p.indexOf('nástěnka', a));
if(a<0 || b<0) { console.log('vzor nenalezen'); process.exit(1); }
const novy = "// 3. popisek a build\nconst maxKD = Math.max(...KD.filter(k=>k.typ==='KD').map(k=>k.cislo));\n"
  + "h = h.replace(/kontrolních dnů č\\. 24 až \\d+/, 'kontrolních dnů č. 24 až '+maxKD);";
p = p.slice(0,a) + novy + p.slice(b);
fs.writeFileSync('prestav.mjs', p);
console.log('OK');
