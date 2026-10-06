import { api, toIso } from './kd.mjs';
import { PBR1, KD30, B_PBR1, B_KD30 } from './data-2909.mjs';

const SCH = {PBR1, "30":KD30};
const radky = (sch, pole, zacatek) => pole.map(([kat,tema,projednano,rozhodnuto,ukol,kdo,termin,stav],i)=>{
  const n = String(i+1).padStart(2,'0'), iso = toIso(termin);
  return {id:sch.klic+'-'+n, klic:sch.klic, bod:sch.klic+'/'+n, kat, tema, projednano, rozhodnuto,
    ukol: ukol||'', zdroj:sch.zdroj, poradi:zacatek+i, vazby:[], stav: stav||'Trvá', odpovida:kdo,
    termin:iso, termin_text: iso?'':(termin||''), termin_zdroj: termin?'KD':'',
    hotovo_at:null, hotovo_kdo:''};
});
const R_PBR1 = radky(PBR1, B_PBR1, 800);
const R_KD30 = radky(KD30, B_KD30, 900);
const VSE = [...R_PBR1, ...R_KD30];

if((await api('body?select=id&klic=in.(PBR1,30)')).length){ console.log('uz existuje, koncim'); process.exit(0); }

for(const s of [PBR1, KD30]){
  await api('schuzky?on_conflict=klic', {method:'POST',
    headers:{Prefer:'return=representation,resolution=merge-duplicates'}, body:JSON.stringify([s])});
  console.log('schuzka', s.klic, s.datum, 'poradi', s.poradi);
}
await api('schuzky?klic=eq.POR1', {method:'PATCH', body:JSON.stringify({poradi:9})});
console.log('POR1 poradi 9');

for(const [k, rows] of [['PBR1',R_PBR1],['30',R_KD30]]){
  const r = await api('body?on_conflict=id', {method:'POST',
    headers:{Prefer:'return=representation,resolution=ignore-duplicates'}, body:JSON.stringify(rows)});
  console.log('body', k, '->', r.length);
}

// --- vazby ---
const SCHALL = Object.fromEntries((await api('schuzky?select=*')).map(s=>[s.klic,s]));
const BODALL = Object.fromEntries(VSE.map(r=>[r.bod,r]));

const V = [
 ["24-20","PBR1/04",false,"Odvětrání chodeb pokračuje jako samostatný projekt odvětrání napojený na EPS."],
 ["29-21","PBR1/04",false,"Zadání projektu větrání se upřesnilo na odvětrání u výtahu a světlíky řízené EPS."],
 ["24-06","PBR1/05",false,"Ucpávky v šachtách se budou dělat na každém patře, typ rozhodne cena."],
 ["24-07","PBR1/05",false,"Projektant PBŘ dodá podklady k ucpávkám dle normy."],
 ["29-12","PBR1/05",false,"Výběr ucpávek pokračuje mezi manžetou, tmelem a pytlíky."],
 ["28-02","PBR1/11",false,"Poptávka EPS pokračuje, projektant stále není potvrzený."],
 ["29-09","PBR1/01",true, "Projektant PBŘ změnu dispozice v 1. NP odsouhlasil."],
 ["28-01","PBR1/10",true, "Koordinace s HZS a Center PCO proběhla, signál ověřen a nabídka dodána."],
 ["28-04","PBR1/10",true, "Center PCO zajistí dálkový přenos, DZP i žádost na HZS."],
 ["29-23","PBR1/12",true, "HZS potvrdil, že baterie FVE nelze použít jako náhradní zdroj."],
 ["PBR1-09","30/09",false,"Řešení ústředny EPS pokračuje jako oddělený požární úsek."],
 ["PBR1-12","30/10",false,"Bateriové úložiště musí být požárně odděleno od EPS."],
 ["PBR1-08","30/20",false,"Změna stavby před dokončením čeká na potvrzenou odpovědnost za EPS."],
 ["29-27","30/07",false,"Plocha předzahrádek se upřesňuje zakreslením do projektu."],
 ["29-03","30/14",false,"Zbývající prostupy pokračují jako tři průrazy pro páteřní trasy."],
 ["29-04","30/15",false,"Lešení se nebude jen odstraňovat, plocha mezi balkony se nahradí věžemi."],
 ["30-16","POR1/15",true, "Na pracovní poradě bylo rozhodnuto, že hlavní linkou bude Starlink."],
];

for(const [zId, naBod, zaviraci, proc] of V){
  const na = BODALL[naBod] || (await api('body?select=*&bod=eq.'+encodeURIComponent(naBod)))[0];
  const s = SCHALL[na.klic];
  const cur = (await api('body?select=vazby,stav&id=eq.'+zId))[0];
  const nova = (cur.vazby||[]).filter(v=>v.bod!==naBod).concat([{
    bod:na.bod, klic:na.klic, typ:s.typ, label:s.label, lokativ:s.lokativ, kratky:s.kratky,
    datum:s.datum, poradi:s.poradi, tema:na.tema, rozhodnuto:na.rozhodnuto,
    odpovida:na.odpovida, zaviraci, proc}]);
  const patch = {vazby:nova};
  if(zaviraci && cur.stav === 'Trvá'){
    patch.stav='Hotovo'; patch.hotovo_at=toIso(s.datum); patch.hotovo_kdo='uzavřeno na '+s.lokativ;
  }
  await api('body?id=eq.'+zId, {method:'PATCH', body:JSON.stringify(patch)});
  await api('historie', {method:'POST', body:JSON.stringify([{bod_id:zId, akce:'stav',
      z:'Trvá', na:'Hotovo', kdo:'uzavřeno na '+s.lokativ}])}).catch(()=>{});
  console.log(' ', zId, '->', naBod, zaviraci ? (cur.stav==='Trvá' ? '(uzavřeno)' : '(stav '+cur.stav+', neměním)') : '');
}
const sum = await api('body?select=stav');
const c={}; sum.forEach(r=>c[r.stav]=(c[r.stav]||0)+1);
console.log('HOTOVO. bodu celkem:', sum.length, JSON.stringify(c));
