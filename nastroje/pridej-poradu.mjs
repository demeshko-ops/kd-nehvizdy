import { api } from './kd.mjs';

const SCH = {klic:"POR1", typ:"PORADA", cislo:null, label:"Pracovní porada",
  lokativ:"pracovní poradě", kratky:"Porada", datum:"6. 10. 2026",
  cas:"8:30-10:00 (89 minut)", misto:"Nehvizdy",
  predmet:"Stav bytů, klimatizace a VZT, požární ucpávky a dveře, konektivita, shell and core",
  ucastnici:"Marina Demeshko · S. Zavodnov · další zástupci Henderson",
  zdroj:"Zvukový záznam 10-06 08:30",
  pozn:"Interní pracovní porada týmu Henderson, nikoli kontrolní den. Pan Kret a pan Zeman na ní nebyli, jsou zmiňováni ve třetí osobě. Záznam neoznačuje mluvčí jménem, úkoly bez uvedeného jména jsou přiřazeny podle profese.",
  poradi:7};

const B = [
["Dispozice","Byty 29 a 31 - elektroinstalace hotová",
 "V bytech 29 a 31 je elektroinstalace hotová. Chybí k tomu doklad a potvrzení stavu stoupaček.",
 "Stav se doloží fotkami a protokolem.",
 "Doložit technický stav stoupaček a hotovou elektroinstalaci v bytech 29 a 31 fotkami a protokolem.","Demeshko","ihned"],

["Dispozice","Byty 26, 27, 28 a 33 k dopracování",
 "Byty 26, 27, 28 a 33 zůstávají k dopracování. Pro byty 26, 27 a 28 se počítá se standardním provedením, které umožní prodávat je dráž.",
 "Standard se drží, byty jdou do prodeje v této úrovni.",
 "Dokončit dopracování bytů 26, 27, 28 a 33 ve standardním provedení.","Vlastní parta",""],

["Klientské změny","Byt 28 - změna dispozice podle designu",
 "Pro byt 28 je hotový design, který mění dispozici. Místo koupelny vznikne plnohodnotná ložnice.",
 "Dispozice se mění podle hotového designu.",
 "Provést demontáž a změnu dispozice bytu 28 podle hotového designu.","Vlastní parta",""],

["Dispozice","Byt 4 - rozdělení na tři byty",
 "Byt 4 zůstává v majetku a rozdělí se na tři byty. Současná dispozice nevyhovuje požadavku na dvoje dveře mezi kuchyní a toaletou. Počítá se se spojením kuchyně a obývacího pokoje, přesunem nebo zbouráním stěny a vznikem samostatné místnosti.",
 "Dispozice se přepracuje tak, aby požadavek na dvoje dveře splnila.",
 "Přepracovat dispozici bytu 4 s dvojími dveřmi mezi kuchyní a toaletou.","Demeshko",""],

["Klientské změny","Byt 5 - dodělávky po prodeji",
 "Byt 5 je prodaný. Chybí příprava pro WC, chybí spodní přívod a je potřeba obnovit protažení kabelů pro klimatizaci.",
 "Dodělávky se udělají vlastní partou.",
 "Dodělat v bytě 5 přípravu pro WC, spodní přívod a protažení kabelů klimatizace.","Vlastní parta","ihned"],

["TZB","Byty 1 a 2 - chybí klimatizace",
 "V bytě 2 klimatizace chybí a má se udělat stejně jako v bytě 1. V bytě 1 klimatizace také chybí a jsou zjištěné problémy s otvory pro sanitu.",
 "Oba byty se doplní.",
 "Navrhnout a osadit klimatizaci v bytech 1 a 2 a opravit otvory pro sanitu v bytě 1.","Vlastní parta",""],

["Dispozice","Zdravotnické zařízení - samostatný vstup",
 "Projednává se úprava prostoru pro zdravotnické zařízení: samostatný vstup, zázemí pro personál a dva vstupy s protipožárními dveřmi.",
 "Bez rozhodnutí, čeká se na návrh úpravy.",
 "Připravit návrh úpravy prostoru pro zdravotnické zařízení.","Demeshko",""],

["TZB","Inventura klimatizace na celém objektu",
 "Na objektu chybí klimatizace ve velkém rozsahu. Je potřeba projít všechny byty, sepsat nedodělky a přepočítat počet krabic pro rozvody.",
 "Nákup i montáž se udělají vlastní partou.",
 "Projít objekt, sepsat nedodělky klimatizace, přepočítat krabice a zajistit nákup i montáž.","Demeshko","9. 10. 2026"],

["TZB","Voda, kanalizace a VZT v bytech 1 až 26",
 "Práce na vodě, kanalizaci a VZT v bytech 1 až 26 jsou téměř hotové, chybí potvrzení skutečného stavu.",
 "Stav se ověří obchůzkou.",
 "Ověřit skutečné dokončení vody, kanalizace a VZT v bytech 1 až 26.","Vlastní parta","10. 10. 2026"],

["TZB","VZT se u dodavatele protahuje",
 "Práce na VZT se u pana Kreta protahují. Hrozí nevhodná řešení, například zbytečný svod do sklepa.",
 "Trasy se nechají zauditovat a potvrdí se správné řešení.",
 "Zauditovat řešení VZT od pana Kreta a pana Zemana a potvrdit trasy.","Demeshko","13. 10. 2026"],

["TZB","Nesedí osy sanity a otvorů v koupelnách",
 "V koupelnách nesedí umístění otvorů pro vanu a vývodů sanity. Zjištěny chyby montáže a problém s obcházením topných trubek při lití podlah.",
 "Osy se přeměří a změny se odsouhlasí s dodavatelem.",
 "Přeměřit osy zařizovacích předmětů a otvorů, zkontrolovat trasy a odsouhlasit změny s panem Kretem.","Demeshko","7. 10. 2026"],

["Dokončovací práce","Cena broušení betonových podlah",
 "Není známa cena broušení betonových podlah.",
 "Bez rozhodnutí, čeká se na cenu.",
 "Zjistit cenu broušení betonových podlah.","Demeshko",""],

["PBŘ","Technologie požárních ucpávek mezi podlažími",
 "Není rozhodnuto, jak se vyřeší prostupy mezi podlažími. Ve hře je plošné použití manžet nebo zabetonování stoupaček s minerální vatou. Rozhodnutí ovlivní termíny, akustiku i soulad s PBŘ. Zvažuje se levnější firma nebo provedení vlastními silami s certifikací Hilti.",
 "Rozhodne se po prohlídce technika.",
 "Rozhodnout technologii ucpávek a zajistit výjezd technika levnější firmy.","Demeshko","8. 10. 2026"],

["PBŘ","Protipožární dveře a rozdělení na požární úseky",
 "Je třeba určit umístění protipožárních dveří tak, aby chodba vypadala jednotně, a rozdělit prostor na samostatné požární úseky.",
 "Umístění se potvrdí s požárním specialistou.",
 "Konzultovat s požárním specialistou umístění protipožárních dveří a rozdělení na požární úseky.","Demeshko","7. 10. 2026"],

["Konektivita","Signál a internet na objektu",
 "Na objektu jsou vážné problémy se signálem. Objednán jeden GSM zesilovač z Číny na zkoušku. Uvnitř budovy je položen kabel CAT5.",
 "Hlavní linkou bude Starlink, optika zůstane jako záloha.",
 "Objednat a nainstalovat Starlink.","Demeshko","12. 10. 2026"],

["Konektivita","GSM zesilovač a záložní optika",
 "Protažení optiky má být zdarma, je ale potřeba najít poskytovatele a odsouhlasit trasu.",
 "Zesilovač se nejprve otestuje, pak se řeší optika.",
 "Nainstalovat a otestovat GSM zesilovač, oslovit poskytovatele optiky a potvrdit bezplatné protažení i trasu.","Vlastní parta","15. 10. 2026"],

["Financování","Shell and core jako podmínka přecenění bankou",
 "Banka přecení byty a přepočítá úvěr až po dosažení úrovně shell and core. Blokuje to chybějící výplň otvorů a protahující se VZT.",
 "Prioritou jsou dveře a VZT, bez nich k přecenění nedojde.",
 "Sestavit pro banku doklady o dosažení úrovně shell and core.","Demeshko","14. 10. 2026"],

["Financování","Dveře na celém objektu",
 "Chybějící dveře jsou jedním ze dvou blokerů shell and core.",
 "Nákup a osazení se zadá vlastní partě.",
 "Zajistit nákup a osazení dveří na celém objektu.","Vlastní parta","20. 10. 2026"],

["Organizace","Koordinace postupu prací mezi partami",
 "Pořadí prací mezi partami nesedí, například špachtlování proti osazení oken. Práce na balkonech jsou zastavené.",
 "Koordinace se bude řešit na ranní schůzce na stavbě.",
 "Projednat koordinaci prací a obnovení prací na balkonech na ranní schůzce na stavbě.","Zavodnov","7. 10. 2026"],

["Dokumentace","Aktuální výkresy jsou jen lokálně",
 "Aktuální verze výkresů jsou uložené lokálně u Maryny Demeshko. Ze sdílených složek hrozí práce se zastaralými podklady.",
 "Výkresy se nahrají do sdílené složky a rozešlou se.",
 "Nahrát aktuální výkresy do sdílené složky, rozeslat je a doplnit kolegu do pracovních skupin.","Demeshko","ihned"],
];

