const background = document.querySelector(".background");
const introductionPanel = document.querySelector(".introduction")
const title = document.querySelector("title")

window.addEventListener("click", () => {
  background.classList.add("clear");
  title.classList.add("after")
});