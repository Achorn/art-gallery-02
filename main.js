import { images } from "./data.js";

const imageContainerEl = document.querySelector("#images-container");

images.forEach((image) => {
  imageContainerEl.innerHTML += ` <div class="gallery-img-container">
    <img class="gallery-img" src=${image.src} />
    <div class="img-info">
      <h3 class="img-title">${image.title}</h3>
      <span class="img-title">${image.description}</span>
    </div>
  </div>`;
});
