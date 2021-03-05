const hamburger = document.querySelector(".hamburger");
const hamburgerOther = document.querySelector(".hamburger-other");
const navLinks = document.querySelector(".nav-links");
const links = document.querySelectorAll(".nav-links-ul li");

hamburger.addEventListener("click", () => {
    navLinks.classList.toggle("open");

});
hamburgerOther.addEventListener("click", () => {
    navLinks.classList.toggle("open");

});