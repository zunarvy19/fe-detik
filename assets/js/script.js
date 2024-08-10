const carouselContainer = document.querySelector(".carousel-container");
const prevButton = document.querySelector(".prev");
const nextButton = document.querySelector(".next");

let scrollAmount = 0;

nextButton.addEventListener("click", () => {
  carouselContainer.scrollBy({ left: 320, behavior: "smooth" });
  scrollAmount += 320;
});

prevButton.addEventListener("click", () => {
  carouselContainer.scrollBy({ left: -320, behavior: "smooth" });
  scrollAmount -= 320;
});
