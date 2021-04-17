$(document).ready(function() {

    $('.main_btna, .main_btn, a[href="#sheldure"]').click(function() {
        $('.overlay').fadeIn(700);
        $('.modal').slideDown(700); 
    });
    
    $('.close').click(function() {
        $('.modal').slideUp(700); 
        $('.overlay').fadeOut(700);


    });
});