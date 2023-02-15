// mobile nav
const toggleButton = document.querySelector(".toggle-button");
const navbarLinks = document.querySelector(".navbar-links");
toggleButton.addEventListener("click", () => {
  navbarLinks.classList.toggle("active");
});

//carousel slider
document.addEventListener("DOMContentLoaded", function () {
  const elms = document.getElementsByClassName("splide");

  for (let i = 0; i < elms.length; i++) {
    new Splide(elms[i], {
      pagination: (boolean = false),
    }).mount();
  }

  //   var splide = new Splide(".splide");
  //   splide.mount();
});
