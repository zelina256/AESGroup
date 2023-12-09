$(window).on('scroll', function () {
    if ($(this).scrollTop() > 600) {
        $('.return-to-top').fadeIn();
    } else {
        $('.return-to-top').fadeOut();
    }

});
$('.return-to-top').on('click', function () {
    $('html, body').animate({
        scrollTop: 0
    }, 1000);
    return false;
});