// 1/36  Zadeklaruj dwie zmienne: productName dla nazwy produktu oraz pricePerItem do przechowywania ceny za sztukę. Przy deklaracji nadaj zmiennym następujące wartości ,dla productName string 'Droid';, dla pricePerItem number 2000.

// Change code below this line

// console.log(productName);
// 'Droid'

// console.log(pricePerItem);
// 2000
const productName="Droid";
console.log(productName);

const pricePerItem=2000;
console.log(pricePerItem);


//2 Nazwę produktu zmieniono na 'Repair droid', a jego cenę zwiększono o 1500. Przypisz nowe wartości zmiennych pricePerItem i productName po ich zadeklarowaniu.

let productName2 = "Droid";
let pricePerItem2 = 2000;

// Change code below this line
productName = 'Repair droid';
pricePerItem+=1500;


//3 Zadeklaruj następujące zmienne za pomocą słowa kluczowego const lub let i przypisz im odpowiednie wartości.topSpeed - number 160. distance - number 617.54. login - string 'mango935'.isOnline - boolean true. isAdmin - boolean false.


const topSpeed=160;
const distance=617.54;
let login="mango935";
const isOnline=true;
const isAdmin=false;

// 4 Uzupełnij kod, przypisując do zmiennej totalPrice wyrażenie opisujące obliczenie całkowitej kwoty zamówienia. Zmienna pricePerItem przechowuje cenę jednej jednostki produktu, a orderedQuantity liczbę jednostek produktu w zamówieniu, przemnożone przez siebie dadzą pełną kwotę.

const pricePerItem3 = 3500;
const orderedQuantity = 4;

// Change code below this line
const totalPrice = pricePerItem3 * orderedQuantity;

// 5  Zadeklaruj zmienną message i przypisz jej wartość wiadomości o zakupie, string w formacie: You picked <productName>, price per item is <pricePerItem> credits. Użyj składni template literal / ciągu szablonów.

const productName3 = "Droid";
const pricePerItem4 = 3500;

// Change code below this line
const message = `You picked ${productName3}, price per item is ${pricePerItem3} credits`;
console.log(message);

// 6  Nasz sklep sprzedający droidy naprawcze jest niemal gotowy do otwarcia. Musimy napisać kod który pozwoli je zamówić. Zadeklaruj zmienne i przypisz im odpowiednie wartości: Zdefiniuj zmienne wedle podanego wzoru: nazwaZmiennej = wartośćZmiennej - opisZmiennejpricePerDroid = 800 - cena jednego droida" orderedQuantity = 8 - liczba droidów w zamówieniu,deliveryFee = 80 - koszt dostawy,totalPrice - wyliczona całkowita kwota zamówienia do zapłaty, nie zapomnij uwzględnić kosztu wysyłki (niezależnego od ilości kupowanych droidów) message - wiadomość o statusie zamówienia w formacie You ordered droids worth <totalPrice> credits. Delivery (<deliveryFee> credits) is included in total price.

// Change code below this line
const pricePerDroid=800;
const orderedQuantity2=6;
const deliveryFee=50;
const totalPrice2=((pricePerDroid*orderedQuantity2)+deliveryFee);

const message2 = `You ordered droids worth ${totalPrice2} credits. Delivery (${deliveryFee} credits) is included in total price.`

// 7 Zadeklaruj funkcję sayHi, w środku której dodaj console.log() podanym jako argument stringiem "Hello, this is my first function!". Po zadeklarowaniu wywołaj funkcję sayHi.

// Change code below this line
function sayHi(){console.log("Hello, this is my first function!")};

sayHi();


// 8 Funkcja add powinna potrafić dodawać do siebie trzy podane argumenty i wypisywać wynik w konsoli. Dodaj do funkcji add trzy parametry a, b i c które zostaną zsumowane w ciele funkcji i wypisane w konsoli Uzupełnij console.log() tak, aby wypisał string "Addition result equals <result>", gdzie <result> to suma przekazanych liczb. Użyj template literals (zapisu z grawisami)

