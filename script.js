const hamburgerIcon = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');

hamburgerIcon.addEventListener('click', () => {
  navMenu.classList.toggle('active');
});


const close =document.querySelector('.close-btn');
close.addEventListener('click', () => {
  navMenu.classList.toggle('active');
});