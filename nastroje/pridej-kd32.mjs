import { api, toIso } from './kd.mjs';
import { SCH, BODY, VAZBY } from './data-kd32.mjs';

const rows = BODY.map(([kat,tema,projednano,rozhodnuto,ukol,kdo,termin,stav],i)=>{
  const n = String(i+1).padStart(2,'0'), iso = toIso(termin);
  return {id:'32-'+n, klic:'32', bod:'32/'+n, kat, tema, projednano, rozhodnuto, ukol: ukol||'',
    zdroj:SCH.zdroj, poradi:1400+i, vazby:[], stav: stav||'Trvá', odpovida:kdo,
    termin:iso, termin_text: iso?'':(termin||''), termin_zdroj: termin?'KD':'',
    hotovo_at:null, hotovo_kdo:''};
});

if((await api('body?select=id&klic=eq.32')).length){ console.log('KD 32 uz existuje'); process.exit(0); }

await api('schuzky?on_conflict=klic', {method:'POST',
  headers:{Prefer:'return=representation,resolution=merge-duplicates'}, body:JSON.stringify([SCH])});
console.log('schuzka 32 |', SCH.datum, '| poradi', SCH.poradi);
const r = await api('body?on_conflict=id', {method:'POST',
  headers:{Prefer:'return=representation,resolution=ignore-duplicates'}, body:JSON.stringify(rows)});
console.log('bodu vlozeno:', r.length);

const NOVE = Object.fromEntries(rows.map(x=>[x.bod,x]));
for(const [zId, naBod, zaviraci, proc] of VAZBY){
  const na = NOVE[naBod];
  const cur = (await api('body?select=vazby,stav&id=eq.'+zId))[0];
  if(!cur){ console.log('  !! nenalezen', zId); continue; }
  const nova = (cur.vazby||[]).filter(v=>v.bod!==naBod).concat([{
    bod:na.bod, klic:'32', typ:SCH.typ, label:SCH.label, lokativ:SCH.lokativ, kratky:SCH.kratky,
    datum:SCH.datum, poradi:SCH.poradi, tema:na.tema, rozhodnuto:na.rozhodnuto,
    odpovida:na.odpovida, zaviraci, proc}]);
  const patch = {vazby:nova};
  let pozn='';
  if(zaviraci && cur.stav==='Trvá'){
    patch.stav='Hotovo'; patch.hotovo_at=toIso(SCH.datum); patch.hotovo_kdo='uzavřeno na '+SCH.lokativ;
    pozn='(uzavřeno)';
  } else if(zaviraci) pozn='(stav '+cur.stav+', neměním)';
  await api('body?id=eq.'+zId, {method:'PATCH', body:JSON.stringify(patch)});
  if(patch.stav) await api('historie', {method:'POST', body:JSON.stringify([{bod_id:zId, akce:'stav',
    z:'Trvá', na:'Hotovo', kdo:'uzavřeno na '+SCH.lokativ}])}).catch(()=>{});
  console.log('  vazba', zId, '->', naBod, pozn);
}
const sum = await api('body?select=stav');
const c={}; sum.forEach(x=>c[x.stav]=(c[x.stav]||0)+1);
console.log('HOTOVO. bodu celkem:', sum.length, JSON.stringify(c));
