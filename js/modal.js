const openButton = document.getElementById("openModal");
const modal = document.getElementById("modal");
const closeButton = document.getElementById("closeModal");

openButton.addEventListener("click", function () {
  modal.classList.add("show");
});

closeButton.addEventListener("click", function () {
  modal.classList.remove("show");
});