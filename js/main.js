let btn = document.getElementById("btn-change")
let navbar = document.getElementById("navbar-full")
let textinput = document.getElementById("contact-input")
let icon = document.getElementById("icon-div")

//navbar navbar-expand-lg navbar-light bg-light w-100 
//navbar navbar-expand-lg navbar-dark bg-dark w-100 

//dark and light mode functionality
btn.addEventListener('click', () => {
  const htmlElement = document.documentElement;

  if (htmlElement.getAttribute('data-bs-theme') === 'dark') {
    navbar.className = "navbar navbar-expand-lg navbar-light bg-light w-100"
    htmlElement.setAttribute('data-bs-theme', 'light');
    icon.innerHTML= 
    ` <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M12 3V5.25M18.364 5.63604L16.773 7.22703M21 12H18.75M18.364 18.364L16.773 16.773M12 18.75V21M7.22703 16.773L5.63604 18.364M5.25 12H3M7.22703 7.22703L5.63604 5.63604M15.75 12C15.75 14.0711 14.0711 15.75 12 15.75C9.92893 15.75 8.25 14.0711 8.25 12C8.25 9.92893 9.92893 8.25 12 8.25C14.0711 8.25 15.75 9.92893 15.75 12Z" stroke="#31363F" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
      </svg>
    `
    btn.style.backgroundColor = "#EEEEEE"
    textinput.style.color = "#31363F"
  } else {
    navbar.className = "navbar navbar-expand-lg navbar-dark bg-dark w-100"
    htmlElement.setAttribute('data-bs-theme', 'dark');
    icon.innerHTML= 
    `
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M21.7519 15.0021C20.597 15.484 19.3296 15.7501 18 15.7501C12.6152 15.7501 8.25 11.3849 8.25 6.00011C8.25 4.67052 8.51614 3.40308 8.99806 2.24817C5.47566 3.71798 3 7.19493 3 11.2501C3 16.6349 7.36522 21.0001 12.75 21.0001C16.8052 21.0001 20.2821 18.5245 21.7519 15.0021Z" stroke="#EEEEEE" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
      </svg>
    `
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