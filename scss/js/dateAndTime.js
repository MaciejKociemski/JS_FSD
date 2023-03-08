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


for(let i=5;i>0;i--){
  const delay = i*1000;
  setTimeout(()=>console.log(i),delay)
}


const teamMeetingDate = new Date("March 16, 2030");
console.log(teamMeetingDate);
// "Mon Mar 16 2030 00:00:00 GMT+0200 (Eastern European Standard Time)"

const preciseTeamMeetingDate = new Date("March 16, 2030 14:25:00");
console.log(preciseTeamMeetingDate);
// "Mon Mar 16 2030 14:25:00 GMT+0200 (Eastern European Standard Time)"