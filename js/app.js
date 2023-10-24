document.addEventListener("DOMContentLoaded", function () {
  const buttons = document.querySelectorAll(".clickme button");
  const images = document.querySelectorAll(".image-container .image1");
  const hideButtons = document.querySelectorAll(".hide button");
  

  hideAllImages();

  function hideAllImages() {
    images.forEach((image) => {
      image.style.display = "none";
    });
  }

  buttons.forEach((button, index) => {
    button.addEventListener("click", function () {
      images[index].style.display = "block";
    });
  });

  hideButtons.forEach((hideButton, index) => {
    hideButton.addEventListener("click", function () {
      images[index].style.display = "none";
    });
  });
});

