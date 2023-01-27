//1 Uzupełnij kod tak, aby w zmiennej result był rezultat wykonania funkcji makePizza, a w zmiennej pointer był odnośnik do funkcji makePizza.

function makePizza() {
    return "Your pizza is being prepared, please wait.";
  }
  // Change code below this line
  
  const result = makePizza();
  const pointer = (makePizza);
  
  //2 Uzupełnij funkcję makeMessage tak, aby ona oczekiwała jako drugiego parametru (parametr callback) funkcji callback i zwracała jej wywołanie. Funkcja deliverPizza lub makePizza będzie przekazywana jako callback i oczekiwała jako argumentu nazwy gotowej pizzy w dostawie.

  function deliverPizza(pizzaName) {
    return `Delivering ${pizzaName} pizza.`;
  }

  function makePizza(pizzaName) {
    return `Pizza ${pizzaName} is being prepared, please wait...`;
  }

  // Chande code below this line
  function makeMessage(pizzaName, callback) {
    return callback(pizzaName);

  }

//3 Uzupełnij drugie wywołanie funkcji makePizza(pizzaName, callback), przekazując jako drugi argument inline funkcję callback eatPizza(pizzaName), która loguje łańcuch "Eating pizza <nazwa pizzy>".

function makePizza(pizzaName, callback) {
    console.log(`Pizza ${pizzaName} is being prepared, please wait...`);
    callback(pizzaName);
  }

  makePizza("Royal Grand", function deliverPizza(pizzaName) {
    console.log(`Delivering pizza ${pizzaName}.`);
  });
  // Change code below this line

  makePizza("Ultracheese", function eatPizza(pizzaName) {
    console.log(`Eating pizza ${pizzaName}.`);
  });

  //4 Należy napisać logikę opracowywania zamówień pizzy. Wykonaj refaktor metody order tak, aby jako drugi i trzeci parametr przyjmowała dwa callbacki onSuccess i onError.Jeśli we właściwości pizzas nie ma pizzy o nazwie z parametru pizzaName, metoda order powinna zwracać rezultat callbacku onError, przekazując mu jako argument łańcuch "There is no pizza with a name <nazwa pizzy> in the assortment."Jeśli we właściwości pizzas jest pizza o nazwie z parametru pizzaName, metoda order powinna zwracać rezultat wywołania callbacku onSuccess, przekazując mu jako argument nazwę zamówionej pizzy.Po zadeklarowaniu obiektu pizzaPalace dodaliśmy callbacki i wywołanie metod. Prosimy niczego tam nie zmieniać.



  const pizzaPalace = {
    pizzas: ["Ultracheese", "Smoked", "Four meats"],
    order(pizzaName, onSuccess, onError) {
      for (const key of pizzaPalace.pizzas) {
        if (this.pizzas.includes(pizzaName)) {
          return onSuccess(pizzaName);
        }
        return onError(`There is no pizza with a name ${pizzaName} in the assortment.`);
      }
    },
  };
  // Change code above this line

  // Callback for onSuccess
  function makePizza(pizzaName) {
    return `Your order is accepted. Cooking pizza ${pizzaName}.`;
  }

  // Callback for onError
  function onOrderError(error) {
    return `Error! ${error}`;
  }

  // Method calls with callbacks
  pizzaPalace.order("Smoked", makePizza, onOrderError);
  pizzaPalace.order("Four meats", makePizza, onOrderError);
  pizzaPalace.order("Big Mike", makePizza, onOrderError);
  pizzaPalace.order("Vienna", makePizza, onOrderError);

//5 Funkcja calculateTotalPrice(orderedItems) przyjmuje jeden parametr orderedItems - tablicę liczb. Podlicza ogólną sumę jej elementów, która zapisuje się w zmiennej totalPrice i zostaje zwrócona jako rezultat działania funkcji.Wykonaj refaktor funkcji tak, aby zamiast pętli for wykorzystywała metodę forEach.

function calculateTotalPrice(orderedItems) {
    let totalPrice = 0;
    // Change code below this line

    orderedItems.forEach(function callback(orderedItem) {
    totalPrice += orderedItem;
    });


    // Change code above this line
    return totalPrice;
    }

