// $(window).scroll(function(){

//     var wScroll = $(this).scrollTop();

//     $('.banner-logo').css({
//         'transform': 'translate(0px, '+ wScroll /2 +'%)'
//     });
//     $('.foreground').css({
//         'transform': 'translate(0px, -'+ wScroll /60 +'%)'
//     })
//     if(wScroll > $('.shoe-look').offset().top){
//         $('.shoe-trigger').each(function(){
//             $('.shoe-look').addClass('.is-show');
//         })
//     }
// });
var sScroll = new SmoothScroll('a[href*="#"]',{
    offset: 50,
});

$(window).scroll(function () {
    var lSCroll = $(this).scrollTop();
    $('.qnx-logo').css({
        'transform': 'translate(0px, ' + lSCroll / 20 + '%)'
    })
    if (lSCroll > $('#mission').offset().top) {
        $('.partner-bg').addClass('show-bg');
    }
    if (lSCroll > $('.qnx-logo').offset().top) {
        $('.about').addClass('show-about');
    }
})
$(document).ready(function () {
    $('ul.tabs').tabs();
    $(".button-collapse").sideNav();
    $('.parallax').parallax();
    $('.slider').slider();
    $('.carousel').carousel({ duration: 50 })
    $('.modal').modal();
})
$(document).ready(function () {
    $(window).on('scroll', function () {
        if (Math.round($(window).scrollTop()) > 100) {
            $('.navbar').addClass('scrolled');
        } else {
            $('.navbar').removeClass('scrolled');
        }
    });
});

// $('#history-open').on('click', modalOpen);
// $('#history-close').on('click', modalClose);
// function modalOpen() {
//     $("#history").removeClass('slideOutUp');
//     $('#history').addClass('slideInUp').modal('open');
// };
// function modalClose() {
//     $("#history").removeClass('slideInUp');
//     $('#history').addClass('slideOutUp').modal('close');
// };

// var options = [
//     {
//         selector: '#2017', offset: 50, callback: function (el) {
//             Materialize.fadeInImage($(el));
//         }
//     }
// ];
Materialize.scrollFire(options);
// move next carousel
$('.moveNextCarousel').click(function (e) {
    e.preventDefault();
    e.stopPropagation();
    $('.carousel').carousel('next');
});

// move prev carousel
$('.movePrevCarousel').click(function (e) {
    e.preventDefault();
    e.stopPropagation();
    $('.carousel').carousel('prev');
});
