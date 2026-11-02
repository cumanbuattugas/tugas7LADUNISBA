const K='fk-dash-v1',CATS=['Academic Excellence','Entrepreneurship','Leadership','Networking','International Exposure','Diplomacy','Financial Literacy','Personal Development','Community Impact'];
const NET=['Entrepreneurs','Investors','Academics','Government','Diplomats','International Students','Business Partners','Mentors','Friends','Professional Contacts'];
const GC=['Academic','Business','Diplomacy','Networking','Financial','Personal Growth'];
const ST=['Planned','In Progress','Completed','On Hold'],PR=['Low','Medium','High'];
const T=(k,l,t='text',o)=>({k,l,t,o});
const C={
achievements:{n:'Achievements',i:'🏆',f:[T('name','Nama'),T('cat','Kategori','sel',CATS),T('rar','Rarity','sel',['Common','Rare','Epic','Legendary']),T('status','Status','sel',['Achieved','In Progress','Locked']),T('date','Tanggal','date'),T('xp','XP','number'),T('level','Level','number'),T('progress','Progress','range'),T('desc','Deskripsi','area'),T('proof','Bukti')]},
roadmap:{n:'Life Roadmap',i:'🧭',f:[T('name','Milestone'),T('period','Periode'),T('status','Status','sel',ST),T('prio','Priority','sel',PR),T('date','Deadline','date'),T('progress','Progress','range'),T('notes','Notes','area')]},
agri:{n:'Agri Ventures',i:'🌱',f:[T('name','Ide / Proyek'),T('cat','Kategori','sel',['Agritech','Agricultural supply chain','Food security','Sustainable agriculture','Agricultural investment','Smart farming','Commodity trading','Partnership','Market research']),T('status','Status','sel',ST),T('date','Deadline','date'),T('progress','Progress','range'),T('notes','Catatan','area')]},
diplo:{n:'Diplomatic Journey',i:'🌐',f:[T('name','Item'),T('cat','Jenis','sel',['Career milestone','IR learning','Language','Public policy','International experience','Cross-cultural network']),T('level','Level saat ini (mis. B1)'),T('target','Target'),T('status','Status','sel',ST),T('date','Tanggal','date'),T('progress','Progress','range'),T('notes','Catatan','area')]},
network:{n:'Networking',i:'🤝',f:[T('name','Nama'),T('role','Jabatan'),T('org','Institusi'),T('cat','Kategori','sel',NET),T('platform','Platform'),T('user','Username'),T('met','Pertama bertemu','date'),T('last','Last interaction','date'),T('rel','Relationship','sel',['New','Warm','Active','Dormant']),T('follow','Follow-up','date'),T('value','Networking value (1-5)','number'),T('tags','Tags'),T('notes','Notes','area')]},
exp:{n:'Experience',i:'💼',f:[T('name','Posisi / Kegiatan'),T('org','Organisasi'),T('period','Periode'),T('date','Tanggal mulai','date'),T('desc','Deskripsi','area')]},
skills:{n:'Skills',i:'🎯',f:[T('name','Skill'),T('cat','Grup','sel',['Business & Economics','Diplomacy & International','Leadership & Networking']),T('cur','Current level (0-10)','number'),T('target','Target level (0-10)','number'),T('progress','Progress','range'),T('res','Learning resources'),T('notes','Notes','area'),T('upd','Last updated','date')]},
goals:{n:'Goals',i:'✅',f:[T('name','Goal'),T('cat','Kategori','sel',GC),T('horizon','Horizon','sel',['Daily','Weekly','Monthly','Long-term']),T('status','Status','sel',ST),T('prio','Priority','sel',PR),T('date','Deadline','date'),T('progress','Progress','range'),T('check','Checklist (satu per baris)','area'),T('notes','Notes','area')]}
};
const E=(n,o,p,d,ds)=>({name:n,org:o,period:p,date:d,desc:ds,demo:0});
const SEED=()=>({prof:{name:'Fauzan Kamil',uni:'Universitas Islam Bandung (UNISBA)',major:'Ekonomi Pembangunan — FEB, 2025–2029',course:'Lab Analitik Data Ekonomi',motto:'Building Businesses. Understanding Economies. Connecting the World.',goals:'1) Membangun perusahaan agribisnis/agritech/investasi agri. 2) Menjadi diplomat Indonesia.',photo:'assets/profile.jpg',accent:'#d4af37',theme:'dark'},
exp:[E('Chief Investment Officer','PT Agrinova Global Nusantara','Maret 2026 – Sekarang','2026-03-01','Membangun hubungan dengan calon investor; pendekatan dan presentasi investasi; strategi fundraising; koordinasi proposal investasi; komunikasi dan negosiasi dengan investor.'),
E('Website Simulasi Trading Saham','UNISBAVM','Mei 2026 – Sekarang','2026-05-01','Menginisiasi platform simulasi trading saham berbasis web; mengembangkan fitur simulasi transaksi (HTML, CSS, JavaScript); media edukasi pasar modal Indonesia.'),
E('Liaison Officer','UNISBA Global Inspired Society (U-GIS)','Oktober 2026','2026-10-01','Mendampingi mahasiswa internasional (Kazakhstan, Nigeria, Jerman, Myanmar); komunikasi lintas budaya; membangun relasi internasional.'),
E('Volunteer Berkah Rasa','Hareudang Bandung','Maret 2025','2025-03-09','Koordinator kegiatan volunteer; memimpin tim dan mengorganisir kegiatan sosial.')],
achievements:[
{name:'The Most Collaborative Team',cat:'Leadership',rar:'Rare',status:'Achieved',date:'2024-08-01',xp:100,level:1,progress:100,desc:'Iampreneur.idn — Global Preneur Summit.',proof:'CV'},
{name:'Tata Kelola Organisasi Kepemudaan',cat:'Leadership',rar:'Common',status:'Achieved',date:'2024-08-01',xp:50,level:1,progress:100,desc:'Pepelingasih Jabar — Duta Daerah Kota Bandung.',proof:'CV'},
{name:'Festival Pelajar Unggulan Tingkat Nasional',cat:'Academic Excellence',rar:'Epic',status:'Achieved',date:'2024-10-01',xp:150,level:1,progress:100,desc:'Peserta tingkat nasional.',proof:'CV'},
{name:'Latihan Kepemimpinan Pemuda',cat:'Leadership',rar:'Rare',status:'Achieved',date:'2025-07-01',xp:100,level:1,progress:100,desc:'Dispora Kota Bandung.',proof:'CV'}],
roadmap:[{name:'Fase 2025–2029: pendidikan, kompetensi, networking, organisasi, fondasi bisnis agribisnis',period:'2025–2029',status:'In Progress',prio:'High',date:'2029-12-31',progress:0,notes:'Atur progress sesuai realisasi.'},
{name:'Fase 2029–2035: perusahaan agribisnis, jaringan investasi, pengalaman internasional, jalur diplomasi',period:'2029–2035',status:'Planned',prio:'High',date:'2035-12-31',progress:0,notes:''}],
skills:['Economic analysis|Business & Economics','Financial literacy|Business & Economics','Investment analysis|Business & Economics','Data analytics|Business & Economics','Entrepreneurship|Business & Economics','International relations|Diplomacy & International','Cross-cultural communication|Diplomacy & International','Negotiation|Diplomacy & International','Public speaking|Diplomacy & International','Leadership|Leadership & Networking','Strategic networking|Leadership & Networking','Project management|Leadership & Networking'].map(s=>({name:s.split('|')[0],cat:s.split('|')[1],cur:0,target:8,progress:0,res:'',notes:'Belum dinilai — isi level awal.',upd:''})),
agri:[],diplo:[],network:[],goals:[]});
let S;try{S=JSON.parse(localStorage.getItem(K))}catch(e){}if(!S||!S.prof)S=SEED();
const save=()=>{try{localStorage.setItem(K,JSON.stringify(S))}catch(e){}};
const $=s=>document.querySelector(s),esc=s=>String(s??'').replace(/[&<>"]/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;'}[c]));
function toast(m){const t=$('#ts');t.textContent=m;t.classList.add('s');clearTimeout(toast.h);toast.h=setTimeout(()=>t.classList.remove('s'),1800)}
const PAGES=[['overview','Overview','🏠'],...Object.entries(C).map(([k,v])=>[k,v.n,v.i]),['analytics','Analytics','📊'],['settings','Settings','⚙️']];
let cur='overview',ch=[],clock;
$('#nv').innerHTML=PAGES.map(p=>`<button data-p="${p[0]}"><span>${p[2]}</span><span class="l">${p[1]}</span></button>`).join('');
$('#nv').onclick=e=>{const b=e.target.closest('button');if(b){go(b.dataset.p);$('#sb').classList.remove('open')}};
$('#tg').onclick=()=>$('#sb').classList.toggle('c');$('#mb').onclick=()=>$('#sb').classList.toggle('open');
function go0(p){cur=p;clearInterval(clock);ch.forEach(c=>c.destroy());ch=[];document.querySelectorAll('nav button').forEach(b=>b.classList.toggle('on',b.dataset.p==p));
$('#pg').innerHTML='<div class="pg">'+(p=='overview'?ov():p=='analytics'?an():p=='settings'?st():list(p))+'</div>';
requestAnimationFrame(()=>{document.querySelectorAll('.bar i').forEach(i=>i.style.width=i.dataset.w+'%');if(p=='overview')tick();if(p=='analytics')charts();$('main').scrollTo(0,0)})}
const pb=v=>`<div class="bar"><i data-w="${Math.max(0,Math.min(100,+v||0))}"></i></div>`;
const avg=a=>a.length?Math.round(a.reduce((x,y)=>x+(+y||0),0)/a.length):null;
function ov0(){const g=S.goals,sk=S.skills,P=S.prof;
const st=[['Total achievements',S.achievements.filter(a=>a.status=='Achieved').length],['Active goals',g.filter(x=>x.status=='In Progress').length],['Completed goals',g.filter(x=>x.status=='Completed').length],['Current projects',S.exp.filter(x=>/Sekarang/.test(x.period)).length],['Connections',S.network.length],['Skills tracked',sk.length],['Growth score',avg([...g.map(x=>x.progress),...sk.map(x=>x.progress)])??'—'],['Career readiness',avg(sk.map(x=>x.progress))??'—']];
return `<div class="hero"><div class="av tilt" id="av"><img src="${esc(P.photo||'assets/profile.jpg')}" alt="Foto ${esc(P.name)}" onerror="this.replaceWith(document.createTextNode('${esc(P.name[0])}'))"></div><div style="flex:1;min-width:220px"><div class="lab" id="gr"></div><h1>${esc(P.name).toUpperCase()}</h1><div class="sub" style="margin:0 0 6px">${esc(P.motto)}</div><span class="chip">Mahasiswa aktif</span><span class="chip">${esc(P.uni)}</span><span class="chip">${esc(P.major)}</span></div><div style="text-align:right"><div class="num" id="clk"></div><div class="lab" id="dt"></div></div></div>
<div class="grid" style="margin-bottom:18px">${st.map(s=>`<div class="card tilt"><div class="lab">${s[0]}</div><div class="num" data-n="${s[1]}">0</div></div>`).join('')}</div>
<div class="card"><h2>Target utama</h2><div class="sub" style="margin:0">${esc(P.goals)}</div></div><p class="lab">Angka dihitung dari data Anda. Growth score = rata-rata progress goals + skills; Career readiness = rata-rata progress skills. Belum ada data → “—”.</p>`}
function tick(){const f=()=>{const d=new Date(),h=d.getHours();$('#clk').textContent=d.toLocaleTimeString('id-ID');$('#dt').textContent=d.toLocaleDateString('id-ID',{dateStyle:'full'});$('#gr').textContent=(h<11?'Selamat pagi':h<15?'Selamat siang':h<18?'Selamat sore':'Selamat malam')+', selamat datang kembali'};f();clock=setInterval(f,1000);
$('#av').onclick=()=>form('prof',null);
document.querySelectorAll('[data-n]').forEach(e=>{const v=e.dataset.n;if(isNaN(v)){e.textContent=v;return}let n=0;const s=performance.now();(function r(t){const p=Math.min(1,(t-s)/700);e.textContent=Math.round(v*p);if(p<1)requestAnimationFrame(r)})(s)})}
function card0(k,x,i){const F=C[k].f,sel=F.filter(f=>f.t=='sel').map(f=>x[f.k]).filter(Boolean);
return `<div class="card"><div style="font-weight:600">${esc(x.name)}</div><div>${sel.map(s=>`<span class="chip ${esc(s)}">${esc(s)}</span>`).join('')}</div>
<div class="sub" style="margin:6px 0 0">${[x.org||x.role,x.period,x.date,x.desc||x.notes].filter(Boolean).map(esc).join(' · ')}</div>${x.demo?'<span class="chip">DEMO</span>':''}
${F.some(f=>f.k=='progress')?pb(x.progress)+`<div class="lab" style="margin-top:4px">${x.progress||0}%${x.xp?' · '+x.xp+' XP':''}</div>`:''}
<div class="row"><button class="o" data-e="${k}:${i}">Edit</button><button class="o x" data-d="${k}:${i}">Hapus</button>${F.some(f=>f.k=='progress')?`<button class="o" data-u="${k}:${i}">+10%</button>`:''}</div></div>`}
let Q='',FC='';
function list0(k){const c=C[k],cf=c.f.find(f=>f.k=='cat'||f.k=='status');
const items=S[k].map((x,i)=>[x,i]).filter(([x])=>(!Q||JSON.stringify(x).toLowerCase().includes(Q))&&(!FC||x[cf.k]==FC));
return `<h1>${c.i} ${c.n}</h1><div class="sub">${k=='network'?'Belum ada kontak. Tambahkan koneksi nyata Anda — tidak ada data demo.':'Data tersimpan di browser ini.'}</div>
<div class="bar2"><input id="q" placeholder="Cari…" value="${esc(Q)}"><select id="fc"><option value="">Semua</option>${cf.o.map(o=>`<option ${FC==o?'selected':''}>${esc(o)}</option>`).join('')}</select><button class="b" data-a="${k}">+ Tambah</button></div>
${items.length?`<div class="grid">${items.map(([x,i])=>card(k,x,i)).join('')}</div>`:'<div class="empty">Belum ada data.</div>'}`}
$('#pg').addEventListener('input',e=>{if(e.target.id=='q'){Q=e.target.value.toLowerCase();const p=e.target.selectionStart;go(cur);const q=$('#q');q.focus();q.setSelectionRange(p,p)}});
$('#pg').addEventListener('change',e=>{if(e.target.id=='fc'){FC=e.target.value;go(cur)}});
document.addEventListener('click',e=>{const t=e.target.closest('button');if(!t)return;const d=t.dataset;
if(d.a)form(d.a,null);if(d.e){const[k,i]=d.e.split(':');form(k,+i)}
if(d.d){const[k,i]=d.d.split(':');if(confirm('Hapus item ini?')){S[k].splice(+i,1);save();go(cur);toast('Dihapus')}}
if(d.u){const[k,i]=d.u.split(':'),x=S[k][+i];x.progress=Math.min(100,(+x.progress||0)+10);if(x.progress==100&&x.status&&x.status!='Achieved')x.status=k=='achievements'?'Achieved':'Completed';save();go(cur);toast('Progress diperbarui')}});
function form(k,i){const P=k=='prof',F=P?[T('name','Nama'),T('uni','Universitas'),T('major','Jurusan'),T('course','Mata kuliah'),T('motto','Motto'),T('goals','Career goals','area'),T('photo','URL foto profil')]:C[k].f,x=P?S.prof:i==null?{}:S[k][i];
$('#md').innerHTML=`<div><h2>${P?'Edit profil':(i==null?'Tambah':'Edit')+' — '+C[k].n}</h2><form id="fm">${F.map(f=>`<label>${f.l}</label>${f.t=='sel'?`<select name="${f.k}">${f.o.map(o=>`<option ${x[f.k]==o?'selected':''}>${esc(o)}</option>`).join('')}</select>`:f.t=='area'?`<textarea rows="3" name="${f.k}">${esc(x[f.k])}</textarea>`:f.t=='range'?`<input type="range" name="${f.k}" min="0" max="100" value="${x[f.k]||0}">`:`<input type="${f.t}" name="${f.k}" value="${esc(x[f.k])}">`}`).join('')}<div class="row" style="margin-top:16px"><button class="b" type="submit">Simpan</button><button class="o" type="button" id="cl">Batal</button></div></form></div>`;
$('#md').classList.add('s');$('#cl').onclick=()=>$('#md').classList.remove('s');$('#md').onclick=e=>{if(e.target.id=='md')$('#md').classList.remove('s')};
$('#fm').onsubmit=e=>{e.preventDefault();const o=Object.fromEntries(new FormData(e.target));F.forEach(f=>{if(f.t=='number'||f.t=='range')o[f.k]=+o[f.k]||0});if(!o.name&&!P)return;
if(P)Object.assign(S.prof,o);else{delete x.demo;if(i==null)S[k].push(o);else S[k][i]={...x,...o}}save();$('#md').classList.remove('s');go(cur);toast('Berhasil disimpan')}}
document.addEventListener('keydown',e=>{if(e.key=='Escape')$('#md').classList.remove('s')});
function an(){const n=S.achievements.filter(a=>a.date).length,ins=[];
const m={};S.achievements.filter(a=>a.status=='Achieved'&&a.date).forEach(a=>{const y=a.date.slice(0,4);m[y]=(m[y]||0)+1});const ys=Object.keys(m).sort();
if(ys.length>=2){const a=m[ys[ys.length-1]],b=m[ys[ys.length-2]];ins.push(`Pencapaian ${ys[ys.length-1]}: ${a} vs ${ys[ys.length-2]}: ${b} (${a>b?'meningkat':a<b?'menurun':'sama'}).`)}
const gs=S.goals;if(gs.length)ins.push(`${gs.filter(g=>g.status=='Completed').length} dari ${gs.length} goal selesai.`);
const sk=S.skills.filter(s=>s.cur>0);if(sk.length)ins.push(`Gap terbesar: ${sk.sort((a,b)=>(b.target-b.cur)-(a.target-a.cur))[0].name}.`);
return `<h1>📊 Personal Analytics</h1><div class="sub">Semua grafik berasal dari data Anda.</div>${ins.length?ins.map(i=>`<div class="ins">${esc(i)}</div>`).join(''):'<div class="empty" style="margin-bottom:14px">Data belum cukup untuk analisis. Tambahkan goals, level skill, atau kontak.</div>'}
<div class="grid" style="grid-template-columns:repeat(auto-fit,minmax(300px,1fr))"><div class="card"><h2>Achievement per tahun</h2><div class="cv"><canvas id="c1"></canvas></div></div><div class="card"><h2>Kontak per kategori</h2><div class="cv"><canvas id="c2"></canvas></div></div><div class="card"><h2>Skills: current vs target</h2><div class="cv"><canvas id="c3"></canvas></div></div><div class="card"><h2>Progress goals</h2><div class="cv"><canvas id="c4"></canvas></div></div></div><div class="row"><button class="b" id="rp">Export laporan (JSON)</button></div>`}
function charts(){const tx=getComputedStyle(document.documentElement).getPropertyValue('--m'),o={responsive:true,maintainAspectRatio:false,plugins:{legend:{labels:{color:tx}}},scales:{}};const sc={x:{ticks:{color:tx},grid:{color:'#2a334422'}},y:{ticks:{color:tx},grid:{color:'#2a334422'},beginAtZero:true}};
const mk=(id,cfg)=>ch.push(new Chart($('#'+id),cfg)),pal=['#d4af37','#2ecc9a','#3b82f6','#b48cff','#c0c6d4','#e5484d','#f59e0b','#14b8a6','#8b5cf6','#64748b'];
const m={};S.achievements.filter(a=>a.status=='Achieved'&&a.date).forEach(a=>{const y=a.date.slice(0,4);m[y]=(m[y]||0)+1});
mk('c1',{type:'bar',data:{labels:Object.keys(m).sort(),datasets:[{label:'Achieved',data:Object.keys(m).sort().map(y=>m[y]),backgroundColor:'#d4af37'}]},options:{...o,scales:sc}});
const nc={};S.network.forEach(x=>nc[x.cat]=(nc[x.cat]||0)+1);mk('c2',{type:'doughnut',data:{labels:Object.keys(nc),datasets:[{data:Object.values(nc),backgroundColor:pal}]},options:o});
mk('c3',{type:'radar',data:{labels:S.skills.map(s=>s.name),datasets:[{label:'Current',data:S.skills.map(s=>s.cur),borderColor:'#2ecc9a',backgroundColor:'#2ecc9a33'},{label:'Target',data:S.skills.map(s=>s.target),borderColor:'#d4af37',backgroundColor:'#d4af3722'}]},options:{...o,scales:{r:{min:0,max:10,ticks:{display:false},pointLabels:{color:tx,font:{size:9}},grid:{color:'#2a3344'}}}}});
mk('c4',{type:'bar',data:{labels:S.goals.map(g=>g.name.slice(0,18)),datasets:[{label:'Progress %',data:S.goals.map(g=>g.progress),backgroundColor:'#3b82f6'}]},options:{...o,indexAxis:'y',scales:{x:{...sc.x,max:100,beginAtZero:true},y:sc.x}}});
$('#rp').onclick=()=>dl('laporan-'+new Date().toISOString().slice(0,10)+'.json',{generated:new Date().toISOString(),counts:Object.fromEntries(Object.keys(C).map(k=>[k,S[k].length])),goals:S.goals,skills:S.skills})}
function dl(n,d){const a=document.createElement('a');a.href=URL.createObjectURL(new Blob([JSON.stringify(d,null,2)],{type:'application/json'}));a.download=n;a.click()}
function st(){const P=S.prof;return `<h1>⚙️ Settings</h1><div class="sub">Privasi: jangan simpan nomor telepon, alamat, email, atau password di sini. localStorage tidak cocok untuk data sensitif.</div><div class="grid">
<div class="card"><h2>Profil</h2><button class="b" onclick="form('prof',null)">Edit profil</button></div>
<div class="card"><h2>Tema &amp; aksen</h2><select id="th"><option value="dark" ${P.theme=='dark'?'selected':''}>Dark</option><option value="light" ${P.theme=='light'?'selected':''}>Light</option></select><label>Warna aksen</label><input type="color" id="ac" value="${P.accent}"></div>
<div class="card"><h2>Data</h2><div class="row"><button class="o" id="ex">Export JSON</button><button class="o" id="im">Import JSON</button><button class="o x" id="rs">Reset ke data awal</button></div><input type="file" id="fi" accept=".json" hidden></div></div><p class="lab">Animasi mengikuti pengaturan reduced-motion sistem Anda.</p>`}
document.addEventListener('change',e=>{const t=e.target;if(t.id=='th'){S.prof.theme=t.value;save();theme()}if(t.id=='ac'){S.prof.accent=t.value;save();theme()}
if(t.id=='fi'&&t.files[0]){const r=new FileReader();r.onload=()=>{try{const d=JSON.parse(r.result);if(!d.prof)throw 0;S=d;save();theme();go('settings');toast('Import berhasil')}catch(x){toast('File tidak valid')}};r.readAsText(t.files[0])}});
document.addEventListener('click',e=>{const i=e.target.id;if(i=='ex')dl('fauzan-dashboard-data.json',S);if(i=='im')$('#fi').click();if(i=='rs'&&confirm('Reset semua data ke data awal?')){S=SEED();save();/* ===== v2: visual & animasi ===== */
const RC={Common:'#c0c6d4',Rare:'#3b82f6',Epic:'#b48cff',Legendary:'#d4af37'};
const RM=matchMedia('(prefers-reduced-motion:reduce)').matches;
function go(p){go0(p);post()}
function post(){requestAnimationFrame(()=>{
document.querySelectorAll('.ring .v').forEach(c=>c.style.strokeDashoffset=213.6*(1-(+c.dataset.p||0)/100));
const sp=document.querySelector('.spine');if(sp)requestAnimationFrame(()=>sp.classList.add('on'));
document.querySelectorAll('.step').forEach((s,i)=>setTimeout(()=>s.classList.add('in'),200+i*220))})}
function ringBox(v,txt,name){return `<div class="card rg tilt"><div class="bd"><svg class="ring" viewBox="0 0 84 84"><circle class="t" cx="42" cy="42" r="34"/><circle class="v" cx="42" cy="42" r="34" data-p="${v||0}"/></svg><div class="ic" style="font-size:20px;font-weight:700">${txt}</div></div><div class="lab" style="margin-top:8px">${name}</div></div>`}
function ov(){const g=S.goals,sk=S.skills,gp=avg([...g.map(x=>x.progress),...sk.map(x=>x.progress)]),rp=avg(sk.map(x=>x.progress)),gd=g.length?Math.round(g.filter(x=>x.status=='Completed').length/g.length*100):null;
return ov0().replace('<div class="hero">','<div class="hero"><i class="orb o1"></i><i class="orb o2"></i>').replace('<div class="card"><h2>Target utama',`<div class="rings">${ringBox(gp,gp??'—','Growth score')}${ringBox(rp,rp??'—','Career readiness')}${ringBox(gd,gd==null?'—':gd+'%','Goal completion')}</div><div class="card"><h2>Target utama`)}
function xpInfo(){const xp=S.achievements.filter(a=>a.status=='Achieved').reduce((s,a)=>s+(+a.xp||0),0);return {xp,lv:Math.floor(xp/200)+1,p:(xp%200)/2}}
function achCard(x,i){const p=x.status=='Achieved'?100:+x.progress||0,lk=x.status=='Locked',R=x.rar||'Common';
return `<div class="card ach tilt ${lk?'lock':''}" data-ad="${i}" style="--rc:${RC[R]}"><div style="display:flex;gap:14px;align-items:center"><div class="bd"><svg class="ring" viewBox="0 0 84 84"><circle class="t" cx="42" cy="42" r="34"/><circle class="v" cx="42" cy="42" r="34" data-p="${p}"/></svg><div class="ic">${lk?'🔒':R=='Legendary'?'👑':R=='Epic'?'💎':R=='Rare'?'🥇':'🏅'}</div></div><div style="min-width:0"><div style="font-weight:600">${esc(x.name)}</div><span class="chip" style="color:var(--rc);border-color:var(--rc)">${R}</span><span class="chip">${esc(x.cat)}</span></div></div>
<div class="sub" style="margin:8px 0 0">${esc(x.desc)}</div><div class="lab" style="margin-top:6px">${esc(x.status)} · ${p}% · ${x.xp||0} XP · Lv ${x.level||1}</div>
<div class="row"><button class="o" data-e="achievements:${i}">Edit</button><button class="o x" data-d="achievements:${i}">Hapus</button><button class="o" data-u="achievements:${i}">+10%</button></div></div>`}
function card(k,x,i){return k=='achievements'?achCard(x,i):card0(k,x,i)}
function tlView(k,sort){const c=C[k],a=S[k].map((x,i)=>[x,i]).sort((p,q)=>sort*(p[0].date||'').localeCompare(q[0].date||'')),pr=avg(S[k].map(x=>x.progress));
return `<h1>${c.i} ${c.n}</h1><div class="sub">Timeline interaktif — garis dan titik bergerak mengikuti urutan waktu.</div>${k=='roadmap'&&a.length?`<div class="card" style="margin-bottom:16px"><div class="lab">Progress keseluruhan roadmap</div><div class="num" data-n="${pr}">0</div>${pb(pr)}</div>`:''}<div class="bar2"><button class="b" data-a="${k}">+ Tambah</button></div>
${a.length?`<div class="tl"><div class="spine"><i></i></div><b class="dot"></b>${a.map(([x,i],n)=>{const s=(x.status||(/Sekarang/.test(x.period)?'In Progress':'Completed')).replace(' ','');return `<div class="step"><div class="node ${s}">${s=='Completed'?'✓':String(n+1).padStart(2,'0')}</div>${card0(k,x,i)}</div>`}).join('')}</div>`:'<div class="empty">Belum ada data.</div>'}`}
function list(k){if(k=='roadmap')return tlView(k,1);if(k=='exp')return tlView(k,-1);let h=list0(k);if(k=='achievements'){const q=xpInfo();h=h.replace('<div class="bar2">',`<div class="card" style="margin-bottom:14px"><div class="lab">Total XP · Level ${q.lv}</div><div class="num">${q.xp} XP</div>${pb(q.p)}<div class="lab" style="margin-top:4px">200 XP per level (aturan aplikasi). Klik kartu untuk detail.</div></div><div class="bar2">`)}return h}
document.addEventListener('click',e=>{const a=e.target.closest('.ach');if(!a||e.target.closest('button'))return;const x=S.achievements[+a.dataset.ad];
$('#md').innerHTML=`<div style="--rc:${RC[x.rar]||'#c0c6d4'}"><h2>${esc(x.name)}</h2><span class="chip" style="color:var(--rc);border-color:var(--rc)">${esc(x.rar)}</span><span class="chip">${esc(x.cat)}</span><span class="chip">${esc(x.status)}</span><p>${esc(x.desc)}</p><p class="lab">Tanggal: ${esc(x.date||'—')} · Level ${x.level||1} · ${x.xp||0} XP · Bukti: ${esc(x.proof||'—')}</p>${pb(x.status=='Achieved'?100:x.progress)}<div class="row" style="margin-top:16px"><button class="o" id="cl">Tutup</button></div></div>`;
$('#md').classList.add('s');requestAnimationFrame(()=>document.querySelectorAll('#md .bar i').forEach(i=>i.style.width=i.dataset.w+'%'));$('#cl').onclick=()=>$('#md').classList.remove('s');$('#md').onclick=ev=>{if(ev.target.id=='md')$('#md').classList.remove('s')}});
document.addEventListener('mousemove',e=>{if(RM)return;const t=e.target.closest&&e.target.closest('.tilt');if(!t)return;const r=t.getBoundingClientRect(),x=(e.clientX-r.left)/r.width-.5,y=(e.clientY-r.top)/r.height-.5;t.style.transform=`perspective(700px) rotateX(${-y*10}deg) rotateY(${x*12}deg) translateZ(6px)`});
document.addEventListener('mouseout',e=>{const t=e.target.closest&&e.target.closest('.tilt');if(t&&!t.contains(e.relatedTarget))t.style.transform=''});
setTimeout(()=>{const l=$('#ld');if(l)l.classList.add('h')},1000);

theme();go('overview');toast('Data direset')}});
function theme(){const r=document.documentElement;r.dataset.theme=S.prof.theme;r.style.setProperty('--a',S.prof.accent)}
/* ===== v2: visual & animasi ===== */
const RC={Common:'#c0c6d4',Rare:'#3b82f6',Epic:'#b48cff',Legendary:'#d4af37'};
const RM=matchMedia('(prefers-reduced-motion:reduce)').matches;
function go(p){go0(p);post()}
function post(){requestAnimationFrame(()=>{
document.querySelectorAll('.ring .v').forEach(c=>c.style.strokeDashoffset=213.6*(1-(+c.dataset.p||0)/100));
const sp=document.querySelector('.spine');if(sp)requestAnimationFrame(()=>sp.classList.add('on'));
document.querySelectorAll('.step').forEach((s,i)=>setTimeout(()=>s.classList.add('in'),200+i*220))})}
function ringBox(v,txt,name){return `<div class="card rg tilt"><div class="bd"><svg class="ring" viewBox="0 0 84 84"><circle class="t" cx="42" cy="42" r="34"/><circle class="v" cx="42" cy="42" r="34" data-p="${v||0}"/></svg><div class="ic" style="font-size:20px;font-weight:700">${txt}</div></div><div class="lab" style="margin-top:8px">${name}</div></div>`}
function ov(){const g=S.goals,sk=S.skills,gp=avg([...g.map(x=>x.progress),...sk.map(x=>x.progress)]),rp=avg(sk.map(x=>x.progress)),gd=g.length?Math.round(g.filter(x=>x.status=='Completed').length/g.length*100):null;
return ov0().replace('<div class="hero">','<div class="hero"><i class="orb o1"></i><i class="orb o2"></i>').replace('<div class="card"><h2>Target utama',`<div class="rings">${ringBox(gp,gp??'—','Growth score')}${ringBox(rp,rp??'—','Career readiness')}${ringBox(gd,gd==null?'—':gd+'%','Goal completion')}</div><div class="card"><h2>Target utama`)}
function xpInfo(){const xp=S.achievements.filter(a=>a.status=='Achieved').reduce((s,a)=>s+(+a.xp||0),0);return {xp,lv:Math.floor(xp/200)+1,p:(xp%200)/2}}
function achCard(x,i){const p=x.status=='Achieved'?100:+x.progress||0,lk=x.status=='Locked',R=x.rar||'Common';
return `<div class="card ach tilt ${lk?'lock':''}" data-ad="${i}" style="--rc:${RC[R]}"><div style="display:flex;gap:14px;align-items:center"><div class="bd"><svg class="ring" viewBox="0 0 84 84"><circle class="t" cx="42" cy="42" r="34"/><circle class="v" cx="42" cy="42" r="34" data-p="${p}"/></svg><div class="ic">${lk?'🔒':R=='Legendary'?'👑':R=='Epic'?'💎':R=='Rare'?'🥇':'🏅'}</div></div><div style="min-width:0"><div style="font-weight:600">${esc(x.name)}</div><span class="chip" style="color:var(--rc);border-color:var(--rc)">${R}</span><span class="chip">${esc(x.cat)}</span></div></div>
<div class="sub" style="margin:8px 0 0">${esc(x.desc)}</div><div class="lab" style="margin-top:6px">${esc(x.status)} · ${p}% · ${x.xp||0} XP · Lv ${x.level||1}</div>
<div class="row"><button class="o" data-e="achievements:${i}">Edit</button><button class="o x" data-d="achievements:${i}">Hapus</button><button class="o" data-u="achievements:${i}">+10%</button></div></div>`}
function card(k,x,i){return k=='achievements'?achCard(x,i):card0(k,x,i)}
function tlView(k,sort){const c=C[k],a=S[k].map((x,i)=>[x,i]).sort((p,q)=>sort*(p[0].date||'').localeCompare(q[0].date||'')),pr=avg(S[k].map(x=>x.progress));
return `<h1>${c.i} ${c.n}</h1><div class="sub">Timeline interaktif — garis dan titik bergerak mengikuti urutan waktu.</div>${k=='roadmap'&&a.length?`<div class="card" style="margin-bottom:16px"><div class="lab">Progress keseluruhan roadmap</div><div class="num" data-n="${pr}">0</div>${pb(pr)}</div>`:''}<div class="bar2"><button class="b" data-a="${k}">+ Tambah</button></div>
${a.length?`<div class="tl"><div class="spine"><i></i></div><b class="dot"></b>${a.map(([x,i],n)=>{const s=(x.status||(/Sekarang/.test(x.period)?'In Progress':'Completed')).replace(' ','');return `<div class="step"><div class="node ${s}">${s=='Completed'?'✓':String(n+1).padStart(2,'0')}</div>${card0(k,x,i)}</div>`}).join('')}</div>`:'<div class="empty">Belum ada data.</div>'}`}
function list(k){if(k=='roadmap')return tlView(k,1);if(k=='exp')return tlView(k,-1);let h=list0(k);if(k=='achievements'){const q=xpInfo();h=h.replace('<div class="bar2">',`<div class="card" style="margin-bottom:14px"><div class="lab">Total XP · Level ${q.lv}</div><div class="num">${q.xp} XP</div>${pb(q.p)}<div class="lab" style="margin-top:4px">200 XP per level (aturan aplikasi). Klik kartu untuk detail.</div></div><div class="bar2">`)}return h}
document.addEventListener('click',e=>{const a=e.target.closest('.ach');if(!a||e.target.closest('button'))return;const x=S.achievements[+a.dataset.ad];
$('#md').innerHTML=`<div style="--rc:${RC[x.rar]||'#c0c6d4'}"><h2>${esc(x.name)}</h2><span class="chip" style="color:var(--rc);border-color:var(--rc)">${esc(x.rar)}</span><span class="chip">${esc(x.cat)}</span><span class="chip">${esc(x.status)}</span><p>${esc(x.desc)}</p><p class="lab">Tanggal: ${esc(x.date||'—')} · Level ${x.level||1} · ${x.xp||0} XP · Bukti: ${esc(x.proof||'—')}</p>${pb(x.status=='Achieved'?100:x.progress)}<div class="row" style="margin-top:16px"><button class="o" id="cl">Tutup</button></div></div>`;
$('#md').classList.add('s');requestAnimationFrame(()=>document.querySelectorAll('#md .bar i').forEach(i=>i.style.width=i.dataset.w+'%'));$('#cl').onclick=()=>$('#md').classList.remove('s');$('#md').onclick=ev=>{if(ev.target.id=='md')$('#md').classList.remove('s')}});
document.addEventListener('mousemove',e=>{if(RM)return;const t=e.target.closest&&e.target.closest('.tilt');if(!t)return;const r=t.getBoundingClientRect(),x=(e.clientX-r.left)/r.width-.5,y=(e.clientY-r.top)/r.height-.5;t.style.transform=`perspective(700px) rotateX(${-y*10}deg) rotateY(${x*12}deg) translateZ(6px)`});
document.addEventListener('mouseout',e=>{const t=e.target.closest&&e.target.closest('.tilt');if(t&&!t.contains(e.relatedTarget))t.style.transform=''});
setTimeout(()=>{const l=$('#ld');if(l)l.classList.add('h')},1000);

theme();go('overview');