// Change code below this line
function add(a,b,c) {
  console.log(`Addition result equals ${a+b+c}`);
  // Change code above this line
}

add(15, 27, 10);
add(10, 20, 30);
add(5, 10, 15);
add(111, 233, 1234)

// 9 Uzupełnij kod funkcji add tak, aby zwracała wynik dodawania wartości trzech parametrów a, b i c.

function add(a, b, c) {
  // Change code below this line
return a+b+c;
  // Change code above this line
}

add(2, 5, 8); // 15

console.log(add(15, 27, 10));
console.log(add(10, 20, 30));
console.log(add(5, 10, 15));


// 10 Funkcja makeMessage(name, price) łączy i zwraca wiadomość o zakupie. Deklarujemy w niej dwa parametry: name - nazwa towaru, price - cena towaru, Uzupełnij kod funkcji tak, aby w zmiennej message zapisywał się string "You picked <name>, price per item is <price> credits". Wykorzystaj składnię template literals, Uwaga,Zwróć uwagę na to, że w kodzie nie ma wywołania funkcji makeMessage. Zaczynając od tego zadania, dalej sami będziemy wywoływać twoje funkcje w testach i sprawdzać, jak działają. Rezultat naszego sprawdzania zobaczysz w bloku Rezultaty pod edytorem kodu.

function makeMessage (name, price) {
  // Change code below this line
   const message = `You picked ${name}, price per item is ${price} credits`;
  // Change code above this line
  return message;
};

// 11 Funkcja calculateTotalPrice oblicza i zwraca całkowitą sumę zakupu. Przyjmuje dwa parametry:orderedQuantity - ilość sztuk towaru w zamówieniu; pricePerItem - cena pojedynczej sztuki towaru.Uzupełnij kod funkcji tak, aby w zmiennej totalPrice zapisywała się całkowita kwota zamówienia, w tym przypadku jest to wynik mnożenia ilości towarów przez cenę pojedynczej sztuki.

function calculateTotalPrice (orderedQuantity, pricePerItem) {
  // Change code below this line
  const totalPrice = (orderedQuantity*pricePerItem);

  // Change code above this line
  return totalPrice;
};

calculateTotalPrice(5,100);
calculateTotalPrice(8,60);
calculateTotalPrice(3,400);
calculateTotalPrice(1,3500);
calculateTotalPrice(12,70);


// 12 Funkcja makeOrderMessage(orderedQuantity, pricePerDroid, deliveryFee) łączy i zwraca wiadomość o zakupie droidów naprawczych. Deklarujemy trzy parametry: orderedQuantity - zamawiana ilość droidów w zamówieniu pricePerDroid - cena jednego droida deliveryFee - cena dostawy Uzupełnij kod funkcji tak, aby zwracała wiadomość o zamówieniu w formacie "You ordered droids worth <totalPrice> credits. Delivery (<deliveryFee> credits) is included in total price.". Nie zapomnij o dodaniu kosztów dostawy przy obliczaniu całkowitej kwoty.

function makeOrderMessage(orderedQuantity, pricePerDroid, deliveryFee) {
  // Change code below this line
  const totalPrice=((orderedQuantity*pricePerDroid)+deliveryFee);
const message=`You ordered droids worth ${totalPrice} credits. Delivery (${deliveryFee} credits) is included in total price.`;


  // Change code above this line
  return message};


makeOrderMessage(2,100,50);
makeOrderMessage(4,300,100);
makeOrderMessage(10, 70, 200);


// 13 Funkcja isAdult posiada jeden parametr age (wiek). Przypisz zmiennej passed wartość zwróconą przez sprawdzenie czy użytkownik jest pełnoletni, tzn czy wartość parametru age jest większa lub równa 18. Następnie zwróć zmienną passed.

function isAdult(age) {
  // Change code below this line
  const passed = age >= 18;

  // Change code above this line
  return passed;

}