const toIso = s => { const m=/^(\d{1,2})\.\s*(\d{1,2})\.\s*(\d{4})$/.exec(String(s).trim());
  return m ? `${m[3]}-${String(m[2]).padStart(2,'0')}-${String(m[1]).padStart(2,'0')}` : null; };

const rows = B.map(([kat,tema,projednano,rozhodnuto,ukol,kdo,termin],i)=>{
  const iso = toIso(termin);
  return {id:"POR1-"+String(i+1).padStart(2,"0"), klic:"POR1", bod:"POR1/"+String(i+1).padStart(2,"0"),
    kat, tema, projednano, rozhodnuto, ukol, zdroj:"Zvukový záznam 10-06 08:30", poradi:1000+i,
    vazby:[], stav:"Trvá", odpovida:kdo,
    termin: iso, termin_text: iso?'':termin, termin_zdroj: termin?'KD':'',
    hotovo_at:null, hotovo_kdo:''};
});

const uz = await api('body?select=id&klic=eq.POR1');
if(uz.length){ console.log('POR1 uz existuje:', uz.length, 'radku, koncim'); process.exit(0); }

await api('schuzky?on_conflict=klic', {method:'POST',
  headers:{Prefer:'return=representation,resolution=merge-duplicates'}, body:JSON.stringify([SCH])});
