

// Rozgałęzienia (if...else if...else)
    //Rozgałęzienia* - to instrukcje, które pozwalają na wykonanie różnych czynności zależnie od warunku
 
    // //Na przykład: 
    // - ~jeśli~ jesteś pełnoletni, to możesz kupić alkohol, ~w przeciwnym wypadku~ nie możesz
    // - ~jeśli~ jesteś pełnoletni, to możesz wziać ślubu,
    //   ~w przeciwnym wypadku~ ~jeśli~ masz pozwolenia rodziców i masz wiecej niz 15 lat, to też możesz,
    //   ~w przeciwnym wypadku~ nie możesz.
 
// *** Block if
//     #+begin_src js
      const NAME = 'Dawid';
 
      const whoAmI = 'Dawid';
 
      if (NAME === whoAmI) {
        console.log('I am Dawid');
      }
 
      if (NAME === whoAmI)
        console.log('I am Dawid');
      
//     #+end_src
 
//     #+results:
//     : I am Dawid
//     : I am Dawid
//     : undefined
     
  
// *** Block if...else
//     #+begin_src js
      const NAME2 = 'Dawid';

      const whoAmI2 = 'Dawid';

      if (NAME2 === whoAmI2) {
        console.log('I am bigDawid');
      } else {
        console.log('I am not bigDawid');
      }

//       /* if (NAME === whoAmI)
//         console.log('I am Dawid');
//       else
//         console.log('I am not Dawid'); */

//     #+end_src
 
//     #+results:
//     : I am Dawid
//     : undefined
     

// *** Block if...else if...else
//     #+begin_src js
//       const NAME = 'Dawid';
//       const NAME_TWO = 'Karolina';
 
//       const whoAmI = 'Dawid';
 
//       if (NAME === whoAmI) {
//         console.log('I am Dawid');
//       } else if (whoAmI === NAME_TWO) {
//         console.log('I am Karolina');
//       } else {
//         console.log('I am not Dawid, nor Karolina');
//       }
 
//       /* if (NAME === whoAmI)
//         console.log('I am Dawid');
//       else if (NAME === 'Dawid')
//         console.log('I am Karolina');
//       else
//         console.log('I am not Dawid, nor Karolina'); */

//     #+end_src
 
//     #+results:
//     : I am Dawid
//     : undefined
     
// *** Inline if (ternary operator)
//     #+begin_src js
//       const NAME = 'Dawid';
//       const NAME_TWO = 'Karolina';
 
//       const whoAmI = 'Dawid';
 
//       console.log(NAME === whoAmI ? "I'm Dawid" : "I'm not Dawid"); 

//     #+end_src

//     #+results:
//     : I'm Dawid
//     : undefined
     
// ** switch case
//     *switch case* - to instrukcja, która pozwala na wykonanie różnych czynności zależnie od warunku
//     która jest podana jako argument dla ~case~.
 
//     #+REVEAL: split

//     #+begin_src js 
//       const NAME = 'Dawid';
//       const NAME_TWO = 'Karolina';

//       const whoAmI = 'Dawid';

//       switch (whoAmI) {
//         case NAME:
//           console.log('I am Dawid');
//           break;
//         case NAME_TWO:
//           console.log('I am Karolina');
//           break;
//         default:
//           console.log('I am not Dawid, nor Karolina');
//       }

//     #+end_src

//     #+results:
//     : I am Dawid
//     : undefined
     
// ** Variable scope
//     *variable scope* - to zasięg zmiennych, czyli miejsce, w którym możemy użyć danej zmiennej.
//     Przy czym zmienna może byc dostępna tylko z wyższego poziomu do niższego poziomu.
    
//     Najczestszą granicą tych zasiegów są ~{}~.
 
//     #+REVEAL: split

//     #+begin_src js
//       const NAME = 'Dawid';

//       if (true) {
//         const oldName = 'Dawid';
//         const NAME = 'Karolina';
   
//         console.log(NAME, oldName); // Karolina Dawid
//       }
      
