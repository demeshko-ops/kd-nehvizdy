-- Nedodělky po bytech, BD Nehvizdy. Spustit jednou v Supabase SQL Editor.
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
