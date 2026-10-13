const langToggle=document.getElementById('langToggle');
const menuToggle=document.getElementById('menuToggle');
const nav=document.getElementById('nav');
let currentLang='en';
function setLanguage(lang){
 currentLang=lang; document.documentElement.lang=lang;
 document.documentElement.dir=lang==='ar'?'rtl':'ltr';
 document.body.dir=lang==='ar'?'rtl':'ltr';
 document.querySelectorAll('[data-en][data-ar]').forEach(el=>{el.innerHTML=el.dataset[lang];});
 langToggle.textContent=lang==='en'?'العربية':'English';
 langToggle.setAttribute('aria-label',lang==='en'?'Switch to Arabic':'Switch to English');
}
langToggle.addEventListener('click',()=>setLanguage(currentLang==='en'?'ar':'en'));
menuToggle.addEventListener('click',()=>nav.classList.toggle('open'));
nav.querySelectorAll('a').forEach(link=>link.addEventListener('click',()=>nav.classList.remove('open')));
document.getElementById('year').textContent=new Date().getFullYear();
