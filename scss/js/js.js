

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

// console.log(calculateTotalPrice(12,85,37,4));




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

const ab=12%7;
console.log(ab)



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


const book12 = {
  title: "Ostatnie królestwo",
  author: "Bernard Cornwell",
  genres: ["proza ​​historyczna", "przygody"],
  public: true,
  rating: 8.38,
};

console.log(book12);


const userNew = {
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
  console.log(userNew);



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

const person = {
  name: 'Jakub',
  lastName: 'Buskiewicz',
  skills:[],
  learn(skill) {
    person.skills.push(skill);
  }
};
const person2 = new Object();





let test="tekst";
console.log(test);

test.concat("jaja");
console.log(test);


const name2 = "Repair Droid";
const price = 2500;
const image = "https://via.placeholder.com/640x480";
const tags = ["on sale", "trending", "best buy"];

const product = {name2,
                 price,
                 tags,
                 image 
                };
  
console.log(product);




// zjaecia wtorek 17 


const init = (id, name) => ({id, name});
const editUserName = (oldUser, name) => ({...oldUser, name});



// ✅ Logicznie i syntaktycznie pogrupowane encje
const bookShelf = {
  books: ["The Last Kingdom", "Dream Guardian"],

  getBooks() {
    console.log(this.books);
  },

  addBook(bookName) {
    console.log("Ta metoda doda nową książkę do właściwości books");
  },
};

// Wywołania metod
bookShelf.getBooks();
bookShelf.addBook("Nowa książka");
let user2=init(1,"Maggie");
let user3 = editUserName(user2, "Maggie Wesolowska");


user2
console.log(user2);
console.log(user3);

console.log(user2,user3);
editUserName;

const books11 = [
  {
    title: "The Last Kingdom",
    author: "Bernard Cornwell",
    rating: 8.38,
  },
  {
    title: "Beside Still Waters",
    author: "Robert Sheckley",
    rating: 8.51,
  },
  {
    title: "Sen śmiesznego człowieka",
    author: "Fiodor Dostojewski",
    rating: 7.75,
  },
];


let totalRating = 0;

for (const book of books11) {
  totalRating += book.rating;
}
const averageRating1 = (totalRating / books.length).toFixed(1);
console.log(averageRating1);

console.log(book.title)




const o={
  a:1,
  b:2,
  c:3};

const name5="c"
console.log(o[name5]);
console.log(o["a"]);
console.log(o["b"]);
console.log(o["c"]);

console.log(person2.age)






function sumNumbers(a,b, ...args){
  let sum = a+b;
  for(const number of args) sum += number;
  return sum;
  console.log(args);
}
console.log(sumNumbers(1,2,3,4,5,6,7,8,9,10,11,12,13,14));



function countProps(object){
  let propCount =0;
  for (let key in object ){
    if(object.hasOwnProperty(key)){
      console.log(key);
      console.log(countProps[key])
    }
  }

  return propCount++;
}
console.log(countProps({}));
console.log(countProps({name:"Maciek",age:50}));

const prolet = [
  { name: "Radar", price: 1300, quantity: 4 },
  { name: "Scanner", price: 2700, quantity: 3 },
  { name: "Droid", price: 400, quantity: 7 },
  { name: "Grip", price: 1200, quantity: 9 },
];

function getProductPrice(productName) {
  
let newElement=null
  for(const product of products){
    if(productName === product.name){
      newElement = product.price;
    }
  }

return newElement;

}

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



//mod 3 19/41

// const products = [
//   { name: "Radar", price: 1300, quantity: 4 },
//   { name: "Scanner", price: 2700, quantity: 3 },
//   { name: "Droid", price: 400, quantity: 7 },
//   { name: "Grip", price: 1200, quantity: 9 },
// ];

// function getAllPropValues(propName) {
 // Change code below this line
// let newArr = []
//   for(let product of products){
//     if(product[propName]) {
//       newArr.push(product[propName]);
//     }
//   }

// return newArr
   // Change code above this line
// }



//mod 3 20/41

//mod 3 19/41

// const products = [
//   { name: "Radar", price: 1300, quantity: 4 },
//   { name: "Scanner", price: 2700, quantity: 3 },
//   { name: "Droid", price: 400, quantity: 7 },
//   { name: "Grip", price: 1200, quantity: 9 },
// ];

// function getAllPropValues(propName) {
 // Change code below this line
// let newArr = []
//   for(let product of products){
//     if(product[propName]) {
//       newArr.push(product[propName]);
//     }
//   }

// return newArr
   // Change code above this line
// }



//mod 3 20/41


//////////////////////////////
// Tablice obiektów przykłady 

const booksS=[{title: "The Last Kingdom",
author: "Bernard Cornwell",
rating: 8.38,
},
{
title: "Beside Still Waters",
author: "Robert Sheckley",
rating: 8.51,
},
{
title: "Sen śmiesznego człowieka",
author: "Fiodor Dostojewski",
rating: 7.75,
},
];
console.log(booksS);
console.log(booksS.author);

for(const book of booksS){
  // console.log(book);
  console.log(book.title);
  console.log(book.author);
  console.log(book.rating)
}

const bookNames = [];
console.log(bookNames);
for (const book of booksS){
  bookNames.push(book.title);

}
console.log(bookNames);
let totalRating2 = 0;
for(const book of booksS){
  totalRating += book.rating
}

const averageRating2 = (totalRating/ booksS.length).toFixed(4);
console.log(averageRating2)

////////////////////tasks from conspect//////


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
console.log(findLongestWord("The quick brown fox jumssd over the lazy dog"));
console.log(findLongestWord("The quick brown fox jumssd over the lazy dog"));
console.log(findLongestWord("The quick brown fox jumssd over the lazy dog"));

console.log(findLongestWord("mac","ja"));


const books=[{title: "The Last Kingdom",
author: "Bernard Cornwell",
rating: 8.38,
},
{
title: "Beside Still Waters",
author: "Robert Sheckley",
rating: 8.51,
},
{
title: "Sen śmiesznego człowieka",
author: "Fiodor Dostojewski",
rating: 7.75,
},
];
console.log(books);
console.log(books.author);

for(const book of books){
  // console.log(book);
  console.log(book.title);
  console.log(book.author);
  console.log(book.rating)
}

const bookNames1 = [];
console.log(bookNames1);
for (const book of books){
  bookNames1.push(book.title);

}
console.log(bookNames);
let totalRating3 = 0;
for(const book of books){
  totalRating3 += book.rating
}

const averageRating = (totalRating/ books.length).toFixed(4);
console.log(averageRating)

const book = {
title: "The Last Kingdom",
author: "Bernard Cornwell",
genres: ["historical prose", "adventure"],
rating: 8.38,};
for(const keys in book){


console.log(book[book]);
console.log(book)
;
}

const user ={ email: "mango@mail.com",
age: 20, 
location: {lat:10,lon:20},
};
const {
  location: {
    lat,lon}} = user;
    console.log(lat, lon)


    function foo({username} ={}) {
      console.log(username);

    }
    foo();

    const values=[10,3,17,84,12,6];
    const min = Math.min(...values);
    console.log(min)

    const arr1 =[1,2,3,4,5];
    const arr2 = [...arr1];
    console.log(arr1 === arr2);
    

const firstObject = {A: 1, B:2};
const secondObject = {A:3, C:4};
const thirdObject = {A: 5, ...firstObject, ...secondObject,C:6};
const fourthObject ={...firstObject, B:11, ...secondObject, ...thirdObject}

console.log(thirdObject);
console.log(fourthObject)

const bookShelf2 = {
  // Change code below this line
  books: ["The last kingdom", "The guardian of dreams"],
  getBooks() {
    return "Returning all books";
  },
  addBook(bookName) {
    return `Adding book ${bookName}`;
  },
};

const bookForMe ={ 
  title: "Ostatni samuraj",
  author: "Jan Kochanowski",
  price: "50zł",
}

const bookForMeNow = bookForMe.price;
console.log(bookForMeNow)
console.log(bookForMe);
console.log(bookForMe.title)
console.log(bookForMe.author)
console.log(bookForMe.price)

console.log(bookForMe)
console.log(undefined)

for (key1 in bookForMe){
  console.log(key1);
}




const notebook = {
  title: "The Last Kingdom",
  author: "Bernard Cornwell",
  genres: ["historical prose", "adventure"],
  isPublic: true,
  rating: 8.38,
};

for (const key in notebook){ 
  console.log(key);
}

for(const element in notebook){ console.log(element);}

for(const note in notebook){ console.log(note.length);

}

for (const rate in notebook){ console.log(Math.max(rate === notebook.rating))};

for(const name in notebook) {
  // return name;
  console.log(name);
}

for (const some in notebook){console.log(some)};

for(const me in notebook){console.log(me.length)}

////////////////////////////////
//metoda Object.values 
// const goods = {
//   apples: 6,
//   grapes: 3,
//   bread: 4,
//   cheese: 7,
// };

// const values = Object.values(goods);

// let total = 0;
// for(const value of values){
//   total += value;
// }
// console.log(total)
//--------------------------------------//

//mod 3 34/41


//callback - funkcje wywołania zwrotnego 


function greet(name){
  return `Pozdrawiam ${name}`;

}

console.log(greet('Mango')
);

console.log(greet);
console.log(greet());




function modul1(callback){
  //pobieramy dane z serwera...
  const data = [{},{}];
  // jezeli mamy dane z serwera tj true
  console.log(callback)
  if (data.length){
callback(data);
  }
}

modul1(logArrayToConsole);


///////// prosta funkcja sumy dwóch liczb


function sumTwoNumbers(a,b){return a+b};
console.log(sumTwoNumbers(2,5));

//


function modul1WithTwoCallbacks(succesCallback, errorCallback){
  //pobieramy dane z serwera...
  const data = [{id:1, data:[] },{id:2, data: []},{},{},{}
];
  // jezeli mamy dane z serwera tj true
  // console.log(callback)
  if (data.length){
succesCallback(data);
  } else {
    errorCallback('wystapil blad pobierania danych');
  }
}

modul1(logArrayToConsole);
console.log(modul1WithTwoCallbacks);




// function sumTwoNumbers(a,b){return a+b};
// console.log(sumTwoNumbers(2,5));

[].map(()=> {})


///////mod 4 callback i funkcje strzałkowe

// function processCall(recipient) {
//   // Symuluj dostępność abonenta za pomocą liczby losowej
//   const isRecipientAvailable = Math.random() > 0.5;


//   if (!isRecipientAvailable) {
//     console.log(`Abonent ${recipient} jest niedostępny, zostaw wiadomość.`);
//     // Logika aktywacji automatycznej sekretarki
//   } else {
//     console.log(`Łączenie z ${recipient}, proszę czekać...`);
//     // Logika odbierania połączenia
//   }
// }

// processCall("Mango");

// console.log(Math.random().toFixed(1));
// console.log(Math.random().toFixed(1));
// console.log(Math.random().toFixed(1));
// console.log(Math.random().toFixed(1));
// console.log(Math.random().toFixed(1));
// console.log(Math.random().toFixed(1));
// console.log(Math.random().toFixed(1));
// console.log(Math.random().toFixed(1));


// function sumTwoNumbers(a,b){return a+b};
// console.log(sumTwoNumbers(2,5));


function processCall(recipient, onAvailable, onNotAvailable) {
  // Symuluj dostępność abonenta za pomocą liczby losowej
  const isRecipientAvailable = Math.random() > 0.5;

  if (!isRecipientAvailable) {
    onNotAvailable(recipient);
    return;

  }

  onAvailable(recipient);

  
}

function takeCall(name) {
  console.log(`Łączenie z ${name}, proszę czekać...`);
  // Logika odbierania połączenia
}

function activateAnsweringMachine(name) {
  console.log(`Abonent ${name} jest niedostępny, zostaw wiadomość.`);
  // Logika aktywacji automatycznej sekretarki
}

function leaveHoloMessage(name) {
  console.log(`Abonent ${name} jest niedostępny, nagrywamy hologram.`);
  // Logika nagrywania hologramu
}

processCall("Mango", takeCall, activateAnsweringMachine);
processCall("Poly", takeCall, leaveHoloMessage);
processCall("Mango", takeCall, activateAnsweringMachine);
processCall("Poly", takeCall, leaveHoloMessage);
processCall("Mango", takeCall, activateAnsweringMachine);
processCall("Poly", takeCall, leaveHoloMessage);
processCall("Mango", takeCall, activateAnsweringMachine);
processCall("Poly", takeCall, leaveHoloMessage);
processCall("Mango", takeCall, activateAnsweringMachine);
processCall("Poly", takeCall, leaveHoloMessage);


for (let i = 0; i < 10; i += 1) {
  console.log(i);
}

function repeatLog(n) {
  for (let i = 0; i < n; i += 1) {
    console.log(i);
  }
}

repeatLog(7);


function printValue(value) {
  console.log(value);
}

function prettyPrint(value) {
  console.log("Logging value: ", value);
}

function repeat(n, action) {
  for (let i = 0; i < n; i += 1) {
    action(i);
  }
}

// Przekaż printValue jako funkcję zwrotną
repeat(20, printValue);
// 0
// 1
// 2

// Przekaż prettyPrint jako funkcję zwrotną
repeat(3, prettyPrint);
// Logging value: 0
// Logging value: 1
// Logging value: 2


[1,2,3].forEach(n => console.log(n));
[1,2,3].forEach(n => console.log("JavaScript"));
/////////////////------------------>

function classicAdd(a, b, c) {
  return a + b + c;
}




//// tasks from zajecia 8 metody tablic - przykład

const allCourses = ['matematyka', 'fizyka', 'informatyka', 'matematyka', 'fizyka', 'biologia']
const filterUniq = (arr) => arr.filter((c, i, arr) => arr.indexOf(c) === i);
filterUniq(allCourses)



///destrukturyzacja - tablic

const tab = ["Ala", "Ola", "Ela", "Fela"];
const[name1,name2_1,name3,name4]=tab;
console.log(name1,name2_1,name3,name4);
console.log(tab);


/////
const obj={
  firstName: "Karol",
  lastName:"Kowalski",
  age:20
}

// const[firstName,lastName,age]=obj;

console.log(obj.firstName,obj.age,'surname:',obj.lastName,'.ilośc liter w nazwisku to:',obj.lastName.length,'a ilość liter w imieniu, które brzmi:',obj.firstName,'to:',obj.firstName.length)

///// zapis Math.max(...[14, -4, 25, 8, 11]), po interpretacji zamienia się w Math.max(14, -4, 25, 8, 11) - składnia ... zwraca rozpakowaną tablicę, czyli rozkłada jej elementy jako oddzielne argumenty.

const temps =[14, -4, 25, 8, 11];
console.log(temps);
console.log(Math.min(...temps));
console.log(Math.max(...temps));
const lowNumber=(Math.min(...temps));
console.log(lowNumber);
const higherNumber=(Math.max(...temps));
console.log(higherNumber)

/////////  utworzenie nowego obiektu z dwóch tablic , wynik posortowany od najwiekszej do najmniejszej (b-a), albo od najmniejszej do najwiekszej (a-b)
const lastWeekTemps = [14, 25, 11];
const currentWeekTemps = [23, 17, 18];
const allTemps=[...lastWeekTemps,...currentWeekTemps];
console.log(lastWeekTemps);
console.log(currentWeekTemps);
console.log(allTemps);
const allTempsReverse=[...currentWeekTemps,...lastWeekTemps];
console.log(allTempsReverse);
console.log(allTempsReverse.sort((a,b)=> b-a))

///////


const first = { propA: 5, propB:10};
const second = {propC: 15, propD: 20}
const third ={...first,propXYZ:999,...second, propX:10000}
console.log(third)
const fourth={...second,b:100,...first,...third,a:1000};
console.log(fourth);
console.log(fourth)

//////

const firstBook = {
  title: "The Last Kingdom",
  coverImage:
    "https://images-na.ssl-images-amazon.com/images/I/51b5YG6Y1rL.jpg",
};

const {
  title: firstTitle,
  coverImage: firstCoverImage = "https://via.placeholder.com/640/480",
} = firstBook;


console.log(firstBook);
console.log(firstTitle);
console.log(firstCoverImage);

const secondBook = {
  title: "Sen śmiesznego człowieka",
}

const {
  title:secondTitle,
  coverImage: secondCoverImage="https://costamcostamwww.com"
}= secondBook;

console.log(secondBook);
console.log(secondTitle);
console.log(secondCoverImage);

///////destrukturyzacja tablic

const rgb=[200,255,100];
const [red,green,blue]= rgb;
console.log([rgb]);
console.log(rgb);
console.log(`R:${red},G:${green},B:${blue}`);

/////
// Funkcja wywołania zwrotnego
function greet(name) {
  console.log(`Pozdrawiam Cię serdecznie , mój drogi ${name}. Twoje imię ${name} pasuje do naszego wierunku`);
}

console.log(greet);

function registerGuest(name, callback){
console.log(`Rejestracja gościa ${name}.`);
callback(name);

}

registerGuest("James", greet);
registerGuest("Mango", greet);
registerGuest("Poly", greet);
registerGuest("Henry", greet);

///// symulacja dostepnosci i niedostepnosci podczas proby dodzwonienia sie 
function processCall(recipient){
  const isRecipientAvaiable = Math.random()>0.5;

  if(!isRecipientAvaiable){
    console.log(`Abonent ${recipient} jest niedostępny , zostaw ${recipient} wiadomość`);
  }
  else{ console.log(`już łączymy ${recipient}`)}
}

console.log(processCall("Mango"));
console.log(processCall("Mango"));
console.log(processCall("Mango"));
console.log(processCall("Mango"));
console.log(processCall("Mango"));

///// funkcje strzałkowe jako deklaracja funkcji



//podejście imperatywne
const numbers = [1, 2, 3, 4, 5];
const filteredNumbers = [];

for (let i=0;i< numbers.length;i++){
  if(numbers[i]>3){filteredNumbers.push(numbers[i])}
}

console.log(filteredNumbers)


// podejście deklaratywne

const nbrs=[1,2,3,4,5];
const numbersfiltered = nbrs.filter(value=>value >3);
console.log(numbersfiltered)

/////tablica obiektów 
const students = [
  { name: "Mango", score: 83, age:10, },
  { name: "Poly", score: 59, age:10, },
  { name: "Ajax", score: 37,age:10, },
  { name: "Kiwi", score: 94,age:10, },
  { name: "Houston", score: 64,age:10 },
];

const names=students.map(student=>student.name)
const scores=students.map(student=>student.score)
const ages= students.map(student=>student.age)

console.log(students);
console.log(names);
console.log(scores);
console.log(ages);

/////

//filtry wartosci dodatnie i ujemne z tablicy 

const values1 = [51, -3, 27, 21, -68, 42, -37];

const positiveValues = values1.filter(value => value >= 0);
console.log(positiveValues);

const negativeValues = values1.filter(value=> value<=0);
console.log(negativeValues)

const bigValues = values.filter(value => value>30);
console.log(bigValues)

/////
//metoda find

const colorPickerOptions = [
  { label: "red", color: "#F44336" },
  { label: "green", color: "#4CAF50" },
  { label: "blue", color: "#2196F3" },
  { label: "pink", color: "#E91E63" },
  { label: "indigo", color: "#3F51B5" },
];
console.log(colorPickerOptions.find(option => option.label === "blue")); // { label: 'blue', color: '#2196F3' }
console.log(colorPickerOptions.find(option => option.label === "pink")); // { label: 'pink', color: '#E91E63' }
console.log(colorPickerOptions.find(option => option.label !== "white")); // undefined
console.log(colorPickerOptions.find(option => option.label === "indigo")); // undefined

///// and findIndex
console.log(colorPickerOptions.findIndex(option => option.label === "blue")); // 2
console.log(colorPickerOptions.findIndex(option => option.label === "pink")); // 3
console.log(colorPickerOptions.findIndex(option => option.label === "white")); // -1

///// reduce
const total = [2,7,3,14,6].reduce((previousValue,number)=>{
  return previousValue+number;
})
console.log(total);


const students1 = [
  { name: "Mango", score: 83 },
  { name: "Poly", score: 59 },
  { name: "Ajax", score: 37 },
  { name: "Kiwi", score: 94 },
  { name: "Houston", score: 64 },
];

// Nazwa akumulatora może być dowolna, to tylko parametr funkcji
const totalScore = students1.reduce((total, student) => {
  return total + student.score;
}, 0);

const averageScore = totalScore / students1.length;
console.log(students1);
console.log(totalScore);


///// zaawansowane uzycie reduce

const tweets = [
  { id: "000", likes: 5, tags: ["js", "nodejs"] },
  { id: "001", likes: 2, tags: ["html", "css"] },
  { id: "002", likes: 17, tags: ["html", "js", "nodejs"] },
  { id: "003", likes: 8, tags: ["css", "react"] },
  { id: "004", likes: 0, tags: ["js", "nodejs", "react"] },
];

// Popatrzmy na wszystkie elementy kolekcji i dodajmy wartości właściwości tags
// do akumulatora, którego początkową wartość podamy jako pustą tablicę [].
// W każdej iteracji włóżmy wszystkie elementy tweet.tags do akumulatora i zwróćmy je.
const tags11 = tweets.reduce((allTags, tweet) => {
  allTags.push(...tweet.tags11);

  return allTags;
}, []);

console.log(tags11);

// Zbiór tagów to nie pojedyncza operacja, więc napiszmy funkcję
// do zbioru tagów z kolekcji
const getTags = tweets =>
  tweets.reduce((allTags, tweet) => {
    allTags.push(...tweet.tags11);

    return allTags;
  }, []);

console.log(getTags(tweets));


/////






