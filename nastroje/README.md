# Nástroje k přehledu KD Nehvizdy

Zdrojem pravdy jsou tabulky v Supabase (`schuzky`, `body`, `poznamky`, `historie`).
`index.html` je jen sestavená stránka: data si tahá živě z databáze, ale seznam
schůzek (záložky) a offline záloha bodů jsou do ní zapečené.

- `kd.mjs` - připojení k databázi. Čte `SUPA_URL` a `SUPA_KEY` z `index.html`,
  kód pro zápis (`x-edit-token`) je uvnitř.
- `prestav.mjs` - přegeneruje `KD` a `BASE` v `index.html` přímo z databáze
  a zvýší `BUILD`. Spustit po každém přidání schůzky.
- `pridej-poradu.mjs` - vzor, jak se vkládá nová schůzka i s body a vazbami.

Postup: vložit schůzku a body do databáze, pak `node nastroje/prestav.mjs`,
pak commit a push. GitHub Pages to zvedne do minuty.
