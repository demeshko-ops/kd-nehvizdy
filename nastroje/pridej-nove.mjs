import { api, toIso } from './site/nastroje/kd.mjs';
import { SCHUZKY, BODY, VAZBY } from './data-nove.mjs';

const ZAC = {"31":1100, "SU1":1200, "HZS1":1300};
const vsechny = [];
for(const sch of SCHUZKY){
  BODY[sch.klic].forEach(([kat,tema,projednano,rozhodnuto,ukol,kdo,termin,stav],i)=>{
    const n = String(i+1).padStart(2,"0"), iso = toIso(termin);
    vsechny.push({id:sch.klic+"-"+n, klic:sch.klic, bod:sch.klic+"/"+n, kat, tema, projednano,
      rozhodnuto, ukol: ukol||"", zdroj:sch.zdroj, poradi:ZAC[sch.klic]+i, vazby:[],
      stav: stav||"Trvá", odpovida:kdo,
      termin:iso, termin_text: iso?"":(termin||""), termin_zdroj: termin?"KD":"",
      hotovo_at:null, hotovo_kdo:""});
  });
}

if((await api('body?select=id&klic=in.(31,SU1,HZS1)')).length){ console.log('uz existuje, koncim'); process.exit(0); }

for(const s of SCHUZKY){
  await api('schuzky?on_conflict=klic', {method:'POST',
    headers:{Prefer:'return=representation,resolution=merge-duplicates'}, body:JSON.stringify([s])});
  console.log('schuzka', s.klic, '|', s.datum, '| poradi', s.poradi);
}
for(const k of Object.keys(BODY)){
  const rows = vsechny.filter(r=>r.klic===k);
  const r = await api('body?on_conflict=id', {method:'POST',
    headers:{Prefer:'return=representation,resolution=ignore-duplicates'}, body:JSON.stringify(rows)});
  console.log('  body', k, '->', r.length);
}

const SCHALL = Object.fromEntries((await api('schuzky?select=*')).map(s=>[s.klic,s]));
const NOVE = Object.fromEntries(vsechny.map(r=>[r.bod, r]));
for(const [zRaw, naBod, zaviraci, proc] of VAZBY){
  const zId = zRaw.replace('/','-');
  const na = NOVE[naBod] || (await api('body?select=*&bod=eq.'+encodeURIComponent(naBod)))[0];
  const s = SCHALL[na.klic];
  const cur = (await api('body?select=vazby,stav&id=eq.'+zId))[0];
  if(!cur){ console.log('  !! vychozi bod nenalezen:', zId); continue; }
  const nova = (cur.vazby||[]).filter(v=>v.bod!==naBod).concat([{
    bod:na.bod, klic:na.klic, typ:s.typ, label:s.label, lokativ:s.lokativ, kratky:s.kratky,
    datum:s.datum, poradi:s.poradi, tema:na.tema, rozhodnuto:na.rozhodnuto,
    odpovida:na.odpovida, zaviraci, proc}]);
  const patch = {vazby:nova};
  let pozn = '';
  if(zaviraci && cur.stav === 'Trvá'){
    patch.stav='Hotovo'; patch.hotovo_at=toIso(s.datum); patch.hotovo_kdo='uzavřeno na '+s.lokativ;
    pozn = '(uzavřeno)';
  } else if(zaviraci) pozn = '(stav '+cur.stav+', neměním)';
  await api('body?id=eq.'+zId, {method:'PATCH', body:JSON.stringify(patch)});
  if(patch.stav) await api('historie', {method:'POST', body:JSON.stringify([{bod_id:zId, akce:'stav',
      z:'Trvá', na:'Hotovo', kdo:'uzavřeno na '+s.lokativ}])}).catch(()=>{});
  console.log('  vazba', zRaw, '->', naBod, pozn);
}
const sum = await api('body?select=stav');
const c={}; sum.forEach(r=>c[r.stav]=(c[r.stav]||0)+1);
console.log('HOTOVO. bodu celkem:', sum.length, JSON.stringify(c));