//6 Funkcja filterArray(numbers, value) przyjmuje tablicę liczb numbers i zwraca nową tablicę, na której będą tylko te elementy oryginalnej tablicy, które są większe niż wartość parametru value.Wykonaj refaktor funkcji tak, aby zamiast pętli for wykorzystywała metodę forEach.

function filterArray(numbers, value) {
    const filteredNumbers = [];
    // Change code below this line

    numbers.forEach(function callback(number) {
      if (number > value) {
        filteredNumbers.push(number);
      }
    });

    // Change code above this line
    return filteredNumbers;
  }

  //7 Funkcja getCommonElements(firstArray, secondArray) przyjmuje dwie tablice dowolnej długości jako parametry firstArray i secondArray i zwraca nową tablicę ich wspólnych elementów, to znaczy tych, które można znaleźć na obu tablicach.Wykonaj refaktor funkcji tak, aby zamiast cyklu for wykorzystywała metodę forEach.

  function getCommonElements(firstArray, secondArray) {
    const commonElements = [];
    // Change code below this line

    firstArray.forEach(function callback(firstArray) {
      if (secondArray.includes(firstArray)) {
        commonElements.push(firstArray);
      }
    });

    return commonElements;
    // Change code above this line
  }

  //8 Wykonaj refaktor funkcji calculateTotalPrice() tak, aby była zadeklarowana jako strzałkowa.


  const calculateTotalPrice = (quantity, pricePerItem) => {
    return quantity * pricePerItem;
  }

//9 Wykonaj refaktor funkcji calculateTotalPrice() tak, aby wykorzystywała niejawny zwrot.


const calculateTotalPrice = (quantity, pricePerItem) => quantity * pricePerItem;

//10 Wykonaj refaktor funkcji calculateTotalPrice(orderedItems), zamieniając jej zadeklarowanie na funkcję strzałkową. Zamień funkcję callback przekazywaną do metody forEach() na funkcję strzałkową.



const calculateTotalPrice = (orderedItems) => {
    let totalPrice = 0;

    orderedItems.forEach((item) => totalPrice += item);

    return totalPrice;
  }

  //11 Zamień zadeklarowanie funkcji filterArray() i callback dla metody forEach() na funkcje strzałkowe.


  const filterArray = (numbers, value) => {
    const filteredNumbers = [];

    numbers.forEach((number) => { if (number > value) { filteredNumbers.push(number) } });

    // Change code above this line
    return filteredNumbers;
  }

  //12 Zamień zadeklarowanie funkcji getCommonElements() i callback dla metody forEach() na funkcje strzałkowe.


  const getCommonElements = (firstArray, secondArray) => {
    const commonElements = [];

    firstArray.forEach((element) => { if (secondArray.includes(element)) { commonElements.push(element); } });

    // Change code above this line
    return commonElements;
  }

  //13  Funkcja changeEven(numbers, value) przyjmuje tablicę liczb numbers i odnawia każdy element, wartością którego jest liczba parzysta, dodając do niego wartość parametru value.Wykonaj refaktor funkcji tak, aby stała się czysta – nie zmieniała tablic liczb numbers, a tworzyła, wypełniała i zwracała nową tablicę z odnowionymi wartościami.


  function changeEven(numbers, value) {
    // Change code below this line
    const evenNum = [];

    numbers.forEach(number => {
      if (number % 2 === 0) {
        evenNum.push(number + value);
      }
      else { evenNum.push(number) };
    })
    return evenNum;
    // Change code above this line
  }

  //14 Uzupełnij kod tak, aby w zmiennej planetsLengths otrzymać tablicę długości nazw planet. Obowiązkowo wykorzystaj metodę map().


  const planets = ["Earth", "Mars", "Venus", "Jupiter"];
// Change code below this line
const planetsLengths = planets.map(planet=>planet.length);


//15 Wykorzystując metodę map() spraw, aby w zmiennej titles otrzymać tablicę tytułów książek (właściwość title) ze wszystkich obiektów tablicy books.


