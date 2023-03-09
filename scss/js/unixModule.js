// Unix module

const init = Date.now();
const fromUnix = (unix) => new Date(unix);
const toUnix = (date) => Date.parse(date);

const Unix = { init, fromUnix, toUnix };

export default Unix;

console.log(Unix)