console.log('schuzka POR1 vlozena');
const ins = await api('body?on_conflict=id', {method:'POST',
  headers:{Prefer:'return=representation,resolution=ignore-duplicates'}, body:JSON.stringify(rows)});
console.log('bodu vlozeno:', ins.length);

// vazby ze starsich bodu na novou poradu
const V = [
 ["24-06","POR1/13","Požární ucpávky pokračují jako volba technologie mezi manžetami a zabetonováním stoupaček."],
 ["24-07","POR1/13","Certifikace montáže se vrací jako varianta provedení vlastními silami s certifikací Hilti."],
 ["29-12","POR1/13","Výběr dodavatele ucpávek pokračuje poptávkou u levnější firmy."],
 ["29-09","POR1/14","Požární úseky se vracejí jako umístění protipožárních dveří a rozdělení chodby."],
 ["INV1-14","POR1/17","Podmínka banky se upřesnila na dosažení úrovně shell and core."],
 ["INV1-06","POR1/19","Zastavené práce na balkonech se vracejí do koordinace na ranní schůzce."],
];
for(const [zId, naBod, proc] of V){
  const na = rows.find(r=>r.bod===naBod);
  const cur = (await api('body?select=vazby&id=eq.'+zId))[0];
  const nova = (cur.vazby||[]).filter(v=>v.bod!==naBod).concat([{
    bod:na.bod, klic:"POR1", typ:SCH.typ, label:SCH.label, lokativ:SCH.lokativ, kratky:SCH.kratky,
    datum:SCH.datum, poradi:SCH.poradi, tema:na.tema, rozhodnuto:na.rozhodnuto,
    odpovida:na.odpovida, zaviraci:false, proc}]);
  await api('body?id=eq.'+zId, {method:'PATCH', body:JSON.stringify({vazby:nova})});
  console.log('  vazba', zId, '->', naBod);
}
console.log('HOTOVO');