const books = [
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
      title: "The Dream of a Ridiculous Man",
      author: "Fyodor Dostoevsky",
      rating: 7.75,
    },
    { title: "Redder Than Blood", author: "Tanith Lee", rating: 7.94 },
    { title: "Enemy of God", author: "Bernard Cornwell", rating: 8.67 },
  ];
  // Change code below this line
  
  const titles = books.map(book => book.title);
  
//16   Wykorzystując metodę flatMap() spraw, aby w zmiennej genres otrzymać tablicę wszystkich gatunków książek (właściwość genres) z tablicy książek books.


const books2 = [
    {
      title: "The Last Kingdom",
      author: "Bernard Cornwell",
      genres: ["adventure", "history"],
    },
    {
      title: "Beside Still Waters",
      author: "Robert Sheckley",
      genres: ["fiction"],
    },
    {
      title: "Redder Than Blood",
      author: "Tanith Lee",
      genres: ["horror", "mysticism"],
    },
  ];
  // Change code below this line

  const genres = books2.flatMap(book => book.genres);

//17 Uzupełnij funkcję getUserNames(users) tak, aby zwracała tablicę imion użytkowników (właściwość name) z tablicy obiektów w parametrze users.


// Change code below this line



const getUserNames = users => {

    return users.map(user => user.name)

  };

  //18 Uzupełnij funkcję getUserEmails(users) tak, aby zwracała tablicę adresów pocztowych użytkowników (właściwość email) z tablicy obiektów w parametrze users.


  // Change code below this line
const getUserEmails = users => {
    
    return users.map(user => user.email)
      };
      // Change code above this line

//19 Uzupełnij kod tak, aby w zmiennej evenNumbers otrzymać tablicę liczb parzystych z tablicy numbers, a w zmiennej oddNumbers tablicę liczb nieparzystych. Obowiązkowo wykorzystaj metodę filter().


const numbers = [17, 24, 82, 61, 36, 18, 47, 52, 73];
// Change code below this line

const evenNumbers = numbers.filter(number => (number % 2 == 0));
    const oddNumbers = numbers.filter(number => !(number % 2 == 0));

//20 Uzupełnij kod tak, aby w zmiennej allGenres znajdowała się tablica wszystkich gatunków książek (właściwość genres) z tablicy books, a w zmiennej uniqueGenres tablica unikalnych gatunków - bez powtórek.

const books3 = [
    {
      title: "The Last Kingdom",
      author: "Bernard Cornwell",
      genres: ["adventure", "history"],
    },
    {
      title: "Beside Still Waters",
      author: "Robert Sheckley",
      genres: ["fiction", "mysticism"],
    },
    {
      title: "Redder Than Blood",
      author: "Tanith Lee",
      genres: ["horror", "mysticism", "adventure"],
    },
  ];
  // Change code below this line
  const allGenres = books3.flatMap(book => book.genres);
      const uniqueGenres = allGenres.filter(
          (genre, index, array) => array.indexOf(genre) === index
      );
  
//21 Wykorzystując metodę filter() uzupełnij kod tak, aby:W zmiennej topRatedBooks otrzymywało się tablicę z książkami, których rating (właściwość rating) jest większy lub równy wartości zmiennej MIN_RATING.W zmiennej booksByAuthor otrzymywało się tablicę z książkami napisanymi przez autora o imieniu (właściwość author), które pasują do wartości w zmiennej AUTHOR.

const books4 = [
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
      title: "The Dream of a Ridiculous Man",
      author: "Fyodor Dostoevsky",
      rating: 7.75,
    },
    { title: "Redder Than Blood", author: "Tanith Lee", rating: 7.94 },
    { title: "Enemy of God", author: "Bernard Cornwell", rating: 8.67 },
  ];
  
  const MIN_RATING = 8;
  const AUTHOR = "Bernard Cornwell";
  // Change code below this line
  
      const topRatedBooks = books4.filter(book => book.rating > 8);
      const booksByAuthor = books4.filter(book => book.author === "Bernard Cornwell");
  
//22 Uzupełnij funkcję getUsersWithEyeColor(users, color) tak, aby zwracała tablicę użytkowników, u których kolor oczu (właściwość eyeColor) jest zgodny z właściwością parametru color.

    const getUsersWithEyeColor = (users, color) => {
    return filteredByColor = users.filter(user => user.eyeColor === color)
    };  

