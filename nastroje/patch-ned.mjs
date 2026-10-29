import fs from 'fs';
let t = fs.readFileSync('nedodelky.tpl.html','utf8');
let zmen = [];

// 1. barva znacky STAV
if(!t.includes('.prof.p-STAV')){
  t = t.replace('.prof.p-KLI{color:#8a4a0d;border-color:#e3cdae;background:#fbf2e6}',
    '.prof.p-KLI{color:#8a4a0d;border-color:#e3cdae;background:#fbf2e6}\n'+
    '.prof.p-STAV{color:#5a5446;border-color:#d6d0c2;background:#f4f1e9}');
  zmen.push('CSS pro znacku STAV');
}
// 2. STAV do nabidky profesi
if(t.includes('const PROFESE_ZAKLAD = ["ELE","ZTI","KLI"];')){
  t = t.replace('const PROFESE_ZAKLAD = ["ELE","ZTI","KLI"];',
                'const PROFESE_ZAKLAD = ["ELE","ZTI","KLI","STAV"];');
  zmen.push('STAV v nabidce profesi');
}
fs.writeFileSync('nedodelky.tpl.html', t);
console.log(zmen.length ? 'zmeneno: '+zmen.join(', ') : 'nic k uprave');
