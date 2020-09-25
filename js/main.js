

document.body.onload = function(){
  setTimeout(function() {
    var preloader = document.getElementById('page-preloader');
    if(!preloader.classList.contains('done')){
      preloader.classList.add('done');
    }
  }, );
}




$('.owl-carousel').owlCarousel({
    loop:true,
    margin:30,
    nav:true,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:2
        },
        768:{
            items:3
        },
        1025:{
          items: 5
        }
    }
})



$(window).on('scroll',function(){
  if($(window).scrollTop()){
    $('nav').addClass('black');
  }
  else {
    $('nav').removeClass('black')
  }
})


$(document).ready(function(){
  $(".burger").click(function(){
    $(".nav-links").slideToggle();
     $(window).resize(function(){
       if($(window).width() > 1023){
         $('.nav-links').removeAttr('style');
       }
     });
  });
});

$(window).on('load', function () {
      $("#category-content-1").addClass("animated slideInUp");
      $("#category-content-2").addClass("animated slideInUp");
      $("#category-content-3").addClass("animated slideInUp");
      $("#category-content-4").addClass("animated slideInUp");
      $("#category-content-5").addClass("animated slideInUp");
 });


 $(window).scroll(function() {
     let height = $(window).scrollTop();
     if(height  > 730) {
        $("#gallery-item-1").addClass("animated fadeInUp visible");
        $("#gallery-item-2").addClass("animated fadeInUp visible");
        $("#gallery-item-3").addClass("animated fadeInUp visible");
     }

 });
