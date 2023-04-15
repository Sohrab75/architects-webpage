const mobileMenu =document.querySelector('.mobile-menu');
const closeMenu= document.querySelector('.close-menu');
const mobileNavigation = document.querySelector('.mobile-navigation');

mobileMenu.addEventListener('click', ()=>{
    closeMenu.classList.add('active');
    mobileNavigation.classList.add('active');
});


closeMenu.addEventListener('click', ()=>{
    closeMenu.classList.remove('active');
    mobileNavigation.classList.remove('active');
})