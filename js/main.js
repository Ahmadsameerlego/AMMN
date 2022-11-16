//toggle navbar
const hamburger = document.querySelector(".hamburger");
const navLinks = document.querySelector(".navSmallScreen");
const links = document.querySelectorAll(".navSmallScreen li");

hamburger.addEventListener('click', ()=>{
   //Animate Links
    navLinks.classList.toggle("open");
    links.forEach(link => {
        link.classList.toggle("fadee");
    });

    //Hamburger Animation
    hamburger.classList.toggle("toggle");
});


// fixed header
window.onscroll = ()=>{ fixedFunction() }
let fixedHeader = document.getElementById('header');
let sticky = fixedHeader.offsetTop ;

function fixedFunction(){
    if (window.pageYOffset > sticky) {
        header.classList.add("sticky");
      } else {
        header.classList.remove("sticky");
      }
}