//23 Uzupełnij funkcję getUsersWithAge(users, minAge, maxAge) tak, aby zwracała tablicę użytkowników, wiek których (właściwość age) mieści się w przedziale między minAge i maxAge.

    // Change code below this line
    const getUsersWithAge = (users, minAge, maxAge) => {

        return ageFilter = users.filter(user => user.age > minAge && user.age < maxAge)
    };
// Change code above this line

//24 Uzupełnij funkcję getUsersWithFriend(users, friendName) tak, aby zwracała tablicę użytkowników, którzy mają przyjaciela o imieniu z parametru friendName. Tablica przyjaciół użytkowników zapisuje się we właściwości friends.

 // Change code below this line
 const getUsersWithFriend = (users, friendName) => {
    return users.filter(user => user.friends.includes(friendName));
};
// Change code above this line

//25 Uzupełnij funkcję getFriends(users) tak, aby zwracała tablicę przyjaciół wszystkich użytkowników (właściwość friends). Kilku użytkowników może mieć tych samych przyjaciół. Spraw, aby zwracana tablica nie zawierała powtórzeń.

 // Change code below this line
 const getFriends = (users) => {

    const allFriends = users.flatMap(user => user.friends);
    return uniqueFriends = allFriends.filter(
        (user, index, array) => array.indexOf(user) === index);
    };
   // Change code above this line

   //26 Uzupełnij funkcję getActiveUsers(users) tak, aby zwracała tablicę aktywnych użytkowników, wartość właściwości isActive których true.

    // Change code below this line
    const getActiveUsers = (users) => {
        return users.filter(user => user.isActive === true)
    };
// Change code above this line

//27 Uzupełnij funkcję getInactiveUsers(users) tak, aby zwracała tablicę nieaktywnych użytkowników, wartość właściwości isActive, których false.

// Change code below this line
const getInactiveUsers = (users) => {
    return users.filter(user => user.isActive === false)
};
// Change code above this line

//28 Wykorzystując metodę find(), uzupełnij kod tak, aby:W zmiennej bookWithTitle otrzymano obiekt książkę, której tytuł (właściwość title) jest zgodny z wartością zmiennej BOOK_TITLE.W zmiennej bookByAuthor otrzymano obiekt książkę, której autor (właściwość author) jest zgodny z wartością zmiennej AUTHOR.

const books5 = [
    {
      title: 'The Last Kingdom',
      author: 'Bernard Cornwell',
      rating: 8.38,
    },
    {
      title: 'Beside Still Waters',
      author: 'Robert Sheckley',
      rating: 8.51,
    },
    {
      title: 'The Dream of a Ridiculous Man',
      author: 'Fyodor Dostoevsky',
      rating: 7.75,
    },
    { title: 'Redder Than Blood', author: 'Tanith Lee', rating: 7.94 },
  ];
  const BOOK_TITLE = 'The Dream of a Ridiculous Man';
  const AUTHOR2 = 'Robert Sheckley';
  // Change code below this line
  const bookWithTitle = books5.find(book => book.title === BOOK_TITLE);
      const bookByAuthor = books5.find(book => book.author === AUTHOR2);
  
  //29 Uzupełnij funkcję getUserWithEmail(users, email) tak, aby zwracała obiekt użytkownika, poczta którego (właściwość email) jest zgodna z wartością parametru email.

  // Change code below this line
  const getUserWithEmail = (users, email) => {
    return users.find(user => user.email === email)
};
// Change code above this line

//30 Wykorzystując metodę every() uzupełnij kod tak, aby:

// W zmiennej eachElementInFirstIsEven był rezultat sprawdzenia wszystkich elementów tablicy firstArray pod względem parzystości.
// W zmiennej eachElementInFirstIsOdd był rezultat sprawdzenia wszystkich elementów tablicy firstArray pod względem nieparzystości.
// W zmiennej eachElementInSecondIsEven był rezultat sprawdzenia wszystkich elementów tablicy secondArray pod względem parzystości.
// W zmiennej eachElementInSecondIsOdd był rezultat sprawdzenia wszystkich elementów tablicy secondArray pod względem nieparzystości.
// W zmiennej eachElementInThirdIsEven był rezultat sprawdzenia wszystkich elementów tablicy thirdArray pod względem parzystości.
// W zmiennej eachElementInThirdIsOdd był rezultat sprawdzenia wszystkich elementów tablicy thirdArray pod względem nieparzystości.



