$(function () {
  var swiper = new Swiper('.swiper-container', {
    direction: 'vertical',
    mousewheel: true,
    allowTouchMove: true,

    slidesPerView:1,
 
    pagination: {
      el: '.swiper-pagination',
      type: 'fraction',
      
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev'
    }
  });

  $("body").keydown(function(e) {
      // e.preventDefault();
    if(e.keyCode == 38) { // top
      console.log('top');
      $('.swiper-button-prev').click();
    }
    else if(e.keyCode == 40) { // bottom
      console.log('bottom');
      $('.swiper-button-next').click();

    }
  
  });

  $("#button").click(function(){
    swiper.slideTo(0);
  })

 
});