const ham = document.querySelector('.menu>img');
const clo = document.querySelector('.close_button>img');
const menuBox = document.querySelector('.menu_box');
const blackBg = document.querySelector('.black_bg');

ham.addEventListener('click', () => {
  menuBox.style.transform = 'translateX(0)';
  blackBg.style.backgroundColor = 'rgba(0, 0, 0, 0.5)';
  blackBg.style.zIndex = '994';
})

clo.addEventListener('click', () => {
  menuBox.style.transform = 'translateX(-600px)';
  blackBg.style.backgroundColor = 'rgba(0, 0, 0, 0)';
  blackBg.style.zIndex = '-1';
})