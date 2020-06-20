$(window).on('load', function () {
    // loaded
    var pageBody  = $('body');
    setTimeout (function(){
        pageBody.addClass('loaded');
    });
});

$(document).ready(function() {
    $("input[type=tel]").mask("8 (999) 999-9999");

    $('.form-control-date').datepicker();
    $("body").on("click",".scroll-link", function (event) {
        event.preventDefault();
        var id  = $(this).attr('href'),
            top = $(id).offset().top;
        $('body,html').animate({scrollTop: top}, 500);
    });

    $('select').niceSelect();

    $('[data-fancybox]').fancybox({
        autoFocus: false,
    });

    ScrollReveal().reveal('.div', {
        scale: 1,
        duration: 1000,
        interval: 30,
        delay: 0,
        mobile: false,
        origin: 'bottom',
        distance: '50px',
    });

    ScrollReveal().reveal('.div', {
        scale: 1,
        duration: 1000,
        interval: 30,
        delay: 0,
        mobile: false,
    });

    var jumbotronSwiper = new Swiper('.jumbotron-slider', {
        speed: 2000,
        effect: 'fade',
        fadeEffect:{
            crossFade: true
        },
        navigation:{
            prevEl: '.jumbotron-slider-prev',
            nextEl: '.jumbotron-slider-next',
        },
        pagination:{
            el: '.jumbotron-slider-pag',
            clickable: true
        }
    });

    var lkSwiper = new Swiper('.swiper-lk', {
        slidesPerView: 1,
        spaceBetween: 30,
        watchOverflow: true,
        pagination:{
            el: '.pagination-lk',
            clickable: true
        }
    });

    // menu
    $('.header-nav__pul').click(function(){
        $(this).toggleClass('active');
        $('.header-nav').toggleClass('active');
        $('body').toggleClass('active-menu');
    });

    // header fixed
    $(window).scroll(function() {
        var $full = $('.header').height();
        if ($(this).scrollTop() > $full){
            $('.header').addClass("sticky");
        }
        else{
            $('.header').removeClass("sticky");
        }
    });

    $('.material-tabs__list').on('click', '.material-tabs__tab:not(.active)', function() {
        $(this).addClass('active').siblings().removeClass('active')
            .parents('.material-tabs').find('.material-tabs__box').eq($(this).index()).fadeIn(0).siblings('.material-tabs__box').hide();
    });
});
