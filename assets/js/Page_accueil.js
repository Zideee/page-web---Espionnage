let menubtn = document.querySelector('#menu-btn');
let navbar = document.querySelector('.menu');

menubtn.addEventListener('click',()=>{
    navbar.classList.toggle('active');
    menubtn.classList.toggle('fa-times');
})

window.onscroll = ()=>{
    menubtn.classList.remove('fa-times');
    navbar.classList.remove('active');
}

let swiper = new Swiper('.home-slider', {
    loop: true,

    // Navigation arrows
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },

});