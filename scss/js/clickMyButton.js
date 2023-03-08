const myButton = document.getElementById('myButton');
function handleClick() {
    console.log('przycisk został naciśniety')
}

myButton.addEventListener('click', handleClick)



const button = document.querySelector(".btn");
const handleClick2 = (e) => {
    console.log("e", e);
    console.log('e type', e.type);
    console.log('currentTarget', e.currentTarget);

}

button.addEventListener('click', handleClick2)



