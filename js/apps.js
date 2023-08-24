// $(window).on('load', function() {
//   $('#myModal').modal('show');
// });
// Set Item
// document.getElementById("demo").innerHTML = localStorage.getItem("lastname");
// var myModal = $("#myModal");
// myModal.addClass(ls);

var userAgent = window.navigator.userAgent.toLowerCase(),
safari = /safari/.test( userAgent ),
ios = /iphone|ipod|ipad/.test( userAgent ),
android = /android/i.test(userAgent),
chrome = /Chrome/.test(navigator.userAgent);
if( ios ) {	    
    if ( !safari ) {  
     $("#nav").hide()
   //  alert("apps ios");
    }
}
else if (android) {
//  alert('apps android')
 $("#nav").hide()
}
else {	    
};

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



