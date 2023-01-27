//1 Przypisz zmiennej apartment obiekt opisujący mieszkanie o następującej charakterystyce:imgUrl - zdjęcie, wartość "https://via.placeholder.com/640x480";descr - opis, wartość "Spacious apartment in the city center";rating - ocena, wartość 4;price - cena, wartość 2153;tags - metainformacje, tablica ["premium", "promoted", "top"]
const apartment8 = {imgUrl:"https://via.placeholder.com/640x480",
descr: "Spacious apartment in the city center",
rating: 4,
price: 2153,
tags:["premium", "promoted", "top"]
}

//2 Uzupełnij obiekt apartamentu o właściwość owner, której wartością będzie obiekt z informacją o właścicielu. Dodaj do niego następujące właściwości:name - imię właściciela, wartość "Henry"phone - telefon, wartość "982-126-1588"email - poczta elektroniczna, wartość "henry.carter@aptmail.com".
const apartment1 = {
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
  
    

//3 Uzupełnij kod, przypisując zadeklarowanym zmiennym odpowiednie właściwości obiektu apartment.aptRating - ocena;aptDescr - opis;aptPrice - cena;aptTags - tagi.
const apartm = {
    imgUrl: "https://via.placeholder.com/640x480",
    descr: "Spacious apartment in the city center",
    rating: 4,
    price: 2153,
    tags: ["premium", "promoted", "top"],
  };
  
  // Change code below this line
  const aptRating1 = apartm.rating;
  const aptDescr1 = apartm.descr;
  const aptPrice1 = apartm.price;
  const aptTags1 = apartm.tags;
  // Change code above this line
  


//4 Uzupełnij kod, przypisując zadeklarowanym zmiennym wartości odpowiednich właściwości obiektu apartment.ownerName - imię właściciela;ownerPhone - telefon właściciela;ownerEmail - poczta właściciela;numberOfTags - liczba elementów tablicy we właściwości tags;firstTag - pierwszy element tablicy we właściwości tags;lastTag - ostatni element tablicy we właściwości tags;
const apartment6 = {
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
  const ownerName = apartment6.owner.name;
  const ownerPhone = apartment6.owner.phone;
  const ownerEmail = apartment6.owner.email;
  const numberOfTags = apartment6.tags.length;
  const firstTag = apartment6.tags[0];
  const lastTag = apartment6.tags[2];
  // Change code above this line
  

//5 Uzupełnij kod, przypisując zadeklarowanym zmiennym odpowiednie właściwości obiektu apartment przy użyciu składni „nawiasów kwadratowych”.aptRating - ocena;aptDescr - opis;aptPrice - cena;aptTags - tagi.
const apartment5 = {
    imgUrl: "https://via.placeholder.com/640x480",
    descr: "Spacious apartment in the city center",
    rating: 4,
    price: 2153,
    tags: ["premium", "promoted", "top"],
  };
  
  // Change code below this line
  const aptRating = apartment5["rating"];
  const aptDescr = apartment5["descr"];
  const aptPrice = apartment5["price"];
  const aptTags = apartment5["tags"];
  // Change code above this line
  


//6 Uzupełnij kod, zmieniając wartości właściwości obiektu apartment:cenę we właściwości price na 5000;ocenę mieszkania we właściwości rating na 4.7;imię i nazwisko właściciela w dołączonej właściwości name na "Henry Sibola";tablicę tagów we właściwości tags przez dodanie na końcu ciągu "trusted".
const apartment = {
    imgUrl: "https://via.placeholder.com/640x480",
    descr: "Spacious apartment in the city center",
    rating: 4,
    price: 2153,
    tags: ['premium','promoted', 'top'],
    owner: {
      name: "Henry",
      phone: "982-126-1588",
      email: "henry.carter@aptmail.com",
    },
  };
  
  // Change code below this line
  
  apartment.rating = 4.7;
  apartment.price = 5000;
  apartment.tags.push('trusted');
  apartment.owner.name=("Henry Sibola");
  
  console.log(apartment);
  console.log(apartment.owner.name);

//7 Dodaj kilka nowych właściwości do obiektu apartment:area - powierzchnia mieszkania w metrach kwadratowych, liczba 60;rooms - ilość pokoi, liczba 3;location - lokalizacja mieszkania, obiekt z następującymi właściwościami;country - kraj, string "Jamaica";city - miasto, string "Kingston".
const apartment = {
    imgUrl: "https://via.placeholder.com/640x480",
    descr: "Spacious apartment in the city center",
    rating: 4.7,
    price: 5000,
    tags: ["premium", "promoted", "top", "trusted"],
    owner: {
      name: "Henry Sibola",
      phone: "982-126-1588",
      email: "henry.carter@aptmail.com",
    },
  };
  
  // Change code below this line
  apartment.area = 60;
  apartment.rooms = 3;
  apartment.location ={
    
    country:"Jamaica",
    city: "Kingston"}
  

//8 Uzupełnij kod deklaracji obiektu tak, aby posiadał właściwości name, price, image oraz tags z wartościami ze zmiennych o takich samych nazwach. Pamiętaj, aby użyć skróconej składni właściwości.
const name = "Repair Droid";
const price = 2500;
const image = "https://via.placeholder.com/640x480";
const tags = ["on sale", "trending", "best buy"];

const product = {
  // Change code below this line
  name,
  price,
  image,
  tags,
  // Change code above this line
};


//9 Uzupełnij kod deklarujący obiekt credentials, aby w rezultacie miał dwie właściwości: email i password, których nazwy są przechowywane w zmiennych emailInputName i passwordInputName.Wartością właściwości email musi być ciąg "henry.carter@aptmail.com" a wartością właściwości password ciąg "jqueryismyjam".
const emailInputName = "email";
const passwordInputName = "password";

const credentials = {
  // Change code below this line
[emailInputName]: "henry.carter@aptmail.com",
[passwordInputName]: "jqueryismyjam",


  // Change code above this line
};

//10 Przeiteruj po obiekcie apartment za pomocą pętli for...in i zapisz wszystkie jego klucze w tablicy keys, a wszystkie jego wartości właściwości w tablicy values.
const apartment3 = {
    descr: "Spacious apartment in the city center",
    rating: 4,
    price: 2153,
  };
  const keys3 = [];
  const values3 = [];
  // Change code below this line
  for (key in apartment3){
    keys3.push(key);
    values3.push(apartment3[key])
  }
   

//11 Refaktoryzuj rozwiązanie poprzedniego zadania, dodając sprawdzenie własnej właściwości do pętli for...in.
const keys1 = [];
const values1 = [];
const advert = {
  service: "apt",
};
const apartment = Object.create(advert);
apartment.descr = "Spacious apartment in the city center";
apartment.rating = 4;
apartment.price = 2153;

for (const key in apartment) {
  // Change code below this line
if(apartment.hasOwnProperty(key)){
  keys1.push(key);
  values1.push(apartment[key]);
}
}


//12 Napisz funkcję countProps(object), która zlicza i zwraca liczbę własnych (czyli nie odziedziczonych) właściwości obiektu z parametru object. Użyj zmiennej propCount do liczenia własności
function countProps(object) {
    let propCount = 0;
    let keys = Object.keys(object);
    for (const key in object){
    if ( object.hasOwnProperty(key)){
    propCount ++;
    }
    }
      return propCount ;
    }
    
    
    
    
    
    
    console.log(countProps({}));
    console.log(countProps({}));
    console.log(countProps({}));
    console.log(countProps({name:"Maciek",age:50}));
    

//13 Przeiteruj po obiekcie apartment za pomocą metody Object.keys() i pętli for...of. Zapisz w zmiennej keys tablicę kluczy własnych właściwości obiektu apartment i dodaj wszystkie wartości jego właściwości do tablicy values.
const apartment2 = {
    descr: "Spacious apartment in the city center",
    rating: 4,
    price: 2153,
  };
  const values2 = [];
  // Change code below this line
  const keys2 = Object.keys(apartment2);
  for(const key of keys2){
    values2.push(apartment[key]);
  }
  console.log(values)

//14 Zadeklarowano funkcję countProps(object) za pomocą metody Object.keys() i opcjonalnie, ale niekoniecznie, pętli for...of.
function countProps(object) {
    // Change code below this line
    let propCount = 0;
  let keys = Object.keys(object)
  for(const key of keys){  
     
        propCount += 1;
      
    }
  
    return propCount;
    // Change code above this line
  }

//15 Zapisz w zmiennej keys tablicę kluczy własnych właściwości obiektu apartment, do zmiennej values tablicę wszystkich wartości jego właściwości. Użyj metod Object.keys() i Object.values().
const apartment = {
    descr: "Spacious apartment in the city center",
    rating: 4,
    price: 2153,
  };
  // Change code below this line
  const keys = Object.keys(apartment);
  const values = Object.values(apartment);
  

//16 Napisz funkcję countTotalSalary(salaries), która jako argument otrzymuje obiekt z wynagrodzeniami, gdzie nazwą właściwości jest nazwisko pracownika, a wartością właściwości jest wynagrodzenie. Funkcja powinna obliczyć łączną kwotę wynagrodzeń pracowników i zwrócić ją. Użyj zmiennej totalSalary, aby zapisać sumę wynagrodzeń.
function countTotalSalary(salaries) {
    let totalSalary = 0;
    // Change code below this line
  const keys = Object.keys(salaries);
    const values=Object.values(salaries);
    for(value of keys){
      totalSalary += salaries[value]
    }
    // Change code above this line
    return totalSalary;
  }
  
  countTotalSalary({})




//17 Przeiteruj po tablicy obiektów colors używając pętli for...of. Dodaj do tablicy hexColors wartości właściwości hex, do tablicy rgbColors wartości właściwości rgb ze wszystkich obiektów w tablicy colors.
const colors1 = [
    { hex: "#f44336", rgb: "244,67,54" },
    { hex: "#2196f3", rgb: "33,150,243" },
    { hex: "#4caf50", rgb: "76,175,80" },
    { hex: "#ffeb3b", rgb: "255,235,59" },
  ];
  
  const hexColors1 = [];
  const rgbColors1 = [];
  // Change code below this line
  for(let color of colors1){
    hexColors1.push(color.hex);
    rgbColors1.push(color.rgb);
  }


//18 Napisz funkcję getProductPrice(productName) która przyjmuje jeden parametr productName - nazwę produktu. Funkcja powinna szukać obiektu produktu o tej nazwie (po właściwości name) w tablicy products i zwrócić jego cenę (właściwość price). Jeśli nie zostanie znaleziony żaden produkt o tej nazwie, funkcja powinna zwrócić null.
const products11 = [
    { name: "Radar", price: 1300, quantity: 4 },
    { name: "Scanner", price: 2700, quantity: 3 },
    { name: "Droid", price: 400, quantity: 7 },
    { name: "Grip", price: 1200, quantity: 9 },
  ];
  
  function getProductPrice(productName) {
    // Change code below this line
  
  let newElement = null
    for (const product of products11){
      if (productName === product.name){
        newElement = product.price
      }
    }
  return newElement;
    // Change code above this line
  }



//mod 3 19/41 Napisz funkcję getAllPropValues(propName), która przyjmuje jeden parametr - propName - nazwę (klucz) właściwości. Funkcja powinna zwracać tablicę wszystkich wartości właściwości o tej nazwie z każdego obiektu w tablicy products. Jeśli w obiektach nie ma właściwości o tej nazwie, funkcja powinna zwrócić pustą tablicę.

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



//mod 3 20/41 Napisz funkcję calculateTotalPrice(productName), która przyjmuje jeden parametr productName - nazwę produktu. Funkcja powinna zwrócić całkowity koszt (cena * ilość) produktu o tej nazwie z tablicy products.

const products = [
    { name: "Radar", price: 1300, quantity: 4 },
    { name: "Scanner", price: 2700, quantity: 3 },
    { name: "Droid", price: 400, quantity: 7 },
    { name: "Grip", price: 1200, quantity: 9 },
  ];
  
  function calculateTotalPrice(productName) {
    // Change code below this line
  for(let item of products)
    if(item.name === productName){
      return item.price * item.quantity
    }
  
  return 0
    // Change code above this line
  }
  
  
  //mod 3 21/41 Otrzymaliśmy trzydniową prognozę maksymalnych temperatur i obliczamy średnią temperaturę z trzech dni (meanTemperature). Zastąp deklaracje zmiennych yesterday, today i tomorrow jedną operacją destrukturyzacji właściwości obiektu highTemperatures.
  
  const highTemperatures3 = {
    yesterday: 28,
    today: 26,
    tomorrow: 33,
  };
  // Change code below this line
  const {yesterday3, today3, tomorrow3} = highTemperatures3;
  // Change code above this line
  const meanTemperature3 = (yesterday3 + today3 + tomorrow3) / 3;
  
  
  //mod 3 22/41 Prognoza maksymalnej temperatury może mieć również opcjonalną właściwość icon - ikonę pogody. Zastąp deklaracje zmiennych yesterday, today, tomorrow i icon jedną operacją destrukturyzującą właściwości obiektu highTemperatures. Ustaw domyślną wartość dla icon - string "https://www.flaticon.com/svg/static/icons/svg/2204/2204346.svg".
  
  const highTemperatures = {
    yesterday: 28,
    today: 26,
    tomorrow: 33,
  };
  // Change code below this line
  
  const {yesterday, today, tomorrow, icon = "https://www.flaticon.com/svg/static/icons/svg/2204/2204346.svg"} = highTemperatures;
  
  
  // Change code above this line
  const meanTemperature = (yesterday + today + tomorrow) / 3;
  
  
  //mod 3 23/41 Zastąp deklaracje zmiennych highYesterday, highToday, highTomorrow i highIcon jedną operacją destrukturyzacji właściwości obiektu highTemperatures. Ustaw domyślną wartość dla highIcon - string "https://www.flaticon.com/svg/static/icons/svg/2204/2204346.svg".
  
  // const highTemperatures = {
  //   yesterday: 28,
  //   today: 26,
  //   tomorrow: 33,
  // };
  // Change code below this line
  
  // const {yesterday: highYesterday, today: highToday, tomorrow: highTomorrow, icon: highIcon = "https://www.flaticon.com/svg/static/icons/svg/2204/2204346.svg"} = highTemperatures;
  // Change code above this line
  
  // const meanTemperature = (highYesterday + highToday + highTomorrow) / 3;
  
  // console.log(highTemperatures)
  
  
  //mod 3 24/41 Refaktoryzuj pętlę for...of, aby używała destrukturyzacji obiektu.
  
  const colors = [
    { hex: "#f44336", rgb: "244,67,54" },
    { hex: "#2196f3", rgb: "33,150,243" },
    { hex: "#4caf50", rgb: "76,175,80" },
    { hex: "#ffeb3b", rgb: "255,235,59" },
  ];
  
  const hexColors = [];
  const rgbColors = [];
  // Change code below this line
  for (const {hex, rgb} of colors) {
    hexColors.push(hex);
    rgbColors.push(rgb);
  }
  
  
  //mod 3 25/41 Otrzymaliśmy prognozę pogody na dwa dni, z minimalną i maksymalną temperaturą oraz opcjonalnymi ikonami. Zastąp wszystkie deklaracje zmiennych jedną operacją destrukturyzującą właściwości obiektu forecast. Ustaw domyślną wartość dla ikon, zmiennych todayIcon i tomorrowIcon - string "https://www.flaticon.com/svg/static/icons/svg/2204/2204346.svg".
  
  const forecast = {
    today: {
      low: 28,
      high: 32,
      icon: "https://www.flaticon.com/svg/static/icons/svg/861/861059.svg",
    },
    tomorrow: {
      low: 27,
      high: 31,
    },
  };
  // Change code below this line
  const {today: {low:lowToday, high: highToday, icon:todayIcon = ''},
         tomorrow:{
           high: highTomorrow,
           low: lowTomorrow, icon: tomorrowIcon = 
       "https://www.flaticon.com/svg/static/icons/svg/2204/2204346.svg"  }} = forecast
         
  //mod 3 26/41 Funkcja calculateMeanTemperature(forecast) przyjmuje jeden parametr forecast - obiekt temperatury na dwa dni następnego formatu.

// {
//     today: { low: 10, high: 20 },
//     tomorrow: { low: 20, high: 30 }
//   }
//   Zastąp deklaracje zmiennych todayLow, todayHigh, tomorrowLow i tomorrowHigh jedną operacją destrukturyzacji właściwości obiektu forecast.
  
  // Change code below this line
  function calculateMeanTemperature(forecast) {
    const {
      today: {low: todayLow, high: todayHigh},
      tomorrow: {low: tomorrowLow, high: tomorrowHigh}
  } = forecast;
    // Change code above this line
    return (todayLow + todayHigh + tomorrowLow + tomorrowHigh) / 4;
  }
  
  console.log('calculateMeanTemperature({ today: {low: 37, high: 40}})')
  
  
  //mod 3 27/41 Zmienna scores przechowuje tablicę wyników testów. Używając operatora spread i metod Math.max() i Math.min(), uzupełnij kod tak, aby do zmiennej bestScore przypisany został najwyższy wynik, natomiast do worstScore najniższy.
  
  const scores = [89, 64, 42, 17, 93, 51, 26];
  // Change code below this line
  const bestScore = (Math.max(...scores));
  const worstScore = (Math.min(...scores))
  
  // console.log(bestScore1);
  // console.log(worstScore1)
  
  //mod 3 28/41 W zmiennych firstGroupScores, secondGroupScores i thirdGroupScores przechowywane są wyniki testów poszczególnych grup. Używając rozkładania, uzupełnij kod tak, aby:Zmienna allScores przechowywała tablicę wszystkich wyników od pierwszej do trzeciej grupy.Zmienna bestScore miała najwyższy ogólny wynik.zmienna worstScore miała najniższy ogólny wynik.



  
  const firstGroupScores = [64, 42, 93];
  const secondGroupScores = [89, 14, 51, 26];
  const thirdGroupScores = [29, 47, 18, 97, 81];
  // Change code below this line
  const allScores = [...firstGroupScores, ...secondGroupScores, ...thirdGroupScores];
  const bestScore2 = (Math.max(...allScores));
  const worstScore2 = (Math.min(...allScores));
  
  
  //mod 3 29/41 W konstruktorze można tworzyć nowe testy, których domyślne ustawienia są przechowywane w zmiennej defaultSettings. Podczas tworzenia testu wszystkie lub część ustawień można nadpisać, są one przechowywane w zmiennej overrideSettings.Aby uzyskać ostateczne ustawienia testu, musisz wybrać ustawienia domyślne i zastosować na nich nadpisane ustawienia. Uzupełnij kod w ten sposób, aby zmienna finalSettings zawierała obiekt ostatecznych ustawień testu.
  
  const defaultSettings = {
    theme: "light",
    public: true,
    withPassword: false,
    minNumberOfQuestions: 10,
    timePerQuestion: 60,
  };
  const overrideSettings = {
    public: false,
    withPassword: true,
    timePerQuestion: 30,
  };
  // Change code below this line
  const finalSettings = {...defaultSettings,...overrideSettings};
  
  
  //mod 3 30/41 Napisz funkcję makeTask(data), która przyjmuje jeden parametr data - obiekt o następujących właściwościach:text - tekst zadania.category - kategoria zadania.priority - priorytet zadania.Funkcja powinna utworzyć i zwrócić nowy obiekt zadania bez bezpośredniej modyfikacji parametru data. Nowy obiekt musi mieć właściwość completed, której wartość jest przechowywana w zmiennej lokalnej o tej samej nazwie.W parametrze data jest gwarantowana tylko właściwość text, i może brakować pozostałych dwóch category i priority. Wtedy w nowym obiekcie zadania właściwości category i priority powinny zawierać wartości domyślne przechowywane w zmiennych lokalnych o tej samej nazwie.
  
  function makeTask(data) {
    const completed = false;
    const category = "General";
    const priority = "Normal";
    // Change code below this line
  return {completed, priority, category, ... data}
    // Change code above this line
  }
  
  //mod 3 31/41 Korzystając z operacji rest, uzupełnij kod funkcji add(), aby przyjmowała dowolną liczbę argumentów, odczytywała i zwracała ich sumę.
  
  // Change code below this line
  function add(...args) {
    // Change code above this line
  let sum=0;
    for (let i =0; i< args.length;i++){sum +=args[i]};
    
  return sum;
  }
  
  console.log(add(15,11));
  console.log(add(15,1,2,3,4,5,1,11));
  console.log(add(15,11));
  
  //mod 3 32/41 Funkcja addOverNum() oblicza sumę wszystkich argumentów. Zmień parametry i ciało funkcji addOverNum() tak, aby obliczała tylko sumę tych argumentów, które są większe niż określona liczba. Ta liczba musi być pierwszym parametrem funkcji.


  
  // Change code below this line
  function addOverNum(firstArg, ...args) {
    let total = 0;
  
    for (i=0;i<args.length; i+=1){
      if(args[i] > firstArg){total +=args[i];
       
    }
    }
  
    return total;
    // Change code above this line
  }
  console.log(addOverNum(10,12,4,11,41,10,8)
             )
  
  //mod 3 33/41 Funkcja findMatches() powinna przyjmować dowolną liczbę argumentów. Pierwszy argument zawsze będzie tablicą liczb, a pozostałe argumenty będą pojedynczymi liczbami.Uzupełnij kod funkcji, aby zwracała nową tablicę matches, która będzie zawierać tylko te argumenty, zaczynając od drugiego, które znajdują się w tablicy pierwszego argumentu.Na przykład findMatches([1, 2, 3, 4, 5], 1, 8, 2, 7) powinno zwrócić tablicę [1, 2], ponieważ tylko one znajdują się w tablicy którą podajemy jako pierwszy argument.
  
  // Change code below this line
  function findMatches(firstArg, ...anyArgs) {
    const matches = []; // Don't change this line
  for(let arg of firstArg){
    for (let value of anyArgs){
      if(value===arg){
        matches.push(arg)
      }
    }
  }
   // Change code above this line
    return matches;
  }
  
  //34 Dodaj dwie dodatkowe metody do obiektu bookShelf, które na razie będą zwracały tylko stringi przez analogię do getBooks() i addBook(bookName).Metoda removeBook(bookName) usunie książkę według tytułu. Zwraca string "Deleting book <tytuł książki>", gdzie <tytuł ksiązki> jest wartością parametru bookName.Metoda updateBook(oldName, newName) zaktualizuje tytuł książki. Zwraca string "Updating book <stary tytuł> to <nowy tytuł>", gdzie <stary tytuł> i <nowy tytuł> są wartościami parametrów oldName i newName odpowiednio.


  const bookShelf = {
    // Change code below this line
    books: ["The last kingdom", "The guardian of dreams"],
    getBooks() {
      return "Returning all books";
    },
    addBook(bookName) {
      return `Adding book ${bookName}`;
    },

    removeBook(bookName) {
      return `Deleting book ${bookName}`;
    },
    updateBook(oldName, newName) {
      return `Updating book ${oldName} to ${newName}`;
    },

    // Change code above this line
  };

  //35 Uzupełnij metodę updateBook(oldName, newName) tak, aby zmieniała tytuł książki z oldName na newName we właściwości books. Użyj indexOf(), aby znaleźć żądany element tablicy, i splice(), aby zastąpić ten element.

  const bookShelf2 = {
    books: ["The last kingdom", "Haze", "The guardian of dreams"],
    getBooks() {
      return this.books;
    },
    updateBook(oldName, newName) {
      // Change code below this line
      const bookIndex = this.books.indexOf(oldName);
      this.books.splice(bookIndex, 1, newName);
      // Change code above this line
    },

  };

  //36 Zwrócił się do nas właściciel sklepu z eliksirami "U Starej Ropuchy" i zamówił program do prowadzenia inwentarza - dodawania, usuwania, wyszukiwania i aktualizacji mikstur. W tym zadaniu na razie dodaj tylko do obiektu atTheOldToad właściwość potions, której wartość jest pustą tablicą.

  const atTheOldToad = {
    // Change code below this line


    potions: [],


    // Change code above this line
  };

  //37 Dodaj do obiektu atTheOldToad metodę getPotions(), która po prostu zwraca wartość wartość właściwości potions.

  const atTheOldToad1 = {
    potions: ["Speed potion", "Dragon breath", "Stone skin"],
    // Change code below this line
    getPotions() {
      return this.potions;
    }

    // Change code above this line
  };

  //38 Uzupełnij metodę addPotion(potionName), aby dodawała miksturę potionName na końcu tablicy mikstur we właściwości potions.

  const atTheOldToad2 = {
    potions: ["Speed potion", "Dragon breath", "Stone skin"],
    addPotion(potionName) {
      // Change code below this line

      this.potions.push(potionName);

      // Change code above this line
    },
  };

//39 Uzupełnij metodę removePotion(potionName) aby usuwała miksturę potionName z tablicy mikstur we właściwości potions przy użyciu indexOf i splice.

const atTheOldToad3 = {
    potions: ["Speed potion", "Dragon breath", "Stone skin"],
    removePotion(potionName) {
      // Change code below this line

      const potionIndex = this.potions.indexOf(potionName);
      this.potions.splice(potionIndex, 1);


      // Change code above this line
    },
  };

  //40 Uzupełnij metodę updatePotionName(oldName, newName) tak, aby zmieniała nazwę mikstury z oldName do newName, w tablicy mikstur we właściwości potions.

  const atTheOldToad4 = {
    potions: ["Speed potion", "Dragon breath", "Stone skin"],
    updatePotionName(oldName, newName) {
      // Change code below this line
      const potionIndex = this.potions.indexOf(oldName);
      this.potions.splice(potionIndex, 1, newName);

      // Change code above this line
    },
  };


  //41 Klient chce, aby każda mikstura była reprezentowana nie tylko nazwą, ale także ceną, a w przyszłości może mieć inne cechy. Dlatego teraz musimy zamienić prostą tablicę stringów potions na poniższą strukturę tablicy obiektów.

// {
//     name: "Dragon breath",
//     price: 700
//   }
//   Refaktoryzuj metody obiektu atTheOldToad aby nie działały z tablica stringów, ale z tablicą obiektów.
  
//   getPotions() - metoda na zdobycie wszystkich mikstur. Zwraca wartość właściwości potions.
//   addPotion(newPotion) - dodany potions newPotion (już obiekt) w tablicy właściwośći potions, nie tylko jeśli potions jeszcze nie jest w tablicy. W przeciwnym razie zwracany jest string.
//   removePotion(potionName) - usuwa obiekt mikstury o nazwie potionName z tablicy we właściwości potions.
//   updatePotionName(oldName, newName) - zmienia właściwość name obiektu-eliksiru z oldName do newName w tablicy potions.

  const atTheOldToadlast = {
    potions: [
      { name: "Speed potion", price: 460 },
      { name: "Dragon breath", price: 780 },
      { name: "Stone skin", price: 520 },
    ],
    // Change code below this line
    getPotions() {
      return this.potions;
    },
    addPotion(newPotion) {
      for (const potion of this.potions) {
        if (potion.name === newPotion.name) {
          return `Error! Potion ${newPotion.name} is already in your inventory!`;
        }
      }
      this.potions.push(newPotion);
    },
    removePotion(potionName) {
      const array = [];
      for (const potion of this.potions) {
        array.push(potion.name);
      }
      const potionIndex = array.indexOf(potionName);
      if (potionIndex === -1) {
        return `Potion ${potionName} is not in inventory!`;
      }
      this.potions.splice(potionIndex, 1);
    },
    updatePotionName(oldName, newName) {
      for (const potion of this.potions) {
        if (potion.name === oldName) {
          return potion.name = newName;
        }
      }
    },
    // Change code above this line
  };

  ///