isAdult(20);
isAdult(14);
isAdult(8);
isAdult(37);


// 14 Funkcja isValidPassword(password) porównuje hasło zapisane wcześniej z tym podanym jako argument (wartość parametru password) i zwraca wynik sprawdzenia - watość boolowską true albo false. Zmienna SAVED_PASSWORD przechowuje wartość zapisanego wcześniej hasła.Przypisz zmiennej isMatch wynik porównania wprowadzonego i zapisanego wcześniej hasła. Rezultatem wyrażenia sprawdzenia powinno być true, jeśli wartości zgadzają się i false, jeśli nie.

function isValidPassword(password) {
  const SAVED_PASSWORD = 'jqueryismyjam';
  // Change code below this line
  const isMatch = password===SAVED_PASSWORD ;

  // Change code above this line
  return isMatch;
}

// 15 Dodaj sprawdzenie pełnoletności użytkownika, używając parametru age do warunku w instrukcji if, Jeśli użytkownik jest pełnoletni, powinien wykonywać się blok if i w zmiennej message zapisujemy string "You are an adult". W przeciwnym razie powinien wykonać się blok else i jako wartość zmiennej message zapisujemy "You are a minor".

function checkAge(age) {
  let message;

  if (age>=18) { // Change this line
    message = 'You are an adult';
  } else {
    message = 'You are a minor';
  }

  return message;
}

checkAge(20);
checkAge(8);
checkAge(14);
checkAge(38);

// 16 Funkcja checkStorage(available, ordered) sprawdza możliwość złożenia zamówienia i zwraca string z rezultatem. Deklarujemy w nije dwa parametry: available - całkowita ilość sztuk towaru w magazynie, ordered - ilość sztuk towaru w zamówieniu, Wykorzystując warunki if...else uzupełnij kod funkcji tak, aby: Jeśli w zamówieniu wskazano liczbę przewyższającą ilość sztuk towaru w magazynie, w zmiennej message zapisujemy się string "Not enough goods in stock!". W przeciwnym razie do zmiennej message zapisujemy się string "Order is processed, our manager will contact you.".

function checkStorage(available, ordered) {
  let message;
  // Change code below this line
if (available < ordered){message="Not enough goods in stock!"}
  else {message = "Order is processed, our manager will contact you."
      }
  // Change code above this line
  return message;
}


// 17 Zamień wyrażenia ze standardowymi operatorami matematycznymi na złożone operatory przypisania - dodawanie, odejmowanie, mnożenie i dzielenie.

let a = 5;
let b = 10;
let c = 15;
let d = 20;

// Change code below this line
a += a = 2;
b -= b = 4;
c *= c = 3;
d /= d = 10;

// 18 Stanowisko sprzedaży droidów do wykonywania napraw jest coraz bliżej bycia gotowym do rozpoczęcia pracy, musimy napisać program dla działu sprzedaży. Funkcja makeTransaction(pricePerDroid, orderedQuantity, customerCredits) dokonuje transakcji sprzedaży droidów i zwraca wiadomość o rezultacie operacji. Deklarujemy trzy parametry:pricePerDroid - cena jednego droida, orderedQuantity - ilość zamówionych droidów, customerCredits - saldo środków na koncie klienta. Uzupełnij ją następującą funkcjonalnością: Zadeklaruj zmienną totalPrice i przypisz jej całkowitą wartość zamówienia (ilość droidów pomnożona przez cenę jednego droida) Dodaj następującą logikę sprawdzającą czy klient jest w stanie zapłacić za zamówienie jeśli kwota do zapłaty przewyższa ilość kredytów na koncie klienta, zapisz w zmiennej message string "Insufficient funds!"; w przeciwnym wypadku, odejmij koszt zakupu z konta klienta i zapisz w zmiennej message wiadomość: "You ordered <orderedQuantity> droids, you have <customerCredits> credits left".

