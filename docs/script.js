
// simple highlight for current page nav link
document.addEventListener('DOMContentLoaded', function(){
  const links = document.querySelectorAll('.nav a');
  links.forEach(a=>{
    if(location.pathname.endsWith(a.getAttribute('href'))) a.style.boxShadow='0 8px 30px rgba(180,90,170,0.18)';
  });
});
