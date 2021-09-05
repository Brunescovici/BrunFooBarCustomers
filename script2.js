// Main IDs

const template = document.getElementById("beerTemplate");
const tempContainer = document.getElementById("beerContainer");
const noDrinks = document.getElementById("noDrinks");
let removeArrow, addArrow;

// Variables

let cart = [],
  cartLoaded,
  i = 0;

// Global Events

window.addEventListener("load", initCart);

// Event Listeners

// Cart functions

function initCart() {
  for (let i = 0; i <= 9; i++) {
    cart[i] = 0;
  }
  cartLoaded = sessionStorage.getItem("FooBarCart");
  for (let i = 0; i <= 9; i++) {
    cart[i] = cartLoaded[i * 2];
  }
  cartPopulate();
}

function cartPopulate() {
  noDrinks.style.display = "block";
  i = 0;
  while (tempContainer.firstChild) {
    tempContainer.removeChild(tempContainer.lastChild);
  }
  cart.forEach((el) => {
    if (el > 0) {
      noDrinks.style.display = "none";
      let clone = template.content.cloneNode(true);
      if (i == 0) {
        clone.querySelector(".row").id = "ElHefe";
        clone.querySelector(".beerPic").src += "El Hefe.png";
        clone.querySelector(".quantity p").textContent = el;
        clone.querySelector(".beerPrice").textContent = "45,-";
        tempContainer.appendChild(clone);
      } else if (i == 1) {
        clone.querySelector(".row").id = "FTA";
        clone.querySelector(".beerPic").src += "Fairy Tale Ale.png";
        clone.querySelector(".quantity p").textContent = el;
        clone.querySelector(".beerPrice").textContent = "40,-";
        tempContainer.appendChild(clone);
      } else if (i == 2) {
        clone.querySelector(".row").id = "GitHop";
        clone.querySelector(".beerPic").src += "GitHop.png";
        clone.querySelector(".quantity p").textContent = el;
        clone.querySelector(".beerPrice").textContent = "45,-";
        tempContainer.appendChild(clone);
      } else if (i == 3) {
        clone.querySelector(".row").id = "HollabackLager";
        clone.querySelector(".beerPic").src += "Hollaback Lager.png";
        clone.querySelector(".quantity p").textContent = el;
        clone.querySelector(".beerPrice").textContent = "55,-";
        tempContainer.appendChild(clone);
      } else if (i == 4) {
        clone.querySelector(".row").id = "HEA";
        clone.querySelector(".beerPic").src += "Hoppily Ever After.png";
        clone.querySelector(".quantity p").textContent = el;
        clone.querySelector(".beerPrice").textContent = "40,-";
        tempContainer.appendChild(clone);
      } else if (i == 5) {
        clone.querySelector(".row").id = "Mowintime";
        clone.querySelector(".beerPic").src += "Mowintime.png";
        clone.querySelector(".quantity p").textContent = el;
        clone.querySelector(".beerPrice").textContent = "50,-";
        tempContainer.appendChild(clone);
      } else if (i == 6) {
        clone.querySelector(".row").id = "Row26";
        clone.querySelector(".beerPic").src += "Row 26.png";
        clone.querySelector(".quantity p").textContent = el;
        clone.querySelector(".beerPrice").textContent = "50,-";
        tempContainer.appendChild(clone);
      } else if (i == 7) {
        clone.querySelector(".row").id = "RC";
        clone.querySelector(".beerPic").src += "Ruined Childhood.png";
        clone.querySelector(".quantity p").textContent = el;
        clone.querySelector(".beerPrice").textContent = "45,-";
        tempContainer.appendChild(clone);
      } else if (i == 8) {
        clone.querySelector(".row").id = "Sleighride";
        clone.querySelector(".beerPic").src += "Sleighride.png";
        clone.querySelector(".quantity p").textContent = el;
        clone.querySelector(".beerPrice").textContent = "55,-";
        tempContainer.appendChild(clone);
      } else if (i == 9) {
        clone.querySelector(".row").id = "Steampunk";
        clone.querySelector(".beerPic").src += "Steampunk.png";
        clone.querySelector(".quantity p").textContent = el;
        clone.querySelector(".beerPrice").textContent = "45,-";
        tempContainer.appendChild(clone);
      }
    }
    i++;
  });
  removeArrow = document.querySelectorAll(".removeArrow");
  removeArrow.forEach((el) => {
    el.addEventListener("click", function (el) {
      removeBeer(el);
    });
  });
  addArrow = document.querySelectorAll(".addArrow");
  addArrow.forEach((el) => {
    el.addEventListener("click", function (el) {
      addBeer(el);
    });
  });
}

