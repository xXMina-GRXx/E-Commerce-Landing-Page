let btn = document.getElementById("btn-change")
let navbar = document.getElementById("navbar-full")
let textinput = document.getElementById("contact-input")

//navbar navbar-expand-lg navbar-light bg-light w-100 
//navbar navbar-expand-lg navbar-dark bg-dark w-100 


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