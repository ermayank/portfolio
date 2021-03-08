const hamburgerOther = document.querySelector(".hamburger-other");
const navLinks = document.querySelector(".nav-links");
const links = document.querySelectorAll(".nav-links-ul li");


hamburgerOther.addEventListener("click", () => {
    navLinks.classList.toggle("open");

});

