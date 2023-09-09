let loaderBalls = document.querySelectorAll(".loader_ball");

function increaseCounter() {
  let counter = parseInt(this.dataset.counter);
  counter++;
  this.dataset.counter = counter;
  console.log("Counter", counter);
}
for (let i = 0; i < loaderBalls.length; i++) {
  let loaderBall = loaderBalls[i];
  loaderBall.dataset.counter = 0;
  loaderBall.addEventListener("click", increaseCounter);
}

export default increaseCounter;