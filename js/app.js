$(function () {
    var swiper = new Swiper('.swiper-container', {
      direction: 'vertical',
      // mousewheel: true,
      // allowTouchMove: false,
      // mousewheel: {
      //   releaseOnEdges: true,
      //   // forceToAxis: true,
      // },

    //   autoplay: false,
    //   disableOnInteraction: true,
    // //   scrollbar: { el: '.swiper-scrollbar' },
    //   autoplay: {
    //     delay: 3000,
    //     disableOnInteraction: true,
    //     pauseOnMouseEnter: true,
    // },
      pagination: {
        el: '.swiper-pagination',
        type: 'fraction',
        // formatFractionCurrent: function (number) {
        //     return '0' + number;
        // }
      },
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev'
      }
    });

    
 

    // var mySwiper = document.querySelector('.swiper-container').swiper

    // $(".swiper-slide").mouseenter(function() {
    //   swiper.autoplay.stop();
    //   console.log('slider stopped');
    // });
  
    // $(".swiper-slide").mouseleave(function() {
    //   swiper.autoplay.stop();
    //   console.log('slider stop again');
    // });
});