//       console.log(NAME); // Dawid

//       // console.log(oldName); // ReferenceError: oldName is not defined

//     #+end_src

//     #+RESULTS:
//     : Karolina Dawid
//     : Dawid
//     : undefined

// ** Cykle/Pętle
//     - *Cykl* - to instrukcja, która pozwala na wykonanie danego kodu wielokrotnie.
//     - *Iteracja* - to wykonanie danego kodu w ramach danego cyklu.
//     - *Warunek* - to warunek, który musi być spełniony, żeby dany cykl został wykonany.
//     - *Licznik* - to zmienna, która jest odpowiedzialna za przechowywanie aktualnej iteracji.
 
// *** while
//     #+begin_src js
//       let i = 0;

//       while (i < 10) {
//         console.log(i);
//         i++;
//       }

//     #+end_src

//     #+results:
//     #+begin_example
//     0
//     1
//     2
//     3
//     4
//     5
//     6
//     7
//     8
//     9
//     undefined
//     #+end_example
     
// *** do...while
//     #+begin_src js
//       let i = 0;

//       do {
//         console.log(i);
//         i++;
//       } while (i < 10);

//     #+end_src

//     #+results:
//     #+begin_example
//     0
//     1
//     2
//     3
//     4
//     5
//     6
//     7
//     8
//     9
//     undefined
//     #+end_example
     
// *** for loop
//     #+begin_src js
//       for (let i = 0, a = true; i < 10; i++) {
//         const a = true;
//         console.log(i);
//       }

//     #+end_src

//     #+results:
//     #+begin_example
//     0
//     1
//     2
//     3
//     4
//     5
//     6
//     7
//     8
//     9
//     undefined
//     #+end_example
// ** Ciekawostki
// *** Jak za pomoca petli sprawdzic ilość słów w zdaniu?
//     #+begin_src js
//       const TEXT = "O to jestem. ale mnie nie ma " // Tu definiujemy text jaki chcemy sprawdzać.
//       // Tu definiujemy co okresla koniec "sekfencji" którą chcemy liczyć,
//       // W naszym wypadku każde słowo kończy się spacją.
//       const DELIMITER = " ";

//       // Czyścimy wszystkie nie potrzebne znaki z słowa
//       let tempText = TEXT.trim();
//       let lastIndex = 0;
//       let numberOfWords = 0;
      
//       while (tempText.length && lastIndex !== -1) {
//         // Doliczamy kolejne słowo
//         numberOfWords++;
//         lastIndex = tempText.indexOf(DELIMITER);

//         // skracamy operacyjny tekst o 1 słowo + spacje zeby petla sie skonczyla
//         tempText = tempText.slice(lastIndex + 1);
//       }

//       console.log(`Numer of words ${numberOfWords}`);

//     #+end_src

//     #+results:
//     : 7
//     : undefined

//     #+REVEAL: split

//     #+begin_src js
//       const TEXT = "O to jestem. ale mnie nie ma " // Tu definiujemy text jaki chcemy sprawdzać.
//       // Tu definiujemy co okresla koniec "sekfencji" którą chcemy liczyć,
//       // W naszym wypadku każde słowo kończy się spacją.
//       const DELIMITER = " ";

//       if (!TEXT.trim().length) console.log(0);

//       for (
//         let tempText = TEXT.trim(), lastIndex = 0, count = 0;
//         tempText.length;
//         count+=1, lastIndex = tempText.indexOf(DELIMITER), tempText = tempText.slice(lastIndex + 1)
//       ) {
//         if (lastIndex === -1) {
//           console.log(count);
//           break;
//         }
//       }
//     #+end_src

//     #+RESULTS:
//     : 7
//     : undefined

//     #+REVEAL: split

//     #+begin_src js
//       const TEXT = "O to jestem. ale mnie nie ma " // Tu definiujemy text jaki chcemy sprawdzać.
//       // Tu definiujemy co okresla koniec "sekfencji" którą chcemy liczyć,
//       // W naszym wypadku każde słowo kończy się spacją.
//       const DELIMITER = " ";