const firstArray = [26, 94, 36, 18];
const secondArray = [17, 61, 23];
const thirdArray = [17, 26, 94, 61, 36, 23, 18];
// Change code below this line
const eachElementInFirstIsEven = firstArray.every(value => value % 2 == 0 === true);
    const eachElementInFirstIsOdd = firstArray.every(value => value % 2 == 0 !== true);

    const eachElementInSecondIsEven = secondArray.every(value => value % 2 == 0 === true);
    const eachElementInSecondIsOdd = secondArray.every(value => value % 2 == 0 !== true);

    const eachElementInThirdIsEven = thirdArray.every(value => value % 2 == 0 === true);
    const eachElementInThirdIsOdd = thirdArray.every(value => value % 2 == 0 !== true);

//31 Uzupełnij funkcję isEveryUserActive(users) tak, aby sprawdzała, czy wszyscy użytkownicy są teraz aktywni (właściwość isActive) i zwracała true lub false.

// Change code below this line
const isEveryUserActive = (users) => {
    return users.every(user => user.isActive === true)
};
// Change code above this line

//32 Wykorzystując metodę some() uzupełnij kod tak, aby:

// W zmiennej anyElementInFirstIsEven był rezultat sprawdzenia obecności parzystych elementów na tablicy firstArray.
// W zmiennej anyElementInFirstIsOdd był rezultat sprawdzenia obecności nieparzystych elementów na tablicy firstArray.
// W zmiennej anyElementInSecondIsEven był rezultat sprawdzenia obecności parzystych elementów na tablicy secondArray.
// W zmiennej anyElementInSecondIsOdd był rezultat sprawdzenia obecności nieparzystych elementów na tablicy secondArray.
// W zmiennej anyElementInThirdIsEven był rezultat sprawdzenia obecności parzystych elementów na tablicy thirdArray.
// W zmiennej anyElementInThirdIsOdd był rezultat sprawdzenia obecności nieparzystych elementów na tablicy thirdArray.


const firstArray32 = [26, 94, 36, 18];
const secondArray32 = [17, 61, 23];
const thirdArray32 = [17, 26, 94, 61, 36, 23, 18];
// Change below this line

const anyElementInFirstIsEven = firstArray32.some(number => number%2==0 === true);
const anyElementInFirstIsOdd = firstArray32.some(number => number%2==0 !== true);

const anyElementInSecondIsEven = secondArray32.some(number => number%2==0 === true);
const anyElementInSecondIsOdd = secondArray32.some(number => number%2==0 !== true);

const anyElementInThirdIsEven = thirdArray32.some(number => number%2==0 === true);
const anyElementInThirdIsOdd = thirdArray32.some(number => number%2==0 !== true);

//33 Uzupełnij funkcję isAnyUserActive(users) tak, aby sprawdzała obecność aktywnych użytkowników (właściwość isActive) i zwracała true lub false.

// Change code below this line
const isAnyUserActive = users => {
    return users.some(user => user.isActive === true)
};
// Change code above this line

//34 Serwis gier potrzebuje funkcjonalności podliczania średniego czasu spędzonego w grach. Uzupełnij kod tak, aby w zmiennej totalPlayTime uzyskać ogólny czas gry z tablicy playtimes.

const players = {
    mango: 1270,
    poly: 468,
    ajax: 710,
    kiwi: 244
};
const playtimes = Object.values(players); // [1270, 468, 710, 244]
// Change code below this line

const totalPlayTime = playtimes.reduce((previousValue, number) => {
    return previousValue + number;
}, 0);

// Change code above this line
const averagePlayTime = totalPlayTime / playtimes.length;


