export const SCH = {klic:"33", typ:"KD", cislo:33, label:"KD č. 33", lokativ:"KD č. 33", kratky:"KD 33",
 datum:"29. 10. 2026", cas:"227 minut", misto:"Nehvizdy",
 predmet:"PBŘ a přirozené větrání, procesní strategie vůči úřadům, vsakování na parkovišti, VZT a příprava klimatizace, FVE a hromosvod, osvětlení garáží, vnitřní odpady a slaboproud",
 ucastnici:"Marina Demeshko · pan Kuchař · pan Jelínek · pan Zeman (David) · tři neoznačení mluvčí",
 zdroj:"Zvukový záznam KD Nehvizdy 29. 10. 2026",
 pozn:"Mluvčí jsou v záznamu označeni jen částečně: pan Kuchař, pan Jelínek, pan Zeman a Marina Demeshko. Tři další hlasy zůstávají bez jména, proto je u některých bodů odpovědná osoba určena podle role v hovoru a lze ji přepsat. V zápisu jsou označeny tři rozpory proti starším jednáním: objem retence proti KD č. 32, materiál potrubí VZT proti schůzce s investorem 11. 9. a řešení výtahu proti jednání na stavebním úřadu 7. 10.",
 poradi:14};

export const BODY = [

// --- PBŘ a větrání ---
["PBŘ","Přechod na přirozený odvod kouře",
 "Přetlakové větrání s udržovaným rozdílem 25 Pa je finančně i revizně náročné. Nově se navrhuje přirozený odvod kouře a větrání s desetinásobnou výměnou vzduchu, přívodem z fasády a odvodem pod střechou.",
 "Od přetlaku se ustupuje, jde se do přirozeného odvodu kouře.",
 "Zpracovat stanovisko k PBŘ pro přirozené větrání CHÚC A.","Zeman","30. 11. 2026"],

["PBŘ","Vynechání požárních předsíní u CHÚC A",
 "Projednána možnost vynechat požární předsíně u schodiště CHÚC A vedoucího do 1. PP. Předsíňky EI 60 byly přitom zavedeny na jednání s PBŘ 29. 9. jako náhrada přetlaku.",
 "Bez rozhodnutí, posoudí pan Majer v rámci dopracování PBŘ.",
 "Nechat pana Majera posoudit, zda lze předsíně u CHÚC A do 1. PP vynechat.","Zeman","30. 11. 2026"],

["PBŘ","Požární úseky stoupaček proti ucpávkám po patrech",
 "Zvažován svislý samostatný požární úsek stoupaček proti měkkým ucpávkám v každém patře. 1. patro je částečně zalité a vyžaduje samostatné řešení záklopem, 2. a 3. NP budou samostatné úseky. Požární klapka bude umístěna dole v 1. PP, kolem prostupů se počítá s minerální izolací tl. 4 cm.",
 "Řešení se dělí podle podlaží, finální podobu potvrdí PBŘ.",
 "Potvrdit v PBŘ dělení stoupaček na požární úseky a způsob provedení záklopu v 1. patře.","Zeman","30. 11. 2026"],

["PBŘ","Nehořlavé kabely B2ca v 1. PP a pro EPS",
 "Prostory 1. PP a rozvody EPS vyžadují nehořlavé kabely třídy B2ca.",
 "Požadavek B2ca se zapracuje do projektu elektro a EPS.",
 "Zajistit, aby kabely v 1. PP a pro EPS splňovaly třídu B2ca, a doložit technické listy.","Kret",""],

["PBŘ","Harmonogram PBŘ, EPS a podání na HZS",
 "Dokumentaci PBŘ dopracuje specialista pan Majer do konce listopadu 2026. Na to naváže pan Kuchař dopracováním projektu EPS, odhad 1 až 2 týdny. Podklady pak půjdou na HZS Mladá Boleslav, kde je lhůta 30 dnů.",
 "Postup je dán touto posloupností, kolaudace v březnu 2027 na ní závisí.",
 "Dopracovat projekt EPS neprodleně po dodání upraveného PBŘ a podat na HZS Mladá Boleslav.","Kuchař",""],

["Úřady","Zpřesnění provedení stavby místo změny stavby",
 "Snahou je prezentovat úpravy jako zpřesnění provedení stavby, nikoli jako oficiální změnu stavby před dokončením, aby se předešlo zdržení. Na KD č. 32 bylo přitom rozhodnuto žádost o změnu stavby před dokončením podat.",
 "Zkusí se cesta dokumentace skutečného provedení, rozhodne postoj úřadu.",
 "Vyjasnit se stavebním úřadem, zda úpravy větrání, absence předsíní a podjezdová výška projdou v režimu dokumentace skutečného provedení.","Kuchař",""],

["Úřady","Předjednání schůzky na HZS Mladá Boleslav",
 "Schůzku s hasiči v Mladé Boleslavi pomůže předjednat Slávek Devátý.",
 "Schůzka se předjedná přes Slávka Devátého.",
 "Sjednat schůzku se Slávkem Devátým a zástupci HZS Mladá Boleslav.","Zeman",""],

["Úřady","Právní rámec formulace změn",
 "Formulace úprav vůči úřadu, tedy zpřesnění proti změně stavby, se zkonzultuje s advokátem. Kontakt je v Praze, přes Henderson.",
 "Formulaci posoudí advokát před podáním.",
 "Konzultovat s advokátem v Praze právní formulaci úprav a doložit ji k podání.","Kuchař|Demeshko",""],

// --- Odvodnění ---
["Odvodnění","Vsak v prostoru parkoviště",
 "Diskutována varianta umístit vsak v prostoru parkoviště, cca 10 m od domu, s bezpečnostním přepadem, aby nebyly ohroženy základy a nemusel se měnit obvod stavby. Varianta realizace načerno byla zamítnuta.",
 "Vsak se umístí pod parkoviště, cca 10 m od domu, s přepadem.",
 "Zapracovat polohu vsaku pod parkovištěm do projektu odvodnění.","Demeshko",""],

["Odvodnění","Parametry retence a štěrkového vsaku",
 "Uvažuje se retenční nádrž plus přídavná nádrž, v záznamu uvedeno 188/10 m³, štěrkový vsak o objemu cca 170 m³ frakce 32 až 64 mm s odhadem nákladů 250 až 300 tis. Kč, materiál například z lomu Milovice, a 2 lapoly na uličních vpustích. Objem nádrží je v rozporu s KD č. 32, kde byly odsouhlaseny dvě nádrže po 12 m³, tedy 24 m³ celkem.",
 "Štěrkový vsak 170 m³ a lapoly potvrzeny, objem nádrží je nutné přepočítat.",
 "Přepočítat a sjednotit objem retenčních nádrží proti bilanci z KD č. 32 a doložit výpočtem.","Demeshko","ihned"],

["Odvodnění","Etapizace hlubokého výkopu",
 "Výkop do hloubky 3 až 6 m bude probíhat etapově ve dvou pruzích, levá a pravá strana, aby nebyl zablokován přístup techniky na stavbu.",
 "Výkop se dělí na dvě etapy.",
 "Naplánovat výkop do dvou pruhů a zajistit průjezd techniky po celou dobu prací.","Jelinek",""],

["Odvodnění","Pažení výkopu u sousedního objektu",
 "Zůstává otevřeno technické zajištění pažení hlubokého výkopu 3 až 6 m v blízkosti sousedního objektu a konečný výběr dodavatele štěrku.",
 "Bez rozhodnutí.",
 "Navrhnout pažení hlubokého výkopu u sousedního objektu a vybrat dodavatele štěrku.","Jelinek",""],

["Odvodnění","Podklady pro geologa a PBŘ",
 "Reálné podloží, tedy jíly proti mezerovitému pískovci, a parametry vsaku ověří geologové na základě dodaných výkresů.",
 "Podklady se odesílají ihned.",
 "Odeslat podklady a výkresy DWG geologům a panu Majerovi.","Kuchař","29. 10. 2026"],

["Odvodnění","Stanovisko vodohospodáře",
 "Stanovisko k vodě připraví vodohospodář Míša.",
 "Stanovisko se vyžádá.",
 "Vyžádat od vodohospodáře Míši stanovisko k vodě a dopočet parametrů vsakovacího objektu.","Demeshko",""],

// --- VZT a klimatizace ---
["TZB","Kruhové potrubí Spiro místo atypického hranatého",
 "Místo atypického hranatého potrubí bude použito kruhové potrubí Spiro, montáž začne shora. Spodní atypické bloky mají výrobní lhůtu cca 2 měsíce. Na schůzce s investorem 11. 9. se přitom řešila změna materiálu ze Spiro na KG, zde se vrací ke Spiro.",
 "Jde se do kruhového potrubí Spiro, montáž shora.",
 "Objednat kruhové potrubí Spiro a atypické spodní bloky s ohledem na dvouměsíční výrobní lhůtu.","Hornsteiner","ihned"],

["TZB","Nástup montáže vzduchotechniky",
 "Montážní tým vzduchotechniky nastupuje 3. 11. 2026.",
 "Termín nástupu potvrzen.",
 "Zajistit připravenost pracoviště pro nástup montážního týmu VZT.","Jelinek","3. 11. 2026"],

["TZB","Profil stoupaček 200 proti 160",
 "U stoupaček, kam se nevejde profil 200, se po přepočtu koupelen zváží profil 160.",
 "Bez rozhodnutí, rozhodne přepočet.",
 "Přepočítat dimenze potrubí u koupelen a rozhodnout mezi profilem 200 a 160.","Hornsteiner",""],

["TZB","Odtahové komínky a větrné hlavice",
 "Samovolně rotující větrné hlavice, tedy tahové vrtule, se osadí pouze na vybrané stoupačky s navýšenou kapacitou, cca 3 upravené a 1 nová. Na ostatní postačí mřížky.",
 "Hlavice jen na 4 stoupačky, zbytek mřížky.","","Demeshko","","Pro info"],

["TZB","Smlouva a jednotkové ceny VZT",
 "Finální smlouva na vzduchotechniku není podepsána, chybí schválení jednotkových cen víceprací.",
 "Bez rozhodnutí.",
 "Dojednat a podepsat smlouvu na VZT včetně schválení jednotkových cen víceprací.","Demeshko","ihned"],

["TZB","Příprava klimatizace bez osazení jednotek",
 "Jednotky se kvůli hluku a hygieně při kolaudaci nebudou osazovat kompletně. Provede se pouze stavební příprava: měděné dvoutrubky 6/9 a kabely. Vnitřní příprava se zaústí do instalačních boxů, venkovní vedení na balkonech se esteticky zakryje žlabem, SDK kastlíkem nebo krycím plechem.",
 "Ke kolaudaci jen stavební příprava, jednotky se osadí později.",
 "Dokončit stavební přípravu klimatizace, dvoutrubky 6/9 a kabely, a vybrat způsob zakrytí venkovního vedení na balkonech.","Kret",""],

// --- FVE, střecha a hromosvod ---
["FVE","Montáž falcových svorek na střeše",
 "Montáž falcových svorek na střeše proběhne 30. až 31. 10. 2026.",
 "Termín potvrzen.",
 "Zajistit montáž falcových svorek na střeše.","Jelinek","30. 10. 2026"],

["FVE","Rozmístění stringů a propojů",
 "Propoje mezi stringy FVE budou umístěny cca 30 cm od stringů, s rezervou 15 až 20 m k hřebeni. Maximální varianta počítá se 6 stringy.",
 "Rozmístění potvrzeno, finální schéma dodá dodavatel FVE.",
 "Dodat finální schéma rozmístění stringů jako podklad pro hromosvod.","Savynets",""],

["Elektro","Separátní hromosvod pro FVE",
 "FVE bude mít separátní uzemněný hromosvod. Konečné rozmístění jímačů a trasování hromosvodu závisí na finálním dodání schématu rozmístění stringů.",
 "Hromosvod pro FVE bude samostatný a uzemněný.",
 "Zajistit podklady k FVE pro hromosvody a navrhnout rozmístění jímačů podle finálního schématu stringů.","Zeman",""],

["FVE","Podpis smlouvy na fotovoltaiku",
 "Smlouva na FVE se podepisuje následující den po kontrolním dni.",
 "Smlouva se podepisuje 30. 10. 2026.","","Demeshko","","Pro info"],

// --- Suterén, garáže, osvětlení ---
["Financování","Zateplení stropu suterénu a PENB",
 "Díky FVE vychází energetická náročnost ve třídě A i bez zateplení stropu suterénu. Vynechání zateplení znamená úsporu cca 500 tis. Kč.",
 "Rozhodnutí je na vedení.",
 "Finálně rozhodnout o realizaci nebo vynechání zateplení stropu suterénu.","Demeshko|Savynets",""],

["Garáže","Světlá podjezdová výška 2,18 m",
 "Naměřená světlá podjezdová výška činí 2,18 až 2,19 m proti plánovaným 2,20 m. Tato výška už vedla na KD č. 32 k volbě roletových vrat místo sekčních.",
 "Stavební úpravy se nebudou provádět, odchylka se vyargumentuje ekonomickými důvody.",
 "Projednat s právníkem argumentaci k podjezdové výšce 2,18 m a doložit ji k dokumentaci skutečného provedení.","Kuchař",""],

["Elektro","Osvětlení garáží: 46 svítidel",
 "Navrženo 46 svítidel, návrh splňuje ČSN EN 12464-1 s průměrnou osvětleností 157 lx. Zhotovitel Vitalij požaduje pro montáž kótovaný výkres a fyzickou přítomnost svítidel na stavbě.",
 "Počet 46 svítidel potvrzen.",
 "Vygenerovat kótovaný výkres rozmístění 46 svítidel pro zhotovitele.","Hornsteiner","ihned"],

["Elektro","Nákup svítidel a porovnání nabídek",
 "Zvažuje se nákup svítidel přes kredit u KV Elektro. Dodací lhůta u jednoho z dodavatelů je uváděna na 14 dní, což koliduje s postupem montáže.",
 "Bez rozhodnutí, rozhodne porovnání nabídek.",
 "Prověřit nákup přes kredit u KV Elektro, porovnat cenové nabídky na 46 svítidel a objednat.","Demeshko|Jelinek","ihned"],

["Elektro","Metráž kabelů do stavebního deníku",
 "Spotřeba kabelů se liší od odhadu: proti předpokládaným cca 1 200 m bylo spotřebováno 860 m, zůstává rezerva cca 140 až 150 m. Přesná metráž musí být doložena.",
 "Metráž se bude zapisovat průběžně.",
 "Zapsat přesnou metráž spotřebovaných kabelů do stavebního deníku.","Jelinek",""],

// --- Vnitřní instalace a slaboproud ---
["TZB","Spádování vnitřních odpadů",
 "Zkontrolováno spádování vnitřních odpadů, správně mají být dvě kolena 45° místo jednoho 67°. Odtok ze sprchových žlábků musí být napojen samostatně přímo do stoupačky, nikoli do ležatého vedení od umyvadla. Nalezeny vady v bytě č. 24 a dalších.",
 "Napojení se předělá podle zásady dvou kolen 45° a samostatného odtoku žlábků.",
 "Upravit kolena a spády odpadů v bytě č. 24 a dalších dotčených bytech.","Jelinek","ihned"],

["TZB","Přejímka odpadů před fakturací",
 "Přejímku vnitřních odpadů provede stavbyvedoucí Pavel před vystavením faktury instalatéra.",
 "Bez podepsané přejímky se faktura nevystavuje.",
 "Provést přejímku odpadů a podepsat převzetí před vystavením faktury.","Jelinek",""],

["TZB","Zařizovací předměty a výšky odpadů",
 "Instalatéři potřebují tabulku se specifikací zařizovacích předmětů a technické listy ze SIKO, aby bylo možné určit přesné výšky odpadů a rozsah výdřev.",
 "Podklady se předají instalatérům.",
 "Předat instalatérům tabulku zařizovacích předmětů a technické listy ze SIKO a dodat kontakt na vodárny.","Demeshko","ihned"],

["Elektro","Volba systému domovních telefonů",
 "Vybírá se mezi systémy Urmet se čtyřdrátovou sběrnicí odolnou proti vandalismu, Bticino nebo Legrand a Easydoor. Pro silnoproudé vypínače a zásuvky je doporučeno ABB.",
 "Bez rozhodnutí, zhotovitel dodá tři varianty.",
 "Získat 3 kompletní variantní nabídky na domovní telefony s vizualizacemi a vybrat systém.","Demeshko|Jelinek",""],

["Vrata","Nabídka na garážová vrata a přístup na čipy",
 "Evidována nabídka na garážová vrata ve výši 400 000 Kč. Přístup bude řešen čipy.",
 "Nabídka je v evidenci, přístup na čipy potvrzen.",
 "Posoudit nabídku na vrata ve výši 400 tis. Kč a doplnit řešení přístupu na čipy.","Demeshko",""],

["TZB","Tlak vody a posilovací stanice",
 "Bez naměřených hodnot tlaku a průtoku na patě přípojky nelze stanovit nutnost ani rozpočet posilovací stanice. Měření zajistí technik vodáren pan Klohánek.",
 "Bez rozhodnutí, rozhodne měření.",
 "Ověřit přes pana Klohánka tlak a průtok na patě objektu a rozhodnout o posilovací stanici.","Demeshko",""],

["TZB","Výtah: plošina dle původního projektu",
 "Zvažováno osazení plošiny dle původního projektu s možností softwarového zrychlení po kolaudaci. Na jednání na stavebním úřadu 7. 10. přitom padlo rozhodnutí pro klasickou kabinu a na KD č. 32 se čekalo na NIPI.",
 "Bez rozhodnutí, rozpor s jednáním na SÚ je nutné vyjasnit.",
 "Vyjasnit rozpor mezi plošinou a klasickou kabinou a doložit stanovisko NIPI.","Kuchař","ihned"],

["Organizace","Kapacity inženýringu a projekce do prosince",
 "Pan Kuchař má omezené kapacity do prosince 2026. Při šestiměsíčních lhůtách úřadů to ohrožuje harmonogram kolaudace v březnu 2027.",
 "Bez rozhodnutí.",
 "Vyjasnit externí výpomoc s kreslením a projekcí, aby nebyl ohrožen termín kolaudace.","Kuchař|Demeshko","ihned"],
];

