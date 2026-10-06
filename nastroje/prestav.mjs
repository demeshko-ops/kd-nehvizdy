import fs from 'fs';
import { api, cz } from './kd.mjs';

let h = fs.readFileSync('site/index.html','utf8');

// 1. nove KD a BASE primo z databaze
const sch = await api('schuzky?select=*&order=poradi');
const bod = await api('body?select=*&order=poradi');

const KD = sch.map(k=>({klic:k.klic, typ:k.typ, cislo:k.cislo, label:k.label, lokativ:k.lokativ,
  kratky:k.kratky, datum:k.datum, cas:k.cas, misto:k.misto, predmet:k.predmet,
  ucastnici:k.ucastnici, zdroj:k.zdroj, pozn:k.pozn, poradi:k.poradi}));

const BASE = bod.filter(b=>!b.skryto).map((b,i)=>({
  id:b.bod, klic:b.klic, kat:b.kat, tema:b.tema, projednano:b.projednano,
  rozhodnuto:b.rozhodnuto, ukol:b.ukol||'', kdo:b.odpovida,
  terminIso:b.termin||'', terminText:b.termin_text||'',
  termin: b.termin_text || (b.termin ? cz(b.termin) : ''),
  stav:b.stav, hotovoAt: b.hotovo_at ? cz(b.hotovo_at) : '', hotovoKdo:b.hotovo_kdo||'',
  vazby:b.vazby||[], zdroj:b.zdroj, poradi:i}));

const nahrad = (re, novy) => { const m=re.exec(h); if(!m) throw new Error('nenalezeno: '+re);
  h = h.slice(0,m.index) + novy + h.slice(m.index+m[0].length); };

nahrad(/const KD = \[[\s\S]*?\];\n/, 'const KD = '+JSON.stringify(KD)+';\n');
nahrad(/const BASE = \[[\s\S]*?\];\n/, 'const BASE = '+JSON.stringify(BASE)+';\n');

// 2. nova osoba Zavodnov
if(!h.includes('--zavodnov')){
  h = h.replace('--kuchar:#a93c72;', '--kuchar:#a93c72; --zavodnov:#0f6d7a;');
  h = h.replace('Savynets:"var(--savynets)","Kuchař":"var(--kuchar)"',
                'Savynets:"var(--savynets)","Kuchař":"var(--kuchar)",Zavodnov:"var(--zavodnov)"');
  h = h.replace('"Kuchař":"pan Kuchař","Vlastní parta"',
                '"Kuchař":"pan Kuchař",Zavodnov:"S. Zavodnov","Vlastní parta"');
}

// 3. popisek a build
h = h.replace(/kontrolních dnů č\. 24 až \d+ a nástěnka/, 'kontrolních dnů č. 24 až 29, pracovní porady a nástěnka');
const BUILD = new Date().toISOString().replace(/[-:T]/g,'').slice(0,14);
h = h.replace(/const BUILD = "\d+";/, 'const BUILD = "'+BUILD+'";');

fs.writeFileSync('site/index.html', h);
console.log('index.html |', h.length, 'bytes | BUILD', BUILD);
console.log('schuzek:', KD.length, '| bodu:', BASE.length);
console.log('zalozky:', KD.map(k=>k.kratky+' '+k.datum).join(' | '));
