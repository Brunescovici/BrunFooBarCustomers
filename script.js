// Overlay IDs

const OL = document.getElementById("overlay");
const headerOL = document.getElementById("overlayHeader");
const circleOL = document.querySelector("#tick .circ");
const tickOL = document.querySelector("#tick .tick");

// Main IDs

const ElHefe = document.getElementById("ElHefe");
const FTA = document.getElementById("FTA");
const GitHop = document.getElementById("GitHop");
const HollabackLager = document.getElementById("HollabackLager");
const HEA = document.getElementById("HEA");
const Mowintime = document.getElementById("Mowintime");
const Row26 = document.getElementById("Row26");
const RC = document.getElementById("RC");
const Sleighride = document.getElementById("Sleighride");
const Steampunk = document.getElementById("Steampunk");

// Variables

let cart = [],
  cartLoaded;

// Event Listeners

ElHefe.addEventListener("click", function () {
  addToCart(0);
});
FTA.addEventListener("click", function () {
  addToCart(1);
});
GitHop.addEventListener("click", function () {
  addToCart(2);
});
HollabackLager.addEventListener("click", function () {
  addToCart(3);
});
HEA.addEventListener("click", function () {
  addToCart(4);
});
Mowintime.addEventListener("click", function () {
  addToCart(5);
});
Row26.addEventListener("click", function () {
  addToCart(6);
});
RC.addEventListener("click", function () {
  addToCart(7);
});
Sleighride.addEventListener("click", function () {
  addToCart(8);
});
Steampunk.addEventListener("click", function () {
  addToCart(9);
});

// Global Events

window.addEventListener("load", initCart);

// Cart Functions

function initCart() {
  for (let i = 0; i <= 9; i++) {
    cart[i] = 0;
  }
  cartLoaded = sessionStorage.getItem("FooBarCart");
  for (let i = 0; i <= 9; i++) {
    cart[i] = cartLoaded[i * 2];
  }
}

function addToCart(beerNumber) {
  showOverlay(beerNumber);
  cart[beerNumber]++;
  sessionStorage.setItem("FooBarCart", cart);
}

function setBeerNameHeader(beerNumber) {
  if (beerNumber == 0) headerOL.textContent = "El Hefe addded to cart";
  else if (beerNumber == 1)
    headerOL.textContent = "Feary Tale Ale added to cart";
  else if (beerNumber == 2) headerOL.textContent = "GitHop added to cart";
  else if (beerNumber == 3)
    headerOL.textContent = "Hollaback Lager added to cart";
  else if (beerNumber == 4)
    headerOL.textContent = "Hoppily Ever After added to cart";
  else if (beerNumber == 5) headerOL.textContent = "Mowintime added to cart";
  else if (beerNumber == 6) headerOL.textContent = "Row 26 added to cart";
  else if (beerNumber == 7)
    headerOL.textContent = "Ruined Childhood added to cart";
  else if (beerNumber == 8) headerOL.textContent = "Sleighride added to cart";
  else headerOL.textContent = "Steampunk added to cart";
}

function showOverlay(beerNumber) {
  OL.style.display = "flex";
  setBeerNameHeader(beerNumber);
  setTimeout(showTick, 50);
}

function showTick() {
  OL.style.opacity = "1";
  circleOL.classList.add("path");
  tickOL.classList.add("path");
  setTimeout(hideOL, 1500);
}

function closeOverlay() {
  circleOL.classList.remove("path");
  tickOL.classList.remove("path");
  OL.style.display = "none";
}

function hideOL() {
  OL.style.opacity = "0";
  setTimeout(closeOverlay, 200);
}
