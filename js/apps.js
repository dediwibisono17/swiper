// $(window).on('load', function() {
//   $('#myModal').modal('show');
// });


$('#myModal').modal('show');
setTimeout(function(){
  $('#tutupmodal').click();
}, 5000)
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
    if(e.keyCode == 38) { // top
      console.log('top');
      $('.swiper-button-prev').click();
    }
    else if(e.keyCode == 40) { // bottom
      console.log('bottom');
      $('.swiper-button-next').click();
      
      e.preventDefault();
    }
  
  });

  $("#button").click(function(){
    swiper.slideTo(0);
  })


  $("#keatas").click(function(){
    $('.modal-content').animate({ scrollTop: 0 }, 'slow');
  })
  
});