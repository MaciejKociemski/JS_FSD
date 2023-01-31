//mod 2 1/32 Zapisz warunek w instrukcji if tak, aby funkcja spełniła wymagania.

function checkAge(age) {
    if (age>=18) { // Change this line
      return "You are an adult";
    }
  
    return "You are a minor";
  }
  
  //mod 2 2/32 Funkcja checkPassword otrzymuje hasło użytkownika i parametr password, porównuje go z hasłem administratora w zmiennej ADMIN_PASSWORD i zwraca wiadomość o rezultacie sprawdzenia.Przeprowadź refaktor kodu funkcji checkPassword, wykorzystując wzór "early return":usuń zmienną message usuń else kod powinien działać tak samo, jak przed refaktorem
  
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
  
  //mod 2 3/32 Funkcja checkStorage sprawdza możliwość złożenia zamówienia i zwraca wiadomość o rezultacie. Przyjmuje dwa parametry: available - dostępna ilość towarów w magazynie, ordered - ilość jednostek towaru w zamówieniu Przeprowadź refaktor kodu funkcji checkStorage, wykorzystując wzór "early return".
  
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
  
  //mod 2 4/32 Zadeklaruj zmienną fruits i przypisz jej elementy/owoce - stringi "apple", "plum", "pear" i "orange".
  
  // Change code below this line
  const fruits2 = ["apple", "plum", "pear", "orange"];
  
  //mod 2 5/32 Zadeklaruj trzy zmienne i przypisz każdej z nich wartość, wykorzystując notację kwadratowych nawiasów. Nazwa zmiennej	Wartość zmiennej firstElement	pierwszy element tablicy secondElement	drugi element tablicy lastElement	ostatni element tablicy

  
  const fruits3 = ["apple", "plum", "pear", "orange"];
  const firstElement=fruits[0];
  const secondElement=fruits[1];
  const lastElement=fruits[3];
  
  // Change code below this line
  console.log(fruits3[0]);
  
  //mod 2 6/32 Zmień wartość elementów z indeksem 1 i 3. Zamień "plum" na "peach", a "orange" na "banana".
  
  const fruits4 = ["apple", "plum", "pear", "orange"];
  
  // Write your code under this line
  fruits4[1]="peach";
  
  fruits4[3]="banana";
  
  
  console.log(fruits4);
  
  //mod 2 7/32 Zadeklaruj zmienną fruitsArrayLength i przypisz jej długość tablicy fruits, wykorzystując właściwość length.
  
  const fruits5 = ["apple", "peach", "pear", "banana"];
  const fruitsArrayLength=fruits5.length;
  // Change code below this line
  console.log(fruits5.length)
  
  
  //mod 2 8/32 Zadeklaruj dwie zmienne: Nazwa zmiennej	Oczekiwana wartość lastElementIndex	Indeks ostatniego elementu tablicy fruits przez długość_tablicy - 1lastElement	Wartość ostatneigo elementu tablicy

  
  const fruits6 = ["apple", "peach", "pear", "banana"];
  
  const lastElementIndex2=fruits6.length-1;
  const lastElement1=fruits6[lastElementIndex2];
  // Change code below this line
  
  
  //mod 2 9/32 Napisz funkcję getExtremeElements(array), która przyjmuje jeden parametr array – tablica elementów dowolnej długości. Funkcja powinna zwracać tablicę składającą się z dwóch elementów – pierwszego i ostatniego elementu wartości parametru array.
  
  function getExtremeElements(array) {
    // Change code below this line
  const firstElement=array[0];
    const lastElementIndex = array.length-1;
    const lastElement =  array[lastElementIndex];
    result = [firstElement, lastElement]
  
    // Change code above this line
    return result;
  }
  
  //mod 2 10/32 Uzupełnij kod funkcji splitMessage(message, delimiter) tak, aby najpierw przypisywała do zmiennej words, a następnie zwracała rezultat podzielenia wartości parametru message zgodnie z separatorem delimiter.
  
  function splitMessage(message, delimiter) {
    let words;
    // Change code below this line
  words=message.split(delimiter);
    // Change code above this line
    return words;
  }
  
  //mod 2 11/32 Serwis grawerowania biżuterii potrzebuje funkcji, która automatycznie policzy cenę grawerunku w zależności od ilości słów i ceny za słowo.Zadeklarowano funkcję calculateEngravingPrice(message, pricePerWord). Przyjmuje ona string składający się ze słów oddzielonych tylko spacjami (parametr message) i cenę wygrawerowania jednego słowa (parametr pricePerWord).Zaprogramuj funkcję, aby zwracała całkowity koszt grawerunku wszystkich słów w parametrze.
  
  function calculateEngravingPrice(message, pricePerWord) {
    // Change code below this line
  const wordCount =message.split(" ").length;
  const totalPrice =wordCount * pricePerWord;
  
  
   return totalPrice
  
    // Change code above this line
  }
  
  //mod 2 12/32 Uzupełnij kod funkcji makeStringFromArray(array, delimiter) tak, aby zwracał w zmiennej string rezultat połączenia elementów tablicy array z separatorem delimiter.
  
  function makeStringFromArray(array, delimiter) {
    let string;
    // Change code below this line
  string = array.join(delimiter);
  
  
    // Change code above this line
    return string;
  }
  
  //mod 2 13/32 Slug - to inaczej unikalny identyfikator, który jest wykorzystywany między innymi przy tworzeniu stron internetowych dla utworzenia czytelnych ale poprawnych adresów URL.Na przykład, zamiast tego, aby użytkownik zobaczył w adresie mysite.com/posts/1q8fh74tx, można utworzyć slug z nazwy artykułu. W rezultacie otrzymany adres będzie łatwiejszy do odczytania: mysite.com/posts/arrays-for-begginers, ale nadal poprawny jako URL.Uwaga Slug jest zawsze łańcuchem składającym się z małych liter, którego słowa oddzielone są dywizem. Napisz funkcję slugify(title), która przyjmuje tytuł artykułu (parametr title), i zwraca slug utworzony z tego stringa.Wartością parametru title będą stringi, w których słowa oddzielone są tylko spacjami Wszystkie symbole slug powinny być zapisane małymi literami Wszystkie słowa slug powinny być oddzielone myślnikiem
  
  function slugify(title) {
    // Change code below this line
  let slug;
    slug = title.split(" ").join("-").toLowerCase();
    
  
  return slug;
    // Change code above this line
  }
  
  console.log(slugify("Arrays for begginers"))
  
  //mod 2 14/32 Uzupełnij kod tak, aby zmienne zawierały kopie oryginalnej tablicy fruits.firstTwoEls - tablica składająca się z dwóch pierwszych elementów tablicy fruits nonExtremeEls - tablica składająca się ze wszystkich elementów, oprócz pierwszego ostatniego tablicy fruits lastThreeEls - tablica składająca się z trzech ostatnich elementów tablicy fruits
  
  const fruits7 = ['apple', 'plum', 'pear', 'orange', 'banana'];
  
  // Change code below this line
  const firstTwoEls = (fruits7.slice(0,2));
  const nonExtremeEls = (fruits7.slice(1,4));
  const lastThreeEls = (fruits7.slice(2,5));
  
  
  //mod 2 15/32 Uzupełnij kod tak, aby w zmiennej allClients utworzyła się tablica ze wszystkich elementów tablic oldClients i newClients.
  
  const oldClients = ['Mango', 'Ajax', 'Poly', 'Kiwi'];
  const newClients = ['Peach', 'Houston'];
  
  const allClients = oldClients.concat(newClients); // Change this line
  
  //mod 2 16/32 Napisz funkcję makeArray(firstArray, secondArray, maxLength) tworzącą nową tablicę ze wszystkimi elementami podanych tablic firstArray i secondArray. Parametr maxLength będzie zawierał maksymalną możliwą długość nowej tablicy.Jeśli ilość elementów nowej tablicy przewyższa maxLength, funkcja powinna zwrócić kopię tablicy o długości maxLength elementów. W przeciwnym razie funkcja powinna zwrócić nową tablicę w całości.
  
  function makeArray(firstArray, secondArray, maxLength) {
    // Change code below this line
  
  return firstArray.concat(secondArray).slice(0,maxLength);
  
    // Change code above this line
  }
  
  //mod 2 17/32 Uzupełnij pętlę for tak, aby wypisała wszystkie liczby całkowite w zakresie od start do end włącznie.
  
  
  const startOne = 3;
  const endOne = 7;
  
  for (let i = startOne; i <= endOne ; i += 1) { 
    console.log(i);
  }
  
  //mod 2 18/32 Napisz funkcję calculateTotal(number), która przyjmuje liczbę całkowitą (parametr number) i zwraca sumę wszystkich liczb całkowitych od jedynki do tej liczby. Na przykład, jeśli number wynosi 3, to wynikiem działania funkcji jest 1 + 2 + 3, to znaczy 6.
  
  function calculateTotal(number) {
    // Change code below this line
   
   const start =0;
     let suma = 0;
     for(let i = start;i <= number; i+= 1){suma +=i;}
   
     // Change code above this line
     return suma;
   }
  
   
   //mod 2 19/32 Uzupełnij kod pętli for tak, aby kolejno wypisał w konsoli wszystkie elementy tablicy fruits.
  
   const fruits9 = ['apple', 'plum', 'pear', 'orange'];
  
  for (let i = 0 ; i < fruits9.length; i+=1) { // Change this line
    const fruit5 = fruits9[i]; // Change this line
    console.log(fruit5);
  }
  
  //mod 2 20/32 Napisz funkcję calculateTotalPrice(order), która przyjmuje jeden parametr order – tablicę liczb i oblicza całkowitą sumę jej elementów. Wynik tego działania powinien zapisywać się w zmiennej total, która zostaje zwrócona jako rezultat działania funkcji.
  
  function calculateTotalPrice(order) {
    let total = 0;
    // Change code below this line
  for(let i = 0; i < order.length; i+=1) {
    total += order[i];
                               }
    // Change code above this line
    return total;
  }
  
  //mod 2 21/32 Napisz funkcję findLongestWord(string), która przyjmuje dowolny string składający się wyłącznie ze słów rozdzielonych spacją (parametr string) i zwraca najdłuższe słowo w tym stringu.
  
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
  
  //mod 2 22/32 Uzupełnij kod funkcji createArrayOfNumbers(min, max) tak, aby zwracał tablicę wszystkich liczb całkowitych od wartości min do max. Zakładamy, że min < max
  
  function createArrayOfNumbers(min, max) {
    const numbers = [];
    // Change code below this line
  for (let i = min; i <= max; i+=1){
    numbers.push(i);
  }
    // Change code above this line
    return numbers;
  }
  
  //mod 2 23/32 Napisz funkcję filterArray(numbers, value), która przyjmuje tablicę liczb (parametr numbers) i zwraca nową tablicę, w której będą tylko te elementy tablicy numbers, które są większe niż wartość parametru value (liczba).
  
  function filterArray(numbers, value) {
    // Change code below this line
  let filter=[]
   for (let i =0; i < numbers.length; i++)
   if (numbers[i] > value) {filter.push(numbers[i]);
                          }
  
  return filter
   // Change code above this line
  }
  
  //mod 2 24/32 Funkcja checkFruit(fruit) przyjmuje string z nazwą owocu (parametr fruit) i sprawdza, czy dany owoc znajduje się na tablicy fruits. Uzupełnij kod funkcji tak aby spełniał następujące zależności: owoc jest w tablicy, funkcja zwraca true; owocu nie ma w tablicy, funkcja zwraca false.
  
  function checkFruit(fruit) {
    const fruits = ["apple", "plum", "pear", "orange"];
  return fruits.includes(fruit);
   
    return false; // Change this line
  }
  
  //mod 2 25/32 Wspólnymi elementami tablic nazywane są te elementy, które są obecne we wszystkich tablicach które sprawdzamy. Operację taką nazywamy też intersectionNa przykład w dwóch tablicach [1, 3, 5] i [0, 8, 5, 3] wspólne będą liczby 3 i 5, ponieważ są obecne w obu oryginalnych tablicach. A liczby 0, 1 i 8 są obecne w tylko jednej z tablic.Napisz funkcję getCommonElements(array1, array2), która otrzymuje dwie tablice dowolnej długości w parametrach array1 i array2 i zwraca nową tablicę składającą się z tych elementów, które są obecne w obu oryginalnych tablicach (Array Intersection). Jeśli tablice nie mają wspólnych elementów, zwracamy pustą tablicę.
  
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
  
  
  //mod 2 26/32 Wykonaj refaktor kodu funkcji calculateTotalPrice(order) zamieniając pętlę for na for...of.
  
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
  
  //mod 2 27/32 Wykonaj refaktor funkcji filterArray(numbers, value) zamieniając pętlę for na for...of.
  
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
  
  //mod 2 28/32 Uzupełnij wyrażenia reszty z dzielenia tak, aby kod spełniał założenia testów.

  
  // Change code below this line
  const a = 3 % 1;
  const b = 4 % 3;
  const c = 11 % 4;
  const d = 12 % 7 ;
  const e = 8 % 3;
  
  
  //mod 2 29/32 Napisz funkcję getEvenNumbers(start, end), która zwróci tablicę wszystkich liczb parzystych od start do end (włącznie).
  
  function getEvenNumbers(start, end) {
    // Change code below this line
  
  let newArray=[]
   for(let i=start;i<=end;i++){if (i%2===0){ newArray.push(i)}}
  
     // Change code above this line
   return newArray;
   }
  
   //mod 2 30/32 Uzupełnij kod tak, aby w zmiennej number zapisywała się pierwsza liczba znajdująca się pomiędzy start i end, dzieląca się na 5 bez reszty.
  
   const start = 6;
  const end = 27;
  let number;
  
  for (let i = start; i < end; i += 1) {
    if (i % 5 === 0) {
      number = i;
      break
    }
  }
  
  //mod 2 31/32 Wykonaj refaktor funkcji findNumber(start, end, divisor) tak aby: zwracała pierwszą liczbę pomiędzy start i end, która dzieli się na divisor bez reszty ,nie wykorzystywała operatora break, nie wykorzystywała zmiennej number
  
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
  
  //mod 2 32/32 Napisz funkcję includes(array, value), która robi to samo, co metoda tablicy tablica.includes(wartość) - sprawdza, czy na tablicy array jest wartość value, zwracając true, jeżeli jest i false w przeciwnym wypadku.W trakcie wykonywania tego zadania w ciele funkcji includes() nie można wykorzystywać metody tablica.includes(wartość).
  
  function includes(array, value) {
    // Change code below this line
  for (const index of array){
    if(index===value){
      return true;
                        }}
    
      return false
    
  
    // Change code above this line
  }
  
  