//       // Przy użyciu wbudowanych narzedzi
//       console.log(TEXT.trim().split(DELIMITER).length)

//     #+end_src

//     #+RESULTS:
//     : 7
//     : undefined


//     //lekcja 3//

// // function checkStorage(available, ordered) {
// //     let message;
// //     // Change code below this line
    
  
// //   if (ordered === 0){
// //     message="There are no products in the order!"
//   }
//   else if (ordered > available){
//     message="Your order is too large, there are not enough items in stock!"
//   }
//   else {message="The order is accepted, our manager will contact you"
//        }
//       // Change code above this line
//     return message;
//   }
  
//   console.log(checkStorage(100, 50));
//   checkStorage(100, 130);
//   checkStorage(70, 0);
//   checkStorage(200, 20);
//   checkStorage(200, 250);
//   checkStorage(150, 0);
  
  

//   function getDiscount(totalSpent) {
//     const BASE_DISCOUNT = 0;
//     const BRONZE_DISCOUNT = 0.02;
//     const SILVER_DISCOUNT = 0.05;
//     const GOLD_DISCOUNT = 0.1;
//     let discount;
//     // Change code below this line
//   if (totalSpent >= 50000) {
//     discount = GOLD_DISCOUNT
//   } else if (totalSpent >= 20000)
//   {discount = SILVER_DISCOUNT}
//     else if (totalSpent >= 500) {
//         discount = BRONZE_DISCOUNT}
//     else{discount = BASE_DISCOUNT}
  
//     // Change code above this line
//     return discount;
//   }
  
//   getDiscount(137000);
//   getDiscount(46900);
//   getDiscount(8250);
//   getDiscount(1300);
//   getDiscount(5000);
//   getDiscount(20000);
//   getDiscount(50000);
  


//   let type;
//   const age=20;
//   if (age>=18){type="adult";}
//   else{type="child";}
//   console.log(type);


//   function getShippingCost(country) {
//     let message;
//     // Change code below this line
//   switch(country){
//     case "China":price = 100;
//       break;
//     case "Chile":price = 250;
//       break;
//     case "Australia":price = 170;
//       break;
//     case "Jamaica":price = 120;
//   break;
      
//       message =`Shipping to ${country} will cost ${price} credits`;
//     default: message = "Sorry, there is no delivery to your country"
//   }
//     // Change code above this line
//     return message;
//   }
  

//   const courseTopic = "JavaScript essentials";
// // Change code below this line

// const courseTopicLength = courseTopic.length;
// const firstElement = courseTopic[0];
// const lastElement = courseTopic[11];




// const MyName="Maciek";
// console.log(myName);
// let ma=123;
// console.log(ma);


// console.log(totalSpent)



// #+title: Listy i ich metody
// #+author: Dawid NPM8 Małysa
// #+options: timestamp:nil

// ** Listy (Arrays)
//    W JavaScript, listy, znane również jako tablica, służą do przechowywania wielu wartości w jednej zmiennej.
//    Możemy do nich dodawać nowe elementy, usuwać istniejące, a także odczytywać i modyfikować już istniejące elementy.

//    #+REVEAL: split

//    #+begin_src javascript
//     const cars = ["Saab", "Volvo", "BMW"];

//     console.log(cars[0]); // Saab
//     cars[0] = "Opel"
//     console.log(cars); // Opel, Volvo, BMW
//    #+end_src

//    #+REVEAL: split

//    #+begin_src javascript
//     const cars = ["Saab", "Volvo", "BMW"];
    
//     const lastElementIndex = cars.length - 1;
//     console.log(lastElementIndex); // 2
//     console.log(cars[lastElementIndex]); // BMW
//    #+end_src

// ** Iterowanie po liście

//    Iteracja to proces przejścia przez każdy element w danej kolekcji danych, takiej jak lista, i wykonanie określonej operacji na każdym z tych elementów.

//    #+REVEAL: split

