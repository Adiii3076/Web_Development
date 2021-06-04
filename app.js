const menu =document.querySelector('#mobile-menu');
const menuLinks =document.querySelector('.navbar__menu');
 const navlogo = document.querySelector('#navbar__logo');

//display Moblie Menu
const mobileMenu = () =>{
    menu.classList.toggle('is-active');
    menuLinks.classList.toggle('active');
}
menu.addEventListener('click',mobileMenu);
//show active menu when scrolling
 const highlightMenu = () => {
     const elem =document.querySelector('.highlight');
     const homemenu = document.querySelector('#home-page');
     const aboutmenu = document.querySelector('#about-page');
     const servicesmenu = document.querySelector('#services-page');

     let scrollPos = window.scrollY

    
     if(window.innerWidth > 960 && scrollPos < 600){
         homemenu.classList.add('highlight')
         aboutmenu.classList.remove('highlight')
         return
     }else if(window.innerWidth > 960 && scrollPos < 1400){
        aboutmenu.classList.add('highlight')
        homemenu.classList.remove('highlight')
        servicesmenu.classList.remove('highlight')
        return

     }else if(window.innerWidth > 960 && scrollPos < 2345){
        servicesmenu.classList.add('highlight')
      
        aboutmenu.classList.remove('highlight')

        return
     }
     if((elem && window.innerWidth < 960 && scrollPos < 600)|| elem){
         elem.classList.remove(highlight)

     }
 }
 window.addEventListener('scroll',highlightMenu);
 window.addEventListener('click',highlightMenu)

 const hideMobileMenu = () => {
     
     const menuBars = document.querySelector('is-active')
     if(window.innerWidth <= 768 && menuBars){

     
     menu.classList.toggle('is-active')
     menuLinks.classList.remove('active')
     }
    
 }
 menuLinks.addEventListener('click',hideMobileMenu);
 navlogo.addEventListener('click',hideMobileMenu);