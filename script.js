document.querySelectorAll('form').forEach(f=>f.addEventListener('submit',e=>{e.preventDefault();const n=f.querySelector('.notice');if(n){n.style.display='block';n.textContent='Thank you. For the quickest response call 0800 622 6692, WhatsApp UK 07706 914511, or WhatsApp Pakistan 0092 345 7795965.';}f.reset();}));

const slides=document.querySelectorAll('.hero-slide');
if(slides.length){let current=0;setInterval(()=>{slides[current].classList.remove('active');current=(current+1)%slides.length;slides[current].classList.add('active');},4500);}

// Brick range selector
(function(){
 const grid=document.getElementById('productGrid'); if(!grid)return;
 const ids=['typeFilter','colourFilter','finishFilter','sizeFilter'];
 const controls=ids.map(id=>document.getElementById(id));
 const products=[...grid.querySelectorAll('.product')];
 function filter(){let n=0; products.forEach(p=>{const ok=controls.every((c,i)=>c.value==='all'||p.dataset[['type','colour','finish','size'][i]]===c.value);p.hidden=!ok;if(ok)n++;});document.getElementById('resultCount').textContent=n;document.getElementById('noResults').hidden=n!==0;}
 controls.forEach(c=>c.addEventListener('change',filter));
 document.getElementById('clearFilters').addEventListener('click',()=>{controls.forEach(c=>c.value='all');filter();});
})();
