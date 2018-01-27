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
$(window).scroll(function () {
    var lSCroll = $(this).scrollTop();

    $('.qnx-logo').css({
        'transform': 'translate(0px, ' + lSCroll / 20 + '%)'
    })
})
$(document).ready(function () {
    $(".button-collapse").sideNav();
    $('.parallax').parallax();
    $('.slider').slider();
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