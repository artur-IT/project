const header = document.querySelector("header");
const h1 = document.querySelector("h1");
let image = true;
let title = true;

const changeImage = () => {
  image = !image;
  title = !title;
  header.style.backgroundImage = title
    ? "url(landscape.jpg)"
    : "url(train.jpg)";
  h1.textContent = title ? "Krajobraz" : "pociąg";
};

header.addEventListener("click", changeImage);
