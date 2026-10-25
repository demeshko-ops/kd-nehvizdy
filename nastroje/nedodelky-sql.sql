-- ===========================================================
-- BD Nehvizdy. Spustit jednou v Supabase SQL Editor.
-- 1) tabulky pro Nedodělky po bytech
-- 2) osobní kódy místo jednoho sdíleného
-- Nic ze stávajících dat se nemaže.
--
-- POZOR: tento repozitář je veřejný. Skutečné kódy sem nikdy nepatří.
-- Na místa <KOD_...> se doplní hodnoty, které chodí mimo repozitář.
-- ===========================================================

-- ---------- 1) Nedodělky ----------
create table if not exists nedodelky (
  id text primary key,
  sekce text default 'nedodelky',
  podlazi text, byt text, mistnost text, bod text,
  hotovo boolean default false,
  uzavrel text, uzavreno_at date,
  poznamka text,
  poradi int,
  skryto boolean default false,
  updated_at timestamptz default now());

create table if not exists nedodelky_historie (
  id bigserial primary key,
  bod_id text references nedodelky(id) on delete cascade,
  akce text, z text, na text, kdo text, at timestamptz default now());

-- ---------- 2) Osobní kódy ----------
create table if not exists pristupy (
  kod text primary key,
  jmeno text not null,
  role text default 'editor',
  aktivni boolean default true,
  vytvoreno timestamptz default now());

-- Tabulka s kódy se přes REST nedá přečíst: zapnuté RLS a žádná policy.
alter table pristupy enable row level security;

-- Kdo smí zapisovat. Čte tabulku kódů jako vlastník funkce, proto security definer.
create or replace function muze_psat() returns boolean
language sql stable security definer set search_path = public as $$
  select exists (
    select 1 from pristupy
    where aktivni
      and kod = coalesce(current_setting('request.headers', true)::json->>'x-edit-token', ''));
$$;

-- Vrátí jméno podle kódu, aby se podpis nemusel vybírat ručně.
create or replace function kdo_jsem() returns text
language sql stable security definer set search_path = public as $$
  select jmeno from pristupy
  where aktivni
    and kod = coalesce(current_setting('request.headers', true)::json->>'x-edit-token', '');
$$;

grant execute on function muze_psat() to anon, authenticated;
grant execute on function kdo_jsem() to anon, authenticated;

-- Kódy. Původní sdílený kód zůstává jako Marinin, aby nic nepřestalo fungovat.
insert into pristupy (kod, jmeno, role) values
  ('<KOD_MARINA>', 'Marina',           'admin'),
  ('<KOD_PAVEL>',  'Pavel (výrobní)',  'editor'),
  ('<KOD_ZEMAN>',  'pan Zeman',        'editor')
on conflict (kod) do nothing;

-- ---------- Práva na nové tabulky ----------
alter table nedodelky enable row level security;
drop policy if exists cist_vsem on nedodelky;
create policy cist_vsem on nedodelky for select using (true);
drop policy if exists psat_s_tokenem on nedodelky;
create policy psat_s_tokenem on nedodelky for all using (muze_psat()) with check (muze_psat());

alter table nedodelky_historie enable row level security;
drop policy if exists cist_vsem on nedodelky_historie;
create policy cist_vsem on nedodelky_historie for select using (true);
drop policy if exists psat_s_tokenem on nedodelky_historie;
create policy psat_s_tokenem on nedodelky_historie for all using (muze_psat()) with check (muze_psat());

alter publication supabase_realtime add table nedodelky;

-- ---------- Správa kódů později ----------
-- nový člověk:      insert into pristupy (kod, jmeno) values ('<KOD>', 'Jméno');
-- odebrat přístup:  update pristupy set aktivni = false where jmeno = 'Jméno';
-- kdo má přístup:   select jmeno, role, aktivni from pristupy;  -- jen v SQL Editoru, ne přes web