function addBeer(x) {
  if (x.path[4].id == "ElHefe") {
    let parentName = document.querySelector("#ElHefe");
    let numberOfBeers = parseInt(
      parentName.querySelector(".quantity p").textContent
    );
    if (numberOfBeers < 9) {
      numberOfBeers++;
      parentName.querySelector(".quantity p").textContent = numberOfBeers;
      cart[0] += 1;
    }
  } else if (x.path[4].id == "FTA") {
    let parentName = document.querySelector("#FTA");
    let numberOfBeers = parseInt(
      parentName.querySelector(".quantity p").textContent
    );
    console.log(numberOfBeers);
    if (numberOfBeers < 9) {
      numberOfBeers++;
      console.log(numberOfBeers);
      parentName.querySelector(".quantity p").textContent = numberOfBeers;
      cart[1] += 1;
    }
  } else if (x.path[4].id == "GitHop") {
    let parentName = document.querySelector("#GitHop");
    let numberOfBeers = parseInt(
      parentName.querySelector(".quantity p").textContent
    );
    if (numberOfBeers < 9) {
      numberOfBeers++;
      parentName.querySelector(".quantity p").textContent = numberOfBeers;
      cart[2] += 1;
    }
  } else if (x.path[4].id == "HollabackLager") {
    let parentName = document.querySelector("#HollabackLager");
    let numberOfBeers = parseInt(
      parentName.querySelector(".quantity p").textContent
    );
    if (numberOfBeers < 9) {
      parentName.querySelector(".quantity p").textContent = numberOfBeers + 1;
      cart[3] += 1;
    }
  } else if (x.path[4].id == "HEA") {
    let parentName = document.querySelector("#HEA");
    let numberOfBeers = parseInt(
      parentName.querySelector(".quantity p").textContent
    );
    if (numberOfBeers < 9) {
      parentName.querySelector(".quantity p").textContent = numberOfBeers + 1;
      cart[4] += 1;
    }
  } else if (x.path[4].id == "Mowintime") {
    let parentName = document.querySelector("#Mowintime");
    let numberOfBeers = parseInt(
      parentName.querySelector(".quantity p").textContent
    );
    if (numberOfBeers < 9) {
      parentName.querySelector(".quantity p").textContent = numberOfBeers + 1;
      cart[5] += 1;
    }
  } else if (x.path[4].id == "Row26") {
    let parentName = document.querySelector("#Row26");
    let numberOfBeers = parseInt(
      parentName.querySelector(".quantity p").textContent
    );
    if (numberOfBeers < 9) {
      parentName.querySelector(".quantity p").textContent = numberOfBeers + 1;
      cart[6] += 1;
    }
  } else if (x.path[4].id == "RC") {
    let parentName = document.querySelector("#RC");
    let numberOfBeers = parseInt(
      parentName.querySelector(".quantity p").textContent
    );
    if (numberOfBeers < 9) {
      parentName.querySelector(".quantity p").textContent = numberOfBeers + 1;
      cart[7] += 1;
    }
  } else if (x.path[4].id == "Sleighride") {
    let parentName = document.querySelector("#Sleighride");
    let numberOfBeers = parseInt(
      parentName.querySelector(".quantity p").textContent
    );
    if (numberOfBeers < 9) {
      parentName.querySelector(".quantity p").textContent = numberOfBeers + 1;
      cart[8] += 1;
    }
  } else if (x.path[4].id == "Steampunk") {
    let parentName = document.querySelector("#Steampunk");
    let numberOfBeers = parseInt(
      parentName.querySelector(".quantity p").textContent
    );
    if (numberOfBeers < 9) {
      parentName.querySelector(".quantity p").textContent = numberOfBeers + 1;
      cart[9] += 1;
    }
  }
  sessionStorage.setItem("FooBarCart", cart);
}

