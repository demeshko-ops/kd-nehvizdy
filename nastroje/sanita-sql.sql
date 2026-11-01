-- BD Nehvizdy. Sanita po bytech. Spustit jednou v Supabase SQL Editor.
-- Jen pridava: sloupec pristupy.sanita a tabulku sanita_docs. Stavajici data se nemeni.
-- Repozitar je verejny: kody ani ceny sem nepatri.
alter table pristupy add column if not exists sanita boolean not null default false;

create table if not exists sanita_docs(
  path text primary key,
  data jsonb not null,
  updated_at timestamptz not null default now());
alter table sanita_docs enable row level security;

create or replace function sanita_smi() returns boolean
language sql stable security definer set search_path = public as $$
  select exists (select 1 from pristupy where aktivni and sanita
    and kod = coalesce(current_setting('request.headers', true)::json->>'x-edit-token', ''));
$$;
create or replace function sanita_admin() returns boolean
language sql stable security definer set search_path = public as $$
  select exists (select 1 from pristupy where aktivni and sanita and role = 'admin'
    and kod = coalesce(current_setting('request.headers', true)::json->>'x-edit-token', ''));
$$;
grant execute on function sanita_smi() to anon, authenticated;
grant execute on function sanita_admin() to anon, authenticated;

-- Ceny SIKO: cist jen s kodem se sanita = true. Byty muze menit kazdy takovy, katalog jen admin.
create policy sanita_cist on sanita_docs for select using (sanita_smi());
create policy sanita_novy on sanita_docs for insert
  with check (sanita_admin() or (sanita_smi() and path like 'flats/%'));
create policy sanita_zmena on sanita_docs for update
  using (sanita_admin() or (sanita_smi() and path like 'flats/%'))
  with check (sanita_admin() or (sanita_smi() and path like 'flats/%'));
grant select, insert, update on sanita_docs to anon, authenticated;

-- Pristup: admin + Jelinek se svym stavajicim kodem, nove kody se nevytvareji.
update pristupy set sanita = true where role = 'admin' or jmeno ilike 'jel%nek%';

select jmeno, role, aktivni, sanita from pristupy order by jmeno;
-- Pridat cloveka: update pristupy set sanita = true where jmeno = 'Jmeno';
-- Odebrat: update pristupy set sanita = false where jmeno = 'Jmeno';