//    #+begin_src javascript
//     const cars = ["Saab", "Volvo", "BMW"];

//     for (let i = 0; i < cars.length; i++) {
//         console.log(cars[i]);
//     }
//    #+end_src

//    #+REVEAL: split

//    #+begin_src javascript
//     const cars = ["Saab", "Volvo", "BMW"];

//     for (const car of cars) {
//         console.log(car);
//     }
//    #+end_src

// *** Benchmark

//    Która z pętli jest szybsza? Czy one w ogóle są szybkie? Dowiedzmy się!

//    [[https://jsben.ch/IQxsr][Wyniki]]


// ** Wartości i ich referencje
//    W JavaScript, kiedy przypisujemy jedną zmienną o wartości typu złożonego do drugiej, to przypisujemy referencję do tej zmiennej, a nie jej wartość.
//    Oznacza to, że obie zmienne wskazują na ten sam obiekt w pamięci.

//    #+REVEAL: split
   
//    #+begin_src javascript
//     const cars = ["Saab", "Volvo", "Ferrari"];
//     const cars2 = cars;

//     c = cars[0]

//     cars2[0] = "Opel";

//     cars.push("BMW");

//     console.log(cars); // Opel, Volvo, Ferrari, BMW 

//     console.log(c); // Saab

//    #+end_src

// ** Metody list
//    W JavaScript, listy mają wiele wbudowanych metod, które pozwalają na łatwe manipulowanie elementami listy.

//    #+REVEAL: split

//    #+begin_src javascript
//     const cars = ["Saab", "Volvo", "BMW"];

//     cars.push("Ferrari"); // Dodaje element na końcu listy
//     console.log(cars); // Saab, Volvo, BMW, Ferrari

//     const lastCar = cars.pop(); // Usuwa ostatni element z listy
//     console.log(cars); // Saab, Volvo, BMW
//     console.log(lastCar); // Ferrari

//     const doIHaveVolvo = cars.includes("Volvo"); // Sprawdza czy element znajduje się na liście
//     console.log(doIHaveVolvo); // true

//     const indexOfVolvo = cars.indexOf("Volvo"); // Zwraca indeks elementu na liście
//     console.log(indexOfVolvo); // 1

//     cars.shift(); // Usuwa pierwszy element z listy
//     console.log(cars); // Volvo, BMW

//     cars.unshift("Opel"); // Dodaje element na początku listy
//     console.log(cars); // Opel, Volvo, BMW

//     cars.splice(1, 0, "Ferrari"); // Dodaje element na indeksie 1
//     console.log(cars); // Opel, Ferrari, Volvo, BMW

//     cars.splice(1, 1); // Usuwa element na indeksie 1
//     console.log(cars); // Opel, Volvo, BMW

//     cars.reverse(); // Odwraca kolejność elementów w liście
//     console.log(cars); // BMW, Volvo, Opel

//     cars.sort(); // Sortuje elementy w liście
//     console.log(cars); // BMW, Opel, Volvo

//     const newCars = cars.concat(["Ferrari", "Saab"]); // Łączy dwie listy
//     console.log(newCars); // BMW, Opel, Volvo, Ferrari, Saab

//    #+end_src

// ** Ciekawostki
//    #+REVEAL: split

//    #+begin_src javascript
//     const cars = ["Saab", "Volvo", "BMW"];

//     cars[3] = "Ferrari"; // Dodaje element na indeksie 3
//     console.log(cars); // Saab, Volvo, BMW, Ferrari

//     cars[10] = "Ferrari"; // Dodaje element na indeksie 10
//     console.log(cars); // Saab, Volvo, BMW, Ferrari, undefined, undefined, undefined, undefined, undefined, undefined, Ferrari

//     cars[5] = "Ferrari"; // Dodaje element na indeksie 5
//     console.log(cars); // Saab, Volvo, BMW, Ferrari, undefined, Ferrari, undefined, undefined, undefined, undefined, Ferrari

