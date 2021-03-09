// Get Elements
const modal = document.getElementById("myModal");
const projectItem = document.querySelectorAll(".work-item")[0];
const spanClose = document.querySelector(".close");

// When the user clicks the button, open the modal 
projectItem.addEventListener('click', () => {modal.style.display = "block";}) 

// When the user clicks on <span> (x), close the modal
spanClose.addEventListener('click', () => {modal.style.display = "none";})

// When the user clicks anywhere outside of the modal, close it
window.addEventListener('click', (e) => {
    if (e.target == modal) {
        modal.style.display = "none";
      }
})
