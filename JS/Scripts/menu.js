const toggleButton = document.querySelector("#toggle-button");
const hiddenMessage = document.querySelector("#hidden-message");

toggleButton.addEventListener("click", () => {
  hiddenMessage.classList.toggle("hidden");
});