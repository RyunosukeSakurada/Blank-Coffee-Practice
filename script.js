$('.burger-btn').on('click',function(){
  $('.burger-btn').toggleClass('close');
  $('.navWrapper').toggleClass('close');
  $('body').toggleClass('noscroll');
});

if( $(window).width() < 768 ){
  $('.navItem>a').on('click',function(){
    $('.navWrapper').fadeOut(500);
    $('.burger-btn').removeClass('close');
    $('body').removeClass('noscroll');
  });
}
