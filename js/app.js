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

    // let button = document.getElementById("button")


    //   swiper.on("slideChange", function() {
    //     console.log("slide changed - current slide is: " + this.realIndex )
    //     if(this.realIndex == 0){
    //       console.log("first slide do something")
    //       button.disabled = false;  
    //     }
    //     else{
    //       console.log("not first slide do somehing")
    //       button.disabled = true;  
    //     }
    //   });

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

    
 

    // var mySwiper = document.querySelector('.swiper-container').swiper

    // $(".swiper-slide").mouseenter(function() {
    //   swiper.autoplay.stop();
    //   console.log('slider stopped');
    // });
  
    // $(".swiper-slide").mouseleave(function() {
    //   swiper.autoplay.stop();
    //   console.log('slider stop again');
    // });

    $("#button").click(function(){
      // alert(1)
      $("html, body").animate({ scrollTop: 0 }, "slow");
      // return false;
    })
});