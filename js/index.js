const card = document.getElementsByClassName("card")
for (let i = 0; i < card.length; i++) {
    card[i].addEventListener("click", () => {
        card[i].classList.add("flipCard")
    });
    card[i].addEventListener("mouseleave", () => {
        card[i].classList.remove("flipCard")
    });
}
