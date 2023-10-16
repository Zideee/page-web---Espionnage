var TrandingSlider = new Swiper('.tranding-slider', {
    effect: 'coverflow',
    grabCursor: true,
    centeredSlides: true,
    loop: true,
    slidesPerView: 'auto',
    coverflowEffect: {
        rotate: 0,
        stretch: 0,
        depth: 100,
        modifier: 2.5,
    },
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    }
});
document.addEventListener("DOMContentLoaded", function() {
    // Fonction exécutée lors du clic sur une image
    function redirectToPageAccueil() {
        // Redirection vers la page "Page_accueil.html"
        window.location.href = "Page_accueil.html";
    }

    // Ajoutez un gestionnaire d'événement de clic pour chaque image
    var image1 = document.getElementById("image1");
    image1.addEventListener("click", redirectToPageAccueil);

    // Répétez ces étapes pour les autres images si nécessaire
});