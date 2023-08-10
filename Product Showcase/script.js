var swiper = new Swiper(".mySwiper", {
    navigation: {
        nextel: ".swiper - next - button",
        prevEl: ".swiper-prev-button"
    },

    effect: "fade",
    loop: "infinite",
    pagination: {
        el: ".swiper-pagination",
        type: "fraction"
    }
});

swiper.on('slidechange', function (sld) {
    document.body.setAttribute('data-sld', sld.realIndex);
});