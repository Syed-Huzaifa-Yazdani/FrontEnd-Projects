document.addEventListener('DOMContentLoaded', () => {
  const img = document.querySelector(".hero-image");
  const nextbtn = document.querySelector(".button.next");
  const prevbtn = document.querySelector(".button.prev");

  const images = [
    "images/realistic-charm-average-superhero-generative-ai_94628-9131.avif",
    "images/download.jpg",
    "images/unveiling-10-ai-generated-images-of-chinese-versions-of-dc-comics-superheroes.jpg"
  ];

  let counter = 0;

  nextbtn.addEventListener("click", function () {
    counter = (counter + 1) % images.length;
    img.src = images[counter];
  });

  prevbtn.addEventListener("click", function () {
    counter = (counter - 1 + images.length) % images.length;
    img.src = images[counter];
  });

  img.src = images[0];

  const homebtn = document.querySelector('#home');
  const maindiv = document.querySelector('main');
  const superdiv = document.querySelector('.superhero-container');

  homebtn.addEventListener("click", function () {
    img.src = images[0];
    maindiv.style.display = 'flex';
    superdiv.style.display = 'none';
  });
});

let themeState = 0;

const themeButton = document.getElementById('theme-button');

themeButton.addEventListener('click', () => {
  if (themeState === 0) {
    document.body.style.backgroundColor = 'black';
    document.body.style.color = 'white';
    themeButton.style.backgroundColor = 'white';
    themeButton.style.color = 'black';
    themeButton.textContent = 'Light Theme';
    themeState = 1;
  } else {
    document.body.style.backgroundColor = 'white';
    document.body.style.color = 'black';
    themeButton.style.backgroundColor = 'gray';
    themeButton.style.color = 'white';
    themeButton.textContent = 'Dark Theme';
    themeState = 0;
  }
});

const createbtn = document.querySelector('#create');
const homebtn = document.querySelector('#home');
const maindiv = document.querySelector('main');
const superdiv = document.querySelector('.superhero-container');

createbtn.addEventListener("click", function () {
  maindiv.style.display = 'none';
  superdiv.style.display = 'block';
});

homebtn.addEventListener("click", function () {
  img.src = images[0];
  maindiv.style.display = 'flex';
  superdiv.style.display = 'none';
});

const superheroNameInput = document.getElementById('superhero-name');
const superpowerSelect = document.getElementById('superpower');
const originStoryTextarea = document.getElementById('origin-story');
const createButton = document.querySelector('.form-button');

createButton.addEventListener('click', () => {
  const superheroName = superheroNameInput.value.trim();
  const superpower = superpowerSelect.value.trim();
  const originStory = originStoryTextarea.value.trim();

  if (!superheroName) {
    alert('Please enter the superhero name.');
    return;
  }
  if (!superpower) {
    alert('Please select a superpower.');
    return;
  }
  if (!originStory) {
    alert('Please write an origin story.');
    return;
  }

  alert('Superhero created successfully!');
});
