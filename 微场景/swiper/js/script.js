var swiper = new Swiper('.swiper-container', {
    loop : true,
    direction: 'vertical',
    effect : 'flip',
    pagination: {
        el: '.swiper-pagination',
        clickable:false,
    },
    navigation: {
        nextEl: '.swiper-button-next',
    },
});