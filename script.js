// Nav IDs

const newNavElement = document.getElementById("newNavElement");
const popularNavElement = document.getElementById("popularNavElement");
const fullMenuNavElement = document.getElementById("fullMenuNavElement");
const logo = document.querySelector(".navbar-brand");

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
const catHeader = document.getElementById("categoryHeader");

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
newNavElement.addEventListener("click", showNew);
popularNavElement.addEventListener("click", showPopular);
fullMenuNavElement.addEventListener("click", showAll);
logo.addEventListener("click", goHome);

// Global Events

window.addEventListener("load", initCart);

// Nav Functions

function goHome() {
  window.location.href = "index.html";
}

function showNew() {
  catHeader.textContent =
    "Try our new set of beers! Excellent taste, powerful flavor!";
  ElHefe.style.display = "none";
  FTA.style.display = "block";
  GitHop.style.display = "block";
  HollabackLager.style.display = "none";
  HEA.style.display = "none";
  Mowintime.style.display = "none";
  Row26.style.display = "none";
  RC.style.display = "block";
  Sleighride.style.display = "block";
  Steampunk.style.display = "none";
}

function showPopular() {
  catHeader.textContent =
    "Our customers love these ones, you should give them a try too!";
  ElHefe.style.display = "block";
  FTA.style.display = "none";
  GitHop.style.display = "block";
  HollabackLager.style.display = "none";
  HEA.style.display = "none";
  Mowintime.style.display = "none";
  Row26.style.display = "block";
  RC.style.display = "none";
  Sleighride.style.display = "none";
  Steampunk.style.display = "block";
}

function showAll() {
  catHeader.textContent =
    "Explore our rich menu of beers. Plenty to choose from!";
  ElHefe.style.display = "block";
  FTA.style.display = "block";
  GitHop.style.display = "block";
  HollabackLager.style.display = "block";
  HEA.style.display = "block";
  Mowintime.style.display = "block";
  Row26.style.display = "block";
  RC.style.display = "block";
  Sleighride.style.display = "block";
  Steampunk.style.display = "block";
}

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
