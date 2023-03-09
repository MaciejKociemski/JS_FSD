// const container = document.getElementById("container");
const button = document.getElementById("createElementButton");

button.addEventListener('click',function (){console.log("klik")})


// Will run first
console.log("First log");

setTimeout(() => {
  // Will run last, after 2000 milliseconds
  console.log("Second log");
}, 2000);

// Will run second

console.log("Third log");

const date = new Date();

console.log(date);
// "Fri Jun 18 2021 15:01:35 GMT+0300 (Eastern European Summer Time)"

console.log(date.toString());

// "Fri Jun 18 2021 15:01:35 GMT+0300 (Eastern European Summer Time)"


console.log(new Date(0));
// "Thu Jan 01 1970 03:00:00 GMT+0300 (Eastern European Standard Time)"

console.log(new Date(15000));

// "Thu Jan 01 1970 03:00:15 GMT+0300 (Eastern European Standard Time)"


new Date("2030-03-16");
new Date("2030-03");
new Date("2018");
new Date("03/16/2030");
new Date("2030/03/16");
new Date("2030/3/16");
new Date("March 16, 2030");
new Date("March 16, 2030 14:25:00");
new Date("2030-03-16 14:25:00");
new Date("2030-03-16T14:25:00");
new Date("16 March 2030");

const date2 = new Date(2030, 2, 11, 14, 25, 0, 0);
console.log(date2);
// Sat Mar 16 2030 14:25:00 GMT+0200 (Eastern European Standard Time)




setInterval
setInterval;

console.log("A");
setTimeout(()=> console.log("B"),2*1000);
console.log("C")


for(let i=2;i>0;i--){
  const delay = i*1000;
  setTimeout(()=>console.log(i),delay)
}


const teamMeetingDate = new Date("March 16, 2030");
console.log(teamMeetingDate);
// "Mon Mar 16 2030 00:00:00 GMT+0200 (Eastern European Standard Time)"

const preciseTeamMeetingDate = new Date("March 16, 2030 14:25:00");
console.log(preciseTeamMeetingDate);
// "Mon Mar 16 2030 14:25:00 GMT+0200 (Eastern European Standard Time)"


const date3 = new Date();
console.log(date3.getDate());


new Date("2030-03-16");
new Date("2030-03");
new Date("2018");
new Date("03/16/2030");
new Date("2030/03/16");
new Date("2030/3/16");
new Date("March 16, 2030");
new Date("March 16, 2030 14:25:00");
new Date("2030-03-16 14:25:00");
new Date("2030-03-16T14:25:00");
new Date("16 March 2030");


const dateX = new Date();
console.log("Date: ", dateX);

// Zwraca dzień miesiąca od 1 do 31
console.log("getDate(): ", dateX.getDate());

// Zwraca dzień tygodnia od 0 do 6
console.log("getDay(): ", dateX.getDay());

// Zwraca miesiąc od 0 do 11
console.log("getMonth(): ", dateX.getMonth());

// Zwraca rok z 4 cyfr
console.log("getFullYear(): ", dateX.getFullYear());

// Zwraca godzinę
console.log("getHours(): ", dateX.getHours());

// Zwraca minuty
console.log("getMinutes(): ", dateX.getMinutes());

// Zwraca sekundy
console.log("getSeconds(): ", dateX.getSeconds());

// Zwraca milisekundy
console.log("getMilliseconds(): ", dateX. getMilliseconds());


console.log(Date.now());
console.log(Date.now());
console.log(Date.now());
console.log(Date.now());
console.log(Date.now());
console.log(Date.now());


const date10 = new Date("March 16, 2030 14:25:00");

console.log(date10.toString());
// "Sat Mar 16 2030 14:25:00 GMT+0200 (Eastern European Standard Time)"

console.log(date10.toTimeString(),date10.toLocaleTimeString,date10.toDateString);
// "14:25:00 GMT+0200 (Eastern European Standard Time)"

date10.toLocaleTimeString();
// "2:25:00 PM"

date10.toUTCString();
// "Sat, 16 Mar 2030 12:25:00 GMT"

date10.toDateString();
// "Sat Mar 16 2030"

date10.toISOString();
// "2030-03-16T12:25:00.000Z"

date10.toLocaleString();
// "3/16/2030, 2:25:00 PM"

date10.getTime();
// 1899894300000



// Unix module

const init = Date.now();
const fromUnix = (unix) => new Date(unix);
const toUnix = (date) => Date.parse(date);

const Unix = { init, fromUnix, toUnix };

export default Unix;

console.log(Unix)