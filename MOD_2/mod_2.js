//mod 2 1/32

function checkAge(age) {
    if (age>=18) { // Change this line
      return "You are an adult";
    }
  
    return "You are a minor";
  }
  
  //mod 2 2/32
  
  function checkPassword(password) {
    const ADMIN_PASSWORD = "jqueryismyjam";
    // Change code below this line
  
    if (password === ADMIN_PASSWORD) {
      return ("Welcome!");
    
    }
    return ("Access denied, wrong password!");
    };
    
  
    // Change code above this line
  
  console.log(checkPassword("mangohackzor"));
  console.log(checkPassword("dasda"));
  console.log(checkPassword("jqueryismyjam"));
  
  //mod 2 3/32
  
  function checkStorage(available, ordered) {
    // Change code below this line
    
  
    if (ordered === 0) {
      return "Your order is empty!";
    } 
    if (ordered > available) {
      return "Your order is too large, not enough goods in stock!";}
    
    return "The order is accepted, our manager will contact you";
    }
  
    
    // Change code above this line
  
  console.log(checkStorage(100,50));
  console.log(checkStorage(100,130));
  console.log(checkStorage(70,0));
  console.log(checkStorage(200,20));
  console.log(checkStorage(200,250));
  console.log(checkStorage(150,0));
  
  //mod 2 4/32
  
  // Change code below this line
  const fruits2 = ["apple", "plum", "pear", "orange"];
  
  //mod 2 5/32
  
  const fruits3 = ["apple", "plum", "pear", "orange"];
  const firstElement=fruits[0];
  const secondElement=fruits[1];
  const lastElement=fruits[3];
  
  // Change code below this line
  console.log(fruits3[0]);
  
  //mod 2 6/32
  
  const fruits4 = ["apple", "plum", "pear", "orange"];
  
  // Write your code under this line
  fruits4[1]="peach";
  
  fruits4[3]="banana";
  
  
  console.log(fruits4);
  
  //mod 2 7/32
  
  const fruits5 = ["apple", "peach", "pear", "banana"];
  const fruitsArrayLength=fruits5.length;
  // Change code below this line
  console.log(fruits5.length)
  
  
  //mod 2 8/32
  
  const fruits6 = ["apple", "peach", "pear", "banana"];
  
  const lastElementIndex2=fruits6.length-1;
  const lastElement1=fruits6[lastElementIndex2];
  // Change code below this line
  
  
  //mod 2 9/32
  
  function getExtremeElements(array) {
    // Change code below this line
  const firstElement=array[0];
    const lastElementIndex = array.length-1;
    const lastElement =  array[lastElementIndex];
    result = [firstElement, lastElement]
  
    // Change code above this line
    return result;
  }
  
  //mod 2 10/32
  
  function splitMessage(message, delimiter) {
    let words;
    // Change code below this line
  words=message.split(delimiter);
    // Change code above this line
    return words;
  }
  
  //mod 2 11/32
  
  function calculateEngravingPrice(message, pricePerWord) {
    // Change code below this line
  const wordCount =message.split(" ").length;
  const totalPrice =wordCount * pricePerWord;
  
  
   return totalPrice
  
    // Change code above this line
  }
  
  //mod 2 12/32
  
  function makeStringFromArray(array, delimiter) {
    let string;
    // Change code below this line
  string = array.join(delimiter);
  
  
    // Change code above this line
    return string;
  }
  
  //mod 2 13/32
  
  function slugify(title) {
    // Change code below this line
  let slug;
    slug = title.split(" ").join("-").toLowerCase();
    
  
  return slug;
    // Change code above this line
  }
  
  console.log(slugify("Arrays for begginers"))
  
  //mod 2 14/32
  
  const fruits7 = ['apple', 'plum', 'pear', 'orange', 'banana'];
  
  // Change code below this line
  const firstTwoEls = (fruits7.slice(0,2));
  const nonExtremeEls = (fruits7.slice(1,4));
  const lastThreeEls = (fruits7.slice(2,5));
  
  
  //mod 2 15/32
  
  const oldClients = ['Mango', 'Ajax', 'Poly', 'Kiwi'];
  const newClients = ['Peach', 'Houston'];
  
  const allClients = oldClients.concat(newClients); // Change this line
  
  //mod 2 16/32
  
  function makeArray(firstArray, secondArray, maxLength) {
    // Change code below this line
  
  return firstArray.concat(secondArray).slice(0,maxLength);
  
    // Change code above this line
  }
  
  //mod 2 17/32
  
  
  const startOne = 3;
  const endOne = 7;
  
  for (let i = startOne; i <= endOne ; i += 1) { 
    console.log(i);
  }
  
  //mod 2 18/32
  
  function calculateTotal(number) {
    // Change code below this line
   
   const start =0;
     let suma = 0;
     for(let i = start;i <= number; i+= 1){suma +=i;}
   
     // Change code above this line
     return suma;
   }
  
   
   //mod 2 19/32
  
   const fruits9 = ['apple', 'plum', 'pear', 'orange'];
  
  for (let i = 0 ; i < fruits9.length; i+=1) { // Change this line
    const fruit5 = fruits9[i]; // Change this line
    console.log(fruit5);
  }
  
  //mod 2 20/32
  
  function calculateTotalPrice(order) {
    let total = 0;
    // Change code below this line
  for(let i = 0; i < order.length; i+=1) {
    total += order[i];
                               }
    // Change code above this line
    return total;
  }
  
  //mod 2 21/32
  
  function findLongestWord(string) {
    // Change code below this line
  let newArray = string.split(' ');
    let maxWord = ' ';
    for (let i = 0; i < newArray.length; i++){
      if(newArray[i].length > maxWord.length){
        maxWord = newArray[i]
      }
    }
  return maxWord;
    // Change code above this line
  }
  
  //mod 2 22/32
  
  function createArrayOfNumbers(min, max) {
    const numbers = [];
    // Change code below this line
  for (let i = min; i <= max; i+=1){
    numbers.push(i);
  }
    // Change code above this line
    return numbers;
  }
  
  //mod 2 23/32
  
  function filterArray(numbers, value) {
    // Change code below this line
  let filter=[]
   for (let i =0; i < numbers.length; i++)
   if (numbers[i] > value) {filter.push(numbers[i]);
                          }
  
  return filter
   // Change code above this line
  }
  
  //mod 2 24/32
  
  function checkFruit(fruit) {
    const fruits = ["apple", "plum", "pear", "orange"];
  return fruits.includes(fruit);
   
    return false; // Change this line
  }
  
  //mod 2 25/32
  
  function getCommonElements(array1, array2) {
    // Change code below this line
  let newArray = [];
  for(let i=0;i < array1.length+1;i++){
    if(array2.includes(array1[i])) {
      newArray.push(array1[i])
    }
  }
            return newArray
    
  
  
   // Change code above this line
  }
  
  
  //mod 2 26/32
  
  function calculateTotalPrice(order) {
    let total = 0;
    // Change code below this line
    for (const orderElement of order) {
      total += orderElement;
    }
    // Change code above this line
    return total;
  }
  
  console.log(calculateTotalPrice([12,85,37,4]));
  console.log(calculateTotalPrice([164, 48, 291]));
  console.log(calculateTotalPrice([412, 371, 94, 63, 176]));
  console.log(calculateTotalPrice([]));
  
  //mod 2 27/32
  
  function filterArray(numbers, value) {
    // Change code below this line
    const filteredNumbers = [];
  
    for (const number of numbers ) {
     
  
      if (number > value) {
        filteredNumbers.push(number);
      }
    }
  
    return filteredNumbers;
    // Change code above this line
  }
  
  //mod 2 28/32
  
  // Change code below this line
  const a = 3 % 1;
  const b = 4 % 3;
  const c = 11 % 4;
  const d = 12 % 7 ;
  const e = 8 % 3;
  
  
  //mod 2 29/32
  
  function getEvenNumbers(start, end) {
    // Change code below this line
  
  let newArray=[]
   for(let i=start;i<=end;i++){if (i%2===0){ newArray.push(i)}}
  
     // Change code above this line
   return newArray;
   }
  
   //mod 2 30/32
  
   const start = 6;
  const end = 27;
  let number;
  
  for (let i = start; i < end; i += 1) {
    if (i % 5 === 0) {
      number = i;
      break
    }
  }
  
  //mod 2 31/32
  
  function findNumber(start, end, divisor) {
    // Change code below this line
    let number;
  
    for (let i = start; i < end; i += 1) {
      if (i % divisor === 0) {
        number = i;
      return i;
      }
    }
  
    return number;
    // Change code above this line
  }
  
  console.log(findNumber(2,6,5));
  console.log(findNumber(8, 17, 3));
  console.log(findNumber(6, 9, 4));
  console.log(findNumber(16, 35, 7));
  
  //mod 2 32/32
  
  function includes(array, value) {
    // Change code below this line
  for (const index of array){
    if(index===value){
      return true;
                        }}
    
      return false
    
  
    // Change code above this line
  }
  
  