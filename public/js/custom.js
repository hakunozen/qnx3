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


var sScroll = new SmoothScroll('a[href*="#"]', {
    offset: 50,
});

$(window).scroll(function () {
    var lSCroll = $(this).scrollTop();
    $('.qnx-logo').css({
        'transform': 'translate(0px, ' + lSCroll / 5 + '%)'
    })
    if (lSCroll > $('#mission').offset().top) {
        $('.partner-bg').addClass('show-bg');
    }
    if (lSCroll > $('.qnx-logo').offset().top) {
        $('.about').addClass('show-about');
    }
})
$('.modal').scroll(function () {
    var aScroll = $(this).offset().top;
    var bScroll = $(this).offset().top;
    var mScroll = $(this).scrollTop();
    var test = $('.award2').offset().top;
    var testing = mScroll - test;
    if (aScroll > $('.scroll-down').offset().top) {
        $('.y2017').addClass('fadeInLeft')
    }
    if (aScroll > $('.y2017').offset().top) {
        $('.y2007').addClass('fadeInRight')
    }
    if (aScroll > $('.y2007').offset().top) {
        $('.y1997').addClass('fadeInLeft')
    }
    if (aScroll > $('.y1997').offset().top) {
        $('.y1987').addClass('fadeInRight')
    }
    if (bScroll >= $('.modal-content').offset().top) {
        $('.award-list1').addClass('fadeInRight')
    }
    if (bScroll > $('.award-list1.last').offset().top) {
        $('.award-list2').addClass('fadeInRight')
    }
    if (bScroll > $('.award-list2.last').offset().top) {
        $('.award-list3').addClass('fadeInRight')
    }
})
// if (modalClose =  true) {
//     $('moving-text1').removeClass('fadeOut');
// }

$(document).ready(function () {
    $('ul.tabs').tabs();
    $(".button-collapse").sideNav();
    $('.parallax').parallax();
    $('.slider').slider();
    $('.carousel').carousel({ duration: 50 })
    $('.modal').modal();
    $('#my-menu').WCircleMenu({
        angle_start: 0,//-Math.PI/2,
        delay: 50,
        distance: 100,
        angle_interval: Math.PI / 3,
        easingFuncShow: "easeOutBack",
        easingFuncHide: "easeInBack",
        step: 35,
        itemRotation: 360,
    });

    $('.icons').on('click', function () {
        console.log($(this).text());
    });

    $('#openWCM').on('click', function () {
        $('#menu_icon').WCircleMenu('open');
    });

    $('#closeWCM').on('click', function () {
        $('#menu_icon').WCircleMenu('close');
    });

})
$(document).ready(function () {
    $(window).on('scroll', function () {
        if (Math.round($(window).scrollTop()) > 500) {
            $('.navbar').addClass('scrolled');
        } else {
            $('.navbar').removeClass('scrolled');
        }
    });
    $('#cards .solution').mouseover(function () {
        $('.innovation').addClass('wobble');
    })
    $('#cards .solution').mouseout(function () {
        $('.innovation').removeClass('wobble');
    })
    $('#cards .service').mouseover(function () {
        $('.reliable').addClass('wobble');
    })
    $('#cards .service').mouseout(function () {
        $('.reliable').removeClass('wobble');
    })
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
//         selector: '.award1', offset: 500, callback: function (el) {
//             Materialize.fadeInImage($(el));
//         }
//     }
// ];
// Materialize.scrollFire(options);
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



