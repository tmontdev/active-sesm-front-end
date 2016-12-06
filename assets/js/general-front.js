$(function(){
  //code for mobile and tablet
  if ($(window).width()<992) {
    //when an item of menu is clicked
    $('.menu-item').click(function(event) {
      //declaring his target
    var  target =$(this).attr('data-target');
      //his target receives a class "shown"
      $(target).addClass('shown');
      $('.rollback-area').addClass('dark');
    });// end of  menu item code
    //when any rollback is clicked
    $('.rollback').click(function(event) {
      $('.app-menu-screen').each(function(index, el) {
        $(this).removeClass('shown');
      });
      $('.rollback-area').removeClass('dark');
    });

  }//end of  mobile and tablet code

  //code for desktop
  else{

  }
})
