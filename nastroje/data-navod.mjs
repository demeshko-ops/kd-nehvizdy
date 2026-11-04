export const SCH = {klic:"NAVOD", typ:"NAVOD", cislo:null,
 label:"Návod pro klienta", lokativ:"návodu pro klienta", kratky:"Návod",
 datum:"", cas:"", misto:"průběžně z kontrolních dnů",
 predmet:"Povinnosti a provozní pokyny pro budoucího vlastníka bytu",
 ucastnici:"", zdroj:"Kontrolní dny BD Nehvizdy",
 pozn:"Není to zápis ze schůzky, ale sběrné místo pro text, který půjde do návodu k užívání bytu. U každého bodu je v Kontextu ze stavby uvedeno, odkud požadavek pochází, a v Textu do návodu formulace, kterou lze převzít. Stav Pro info znamená, že je text hotový; stav Trvá znamená, že ještě něco chybí a je to popsáno v K dořešení. Tyto body se nepočítají mezi úkoly a nejsou na nástěnce.",
 poradi:99};

// [kat, tema, kontext ze stavby, text do navodu, k doreseni, kdo, termin, stav]
export const BODY = [

["Klimatizace","Odvod kondenzátu s čerpadlem",
 "Na KD č. 25 bylo u bytu č. 10 zjištěno, že samospádný odvod kondenzátu je kvůli monolitu a překladům nevhodný, a bylo rozhodnuto řešení s čerpadlem a malým průvrtem přes monolit. Stejná situace se opakuje i v dalších bytech.",
 "V bytech, kde to dispozice vyžaduje, je vlastník povinen osadit vnitřní jednotku s čerpadlem kondenzátu. Samospádný odvod zde není možný a jeho použití by vedlo k zatékání.",
 "Doplnit seznam bytů, kde je čerpadlo kondenzátu povinné.","Demeshko","","Trvá"],

["Klimatizace","Každoroční proplach odpadu klimatizace",
 "Na KD č. 30 bylo rozhodnuto vést odvod kondenzátu trubkou 32 mm právě kvůli riziku ucpávání.",
 "Vlastník je povinen jednou ročně propláchnout odpadní potrubí klimatizace kyselinou. Při zanedbání hrozí ucpání potrubí a zatečení do konstrukce.",
 "Doplnit konkrétní přípravek a postup proplachu od dodavatele klimatizace.","Demeshko","","Trvá"],

["Klimatizace","Přívodní kabel určuje volbu jednotek",
 "Pan Kakos e-mailem z 30. 10. 2026 doporučil u bytů č. 1, 5 a 19 napájení venkovní jednotky kabelem CYKY 3x4 mm, protože jde o systémy 1+4 a 1+5 a značky nejsou vybrané. Na obchůzce 29. 10. 2026 se u bytů č. 4 a 5 hovořilo o kabelu 5x4 proti původnímu zadání 3x2,5. Oba údaje se rozcházejí.",
 "Přívodní kabel pro venkovní jednotku je v bytě připraven v daném průřezu. Vlastník smí osadit pouze takovou sestavu klimatizace, která tomuto průřezu odpovídá. Výkonnější sestava vyžaduje výměnu přívodního kabelu, a to je zásah do dokončené konstrukce.",
 "Sjednotit průřez přívodu s panem Kretem a panem Kakosem a doplnit do návodu konkrétní hodnotu a z ní plynoucí limit sestavy po bytech.","Kret|Demeshko","ihned","Trvá"],

["Klimatizace","Délkové limity potrubí určují sestavu",
 "Pan Kakos e-mailem z 16. 10. 2026 uvedl limity výrobce, například pro Samsung: split 1+1 větev nejvýše 15 m a převýšení 8 m; multisplit 1+2 jedna větev 20 m a celkem 30 m; 1+3 jedna větev 25 m a celkem 50 m; 1+4 celkem 70 m; 1+5 celkem 75 m; u multisplitů převýšení nejvýše 15 m.",
 "V bytě je potrubí pro klimatizaci připraveno v dané délce a převýšení. Vlastník smí osadit pouze takovou sestavu, která limity výrobce pro tuto délku a převýšení splňuje.",
 "Doplnit do návodu skutečné délky větví po bytech z tabulky pana Kakosa.","Demeshko","","Trvá"],
];
