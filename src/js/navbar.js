
document.addEventListener("DOMContentLoaded", function () {
  const burgerButton = document.querySelector(".header-burger-button");
  const closeButton = document.querySelector(".close-navbar-wrapper");
  const navbarOverlay = document.querySelector(".navbar-overlay");
  const navLinks = document.querySelectorAll('.navbar-list-link');
  const body = document.body;

  navLinks.forEach(link => {
    link.addEventListener('click', function (e) {
      e.preventDefault();

      const targetId = this.getAttribute('href').substring(1);
      const targetSection = document.getElementById(targetId);

      if (targetSection) {
        targetSection.scrollIntoView({
          behavior: 'smooth',
          block: 'start'
        });
      }

      navbarOverlay.classList.remove('is-visible');
      body.classList.remove('body-no-scroll');
    });
  });

  burgerButton.addEventListener("click", () => {
    navbarOverlay.classList.add("is-visible");
    document.body.classList.add('body-no-scroll');
  });

  closeButton.addEventListener("click", () => {
    navbarOverlay.classList.remove("is-visible");
    document.body.classList.remove('body-no-scroll');
  });

  navbarSections.addEventListener("click", () => {
    navbarOverlay.classList.add("is-hidden")
    document.body.classList.remove('body-no-scroll');
  });

  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") {
      document.body.classList.remove('body-no-scroll');
      navbarOverlay.classList.remove("is-visible");
    }
  });
});