//35 Dla naszego serwisu trzeba policzyć średni czas spędzony w jednej grze dla każdego gracza i uzyskać ogólną sumę tych czasów. Policzyć czas dla każdego z graczy można poprzez podzielenie jego czasu (właściwość playtime) przez ilość gier (właściwość gamesPlayed).

const players2 = [
    { name: "Mango", playtime: 1270, gamesPlayed: 4 },
    { name: "Poly", playtime: 469, gamesPlayed: 2 },
    { name: "Ajax", playtime: 690, gamesPlayed: 3 },
    { name: "Kiwi", playtime: 241, gamesPlayed: 1 },
  ];
  // Change code below this line
  
      const totalAveragePlaytimePerGame = players2.reduce((sum, player) => {
          return sum + (player.playtime / player.gamesPlayed)
      }, 0)

//36 Uzupełnij funkcję calculateTotalBalance(users) tak, aby liczyła i zwracała sumę wszystkich środków (właściwość balance), które przechowują użytkownicy z tablicy users.

// Change code below this line
const calculateTotalBalance = users => {
    const total = users.reduce((sum, user) => {
        return sum + user.balance
    }, 0)
    return total;
};
// Change code above this line


//37 Uzupełnij funkcję getTotalFriendCount(users) tak, aby liczyła i zwracała ogólną ilość przyjaciół (właściwość friends) wszystkich użytkowników z tablicy.

const getTotalFriendCount = users => {
    const totalFriends = users.reduce((item, userFriends) => {
        return item + userFriends.friends.length;
    }, 0);
    return totalFriends
}
// Change code above this line

//38 Uzupełnij kod tak, aby w zmiennej ascendingReleaseDates otrzymać posortowaną w porządku rosnącym kopię tablicy releaseDates, a w zmiennej alphabeticalAuthors kopię tablicy imion autorów authors posortowaną w porządku alfabetycznym.

const releaseDates = [2016, 1967, 2008, 1984, 1973, 2012, 1997];
const authors = [
    "Tanith Lee",
    "Bernard Cornwell",
    "Robert Sheckley",
    "Fyodor Dostoevsky",
];
// Change code below this line

const ascendingReleaseDates = releaseDates.slice(0).sort();

const alphabeticalAuthors = authors.slice(0).sort();

//39 Biblioteka online potrzebuje wystawić książki posortowane po dacie wydania, w porządku rosnącym lub malejącym. Uzupełnij kod tak, aby w zmiennej ascendingReleaseDates otrzymać posortowaną rosnąco kopię tablicy releaseDates, a w zmiennej descendingReleaseDates kopię posortowaną malejąco.

const releaseDates2 = [2016, 1967, 2008, 1984, 1973, 2012, 1997];
// Change code below this line

    const ascendingReleaseDates2 = [...releaseDates2].sort();

    const descendingReleaseDates2 = [...releaseDates2].sort((a, b) => b - a);


//40 Biblioteka online potrzebuje wystawić książki posortowane po autorach, w porządku alfabetycznym i w porządku odwrotnym do alfabetycznego. Uzupełnij kod tak, by w zmiennej authorsInAlphabetOrder otrzymać posortowaną w porządku alfabetycznym kopię tablicy authors, a w zmiennej authorsInReversedOrder kopię posortowaną w porządku odwrotnym do alfabetycznego.

const authors2 = [
    "Tanith Lee",
    "Bernard Cornwell",
    "Robert Sheckley",
    "Fyodor Dostoevsky",
    "Howard Lovecraft",
  ];
  // Change code below this line
  
      const authorsInAlphabetOrder = [...authors2].sort((a, b) => a.localeCompare(b));
  
      const authorsInReversedOrder = [...authors2].sort((a, b) => b.localeCompare(a));

//41 Uzupełnij kod tak, aby:

// W zmiennej sortedByAuthorName otrzymać tablicę książek posortowanych po imieniu autora w porządku alfabetycznym.
// W zmiennej sortedByReversedAuthorName otrzymać tablicę książek posortowanych po imieniu autora w porządku odwrotnym do alfabetycznego.
// W zmiennej sortedByAscendingRating otrzymać tablicę książek posortowanych w porządku rosnącym ratingu.
// W zmiennej sortedByDescentingRating otrzymać tablicę książek posortowanych w porządku malejącym ratingu.



