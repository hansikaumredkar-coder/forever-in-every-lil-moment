
const openGift = document.getElementById("openGift");
const giftBox = document.getElementById("giftBox");

const subtitle = document.querySelector(".subtitle");
const giftCaption = document.querySelector(".gift-caption");

openGift.addEventListener("click", function () {

    giftBox.classList.add("opened");

    subtitle.textContent =
        "Happy Birthday, my favorite person! ♡";

    giftCaption.textContent =
        "Every little moment with you is a gift.";

    openGift.textContent = "Your surprise is waiting ♡";

    openGift.disabled = true;

});
