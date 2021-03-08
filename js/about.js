const hamburgerOther = document.querySelector(".hamburger-other");
const navLinks = document.querySelector(".nav-links");
const links = document.querySelectorAll(".nav-links-ul li");
const width = document.querySelectorAll('.meter span')[5].getAttribute('data-value');
const spanArray = document.querySelectorAll('.meter span');
const ageSpan = document.querySelector('.age');

const year = new Date().getFullYear()
const month = new Date().getMonth()

if (month <= 8) {
    age = year - 1998 - 1
}
else{
    age = year - 1998
}
ageSpan.textContent= age
spanArray.forEach(e => {e.style.width = e.getAttribute('data-value')});

hamburgerOther.addEventListener("click", () => {
    navLinks.classList.toggle("open");

});

