document.addEventListener("DOMContentLoaded", function () {
  const images = document.querySelectorAll(".slider img");
  const prevButton = document.querySelector(".prev-button");
  const nextButton = document.querySelector(".next-button");
  const dots = document.querySelectorAll(".dot");
  let currentImageIndex = 0;

  function showImage(index) {
    images.forEach((image) => image.classList.remove("active"));
    dots.forEach((dot) => dot.classList.remove("active"));
    images[index].classList.add("active");
    dots[index].classList.add("active");
  }

  prevButton.addEventListener("click", function () {
    currentImageIndex = (currentImageIndex - 1 + images.length) % images.length;
    showImage(currentImageIndex);
  });

  nextButton.addEventListener("click", function () {
    currentImageIndex = (currentImageIndex + 1) % images.length;
    showImage(currentImageIndex);
  });

  dots.forEach((dot, index) => {
    dot.addEventListener("click", function () {
      currentImageIndex = index;
      showImage(currentImageIndex);
    });
  });

  showImage(currentImageIndex);

  setInterval(function () {
    currentImageIndex = (currentImageIndex + 1) % images.length;
    showImage(currentImageIndex);
  }, 3000);
});