//     cars[3] = undefined; // Usuwa element na indeksie 3
//     console.log(cars); // Saab, Volvo, BMW, undefined, undefined, Ferrari, undefined, undefined, undefined, undefined, Ferrari

//     cars[3] = null; // Dodaje element na indeksie 3
//     console.log(cars); // Saab, Volvo, BMW, null, undefined, Ferrari, undefined, undefined, undefined, undefined, Ferrari

//     cars[3] = 0; // Dodaje element na indeksie 3
//     console.log(cars); // Saab, Volvo, BMW, 0, undefined, Ferrari, undefined, undefined, undefined, undefined, Ferrari

//     cars[3] = ""; // Dodaje element na indeksie 3
//     console.log(cars); // Saab, Volvo, BMW, "", undefined, Ferrari, undefined, undefined, undefined, undefined, Ferrari

//     cars[3] = false; // Dodaje element na indeksie 3
//     console.log(cars); // Saab, Volvo, BMW, false, undefined, Ferrari, undefined, undefined, undefined, undefined, Ferrari

//    #+end_src

//    #+REVEAL: split

//    #+begin_src javascript
//     const cars = ["Saab", "Volvo", "BMW"];
//     cars.length = 0; // Usuwa wszystkie elementy z listy
    
//     console.log(cars); // []
    
//     cars.length = 5; // Dodaje 5 elementów o wartości undefined do listy
    
//     console.log(cars); // [undefined, undefined, undefined, undefined, undefined]
//    #+end_src
const cars = ["Saab", "Volvo", "BMW"];

console.log(cars[0]); // Saab
cars[0] = "Opel"
cars.push("audi");
cars.push("dacia","hhhh",'bmw')
console.log(cars[cars.length - 1]);
cars.slice=(1,2)
console.log(cars[1])
console.log(cars); // Opel, Volvo, BMW


const lastElementIndex = cars.length - 1;
console.log(lastElementIndex); // 2
console.log(cars[lastElementIndex]); // BMW
console.log(cars[cars.length-1])//last element in string
cars.push("fiat");

//iterowanie //

for (let i = 0; i < cars.length; i++) {
    console.log(cars[i]);
}

for (const car of cars) {
    console.log(cars);
} 

const cars2 = cars;

c = cars[0]

cars2[0] = "Opel";

cars.push("BMW");

// console.log(cars); // Opel, Volvo, Ferrari, BMW 

// console.log(c); // Saab


const lastCar = cars.pop(); // Usuwa ostatni element z listy
cars.push("ferrari");
console.log(cars); // Saab, Volvo, BMW
console.log(lastCar) // Ferrari

const doIHaveVolvo = cars.includes("Volvo"); // Sprawdza czy element znajduje się na liście
const doIHaveBmw = cars.includes("Bmw");
console.log(doIHaveVolvo); // true
console.log(doIHaveBmw);

cars.shift(); // Usuwa pierwszy element z listy
console.log(cars); // Volvo, BMW

let x=3;
cars.splice(x, 0, "mini moris" );
console.log(cars);

cars.reverse();
console.log(cars);

cars.sort();
console.log(cars);


cars.length = 100;
console.log(cars);
cars.reverse();
console.log(cars);


// zajecia nr 4


function multiply(){console.log("log podczas wywolywania funkcji");}
multiply();

function multiply(x,y,z)
{console.log(`wynik mnnozenia to ${x*y*z}`);}
multiply(2,3,4)
multiply(49,49,49)

