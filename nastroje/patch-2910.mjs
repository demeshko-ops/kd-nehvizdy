import fs from 'fs';
let d = fs.readFileSync('data-ned-2910.mjs','utf8');
d = d.replace('// --- byt 27 (cislo bytu ze zaznamu, overit) ---\n["27","Šachta","STAV: Opláštit nebo zazdít stoupačku, provede se sádrokartonem. Číslo bytu je ze záznamu bez slova byt, ověřit na místě."],',
 '// --- byt 27 ---\n["27","Šachta","STAV: Opláštit nebo zazdít stoupačku, provede se sádrokartonem."],\n\n// --- byt 28 ---\n["28","Terasa","STAV: Terasa není dodělaná, chybí úklid."],');
fs.writeFileSync('data-ned-2910.mjs', d);
console.log(d.includes('byt 28') ? 'data-ned-2910.mjs aktualizovan' : 'VZOR NENALEZEN');
