const nav = document.querySelector("#header nav")
const toggle = document.querySelectorAll ("nav .toggle")

for(const element of toggle){
  element.addEventListener("click", function(){
    nav.classList.toggle("show")
  })
}
/*----Menu esconder quando clicar nos itens */
const links = document.querySelectorAll("nav ul li a")

for(const link of links){
link.addEventListener("click",function(){
  nav.classList.remove("show")
})
}

const header = document.querySelector("#header")
const navHeight = header.offsetHeight

window.addEventListener("scroll", function(){
  if(window.scrollY >= navHeight){
header.classList.add("scroll")
  } else{
    header.classList.remove("scroll")
  }
})

/*----CAROUSEL----- */
const swiper = new Swiper('.swiper-container', {
  slidesPerView: 1,
  pagination: {
    el: '.swiper-pagination'
  },
 
  keyboard: true
})

/*----Scroll----- */
const scrollReveal = ScrollReveal({
origin: "top",
distance: "30px",
duration: 800,
reset: true
})

scrollReveal.reveal(`#home .image, #home .text,
#about .image, #about .text,
#services header, #services .card,
#testimonials header, #testimonials .testimonials
#contact .text, #contact .links, footer .brand, foorter .social`, {interval:100})

/*----Button back to up----- */
const backToTopButton = document.querySelector(".back-to-top")
window.addEventListener('scroll',function(){
  if(window.scrollY >=560){
    backToTopButton.classList.add('show')
  } else{
    backToTopButton.classList.remove('show')
  }

})