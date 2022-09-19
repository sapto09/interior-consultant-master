const navIcon = document.querySelector('.nav__icon');
const overview = document.querySelector('.overview');
const nav = document.querySelector('nav');
const main =document.querySelector('main');
const footer = document.querySelector('footer')

navIcon.addEventListener('click', ()=>{
    nav.classList.toggle('nav__visible');
    overview.classList.toggle('overview__off');
    navIcon.classList.toggle('nav__icon--close');
    main.classList.toggle('main__off');
    footer.classList.toggle('footer__off');
});