// [id staršího bodu, nový bod, zavírací, proč]
export const VAZBY = [
["HZS1-01","33/01",false,"Od přetlaku se definitivně ustupuje, nově přirozený odvod kouře s desetinásobnou výměnou vzduchu."],
["PBR1-03","33/02",false,"Předsíňky EI 60 u CHÚC A do 1. PP se znovu otevírají, posoudí pan Majer."],
["31-04","33/01",false,"Odvětrání schodišť se řeší přívodem z fasády a odvodem pod střechou."],
["32-15","33/02",false,"Rozpor u větrání schodiště v 1. PP se posouvá k panu Majerovi s konkrétní koncepcí."],
["32-18","33/03",false,"Měkké ucpávky se potvrzují pro 2. a 3. NP, 1. patro dostane záklop."],
["PBR1-05","33/03",false,"Dělení stoupaček na požární úseky rozhodnuto podle podlaží."],
["POR1-13","33/03",false,"Technologie mezi podlažími upřesněna: minerální izolace tl. 4 cm kolem prostupů."],
["24-06","33/03",false,"Instalační šachty dostaly konkrétní řešení po podlažích."],
["31-08","33/04",false,"Požadavek na kabely konkretizován na třídu B2ca."],
["HZS1-11","33/04",false,"Příprava pro dopojení EPS musí být v kabelech B2ca."],
["31-05","33/05",false,"Přepracování PBŘ panem Majerem dostalo termín konec listopadu 2026."],
["29-07","33/05",false,"Harmonogram pana Majera navázán na dopracování EPS a podání na HZS."],
["28-02","33/05",false,"Projekt EPS dopracuje pan Kuchař bezprostředně po dodání PBŘ."],
["PBR1-11","33/05",true,"Projektant EPS potvrzen, dopracování zajišťuje pan Kuchař."],
["30-20","33/06",false,"Odpovědnost za EPS se váže na volbu režimu: zpřesnění místo změny stavby."],
["32-02","33/06",false,"Místo žádosti o změnu stavby před dokončením se nejprve zkouší režim dokumentace skutečného provedení."],
["26-13","33/07",false,"Komunikace s HZS dostala konkrétní cestu: předjednání přes Slávka Devátého na HZS Mladá Boleslav."],
["32-09","33/09",false,"Vsak se odsouvá od domu do prostoru parkoviště, cca 10 m, s bezpečnostním přepadem."],
["HZS1-19","33/09",true,"Rozdělení vsaku a odstup od domu rozhodnuto: parkoviště, cca 10 m."],
["32-06","33/10",false,"Objem nádrží se rozchází s odsouhlasenými 24 m³, nutný přepočet."],
["32-07","33/10",false,"Odvodnění parkoviště doplněno dvěma lapoly na uličních vpustích."],
["31-15","33/10",false,"Parametry štěrkového vsaku upřesněny: 170 m³, frakce 32 až 64 mm."],
["SU1-01","33/09",false,"Koncepce vsaku a retence se posouvá pod parkoviště."],
["25-05","33/13",false,"Podkladem pro geologa jsou dodané výkresy DWG."],
["29-26","33/13",false,"Úprava projektu odvodnění se váže na ověření podloží geologem."],
["INV1-11","33/15",false,"Materiál se vrací ke kruhovému potrubí Spiro, hranaté atypické potrubí odpadá."],
["32-19","33/16",false,"Montáž VZT dostala termín nástupu 3. 11. 2026."],
["POR1-10","33/19",false,"Protahování u dodavatele VZT souvisí s nepodepsanou smlouvou a neschválenými jednotkovými cenami."],
["PBR1-15","33/17",false,"Schéma vzduchotechniky vyžaduje přepočet dimenzí u koupelen."],
["30-12","33/20",false,"Podomítkové boxy potvrzeny jako zaústění přípravy klimatizace."],
["POR1-08","33/20",false,"Rozsah klimatizace ke kolaudaci omezen na stavební přípravu, dvoutrubky 6/9 a kabely."],
["26-11","33/20",false,"Venkovní vedení na balkonech se esteticky zakryje žlabem, kastlíkem nebo plechem."],
["27-01","33/22",false,"Rozsah FVE upřesněn na maximálně 6 stringů."],
["27-03","33/23",false,"Hromosvod pro FVE bude separátní a uzemněný, trasování podle finálního schématu stringů."],
["32-23","33/23",false,"Dokončení hromosvodů navázáno na finální schéma FVE."],
["31-11","33/25",false,"Zateplení stropu suterénu lze díky FVE vynechat, třída A vychází i bez něj."],
["32-20","33/26",false,"Volba roletových vrat potvrzena naměřenou podjezdovou výškou 2,18 až 2,19 m."],
["26-12","33/27",false,"Kniha svítidel konkretizována na 46 svítidel s průměrem 157 lx."],
["PBR1-14","33/27",false,"Kabeláž v garážích navázána na kótovaný výkres rozmístění svítidel."],
["POR1-09","33/30",false,"U vnitřních odpadů nalezeny vady spádování, konkrétně byt č. 24."],
["30-04","33/30",false,"Odpady v podlaze se předělávají na dvě kolena 45° a samostatný odtok žlábků."],
["32-21","33/36",false,"Řešení výtahu se vrací k plošině dle původního projektu, rozpor s SÚ zůstává."],
["SU1-05","33/36",false,"Rozhodnutí o klasické kabině z jednání na SÚ je v rozporu s návrhem plošiny."],
["29-16","33/36",false,"Stanovisko NIPI je nadále podmínkou volby mezi kabinou a plošinou."],
];
