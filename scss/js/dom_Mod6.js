console.log(document);

const body = document.body;
console.log(body);

const list = body.firstElementChild;
console.log(list);

const firstListItem = list.firstElementChild;
console.log(firstListItem);

const listItems = list.children;
console.log(listItems);

const foundSecond = document.querySelector('#second');
foundSecond.style.fontSize = "44px";
foundSecond.style.listStyle = "none";
foundSecond.style.color = "darkgreen";

const foundFirst = document.querySelector('#first');
foundFirst.style.color = "red";

const foundFifth = document.querySelector('#fifth');
foundFifth.style.fontSize = "90px"


const message = document.querySelector('#message');
console.log(message.value)


const activeLink = document.querySelector(".btn.active");
console.log(activeLink.href); // https://s.codepen.io/about
const image = document.querySelector(".image");
console.log(image.src); // https://placeimg.com/640/480/animals
image.src = 'https://placeimg.com/640/480/tech';


const text =
    document.querySelector('#article-text');
text.style.color = "red";
console.log(text.textContent)


