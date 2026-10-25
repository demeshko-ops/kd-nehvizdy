import fs from 'fs';
import { api } from './site/nastroje/kd.mjs';

const radky = JSON.parse(fs.readFileSync('nedodelky-rows.json','utf8'));
const OBCHUZKA = '23. 10. 2026';

const rezim = process.argv[2] || 'build';

if(rezim === 'seed'){
  const uz = await api('nedodelky?select=id');
  if(uz.length){ console.log('v databazi uz je', uz.length, 'radku, neseju'); }
  else {
    const r = await api('nedodelky?on_conflict=id', {method:'POST',
      headers:{Prefer:'return=representation,resolution=ignore-duplicates'}, body:JSON.stringify(radky)});
    console.log('vlozeno radku:', r.length);
  }
}

// stranka se vzdy staví z aktuálního stavu databáze, aby offline záloha seděla
let base = radky;
try{ const z = await api('nedodelky?select=*&order=poradi'); if(z.length) base = z; }
catch(e){ console.log('databaze nedostupna, peču výchozí seznam'); }

const h0 = fs.readFileSync('site/index.html','utf8');
const URL_ = /const SUPA_URL = "([^"]+)"/.exec(h0)[1];
const KEY  = /const SUPA_KEY = "([^"]+)"/.exec(h0)[1];
const BUILD = new Date().toISOString().replace(/[-:T]/g,'').slice(0,14);

let h = fs.readFileSync('nedodelky.tpl.html','utf8')
  .replace(/__BASE__/g, JSON.stringify(base))
  .replace(/__BUILD__/g, BUILD)
  .replace(/__SUPA_URL__/g, URL_)
  .replace(/__SUPA_KEY__/g, KEY)
  .replace(/__OBCHUZKA__/g, OBCHUZKA);

const head = '<!doctype html>\n<html lang="cs">\n<head>\n<meta charset="utf-8">\n'
  + '<meta name="viewport" content="width=device-width,initial-scale=1,viewport-fit=cover">\n'
  + '<meta name="robots" content="noindex,nofollow,noarchive,nosnippet">\n'
  + '<meta name="referrer" content="no-referrer">\n<meta name="theme-color" content="#f6f5f0">\n';
const i = h.indexOf('</style>') + '</style>'.length;
fs.mkdirSync('site/nedodelky', {recursive:true});
fs.writeFileSync('site/nedodelky/index.html', head + h.slice(0,i) + '\n</head>\n<body>\n' + h.slice(i) + '\n</body>\n</html>\n');
console.log('site/nedodelky/index.html |', fs.statSync('site/nedodelky/index.html').size, 'bytes | BUILD', BUILD, '| bodu', base.length);
