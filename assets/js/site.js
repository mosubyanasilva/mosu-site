const nav=document.querySelector('.nav');addEventListener('scroll',()=>nav?.classList.toggle('scrolled',scrollY>30),{passive:true});
document.querySelector('.menu')?.addEventListener('click',()=>document.body.classList.toggle('menu-open'));
document.querySelectorAll('.nav-links a').forEach(a=>a.addEventListener('click',()=>document.body.classList.remove('menu-open')));
const io=new IntersectionObserver(es=>es.forEach(e=>{if(e.isIntersecting){e.target.classList.add('visible');io.unobserve(e.target)}}),{threshold:.12});document.querySelectorAll('.reveal').forEach(el=>io.observe(el));
document.querySelector('.form')?.addEventListener('submit',e=>{e.preventDefault();const fd=new FormData(e.currentTarget);const body=[...fd].map(([k,v])=>`${k}: ${v}`).join('\n');location.href=`mailto:studio@mosubyanasilva.com?subject=${encodeURIComponent('MOSU commission inquiry')}&body=${encodeURIComponent(body)}`});

// The original MOSU experience is the primary entry point: it carries the full story,
// bilingual welcome, sound control, and the more immersive scroll journey.
if(location.pathname.endsWith('/index.html') || location.pathname==='/' || location.pathname===''){
  location.replace('legacy-index.html');
}