function makeTransaction(pricePerDroid, orderedQuantity, customerCredits) {
  let message;
  // Change code below this line
let totalPrice=pricePerDroid*orderedQuantity;
  // Change code above this line
if (totalPrice > customerCredits){
  message="Insufficient funds!"} 
  
else {message=`You ordered ${orderedQuantity} droids, you have ${customerCredits-totalPrice} credits left`}
  
   return message;
}

makeTransaction(3000,5,23000);
makeTransaction(1000,3,15000);
makeTransaction(5000,10,10000);
makeTransaction(2000, 10, 5000);

// 19 Funkcja checkPassword(password) otrzymuje hasło użytkownika w parametrze password, sprawdza je pod względem zgodności z hasłem administratora w zmiennej ADMIN_PASSWORD i zwraca wiadomość o rezultacie sprawdzenia, przechowywaną w zmiennej message. Jeśli argument dla parametru password wynosi null, oznacza to, że użytkownik anulował operację i w message zapisuje się łańcuch "Canceled by user!". Jeśli wartość parametru password jest zgodna z wartością ADMIN_PASSWORD, w zmiennej message przypisany zostaje łańcuch "Welcome!". Jeśli żaden z poprzednich warunków nie zostanie spełniony, w zmiennej message zapisuje się string "Access denied, wrong password!".

function checkPassword(password) {
  const ADMIN_PASSWORD = 'jqueryismyjam';
  let message;

  if (password===null) { // Change this line
    message =  `Canceled by user!`;
  } else if (password==="jqueryismyjam") { // Change this line
    message = 'Welcome!';
  } else {
    message = 'Access denied, wrong password!';
  }

  return message;
}

checkPassword("mangohackzor");
checkPassword(null);
checkPassword("polyhax");
checkPassword("jqueryismyjam");

// 20 Funkcja checkStorage(available, ordered) sprawdza możliwość złożenia zamówienia i zwraca wiadomość o rezultacie. Deklarujemy dwa parametry: available - dostępna ilość towarów w magazynie , ordered - ilość jednostek towaru w zamówieniu, Wykorzystując rozgałęzienia, uzupełnij kod funkcji tak, aby: Jeżeli w zamówieniu jest zero sztuk towaru, to znaczy wartość parametru ordered jest równa 0, jako wartości zmiennej message zapisujemy string "There are no products in the order!".jeżeli ilość towarów w zamówieniu jest większa niż ilość towarów dostępnych w magazynie, to w zmiennej message zapisujemy string "Your order is too large, there are not enough items in stock!".W przeciwnym razie w zmiennej message zapisujemy string "The order is accepted, our manager will contact you".

function checkStorage(available, ordered) {
  let message;
  // Change code below this line
  

if (ordered === 0){
  message="There are no products in the order!"
}
else if (ordered > available){
  message="Your order is too large, there are not enough items in stock!"
}
else {message="The order is accepted, our manager will contact you"
     }
    // Change code above this line
  return message;
}

console.log(checkStorage(100, 50));
checkStorage(100, 130);
checkStorage(70, 0);
checkStorage(200, 20);
checkStorage(200, 250);
checkStorage(150, 0);


// 21 Funkcja isNumberInRange(start, end, number) sprawdza, czy liczba wpisuje się w przedział. Deklarujemy trzy parametry: number - liczba której przynależność do przedziału sprawdzamy , start - początek przedziału liczbowego, end - koniec przedziału liczbowego Zadeklaruj zmienną isInRange o wartości wyrażenia logicznego które sprawdza czy number wpisuje się w przedział liczbowy od start do end. Liczba będąca wartością number powinna być wyższa lub równa start i mniejsza lub równa end. Rezultatem wyrażenia sprawdzania będzie wartość typu boolean true lub false.

function isNumberInRange(start, end, number) {
  const isInRange = number > start && number< end; // Change this line

  return isInRange;
}

console.log(isNumberInRange(10, 30, 17));

