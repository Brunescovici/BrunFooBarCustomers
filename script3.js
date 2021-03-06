// Nav IDs

const logo = document.querySelector(".navbar-brand");

// Main IDs

const payBtn = document.getElementById("payButton");
const validationName = document.getElementById("validationName");
const validationNumber = document.getElementById("validationNumber");
const validationMonthNumber = document.getElementById("validationMonthNumber");
const validationYearNumber = document.getElementById("validationYearNumber");
const cvvNumber = document.getElementById("cvvNumber");
const totalPrice = document.getElementById("totalPrice");
const overlay = document.getElementById("overlay");

// Event Listeners

payBtn.addEventListener("click", checkVal);
logo.addEventListener("click", goHome);

// Variables

let valid;

// Global functions

window.addEventListener("load", initPayment);

// Navigation functions

function goHome() {
  window.location.href = "index.html";
}

// Main functions

function initPayment() {
  totalPrice.textContent =
    "DKK " + sessionStorage.getItem("totalAmount") + ",-";
}

function showOverlay() {
  overlay.style.display = "flex";
  overlay.querySelector("#overlayHeader").textContent += Math.floor(
    Math.random() * 350
  );
  setTimeout(function () {
    overlay.querySelector(".circ").classList.add("path");
    overlay.querySelector(".tick").classList.add("path");
  }, 50);
}

function checkVal() {
  valid = 1;
  if (validationName.value > "") {
    validationName.classList.add("is-valid");
    validationName.classList.remove("is-invalid");
  } else {
    validationName.classList.remove("is-valid");
    validationName.classList.add("is-invalid");
    valid = 0;
  }
  if (validationNumber.value.length == 16) {
    validationNumber.classList.add("is-valid");
    validationNumber.classList.remove("is-invalid");
  } else {
    validationNumber.classList.remove("is-valid");
    validationNumber.classList.add("is-invalid");
    valid = 0;
  }
  if (validationMonthNumber.selectedIndex >= 1) {
    validationMonthNumber.classList.add("is-valid");
    validationMonthNumber.classList.remove("is-invalid");
  } else {
    validationMonthNumber.classList.remove("is-valid");
    validationMonthNumber.classList.add("is-invalid");
    valid = 0;
  }
  if (validationYearNumber.selectedIndex >= 1) {
    validationYearNumber.classList.add("is-valid");
    validationYearNumber.classList.remove("is-invalid");
  } else {
    validationYearNumber.classList.remove("is-valid");
    validationYearNumber.classList.add("is-invalid");
    valid = 0;
  }
  if (cvvNumber.value.length == 3) {
    cvvNumber.classList.add("is-valid");
    cvvNumber.classList.remove("is-invalid");
  } else {
    cvvNumber.classList.remove("is-valid");
    cvvNumber.classList.add("is-invalid");
    valid = 0;
  }
  if (valid) {
    showOverlay();
    setTimeout(function () {
      sessionStorage.removeItem("totalAmount");
      sessionStorage.removeItem("FooBarCart");
      window.location.href = "index.html";
    }, 3000);
  }
}
