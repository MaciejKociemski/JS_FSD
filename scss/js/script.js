const buttons = document.querySelectorAll('button');
const gallery = document.querySelector('.gallery');
const images = gallery.querySelectorAll('img');

// Dodanie losowego tła do przycisków
buttons.forEach(button => {
  button.style.background = `rgb(${Math.floor(Math.random() * 12)},${Math.floor(Math.random() * 256)},${Math.floor(Math.random() * 256)})`;
  button.style.color = "white";
  button.style.borderRadius = '20px';
  button.style.width = '100px';
  button.style.height = '40px';

});

