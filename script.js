const images = [
  "images/1_EkGENsmL2z4w8JeLMSiCPg.jpg",
  "images/hero.jpg",
  "images/unveiling-10-ai-generated-images-of-chinese-versions-of-dc-comics-superheroes.jpg"
];

let counter = 0;

const img = document.querySelector(".hero-image");
const prevbtn = document.querySelector(".button.prev");
const nextbtn = document.querySelector(".button.next");

nextbtn.addEventListener("click", function () {
  counter = (counter + 1) % images.length;
  img.src = images[counter];
});

prevbtn.addEventListener("click", function () {
  counter = (counter - 1 + images.length) % images.length;
  img.src = images[counter];
});

const changebtn = document.querySelector('#theme-button');
const header = document.getElementsByTagName('header')[0];
const main = document.getElementsByTagName('main')[0];
const home = document.getElementById('home').getElementsByTagName('a')[0]; 
const create = document.getElementById('create').getElementsByTagName('a')[0];
const logo = document.getElementsByClassName('logo')[0]; 

let flag = 0;

changebtn.addEventListener("click", function () {
  if (flag === 0) { 
    header.style.backgroundColor = 'yellow';
    main.style.backgroundColor = 'gray';
    home.style.color = 'black';
    create.style.color = 'black';
    logo.style.color = 'black';
    flag = 1;
  } 
  else {
    header.style.backgroundColor = 'black';
    main.style.backgroundColor = 'white';
    home.style.color = '#E6B400';
    create.style.color = '#E6B400';
    logo.style.color = '#FFDB58';
    flag = 0;
  }
});


const createbtn=document.querySelector('#create');
const maindiv=document.querySelector('main');
const superdiv=document.querySelector('.superhero-container');

createbtn.addEventListener("click", function(){
  maindiv.style.display= 'none';
  superdiv.style.display='block';
});

home.addEventListener("click" , function () {
  img.src= images[0];
  maindiv.style.display= 'flex'; 
  superdiv.style.display='none';
});


const formbtn=document.querySelector('.form-button');

formbtn.addEventListener("click", function(){

  const formname= document.getElementById('superhero-name').value.trim();
  const power = document.getElementById("superpower").value.trim();
  const story = document.getElementById("origin-story").value.trim();

  if(!formname){
    alert("Please enter a superhero name.");
    return;
  }

  if(!power){
    alert("Please select the superpower for the character.");
    return;
  }

  if(!story){
    alert("Please write an origin story.");
    return;
  }

  alert(`Succesfully created Superhero! with Name : ${formname} , Power : ${power}`);

});