function multiply(x, y, z) {
    console.log("Kod przed return jest wykonywany jak zwykle");
  
    // Zwracamy wynik wyrażenia mnożenia
    return x * y * z;
  
    console.log("Ten log nigdy nie zostanie wywołany, jest po return");
  }
  
  // Wynik funkcji można zapisać do zmiennej
  let result = multiply(2, 3, 5);
  console.log(result); // 30
  
  result = multiply(4, 8, 12);
  console.log(result); // 384
  
  result = multiply(17, 6, 25);
  console.log(result); // 2550



  function multiply(x, y, z) {
    console.log(`Wynikiem mnożenia jest ${x * y * z}`);
  }
  
  console.log("Log przed wywołaniem funkcji multiply");
  multiply(2, 3, 5); // Wynikiem mnożenia jest 30
  console.log("Log po wywołaniu funkcji multiply");
  
  // Kolejność logów w konsoli
  // "Log przed wywołaniem funkcji multiply"
  // "Wynikiem mnożenia jest 30"
  // "Log po wywołaniu funkcji multiply"

  function count(countFrom = 0, countTo = 100, step = 10) {
    console.log(`countFrom = ${countFrom}, countTo = ${countTo}, step = ${step}`);
  
    for (let i = countFrom; i <= countTo; i += step) {
      console.log(i);
    }
  }

  
  count(1, 5); // countFrom = 1, countTo = 5, step = 1
  count(2); // countFrom = 2, countTo = 10, step = 1
  count(); // countFrom = 0, countTo = 10, step = 1


function multiply() {
  let total = 1;

  for (const argument of arguments) {
    total *= argument;
  }

  return total;
}

console.log(multiply(1, 2, 3)); //  6
console.log(multiply(1, 2, 3, 4)); //  24
console.log(multiply(1, 2, 3, 4, 5)); //  120


function withdraw(amount, balance) {
    if (amount === 0) {
      console.log("Dla operacji wprowadź kwotę większą od zera");
    } else if (amount > balance) {
      console.log("Za mało środków na koncie");
    } else {
      console.log("Operacja wypłaty powiodła się");
    }
  }
  
  withdraw(100, 300); // "Dla operacji wprowadź kwotę większą od zera"
  withdraw(500, 300); // "Za mało środków na koncie"
  withdraw(100, 300); // "Operacja wypłaty powiodła się"




  function withdraw(amount, balance) {
    // Jeśli warunek jest wykonany, wywoływany jest console.log
    // i wyjście z funkcji. Kod następujący po ciele if nie zostanie wykonany.
    if (amount === 0) {
      console.log("Dla operacji wprowadź kwotę większą od zera");
      return;
    }
  
    // Jeśli warunek pierwszego if nie jest wykonany, jego ciało jest pomijane
    // a interpreter przechodzi do drugiego if.
    // Jeśli warunek jest wykonany, wywoływany jest console.log i wyjście z funkcji.
    // Kod następujący po ciele if nie zostanie wykonany.
    if (amount > balance) {
      console.log("Za mało środków na koncie");
      return;
    }
  
    // Jeśli żaden z poprzednich if nie został wykonany,
    // interpreter dostaje się do tego kodu i wykonuje go.
    console.log("Operacja wypłaty zakończona");
  }
  
  withdraw(0, 300); // "Dla operacji wprowadź kwotę większą od zera"
  withdraw(500, 300); // "Za mało środków na koncie"
  withdraw(100, 300); // "Operacja wypłaty zakończona"



  // ✅ Wywołanie działa przed deklaracją
multiply(1, 2, 3);

function multiply(x, y, z) {
  console.log(`Wynikiem mnożenia jest ${x * y * z}`);
}

// ✅ Wywołanie działa po deklaracji
multiply(4, 5, 6);



const globalValue = 10;

console.log(globalValue); // 10

function foo() {
  console.log(globalValue); // 10
}

for (let i = 0; i < 5; i++) {
  console.log(globalValue); // 10

  if (i === 4) {
    console.log(globalValue); // 10
  }
}



