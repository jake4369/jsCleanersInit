// When the user scrolls the page, execute myFunction
window.onscroll = function () {
  stickyNav();
};

// Get the navbar
let navbar = document.querySelector(".nav");

// Get the offset position of the navbar
let stickyNavBar = navbar.offsetTop;

// Add the sticky class to the navbar when you reach its scroll position. Remove "sticky" when you leave the scroll position
function stickyNav() {
  if (window.pageYOffset >= stickyNavBar) {
    navbar.classList.add("sticky");
  } else {
    navbar.classList.remove("sticky");
  }
}

// CHECKLIST FADE IN
const checklistContainers = document.querySelectorAll(".point-container");
window.addEventListener("scroll", fadeChecklist);

function fadeChecklist() {
  const triggerBottom = (window.innerHeight / 5) * 4;

  checklistContainers.forEach((item) => {
    const slideTop = item.getBoundingClientRect().top;

    if (slideTop < triggerBottom) {
      item.classList.remove("hide-img");
      item.classList.add("fade-in");
    } else {
      item.classList.remove("fade-in");
      item.classList.add("hide-img");
    }
  });
}

// CARD IMAGE FADE IN
const cardImage = document.querySelectorAll(".card-img");

window.addEventListener("scroll", fadeImg);

function fadeImg() {
  const triggerBottom = (window.innerHeight / 5) * 4;

  cardImage.forEach((img) => {
    const slideTop = img.getBoundingClientRect().top;

    if (slideTop < triggerBottom) {
      img.classList.remove("hide-img");
      img.classList.add("fade-in");
    } else {
      img.classList.remove("fade-in");
      img.classList.add("hide-img");
    }
  });
}

// MODAL

document.querySelector(".menu-btn").addEventListener("click", (e) => {
  e.preventDefault();
  document.querySelector(".modal").style.display = "flex";
});

document.querySelector(".fa-xmark").addEventListener("click", () => {
  document.querySelector(".modal").style.display = "none";
});

document.querySelectorAll(".nav-link").forEach((link) => {
  link.addEventListener("click", () => {
    document.querySelector(".modal").style.display = "none";
  });
});
// Submit Button
document.querySelector(".submit-btn").addEventListener("submit", (e) => {
  e.preventDefault();
});
