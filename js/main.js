$(document).ready(function () {

    // swiperProduct
    var swiperProduct = new Swiper('.swiperProduct', {
        slidesPerView: 1,
        spaceBetween: 0,
        autoplay: true,
        pagination: {
            el: '.pageProduct',
            clickable: true,
        },
        navigation: {
            nextEl: '.arrowRight',
            prevEl: '.arrowLeft',
        },
    })
    // bannerSwiper
    var bannerSwiper = new Swiper('.bannerSwiper', {
        slidesPerView: 1,
        spaceBetween: 0,
        autoplay: true,
        pagination: {
            el: '.pageBanner',
            clickable: true,
        },
    })

    // swiperList01
    var swiperList01 = new Swiper('.swiperList01', {
        slidesPerView: 2.3,
        spaceBetween: 8,
        pagination: {
            el: '.pageList01',
            clickable: true,
        },
        breakpoints: {
            550: {
                slidesPerView: 2.3,
                spaceBetween: 20,
            },
            768: {
                slidesPerView: 2.4,
            },
            992: {
                slidesPerView: 3,
            },
            1190: {
                slidesPerView: 4,
                spaceBetween: 30,
            },
        }
    })
    // swiperList02
    var swiperList02 = new Swiper('.swiperList02', {
        slidesPerView: 2.3,
        spaceBetween: 8,
        pagination: {
            el: '.pageList02',
            clickable: true,
        },
        breakpoints: {
            550: {
                slidesPerView: 2.3,
                spaceBetween: 20,
            },
            768: {
                slidesPerView: 2.4,
            },
            992: {
                slidesPerView: 3,
            },
            1190: {
                slidesPerView: 4,
                spaceBetween: 30,
            },
        }
    })
    // swiperCate
    var swiperCate = new Swiper('.swiperCate', {
        slidesPerView: 'auto',
        spaceBetween: 12,
    })

});