
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





