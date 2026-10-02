const nav=document.querySelector('.nav');addEventListener('scroll',()=>nav?.classList.toggle('scrolled',scrollY>30),{passive:true});
document.querySelector('.menu')?.addEventListener('click',()=>document.body.classList.toggle('menu-open'));
document.querySelectorAll('.nav-links a').forEach(a=>a.addEventListener('click',()=>document.body.classList.remove('menu-open')));
const io=new IntersectionObserver(es=>es.forEach(e=>{if(e.isIntersecting){e.target.classList.add('visible');io.unobserve(e.target)}}),{threshold:.12});document.querySelectorAll('.reveal').forEach(el=>io.observe(el));
document.querySelector('.form')?.addEventListener('submit',e=>{e.preventDefault();const fd=new FormData(e.currentTarget);const body=[...fd].map(([k,v])=>`${k}: ${v}`).join('\n');location.href=`mailto:studio@mosubyanasilva.com?subject=${encodeURIComponent('MOSU commission inquiry')}&body=${encodeURIComponent(body)}`});

// Homepage motion: keep it quiet and tactile. The work shifts with the scroll,
// but the browser remains in control and reduced-motion preferences are respected.
if(!matchMedia('(prefers-reduced-motion: reduce)').matches){
  const heroMedia=document.querySelector('.hero-home-media img');
  const material=document.querySelector('.material-story');
  const back=document.querySelector('.material-image-back');
  const front=document.querySelector('.material-image-front');
  let ticking=false;
  const motion=()=>{
    const y=scrollY;
    if(heroMedia && y<innerHeight*1.2) heroMedia.style.transform=`scale(${1.04+y*.00008}) translate3d(0,${y*.035}px,0)`;
    if(material && back && front){
      const rect=material.getBoundingClientRect();
      const progress=Math.max(0,Math.min(1,(innerHeight-rect.top)/(rect.height+innerHeight)));
      back.style.transform=`rotate(-${7-progress*5}deg) translate3d(${progress*2}vw,${progress*-2}vh,0)`;
      front.style.transform=`rotate(${4-progress*8}deg) translate3d(${progress*-2}vw,${progress*3}vh,0)`;
    }
    ticking=false;
  };
  addEventListener('scroll',()=>{if(!ticking){requestAnimationFrame(motion);ticking=true}},{passive:true});
  motion();
}
