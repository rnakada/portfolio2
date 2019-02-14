$('.header').hide();
$('.bio').hide();
$('.row').hide();
$('.myimage').hide();
$('.container-fluid').hide();
$('.greetings').fadeOut(4000);

setInterval(function() {
    $('.header').fadeIn(3000);
    $('.bio').fadeIn(3000);
    $('.row').fadeIn(3000);
    $('.container-fluid').fadeIn(3000);
    $('.myimage').fadeIn(3000);
}, 3000);