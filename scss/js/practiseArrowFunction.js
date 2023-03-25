// function n+2
let add2 = (n) => n + 2;
console.log(add2(2))

console.log(1)



//function squrae n*n // simply arrow function

let square = (n) => n*n;
console.log(square(4))



// function for 2 to 10 square with for 
function squareLoop() {
  let result=[];
  for (let i=2;i<=20
    ;i++)
  {result.push(i*i)
  }
return result;

}
console.log(squareLoop());

// result spreed , not array
console.log(...squareLoop())



//Oto kilka przykładów prostych funkcji strzałkowych:
//Funkcja, która dodaje dwie liczby:

let add = (a, b) => a + b;
console.log(add(2, 3)); // wynik: 5


//Funkcja, która zwraca tekst powitalny dla danego użytkownika:
let greet = (name) => `Witaj, ${name}!`;
console.log(greet("Anna")); // wynik: "Witaj, Anna!"


//Funkcja, która zwraca true, jeśli podana liczba jest parzysta, lub false, jeśli jest nieparzysta:


let isEven = (num) => num % 2 === 0;
console.log(isEven(4)); // wynik: true
console.log(isEven(5)); // wynik: false



// hasDuplikate, znajdowania duplikatow. Deklaratywne/funkcyjne rozwiazanie problemu moze wygladac np. tak:
//(zakladamy Array Numerow) (dla Array z innymi danymi (zwlaszcza Obiektami Literalnymi) napisalibysmy troche inna funkcje)

const findDuplicates = (arr) => arr.reduce((acc, n, i, arr) => {   // redukujemy przekazany (INPUT) do innego array (OUTPUT)
    if (arr.filter(x => x === n).length > 1) {  // czy n ma chociaz jeden duplikat?
      return acc.includes(n) ? acc : [...acc, n];  // jesli n jest juz w akumulatorku, to nie zmieniamy nic (jesli nie, to dodajemy do acc)
    } else {
      return acc; // jesli n to nie duplikat, to zostawiamy akumulatorek w spokoju
    }
}, []);  // [] to startowa wartosc akumulatorka (a rowniez typ danych w OUTPUCIE, ktory zwrocimy z funkcji)



//n^2
function squareLoop() {
  let result=[];
  for (let i=2;i<=20
    ;i++)
  {result.push(i*i)
  }
return result;

}
console.log(squareLoop());

console.log(...squareLoop())

//  n^3
function cubeLoop() {
  let result = [];
  for (let i = 2; i <= 200; i++){
      result.push(i * i * i)
  } return result
}


console.log(cubeLoop());
console.log(...cubeLoop())


//n^4
function quaterLoop() {
  let result = [];
  for (let i = 2; i <= 20;i++)
  {
      result.push(i*i*i*i)
  }
  return result
}

console.log(quaterLoop());
console.log(...quaterLoop())

//

let minus = (b,a) => b-a;
console.log(minus(4,15))


//
let divide = (a,b) => a/b;
console.log(divide(0.51122112,4))


//
let addNbr= (x,y) => x+y;
console.log(addNbr(2, -3));

//

let welcomeGuest =(names) => (`Welcome ${names}`)
console.log(welcomeGuest("Maciek"))

//
const clients=['maciek','piotr','jan']
clients.push('anna')
console.log(clients);
console.log(...clients)

//
let welcomeHotel =(Surname) => (`Welcome Guest ${Surname} in Our Hotel `);

console.log(welcomeHotel("Kociemski"))

//

const numbers=[1,2,3,4,5,6,7,8,9];
const threshold = 15;

for(let i =0;i<numbers;i+=1){
  if(numbers[i]<threshold){continue;
  }
}
console.log(`number ${threshold} nie zawiera się w ${numbers}`)

