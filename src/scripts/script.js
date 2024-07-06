// Get the button:
let mybutton = document.getElementById("myBtn");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 350 || document.documentElement.scrollTop > 350) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}

 // JavaScript to get the current year and insert it into the HTML
 document.getElementById('year').textContent = new Date().getFullYear();

 const scriptURL = 'https://script.google.com/macros/s/AKfycbzzPW6HXwCmtwd86KH0iBEvpKy_wZ4Aeb3eLw4IaN9B_Z9_b0fHFZhwb2d3brQMli04/exec'

 const form = document.forms['volunteer-register']

form.addEventListener('submit', e => {
  e.preventDefault()
  fetch(scriptURL, { method: 'POST', body: new FormData(form)})
  .then(response => alert("Thank you for registering with us. We'll get in touch with you soon" ))
  .then(() => { window.location.reload(); })
  .catch(error => console.error('Error!', error.message))
})