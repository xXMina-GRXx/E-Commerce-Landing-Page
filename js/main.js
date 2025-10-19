let btn = document.getElementById("btn-change")
let navbar = document.getElementById("navbar-full")
let textinput = document.getElementById("contact-input")

//navbar navbar-expand-lg navbar-light bg-light w-100 
//navbar navbar-expand-lg navbar-dark bg-dark w-100 

//dark and light mode functionality
btn.addEventListener('click', () => {
  const htmlElement = document.documentElement;

  if (htmlElement.getAttribute('data-bs-theme') === 'dark') {
    navbar.className = "navbar navbar-expand-lg navbar-light bg-light w-100"
    htmlElement.setAttribute('data-bs-theme', 'light');
    btn.innerText = "light"
    btn.style.backgroundColor = "#EEEEEE"
    textinput.style.color = "#31363F"
  } else {
    navbar.className = "navbar navbar-expand-lg navbar-dark bg-dark w-100"
    htmlElement.setAttribute('data-bs-theme', 'dark');
    btn.innerText = "dark"
    btn.style.backgroundColor = "#31363F"
    textinput.style.color = "#EEEEEE"
  }
})


// nav title functionality
$(document).ready(function() {
    $(window).scroll(function() {
      if ($(document).scrollTop() > 30) {
        $("#cowboy").css('color', '#76ABAE')
        
      }else{
        $("#cowboy").css('color', '')
      }
    });
  });