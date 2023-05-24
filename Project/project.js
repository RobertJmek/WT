const element = document.querySelector('.header-row');
element.style.backgroundColor = '#e6bb00';


const title = document.getElementById('myTitle');
title.textContent = 'New Title';


const paragraph = document.createElement('p');
paragraph.textContent = 'This is a new paragraph.';
document.body.appendChild(paragraph);


const form = document.querySelector('form');
form.addEventListener('submit', (event) => {
  event.preventDefault();
  // Perform form validation or submit data
});


setTimeout(() => {
    alert('Hello, world!');
  }, 3000);

  
  localStorage.setItem('username', 'John');
const username = localStorage.getItem('username');


const randomNumber = Math.random();

const element = document.querySelector('.my-element');
const colors = ['red', 'green', 'blue'];
const randomColor = colors[Math.floor(Math.random() * colors.length)];
element.style.color = randomColor;


const button = document.querySelector('.my-button');
button.addEventListener('click', () => {
  button.style.backgroundColor = 'blue';
});


const element = document.querySelector('.my-element');
const computedStyle = getComputedStyle(element);
const color = computed;
