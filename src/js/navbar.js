
document.addEventListener("DOMContentLoaded", function () {
  const burgerButton = document.querySelector(".header-burger-button");
  const closeButton = document.querySelector(".close-navbar-wrapper");
  const navbarOverlay = document.querySelector(".navbar-overlay");

  burgerButton.addEventListener("click", () => {
    navbarOverlay.classList.add("is-visible");
    document.body.classList.add('body-no-scroll');
  });

  closeButton.addEventListener("click", () => {
    navbarOverlay.classList.remove("is-visible");
    document.body.classList.remove('body-no-scroll');
  });

  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") {
      document.body.classList.remove('body-no-scroll');
      navbarOverlay.classList.remove("is-visible");
    }
  });
});