// 22 Funkcja checkIfCanAccessContent(subType) sprawdza, czy użytkownik może uzyskać dostęp do treści. Sprawdzenie przebiega zgodnie z rodzajem subskrypcji. Dostęp mogą uzyskać wyłącznie użytkownicy z subskrypcją pro lub vip. Zadeklaruj zmienną canAccessContent o wartości wyrażenia sprawdzenia subskrypcji. Jeśli wartość parametru subType jest równa "pro" lub "vip", użytkownik może uzyskać dostęp. Rezultatem wyrażenia sprawdzenia będzie wartość typu boolean true lub false.

function checkIfCanAccessContent(subType) {
  const canAccessContent = subType === 'vip' || subType === 'pro';
  return canAccessContent;
}



console.log(checkIfCanAccessContent("pro"));
console.log(checkIfCanAccessContent("starter"));
console.log(checkIfCanAccessContent("vip"));
console.log(checkIfCanAccessContent("free"));


// 23 Funkcja isNumberNotInRange(start, end, number) sprawdza, czy liczba znajduje się poza zakresem. To znaczy liczba powinna być mniejsza lub równa start i większa lub równa end. Rezultatem wyrażenia sprawdzenia będzie wartość boolean true lub false.Deklarujemy trzy parametry: number - numer, którego brak przynależności do zakresu jest sprawdzana start - początek zakresu liczbowego end - koniec zakresu liczbowego Zadeklaruj zmienną isNotInRange wyrażenie inwersji wartości zmiennej isInRange, wykorzystując operator negacji !.

function isNumberNotInRange(start, end, number) {
  const isInRange = number >= start && number <= end;
  const isNotInRange = !isInRange; // Change this line

  return isNotInRange;
}

// 24 Funkcja getDiscount(totalSpent) zwraca wartość zniżki w zależności od ogólnej sumy wydanych pieniędzy (parametr totalSpent) w sklepie przez cały czas posiadania konta (w ramach programu partnerskiego). Zniżka zapisuje się w zmiennej discount i jest zwracana z funkcji. Wykorzystując rozgałęzienia i operatory logiczne, uzupełnij kod funkcji. Jeżeli wydano 50000 lub więcej kredytów – zniżka to 10% (złoty рartner),jeżeli wydano między 20000 (włącznie) a 50000 kredytów – zniżka to 5% (srebrny partner), Jeżeli wydano między 5000 (łącznie) a 20000 kredytów – zniżka to 2% (brązowy partner), Jeżeli wydano mniej niż 5000 kredytów – zniżka to 0 (bazowy partner) ,Wartości zniżek każdego poziomu zapisują się w stałych o nazwach odpowiadających ich poziomowi: BASE_DISCOUNT, BRONZE_DISCOUNT, SILVER_DISCOUNT i GOLD_DISCOUNT.

function getDiscount(totalSpent) {
  const BASE_DISCOUNT = 0;
  const BRONZE_DISCOUNT = 0.02;
  const SILVER_DISCOUNT = 0.05;
  const GOLD_DISCOUNT = 0.1;
  let discount;
  // Change code below this line
if(totalSpent >= 50000) 
{discount = GOLD_DISCOUNT
} 
else if (totalSpent >=20000)
{discount = SILVER_DISCOUNT}
  
else if (totalSpent>=5000){discount = BRONZE_DISCOUNT}
 
else{discount = BASE_DISCOUNT}
  // Change code above this line
  
  return discount;
}

getDiscount(137000);
getDiscount(46900);
getDiscount(8250);
getDiscount(1300);
getDiscount(5000);
getDiscount(20000);
getDiscount(50000);


// 25 Wykonaj refaktor rozwiązania zadania «Magazyn towarów», zamieniając instrukcję if...else na ternary operator.

function checkStorage(available, ordered) {
  let message;
  // Change code below this line

  message= ordered > available ? "Not enough goods in stock!" 
    : "The order is accepted, our manager will contact you"
  // Change code above this line

  
  return message;
}


checkStorage(100, 50);
checkStorage(100, 130);

// 26 
