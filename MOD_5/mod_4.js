//1
function makePizza() {
    return "Your pizza is being prepared, please wait.";
  }
  // Change code below this line
  
  const result = makePizza();
  const pointer = (makePizza);
  
  //2
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

//3
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

  //4
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

//5
function calculateTotalPrice(orderedItems) {
    let totalPrice = 0;
    // Change code below this line

    orderedItems.forEach(function callback(orderedItem) {
    totalPrice += orderedItem;
    });


    // Change code above this line
    return totalPrice;
    }

//6
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

  //7
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

  //8
  const calculateTotalPrice = (quantity, pricePerItem) => {
    return quantity * pricePerItem;
  }
//9
const calculateTotalPrice = (quantity, pricePerItem) => quantity * pricePerItem;

//10
const calculateTotalPrice = (orderedItems) => {
    let totalPrice = 0;

    orderedItems.forEach((item) => totalPrice += item);

    return totalPrice;
  }

  //11
  const filterArray = (numbers, value) => {
    const filteredNumbers = [];

    numbers.forEach((number) => { if (number > value) { filteredNumbers.push(number) } });

    // Change code above this line
    return filteredNumbers;
  }

  //12
  const getCommonElements = (firstArray, secondArray) => {
    const commonElements = [];

    firstArray.forEach((element) => { if (secondArray.includes(element)) { commonElements.push(element); } });

    // Change code above this line
    return commonElements;
  }

  //13
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

  //14
  const planets = ["Earth", "Mars", "Venus", "Jupiter"];
// Change code below this line
const planetsLengths = planets.map(planet=>planet.length);


//15
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
  
//16  
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

//17
// Change code below this line



const getUserNames = users => {

    return users.map(user => user.name)

  };

  //18
  // Change code below this line
const getUserEmails = users => {
    
    return users.map(user => user.email)
      };
      // Change code above this line

//19
const numbers = [17, 24, 82, 61, 36, 18, 47, 52, 73];
// Change code below this line

const evenNumbers = numbers.filter(number => (number % 2 == 0));
    const oddNumbers = numbers.filter(number => !(number % 2 == 0));

//20
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
  
//21
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
  
//22
      const getUsersWithEyeColor = (users, color) => {
        return filteredByColor = users.filter(user => user.eyeColor === color)
    };  

//23

    // Change code below this line
    const getUsersWithAge = (users, minAge, maxAge) => {

        return ageFilter = users.filter(user => user.age > minAge && user.age < maxAge)
    };
// Change code above this line

//24
 // Change code below this line
 const getUsersWithFriend = (users, friendName) => {
    return users.filter(user => user.friends.includes(friendName));
};
// Change code above this line

//25
 // Change code below this line
 const getFriends = (users) => {

    const allFriends = users.flatMap(user => user.friends);
    return uniqueFriends = allFriends.filter(
        (user, index, array) => array.indexOf(user) === index);
    };
   // Change code above this line

   //26

    // Change code below this line
    const getActiveUsers = (users) => {
        return users.filter(user => user.isActive === true)
    };
// Change code above this line

//27
// Change code below this line
const getInactiveUsers = (users) => {
    return users.filter(user => user.isActive === false)
};
// Change code above this line

//28
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
  
  //29
  // Change code below this line
  const getUserWithEmail = (users, email) => {
    return users.find(user => user.email === email)
};
// Change code above this line

//30
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

//31
// Change code below this line
const isEveryUserActive = (users) => {
    return users.every(user => user.isActive === true)
};
// Change code above this line

//32
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

//33
// Change code below this line
const isAnyUserActive = users => {
    return users.some(user => user.isActive === true)
};
// Change code above this line

//34
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


//35
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

//36
// Change code below this line
const calculateTotalBalance = users => {
    const total = users.reduce((sum, user) => {
        return sum + user.balance
    }, 0)
    return total;
};
// Change code above this line


//37
const getTotalFriendCount = users => {
    const totalFriends = users.reduce((item, userFriends) => {
        return item + userFriends.friends.length;
    }, 0);
    return totalFriends
}
// Change code above this line

//38
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

//39
const releaseDates2 = [2016, 1967, 2008, 1984, 1973, 2012, 1997];
// Change code below this line

    const ascendingReleaseDates2 = [...releaseDates2].sort();

    const descendingReleaseDates2 = [...releaseDates2].sort((a, b) => b - a);


//40
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

//41
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
  

//42

// Change code below this line
const sortByAscendingBalance = users => {
    return [...users].sort((a, b) => a.balance - b.balance);
};
// Change code above this line


//43
// Change code below this line
const sortByDescendingFriendCount = users => {
    return [...users].sort((a, b) => b.friends.length - a.friends.length);
};
// Change code above this line

//44
// Change code below this line
const sortByName = users => {
    return [...users].sort((a, b) => a.name.localeCompare(b.name))
};
// Change code above this line

//45
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


      //46
      // Change code below this line
const getNamesSortedByFriendCount = users => {
    return [...users]
        .sort((a, b) => a.friends.length - b.friends.length)
        .map(friend => friend.name);
};
// Change code above this line

//47
// Change code below this line
const getSortedFriends = users => {

    return users
        .flatMap(user => user.friends)
        .filter((name, i, arr) => arr.indexOf(name) === i)
        .sort((a, b) => a.localeCompare(b))
};
// Change code above this line

//48
// Change code below this line
const getTotalBalanceByGender = (users, gender) => {
    return users
        .filter(user => user.gender == gender)
        .reduce((total, user) => total + user.balance, 0)
}
// Change code above this line

///////