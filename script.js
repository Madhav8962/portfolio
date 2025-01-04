let menu = document.querySelector("#menu-btn")
let header = document.querySelector(".header")

menu.onclick = () => {
  menu.classList.toggle("fa-times")
  header.classList.toggle("active")
}

window.onscroll = () => {
  menu.classList.remove("fa-times")
  header.classList.remove("active")
}

let themeToggler = document.querySelector("#theme-toggler")

themeToggler.onclick = () => {
  themeToggler.classList.toggle("fa-sun")
  if (themeToggler.classList.contains("fa-sun")) {
    document.body.classList.add("active")
  } else {
    document.body.classList.remove("active")
  }
}

// Function to handle form submission and reset
function handleSubmit() {
  // Optional: Display an alert when the form is submitted
  alert("Form submitted successfully!")

  // Reset the form after submission
  document.getElementById("contact-form").reset()
}
