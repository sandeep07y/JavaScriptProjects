const keyElements = document.querySelectorAll(".key");
let keyCodes = [];
keyElements.forEach((divElement) =>
  keyCodes.push(+divElement.getAttribute("data-key"))
);
document.addEventListener("keydown", handleKeydown);
function handleKeydown(e) {
  const index = keyCodes.indexOf(e.keyCode);
  if (index !== -1) {
    const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);

    audio.currentTime = 0;
    audio.play();
    keyElements[index].classList.add("playing");
    keyElements[index].addEventListener("transitionend", function () {
      keyElements[index].classList.remove("playing");
    });
  }
}
