document.querySelectorAll('form').forEach(f=>f.addEventListener('submit',e=>{e.preventDefault();const n=f.querySelector('.notice');if(n){n.style.display='block';n.textContent='Thank you. For the quickest response call 0800 622 6692, WhatsApp UK 07706 914511, or WhatsApp Pakistan 0092 345 7795965.';}f.reset();}));

const slides=document.querySelectorAll('.hero-slide');
if(slides.length){let current=0;setInterval(()=>{slides[current].classList.remove('active');current=(current+1)%slides.length;slides[current].classList.add('active');},4500);}
