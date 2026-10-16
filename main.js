const menu = document.querySelector(".menu");
const menuButton = document.querySelector(".menu-button");
const closeButton = document.querySelector(".close-button");

menuButton.addEventListener("click", () => {
  menu.classList.add("is-open");
});

closeButton.addEventListener("click", () => {
  menu.classList.remove("is-open");
});
