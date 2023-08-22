$(function () {
    var swiper = new Swiper('.swiper-container', {
      direction: 'vertical',
      mousewheel: true,
      allowTouchMove: true,
      // observer: true,
      // observeParents: true,
      slidesPerView:1,
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

    $("body").keyup(function(e) {

      if(e.keyCode == 38) { // top
        console.log('top')
        $('.swiper-button-prev').click();
      }
      else if(e.keyCode == 40) { // bottom
        $('.swiper-button-next').click();

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