const books6 = [
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
      title: "The Dream of a Ridiculous Man",
      author: "Fyodor Dostoevsky",
      rating: 7.75,
    },
    { title: "Redder Than Blood", author: "Tanith Lee", rating: 7.94 },
    { title: "Enemy of God", author: "Bernard Cornwell", rating: 8.67 },
  ];
  // Change code below this line
  const sortedByAuthorName = [...books6].sort((a, b) => a.author.localeCompare(b.author));
  
      const sortedByReversedAuthorName = [...books6].sort((a, b) => b.author.localeCompare(a.author));
  
      const sortedByAscendingRating = [...books6].sort(
          (firstBook, secondBook) => firstBook.rating - secondBook.rating);
  
      const sortedByDescentingRating = [...books6].sort(
          (firstBook, secondBook) => secondBook.rating - firstBook.rating);
  

//42 Uzupełnij funkcję sortByAscendingBalance(users) tak, aby zwracała tablicę użytkowników posortowanych po wzrastaniu ich bilansu (właściwość balance).

// Change code below this line
const sortByAscendingBalance = users => {
    return [...users].sort((a, b) => a.balance - b.balance);
};
// Change code above this line


//43 Uzupełni funkcję sortByDescendingFriendCount(users) tak, aby zwracała tablicę użytkowników posortowanych po zmniejszaniu się ilości ich przyjaciół (właściwość friends).

// Change code below this line
const sortByDescendingFriendCount = users => {
    return [...users].sort((a, b) => b.friends.length - a.friends.length);
};
// Change code above this line

//44 Uzupełnij funkcję sortByName(users) tak, aby zwracała tablicę użytkowników posortowaną po ich imieniu (właściwość name) w porządku alfabetycznym.

// Change code below this line
const sortByName = users => {
    return [...users].sort((a, b) => a.name.localeCompare(b.name))
};
// Change code above this line

//45 Uzupełnij kod tak, aby w zmiennej names otrzymać tablicę imion autorów w porządku alfabetycznym, rating książek których jest większy niż wartość zmiennej MIN_BOOK_RATING.

const books8 = [
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
      title: "The Dream of a Ridiculous Man",
      author: "Fyodor Dostoevsky",
      rating: 7.75,
    },
    { title: "Redder Than Blood", author: "Tanith Lee", rating: 7.94 },
    {
      title: "The Dreams in the Witch House",
      author: "Howard Lovecraft",
      rating: 8.67,
    },
  ];
  const MIN_BOOK_RATING = 8;
  // Change code below this line
  const names = [...books8]
          .sort((a, b) => a.author.localeCompare(b.author))
          .filter((book) => book.rating >= MIN_BOOK_RATING)
          .map((book) => book.author);
  
      console.log(names);


//46 Uzupełnij funkcję getNamesSortedByFriendCount(users) tak, aby zwracała tablicę imion użytkowników posortowaną po zwiększaniu się ilości ich przyjaciół (właściwość friends).

// Change code below this line
const getNamesSortedByFriendCount = users => {
    return [...users]
        .sort((a, b) => a.friends.length - b.friends.length)
        .map(friend => friend.name);
};
// Change code above this line

//47  Uzupełnij funkcję getSortedFriends(users) tak, aby zwracała tablicę unikalnych imion przyjaciół (własciwość friends) posortowaną w porządku alfabetycznym.

// Change code below this line
const getSortedFriends = users => {

    return users
        .flatMap(user => user.friends)
        .filter((name, i, arr) => arr.indexOf(name) === i)
        .sort((a, b) => a.localeCompare(b))
};
// Change code above this line

//48 Uzupełnij funkcję getTotalBalanceByGender(users, gender) tak, aby zwracała ogólny bilans użytkowników (właściwość balance), których płeć (właściwość gender) jest zgodna z wartością parametru gender.

// Change code below this line
const getTotalBalanceByGender = (users, gender) => {
    return users
        .filter(user => user.gender == gender)
        .reduce((total, user) => total + user.balance, 0)
}
// Change code above this line

///////