const inputForm = document.querySelector(".input-form");
const overlay = document.querySelector(".overlay");

const rect = inputForm.getBoundingClientRect();
const distanceFromBottom = window.innerHeight - rect.top;

overlay.style.bottom = distanceFromBottom + "px"