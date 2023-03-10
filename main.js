const header = document.querySelector(".header");
const h1 = document.querySelector("h1");
const body = document.querySelector("body");
let image = true;
let title = true;

const changeImage = () => {
  image = !image;
  title = !title;
  body.style.backgroundImage = title ? "url(landscape.jpg)" : "url(train.jpg)";
  h1.textContent = title ? "Krajobraz" : "Pociąg";
};

header.addEventListener("click", changeImage);
