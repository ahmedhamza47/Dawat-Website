"using strict";

const btnBreakfast = document.querySelector(".btn--0");
const btnLunch = document.querySelector(".btn--1");
const btnDinner = document.querySelector(".btn--2");
const btnDrinks = document.querySelector(".btn--3");
const breakfast = document.querySelector(".breakfast");
const lunch = document.querySelector(".lunch");
const dinner = document.querySelector(".dinner");
const drinks = document.querySelector(".drinks");

//customer
const dot1 = document.querySelector(".dot-1");
const dot2 = document.querySelector(".dot-2");
const dot3 = document.querySelector(".dot-3");
const customer1 = document.querySelector(".customer1");
const customer2 = document.querySelector(".customer2");
const customer3 = document.querySelector(".customer3");

const btnFood = document.querySelector(".food-time");
//navbar-buttons
const btnNavLink = document.querySelector(".navbar-nav");
let hide = function (menuItem) {
  menuItem.classList.add("hidden");
};
//menu-show
let show = function (menuItem) {
  menuItem.classList.remove("hidden");
};
//remove or add color
let colorHide = function (menuItem) {
  menuItem.classList.remove("orange");
};

let colorShow = function (menuItem) {
  menuItem.classList.add("orange");
};
btnBreakfast.addEventListener("click", function () {
  show(breakfast);
  hide(lunch);
  hide(dinner);
  hide(drinks);
});
btnLunch.addEventListener("click", function () {
  hide(breakfast);
  show(lunch);
  hide(dinner);
  hide(drinks);
});

btnDinner.addEventListener("click", function () {
  hide(breakfast);
  hide(lunch);
  show(dinner);
  hide(drinks);
});
btnDrinks.addEventListener("click", function () {
  hide(breakfast);
  hide(lunch);
  hide(dinner);
  show(drinks);
});
//Satisfied customer section
dot1.addEventListener("click", function () {
  show(customer1);
  hide(customer2);
  hide(customer3);
  colorShow(dot1);
  colorHide(dot2);
  colorHide(dot3);
});
dot2.addEventListener("click", function () {
  hide(customer1);
  show(customer2);
  hide(customer3);
  colorHide(dot1);
  colorShow(dot2);
  colorHide(dot3);
});
dot3.addEventListener("click", function () {
  hide(customer1);
  hide(customer2);
  show(customer3);
  colorHide(dot1);
  colorHide(dot2);
  colorShow(dot3);
});

//to change color of nav links buttons when clicked

btnNavLink.addEventListener("click", function (e) {
  // console.log(e.target);
  const link = e.target.closest(".nav-link");
  if (!link) return;
  // console.log(link);
  const otherLink = document.querySelectorAll(".nav-link");

  if (link.classList.contains(".active")) return;
  otherLink.forEach((item) => {
    if (item == link) return;
    item.classList.remove("active");
    item.classList.add("inactive");
  });
  //console.log(link.classList);
  link.classList.remove("inactive");
  link.classList.add("active");
});

btnFood.addEventListener("click", function (e) {
  // console.log(e.target);
  const foodBtn = e.target.closest(".btn-food");
  if (!foodBtn) return;
  // console.log(food);
  const otherFoodBtn = document.querySelectorAll(".btn-food");

  if (foodBtn.classList.contains(".btn-active")) return;
  otherFoodBtn.forEach((item) => {
    if (item == foodBtn) return;
    item.classList.remove("btn-active");
    item.classList.add("btn--inactive");
  });
  //console.log(food.classList);
  foodBtn.classList.remove(".btn-inactive");
  foodBtn.classList.add(".btn-active");
});
