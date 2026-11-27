
const openGift = document.getElementById("openGift");
const giftBox = document.getElementById("giftBox");

const subtitle = document.querySelector(".subtitle");
const giftCaption = document.querySelector(".gift-caption");

const memoryOverlay = document.getElementById("memoryOverlay");
const closeMemory = document.getElementById("closeMemory");

openGift.addEventListener("click", function () {

    giftBox.classList.add("opened");

    subtitle.textContent =
        "Happy Birthday, my favorite person! ♡";

    giftCaption.textContent =
        "Every little moment with you is a gift.";

    openGift.textContent = "Open our memories ♡";

    openGift.disabled = false;

    openGift.onclick = function () {
        memoryOverlay.classList.add("show");
    };

});

closeMemory.addEventListener("click", function () {
    memoryOverlay.classList.remove("show");
});

