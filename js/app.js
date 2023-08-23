$(function () {
    var swiper = new Swiper('.swiper-container', {
      direction: 'vertical',
      mousewheel: true,
      allowTouchMove: true,
   
      slidesPerView:1,
   
    initialSlide:0,
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
      e.preventDefault();
      if(e.keyCode == 38) { // top
        console.log('top')
        $('.swiper-button-prev').click();
      }
      else if(e.keyCode == 40) { // bottom
        $('.swiper-button-next').click();
      }
    });

    $("#button").click(function(){
      // alert(1)
      // $("html, body").animate({ scrollTop: 0 }, "slow");
      swiper.slideTo(0);
      // return false;
    })
});