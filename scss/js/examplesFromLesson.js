const INTERVAL_TIME = 1000;
let timeLeft = 10000;

setInterval(() => {
  timeLeft - INTERVAL_TIME;
  renderUI();
}, INTERVAL_TIME);







const uniq = (arr) => [...new Set(arr)];




const init = Date.now();
const fromUnix = (unix) => new Date(unix);
const toUnix = (date) => Date.parse(date);

const Unix = { init, fromUnix, toUnix };

export default Unix;