const menuButton=document.querySelector('.menu-button');
const menu=document.querySelector('.global-menu');
const menuClose=document.querySelector('.menu-close');
const setMenu=(open)=>{menu.classList.toggle('open',open);menu.setAttribute('aria-hidden',String(!open));menuButton.setAttribute('aria-expanded',String(open));document.body.style.overflow=open?'hidden':''};
menuButton.addEventListener('click',()=>setMenu(true));
menuClose.addEventListener('click',()=>setMenu(false));
menu.querySelectorAll('a').forEach(a=>a.addEventListener('click',()=>setMenu(false)));

const slides=[...document.querySelectorAll('.hero-image')];
let slide=0;
setInterval(()=>{slides[slide].classList.remove('active');slide=(slide+1)%slides.length;slides[slide].classList.add('active')},5500);

const giant=[...document.querySelectorAll('.giant-copy span')];
const concept=document.querySelector('.concept');
const header=document.querySelector('.site-header');
const animateScroll=()=>{
  header.classList.toggle('scrolled',scrollY>innerHeight*.72);
  const rect=concept.getBoundingClientRect();
  const progress=Math.max(0,Math.min(1,(innerHeight-rect.top)/(innerHeight+rect.height*.55)));
  giant.forEach((el,i)=>{const shift=(i-1)*8;el.style.transform=`translateX(${shift+progress*(i%2?10:-5)}vw) scale(${.84+progress*.22})`});
};
addEventListener('scroll',animateScroll,{passive:true});animateScroll();

const sections=document.querySelectorAll('.section-tone');
const toneObserver=new IntersectionObserver(entries=>{entries.forEach(entry=>{if(entry.isIntersecting)document.body.dataset.tone=entry.target.dataset.tone})},{threshold:.35});
sections.forEach(section=>toneObserver.observe(section));
