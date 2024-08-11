$(document).ready(function () {
  const $carouselContainer = $(".carousel-container");
  const $prevButton = $(".prev");
  const $nextButton = $(".next");

  let scrollAmount = 0;
  const cardWidth = $("#card").outerWidth(true);

  function updateScroll(direction) {
    const containerWidth = $carouselContainer.outerWidth();
    const scrollPosition = $carouselContainer.scrollLeft();

    if ($(window).width() <= 768) {
      // Mobile
      scrollAmount = scrollPosition + direction * cardWidth;
    } else {
      // Dekstop
      scrollAmount = scrollPosition + direction * 320;
    }

    $carouselContainer.animate({ scrollLeft: scrollAmount }, 400);
  }

  $nextButton.on("click", function () {
    updateScroll(1);
  });

  $prevButton.on("click", function () {
    updateScroll(-1);
  });
});

// sweetalert
document
  .querySelector(".submitForm")
  .addEventListener("submit", function (event) {
    event.preventDefault(); // Prevents the form from submitting and refreshing the page

    Swal.fire({
      title: "Terima Kasih!",
      text: "Anda berhasil mendapatan early access.",
      icon: "success",
      confirmButtonText: "Close",
    });
  });
