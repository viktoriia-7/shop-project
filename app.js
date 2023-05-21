//add to cart

///////////////робота з кнопками/////////////////////
let productsCountEl = document.getElementById("products_count");
console.log(productsCountEl);

let addToCartBtns = document.querySelectorAll(".btn_style2");
console.log(addToCartBtns);

//використовуємо цикл////////////////////////
for (i = 0; i < addToCartBtns.length; i++) {
  addToCartBtns[i].addEventListener("click", function () {
    productsCountEl.textContent = +productsCountEl.textContent + 1;
  })
}
//використовуємо метод forEach/////////////////
// addToCartBtns.forEach((item) => {
//   item.addEventListener("click", function () {
//     productsCountEl.textContent = +productsCountEl.textContent + 1;
//   })
// });

//////////////////робота з іконками-сердечками//////////////////

let iconsLike = document.querySelectorAll(".card_icon_love");
console.log(iconsLike);

iconsLike.forEach((icon) => {
  icon.addEventListener("click", () => {
    icon.classList.toggle("active");
  });
});

/////////////////////робота с модальним вікном//////////////
let showModalBtns = document.querySelectorAll(".btn_style1");
console.log(showModalBtns);
let closeModalBtn = document.getElementById("close_modal_btn");
console.log(closeModalBtn);
let overlayModal = document.querySelector(".modal_overlay");
console.log(overlayModal);
let sendBtn = document.getElementById("modal_btn_send");
console.log(sendBtn);
let modalWindow = document.querySelector(".modal_window");


showModalBtns.forEach(function (showModal) {
  showModal.addEventListener("click", function () {
    overlayModal.style.display = 'block';
    modalWindow.style.display = 'block';
  });
});

closeModalBtn.addEventListener("click", function () {
  overlayModal.style.display = 'none';
  modalWindow.style.display = 'none';
})

//Slick

$(".slider").slick({
  dots: true,
});

// Сounter. Lesson 20
//написали ф-ю, яка приймає параметри (-,+,input), в середині ф-ї ми це записали в об'єкт
// написали ф-ї які збільшують, зменшують і змінюють поле в середині
// потім ф-ю toggleButtonsState, яка міняє стан кнопки, написали їй умови

function Counter(incrementBtn, decrementBtn, inputField) {
  this.domRefs = {
    incrementBtn,
    decrementBtn,
    inputField,
  };

  this.toggleButtonsState = function () { //функція міняє стан кнопки
    let count = +this.domRefs.inputField.value;//дізнаємось к-ть

    this.domRefs.decrementBtn.disabled = count <= 1;//треба блокувати тоді, коли ..
    this.domRefs.incrementBtn.disabled = count >= 10;
  }

  this.increment = function () {
    console.log(this);
    this.domRefs.inputField.value = +this.domRefs.inputField.value + 1; //поверне 1 яка є в інпуті
    this.toggleButtonsState();
  };

  this.decrement = function () {
    this.domRefs.inputField.value = +this.domRefs.inputField.value - 1; //поверне 1 яка є в інпуті
    this.toggleButtonsState();
  };

  this.domRefs.incrementBtn.addEventListener(
    "click",
    this.increment.bind(this)
  );

  this.domRefs.decrementBtn.addEventListener(
    "click",
    this.decrement.bind(this)
  );
  // console.log(this);

}

const cards = document.querySelectorAll('.card');

cards.forEach(card => {
  const incrementBtn = card.querySelector('.increment_button');
  const decrementBtn = card.querySelector('.decrement_button');
  const inputField = card.querySelector('input');

  const counter = new Counter(incrementBtn, decrementBtn, inputField);
});

//для прив'язки контексту є 3 методи
// call, apply, bind

// 2 спосіб знайти кнопки
let decrementBtns = document.querySelectorAll(".decrement_button")[0];
// 1 спосіб знайти кнопки
let counter = new Counter(
  document.querySelectorAll(".increment_button")[0],
  decrementBtns,
  document.querySelectorAll(".product_quantity input")[0]
);

console.log(counter);







































// ////////////OOP//////////////////////////////////

// let audi = {
//   model: "a4",
//   year: 2020,
//   color: "black"
// }
// let lexus = {
//   model: "ES350",
//   year: 2015,
//   color: "white"
// }
// let bmw = {
//   model: "328",
//   year: 2010,
//   color: "grey"
// }

// ф-я конструктор

// function Car(model, year, color) {
//   this.model = model;
//   this.year = year;
//   this.color = color;

//   this.carName = function () {
//     return this.model + " " + this.year;
//   };
// }

// крнвертуем це в класи

// class Car {
//   constructor(model, year, color) {
//     this.model = model;
//     this.year = year;
//     this.color = color;

//     this.carName = function () {
//       return this.model + " " + this.year;
//     };
//   }
//   test() {
//     return this.model;
//   }
// }

// let audi = new Car("A4", 2020, "black");
// let lexus = new Car("ES350", 2015, "white");
// console.log(audi);
// console.log(lexus);

// // console.log(audi.carName()); //1
// console.log(audi.test()); //2

//ми можемо створювати якісь методи і змінювати характеристики

// ////////////////////////////////////////////////////
