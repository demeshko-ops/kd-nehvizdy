import fs from 'fs';
const H0 = fs.readFileSync('site/index.html','utf8');
export const URL_ = /const SUPA_URL = "([^"]+)"/.exec(H0)[1];
export const KEY  = /const SUPA_KEY = "([^"]+)"/.exec(H0)[1];
export const TOK  = 'nIMJ-QB-fKbN';
const H = {apikey:KEY, Authorization:'Bearer '+KEY, 'Content-Type':'application/json',
           'x-edit-token':TOK, Prefer:'return=representation'};
export const api = async (p, o={}) => {
  const r = await fetch(URL_+'/rest/v1/'+p, {...o, headers:{...H, ...(o.headers||{})}});
  const t = await r.text();
  if(!r.ok) throw new Error(p+' -> '+r.status+' '+t.slice(0,300));
  return t ? JSON.parse(t) : null;
};
export const cz = iso => { if(!iso) return ''; const d=String(iso).slice(0,10).split('-');
  return `${+d[2]}. ${+d[1]}. ${d[0]}`; };