for (let i = 0; i < 5; i++) {
    const a = 20;
    console.log(a); // 20
  
    if (i === 2) {
      const b = 30;
      console.log(a); // 20
      console.log(b); // 30
    }
  
    if (i === 3) {
      console.log(a); // 20
  
      // ❌ Błąd! Zmienna b nie jest dostępna w tym zakresie
      console.log(a);
    }
  }


  function fnA() {
    console.log("Log wewnątrz funkcji fnA przed wywołaniem fnB");
    fnB();
    console.log("Log wewnątrz funkcji fnA po wywołaniu fnB");
  }
  
  function fnB() {
    console.log("Log wewnątrz funkcji fnB");
  }
  
  console.log("Log przed wywołaniem fnA");
  fnA();
  console.log("Log po wywołaniu fnA");
  
  // "Log przed wywołaniem fnA"
  // "Log wewnątrz funkcji fnA przed wywołaniem fnB"
  // "Log wewnątrz funkcji fnB"
  // "Log wewnątrz funkcji fnA po wywołaniu fnB"
  // "Log po wywołaniu fnA"



  console.log(cars);

  const ices=['bambino','marvel','magnum','toystory']
  console.log(ices);
  console.log[ices.length];
  console.log
  ices.indexOf['marvel']
  ices.push("bambini");
  console.log(ices);

console.log([3,5,12,7,4].includes(2));
console.log([3,5,12,7,4].includes(2));
console.log(["JS","is","awsome!"].join(" "));
console.log([2,4,6].concat([1,3],[5],[7,8,9]));

const arr=[1,5,3,9,3];
console.log(arr.indexOf(3));
console.log(arr.indexOf(9));
console.log(arr.includes(3));
console.log(arr.includes(1));
console.log(arr.includes(2));
console.log(arr.includes(4));

arr.concat([1,1,2]);
console.log(arr.concat([1,2,3,4]));


console.log([1,2,3]!==[1,2,3]);
console.log([1,2,3]!==[1,2,3]);

// zajęcia 4  FUNKCJE

//button dodający cos do htmla 
function areaArraysEqual(){};

 const container = document.getElementById("container");
 const button = document.getElementById("header__btn");
 const button2 = document.getElementById("header__btn");

 button.addEventListener(`click`,function(){
  console.log("dodaje element...",Date.now());
 });
//

function checkPassword(password) {
  const ADMIN_PASSWORD = "jqueryismyjam";
  // Change code below this line

  let message;

  if (password === ADMIN_PASSWORD) {
    message = "Welcome!";
  } else {
    message = "Access denied, wrong password!";
  }

  return message;
  // Change code above this line
}



console.log(checkPassword("jqueryismyjam"));
console.log(checkPassword(" "));




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





// const apartment = {
//   imgUrl: "https://via.placeholder.com/640x480",
//   descr: "Spacious apartment in the city center",
//   rating: 4,
//   price: 2153,
//   tags: ["premium", "promoted", "top"]
// },
  
//   owner = {
//   name: "Henry",
//   phone: "982-126-1588",
//   email:"henry.carter@aptmail.com",
// };
    
// console.log(apartment);
// console.log(owner);




function checkStorage(available, ordered) {
  // Change code below this line
  let message;

  if (ordered === 0) {
    return "Your order is empty!";
  } 
  if (ordered > available) {
    return "Your order is too large, not enough goods in stock!";
  } 
  if (ordered<available){
  return "The order is accepted, our manager will contact you";
  }
}
  
  // Change code above this line

console.log(checkStorage(100,50));
console.log(checkStorage(100,130));
console.log(checkStorage(70,0));
console.log(checkStorage(200,20));
console.log(checkStorage(200,250));
console.log(checkStorage(150,0));
console.log(" ")
console.log(" ")
console.log(" ")
console.log(" ")
console.log(" ")
console.log(" ")
console.log(" ")
console.log(" ")





const fruits = ["apple", "plum", "pear", "orange"];
console.log(fruits[2]);


const name = "Mango";
console.log(name.split("")); // ["M", "a", "n", "g", "o"]



for (let i = 1; i < 4; i++) {
  console.log("Ala ma kota");
}
console.log("Ala ma kota");




for (let i = 1; i < 4; i++) {
  console.log("Ala ma kota");
}




function calculateTotalPrice(order) {
  let total = 0;
  // Change code below this line
for (let i = 0; i <= order.length; i+= 1) {
  total += i;
                             }
  // Change code above this line
  return total
}

console.log(calculateTotalPrice(12,85,37,4));




