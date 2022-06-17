"use script";

const show1 = document.querySelector(".show-1");
const show2 = document.querySelector(".show-2");
const show3 = document.querySelector(".show-3");
const show4 = document.querySelector(".show-4");
const show5 = document.querySelector(".show-5");
const show6 = document.querySelector(".show-6");

document.querySelector(".like-1").addEventListener("click", function () {
  show1.classList.toggle("hidden");
});
document.querySelector(".like-2").addEventListener("click", function () {
  show2.classList.toggle("hidden");
});
document.querySelector(".like-3").addEventListener("click", function () {
  show3.classList.toggle("hidden");
});
document.querySelector(".like-4").addEventListener("click", function () {
  show4.classList.toggle("hidden");
});
document.querySelector(".like-5").addEventListener("click", function () {
  show5.classList.toggle("hidden");
});
document.querySelector(".like-6").addEventListener("click", function () {
  show6.classList.toggle("hidden");
});