function removeBeer(x) {
  let numberOfBeers = 0;
  if (x.path[4].id == "ElHefe") {
    let parentName = document.querySelector("#ElHefe");
    numberOfBeers = parseInt(
      parentName.querySelector(".quantity p").textContent
    );
    parentName.querySelector(".quantity p").textContent = numberOfBeers - 1;
    cart[0] -= 1;
  } else if (x.path[4].id == "FTA") {
    let parentName = document.querySelector("#FTA");
    numberOfBeers = parseInt(
      parentName.querySelector(".quantity p").textContent
    );
    parentName.querySelector(".quantity p").textContent = numberOfBeers - 1;
    cart[1] -= 1;
  } else if (x.path[4].id == "GitHop") {
    let parentName = document.querySelector("#GitHop");
    numberOfBeers = parseInt(
      parentName.querySelector(".quantity p").textContent
    );
    parentName.querySelector(".quantity p").textContent = numberOfBeers - 1;
    cart[2] -= 1;
  } else if (x.path[4].id == "HollabackLager") {
    let parentName = document.querySelector("#HollabackLager");
    numberOfBeers = parseInt(
      parentName.querySelector(".quantity p").textContent
    );
    parentName.querySelector(".quantity p").textContent = numberOfBeers - 1;
    cart[3] -= 1;
  } else if (x.path[4].id == "HEA") {
    let parentName = document.querySelector("#HEA");
    numberOfBeers = parseInt(
      parentName.querySelector(".quantity p").textContent
    );
    parentName.querySelector(".quantity p").textContent = numberOfBeers - 1;
    cart[4] -= 1;
  } else if (x.path[4].id == "Mowintime") {
    let parentName = document.querySelector("#Mowintime");
    numberOfBeers = parseInt(
      parentName.querySelector(".quantity p").textContent
    );
    parentName.querySelector(".quantity p").textContent = numberOfBeers - 1;
    cart[5] -= 1;
  } else if (x.path[4].id == "Row26") {
    let parentName = document.querySelector("#Row26");
    numberOfBeers = parseInt(
      parentName.querySelector(".quantity p").textContent
    );
    parentName.querySelector(".quantity p").textContent = numberOfBeers - 1;
    cart[6] -= 1;
  } else if (x.path[4].id == "RC") {
    let parentName = document.querySelector("#RC");
    numberOfBeers = parseInt(
      parentName.querySelector(".quantity p").textContent
    );
    parentName.querySelector(".quantity p").textContent = numberOfBeers - 1;
    cart[7] -= 1;
  } else if (x.path[4].id == "Sleighride") {
    let parentName = document.querySelector("#Sleighride");
    numberOfBeers = parseInt(
      parentName.querySelector(".quantity p").textContent
    );
    parentName.querySelector(".quantity p").textContent = numberOfBeers - 1;
    cart[8] -= 1;
  } else if (x.path[4].id == "Steampunk") {
    let parentName = document.querySelector("#Steampunk");
    numberOfBeers = parseInt(
      parentName.querySelector(".quantity p").textContent
    );
    parentName.querySelector(".quantity p").textContent = numberOfBeers - 1;
    cart[9] -= 1;
  }
  sessionStorage.setItem("FooBarCart", cart);
  if (numberOfBeers == 1) cartPopulate();
}