const planets=["Earth","Mars","Venus"];
planets.push("JUPITER");
planets.push("Saturn","Uranus","Neptune");
console.log(planets);


console.log(planets.includes("Earth"))


function checkFruit(fruit) {
  const fruits=["apple","plum","pear","orange"];
console.log(fruits.includes(fruit));
  return;
}

console.log(checkFruit("apple"))
console.log(checkFruit("apple"))
console.log(checkFruit("apple"))
console.log(checkFruit("aple"))

const a=12%7;
console.log(a)



function getEvenNumbers(start, end){getEvenNumbers(2,5)}


let people={name:"Jacek",yearsOld:20,city:"Poznan"}
console.log(people)

for(let objectItem in people){console.log(people[objectItem])};
for(let objectItem in people){console.log(objectItem)};

for(let objectItem in people){console.log((objectItem),people[objectItem])};






const apartment = {
  imgUrl: "https://via.placeholder.com/640x480",
  descr: "Spacious apartment in the city center",
  rating: 4,
  price: 2153,
  tags: ["premium", "promoted", "top"],

}
let owner =  {
  name: "Henry",
  phone: "982-126-1588",
  email: "henry.carter@aptmail.com",
}


console.log(apartment);
console.log(owner,apartment);


const book = {
  title: "Ostatnie królestwo",
  author: "Bernard Cornwell",
  genres: ["proza ​​historyczna", "przygody"],
  public: true,
  rating: 8.38,
};

console.log(book);


const user = {
  name: "Jacques Gluke",
  tag: "jgluke",
  location: {
    country: "Jamaica",
    city: "Ocho Rios",
  },
  stats: {followers: 5603,
    views: 4827,
    likes: 1308,

  },};
  console.log(user);



  const apartment2 = {
    imgUrl: "https://via.placeholder.com/640x480",
    descr: "Spacious apartment in the city center",
    rating: 4,
    price: 2153,
    tags: ["premium", "promoted", "top"],
  
  owner: {
    name: "Henry",
    phone: "982-126-1588",
    email: "henry.carter@aptmail.com",

  other: {
    color: "Black",
    surname: "podpolski",
  }
  },
    };
  
    console.log(apartment2);

  

    const book2 = {
      title: "Ostatnie królestwo",
      author: "Bernard Cornwell",
      genres: ["proza ​​historyczna", "przygody"],
      public: true,
      rating: 8.38,
    };
    
    const bookTitle = book2.title;
    console.log(bookTitle); // "Ostatnie królestwo"
    
    const bookGenres = book2.genres;
    console.log(bookGenres); // ["proza ​​historyczna", "przygody"]



    const apartment3 = {
      imgUrl: "https://via.placeholder.com/640x480",
      descr: "Spacious apartment in the city center",
      rating: 4,
      price: 2153,
      tags: ["premium", "promoted", "top"],
      owner: {
        name: "Henry",
        phone: "982-126-1588",
        email: "henry.carter@aptmail.com",
      },
    };
    
    // Change code below this line
    const ownerName = apartment3.name;
    const ownerPhone = apartment3.phone;
    const ownerEmail = apartment3.email;
    const numberOfTags = apartment3;
    const firstTag = apartment3;
    const lastTag = apartment3.tags;
    // Change code above this line
    

    console.log(ownerName);


    var string="Witaj worldzie";
    console.log(string.length)

    const apartment4 = {
      imgUrl: "https://via.placeholder.com/640x480",
      descr: "Spacious apartment in the city center",
      rating: 4,
      price: 2153,
      tags: ["premium", "promoted", "top"],
      owner: {
        name: "Henry",
        phone: "982-126-1588",
        email: "henry.carter@aptmail.com",
      },
    };
    
    // Change code below this line
    apartment4.tags.push(["premium", "promoted", "top", "trusted"]),
    apartment4.rating = 7.7,
   apartment4.price= 5000,
    // apartment.name.push("Henry Sibola");

console.log(apartment4);

const person = {};
const person2 = new Object();






