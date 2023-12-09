// const card = document.getElementsByClassName("card")
// for (let i = 0; i < card.length; i++) {
//     card[i].addEventListener("click", () => {
//         card[i].classList.add("flipCard")
//     });
//     card[i].addEventListener("mouseleave", () => {
//         card[i].classList.remove("flipCard")
//     });
// }



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
    }, 1500);
    return false;
});