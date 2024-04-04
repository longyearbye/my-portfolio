const navbar = document.querySelector(".main-nav");

window.addEventListener("scroll", function () {
  console.log(window.pageYOffset);
});
const scrollLinks = document.querySelectorAll(".nav-link");

scrollLinks.forEach(function (link) {
  link.addEventListener("click", function (e) {
    // prevent default
    e.preventDefault();
    //navigate to specific spot
    const id = e.currentTarget.getAttribute("href").slice(1);
    console.log(id);
    const element = document.getElementById(id);
    //calculate the heights
    const navHeight = navbar.getBoundingClientRect().height;
    let position = element.offsetTop;
    console.log(position);
    window.scrollTo({
      left: 0,
      top: position,
    });
  });
});

// QUOTES CAROUSEL

let slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides((slideIndex += n));
}

function currentSlide(n) {
  showSlides((slideIndex = n));
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("quote");
  if (n > slides.length) {
    slideIndex = 1;
  }
  if (n < 1) {
    slideIndex = slides.length;
  }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }

  slides[slideIndex - 1].style.display = "block";
}

// MENU TOGGLE

var toggle = document.getElementById("menu-toggle");
var menu = document.querySelector(".menu");

toggle.onclick = function () {
  var hidden = menu.style.visibility === "hidden";
  menu.style.visibility = hidden ? "visible" : "hidden";
};
