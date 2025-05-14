'use strict'

       const showMessage = () => {
        console.log("Я учу JavaScript!");
    };

    showMessage();


// Функции для кнопок
const prevImg = () => {
  document.querySelector('.img1').style.display = 'none';
  document.querySelector('.img2').style.display = 'block';
};

const nextImg = () => {
  document.querySelector('.img1').style.display = 'block';
  document.querySelector('.img2').style.display = 'none';
};