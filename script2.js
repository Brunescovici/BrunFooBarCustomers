// Main IDs

const template = document.getElementById("beerTemplate");
const tempContainer = document.getElementById("beerContainer");

// Variables

let cart = [],
  cartLoaded,
  i = 0;

// Global Events

window.addEventListener("load", initCart);

// Cart functions

function initCart() {
  for (let i = 0; i <= 9; i++) {
    cart[i] = 0;
  }
  cartLoaded = localStorage.getItem("FooBarCart");
  for (let i = 0; i <= 9; i++) {
    cart[i] = cartLoaded[i * 2];
  }
  cartPopulate();
}

function cartPopulate() {
  cart.forEach((el) => {
    if (el > 0) {
      let clone = template.content.cloneNode(true);
      if (i == 0) {
        clone.querySelector(".row").id = "ElHefe";
        clone.querySelector(".beerPic").src += "El Hefe.png";
        clone.querySelector(".beerPrice").textContent = "45,-";
        tempContainer.appendChild(clone);
      } else if (i == 1) {
        clone.querySelector(".row").id = "FTA";
        clone.querySelector(".beerPic").src += "Fairy Tale Ale.png";
        clone.querySelector(".beerPrice").textContent = "40,-";
        tempContainer.appendChild(clone);
      } else if (i == 2) {
        clone.querySelector(".row").id = "GitHop";
        clone.querySelector(".beerPic").src += "GitHop.png";
        clone.querySelector(".beerPrice").textContent = "45,-";
        tempContainer.appendChild(clone);
      } else if (i == 3) {
        clone.querySelector(".row").id = "HollabackLager";
        clone.querySelector(".beerPic").src += "Hollaback Lager.png";
        clone.querySelector(".beerPrice").textContent = "55,-";
        tempContainer.appendChild(clone);
      } else if (i == 4) {
        clone.querySelector(".row").id = "HEA";
        clone.querySelector(".beerPic").src += "Hoppily Ever After.png";
        clone.querySelector(".beerPrice").textContent = "40,-";
        tempContainer.appendChild(clone);
      } else if (i == 5) {
        clone.querySelector(".row").id = "Mowintime";
        clone.querySelector(".beerPic").src += "Mowintime.png";
        clone.querySelector(".beerPrice").textContent = "50,-";
        tempContainer.appendChild(clone);
      } else if (i == 6) {
        clone.querySelector(".row").id = "Row26";
        clone.querySelector(".beerPic").src += "Row 26.png";
        clone.querySelector(".beerPrice").textContent = "50,-";
        tempContainer.appendChild(clone);
      } else if (i == 7) {
        clone.querySelector(".row").id = "RC";
        clone.querySelector(".beerPic").src += "Ruined Childhood.png";
        clone.querySelector(".beerPrice").textContent = "45,-";
        tempContainer.appendChild(clone);
      } else if (i == 8) {
        clone.querySelector(".row").id = "Sleighride";
        clone.querySelector(".beerPic").src += "Sleighride.png";
        clone.querySelector(".beerPrice").textContent = "55,-";
        tempContainer.appendChild(clone);
      } else if (i == 9) {
        clone.querySelector(".row").id = "Steampunk";
        clone.querySelector(".beerPic").src += "Steampunk.png";
        clone.querySelector(".beerPrice").textContent = "45,-";
        tempContainer.appendChild(clone);
      }
    }
    i++;
  });
}
