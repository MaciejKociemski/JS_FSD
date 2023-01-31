//1 Wykonaj refaktor metod obiektu pizzaPalace, wstawiając brakujące this w miejscach zwracania się do właściwości i metod obiektu.

const pizzaPalace = {
    pizzas: ["Supercheese", "Smoked", "Four meats"],
    // Change code below this line
    checkPizza(pizzaName) {
      return this.pizzas.includes(pizzaName);
    },
    order(pizzaName) {
      const isPizzaAvailable = this.checkPizza(pizzaName);
  
      if (!isPizzaAvailable) {
        return `Sorry, there is no pizza named «${pizzaName}»`;
      }
  
      return `Order accepted, preparing «${pizzaName}» pizza`;
    },
    // Change code above this line
  };

  
  //2 Przed zwolnieniem programista popsuł kod źródłowy zarządzania kontami użytkowników naszego serwisu dostawy jedzenia. Wykonaj refaktor metod obiektu customer, umieszczając brakujące this przy zwracaniu się do właściwości obiektu.Po zadeklarowaniu obiektu dodaliśmy wywołanie metod w tej kolejności, w jakiej twój kod będą sprawdzać testy. Prosimy niczego tam nie zmieniać.


  const customer = {
    username: "Mango",
    balance: 24000,
    discount: 0.1,
    orders: ["Burger", "Pizza", "Salad"],
    // Change code below this line
    getBalance() {
      return this.balance;
    },
    getDiscount() {
      return this.discount;
    },
    setDiscount(value) {
      this.discount = value;
    },
    getOrders() {
      return this.orders;
    },
    addOrder(cost, order) {
      this.balance -= cost - cost * this.discount;
      this.orders.push(order);
    },
    // Change code above this line
  };
  
//3 Testerzy znaleźli błędy w kodzie serwisu zapisywania historii zamówień jedzenia. Napraw je, prawidłowo rozmieszczając this w metodach obiektu historyService, aby metody zaczęły pracować poprawnie.

const historyService = {
    orders: [
      { email: "jacob@hotmail.com", dish: "Burrito" },
      { email: "solomon@topmail.net", dish: "Burger" },
      { email: "artemis@coldmail.net", dish: "Pizza" },
      { email: "solomon@topmail.net", dish: "Apple pie" },
      { email: "jacob@hotmail.com", dish: "Taco" },
    ],
    // Change code below this line
    getOrdersLog() {
      return this.orders
        .map(order => `email: ${order.email} dish: ${order.dish}`)
        .join(" - ");
    },
    getEmails() {
      const emails = this.orders.map(order => order.email);
      const uniqueEmails = new Set(emails);
      return [...uniqueEmails];
    },
    getOrdersByEmail(email) {
      return this.orders.filter(order => order.email === email);
    },
    // Change code above this line
  };

  //4 Zmień kod tak, aby obiekt parent został prototypem dla obiektu w zmiennej сhild

  const parent = {
    name: "Stacey",
    surname: "Moore",
    age: 54,
    heritage: "Irish",
  };
  // Change code below this line
  
  const child = Object.create(parent);
  
  // Change code above this line
  child.name = "Jason";
  child.age = 27;

  //5 Zmień kod, budując łańcuch prototypów tak, aby obiekt ancestor był prototypem dla parent, a ten w swojej kolejności był prototypem dla child.

  const ancestor = {
    name: "Paul",
    age: 83,
    surname: "Dawson",
    heritage: "Irish",
  };
  // Change code below this line
  
  const parent2 = Object.create(ancestor);
  parent2.name = "Stacey";
  parent2.surname = "Moore";
  parent2.age = 54;
  
  const child = Object.create(parent2);
  child.name = "Jason";
  child.age = 27;
  
  // Change code above this line

  //6 Wykorzystując kluczowe słowo class zadeklaruj klasę Car z pustym ciałem.
  class Car{}

  //7 Dodaj klasie Car metodę constructor która przyjmuje trzy parametry:brand - marka samochodu.model - model samochodu.price - cena samochodu.Klasa Car powinna tworzyć obiekt z jednoimiennymi właściwościami brand, model i price, wartościami których powinny być argumementy podane w czasie jego wywołania z operatorem new.
  class Car {
    // Change code below this line
  constructor(brand,model,price){
  this.brand = brand;
  this.model = model;
  this.price = price}
  
  
    // Change code above this line
  }

  //8 Wykonaj refaktor klasy Car tak, aby przyjmował jeden parametr – obiekt z właściwościami brand, model i price. Dokonaj destrukturyzacji obiektu w sygnaturze (podpisie) konstruktora.
  class Car {
    // Change code below this line
    constructor({ brand, model, price }) {
        this.brand = brand;
        this.model = model;
        this.price = price;
    }
    // Change code above this line
}


//9 Dodaj klasie Car dwie metody.getPrice() - zwraca wartość właściwości price z obiektu, który będzie go wywoływać.changePrice(newPrice) - odnawia wartość właściwości price w obiekcie, który będzie go wywoływał na newPrice.
class Car {
    constructor({ brand, model, price }) {
        this.brand = brand;
        this.model = model;
        this.price = price;
    }
    // Change code below this line
    changePrice(newPrice) {
        this.price = newPrice
    }
    getPrice() {
        return this.price
    }


    // Change code above this line
}

//10 Napisz klasę Storage, która będzie tworzyć obiekty dla zarządzania magazynem towarów. Klasa oczekuje tylko jednego argumentu – początkowej tablicy towarów, który zapisuje się na tworzonym obiekcie we właściwości items.Zadeklaruj następujące metody klasy:getItems() - zwraca tablicę aktualnych towarów we właściwości items obiektu, który wywołuje tę metodę.addItem(newItem) - przyjmuje nowy towar newItem i dodaje go do tablicy towarów we właściwości items obiektu, który wywołuje tę metodę.removeItem(itemToRemove) - przyjmuje towar itemToRemove i usuwa go z tablicy towarów we właściwości items obiektu, który wywołuje tę metodę.Pod komentarzem dodaliśmy inicjalizację egzemplarza i wywołanie metod w tej kolejności, w której twój kod będą sprawdzać testy. Prosimy nieczego tam nie zmieniać.
class Storage {
    constructor(items) {
        this.items = items;
    }
    getItems() {
        return this.items;
    }
    addItem(newItem) {
        this.items.push(newItem);
    }
    removeItem(itemToRemove) {
        this.items.splice(this.items.indexOf(itemToRemove), 1);
    }
}


// Change code above this line
const storage2 = new Storage(["Nanitoids", "Prolonger", "Antigravitator"]);
console.log(storage2.getItems()); // ["Nanitoids", "Prolonger", "Antigravitator"]
storage2.addItem("Droid");
console.log(storage2.getItems()); // ["Nanitoids", "Prolonger", "Antigravitator", "Droid"]
storage2.removeItem("Prolonger");
console.log(storage2.getItems()); // ["Nanitoids", "Antigravitator", "Droid"]

//11 Napisz klasę StringBuilder, która przyjmuje jeden parametr initialValue - dowolny łańcuch, który zapisuje się na tworzonym obiekcie we właściwości value.Zadeklaruj następujące metody klasy:getValue() - zwraca aktualne znaczenie właściwości value.padEnd(str) - przyjmuje parametr str (łańcuch) i dodaje go na końcu wartości właściwości value obiektu, który wywołuje tę metodę.padStart(str) - otrzymuje parametr str (łańcuch) i dodaje go na początku wartości właściwości value obiektu, który wywołuje tę metodę.padBoth(str) - otrzymuje parametr str (łańcuch) i dodaje go na początku i na końcu wartości właściwości value obiektu, który wywołuje tę metodę.Pod komentarzem dodaliśmy inicjalizację egzemplarza i wywołanie metod w tej kolejności, w której twój kod będą sprawdzać testy. Prosimy nieczego tam nie zmieniać.
class StringBuilder {
    constructor(value) {
        this.value = value;
    }
    getValue() {
        return this.value;
    }
    padEnd(str) {
        this.value = this.value + str;
    }
    padStart(str) {
        this.value = str + this.value;
    }
    padBoth(str) {
        this.value = str + this.value + str;
    }
}


// Change code above this line
const builder = new StringBuilder(".");
console.log(builder.getValue()); // "."
builder.padStart("^");
console.log(builder.getValue()); // "^."
builder.padEnd("^");
console.log(builder.getValue()); // "^.^"
builder.padBoth("=");
console.log(builder.getValue()); // "=^.^="


//12 Wykonaj refaktor klasy Car tak, aby właściwość brand była prywatna i dodaj dwie metody do publicznego interfejsu, dla czytania i zmieniania tej właściwości.getBrand() - zwraca wartość prywatnej właściwości brand.changeBrand(newBrand) - zmienia wartość prywatnej właściwości brand na newBrand.
class Car {
    // Change code below this line
    #brand
    constructor({ brand, model, price }) {
        this.#brand = brand;
        this.model = model;
        this.price = price;
    }
    getBrand() {
        return this.#brand;
    }
    changeBrand(newBrand) {
        this.#brand = newBrand;
    }

    // Change code above this line
}


//13 Wykonaj refaktor klasy Storage, czyniąc argument items prywatnym.Pod komentarzem dodaliśmy inicjalizację egzemplarza i wywołanie metod w tej kolejności, w której twój kod będzie testowany. Prosimy niczego tam nie zmieniać.
class Storage {
    // Change code below this line
    #items
    constructor(items) {
        this.#items = items;
    }

    getItems() {
        return this.#items;
    }

    addItem(newItem) {
        this.#items.push(newItem);
    }

    removeItem(itemToRemove) {
        this.#items = this.#items.filter(item => item !== itemToRemove);
    }
}


// Change code above this line
const storage = new Storage(["Nanitoids", "Prolonger", "Antigravitator"]);
console.log(storage.getItems()); // ["Nanitoids", "Prolonger", "Antigravitator"]
storage.addItem("Droid");
console.log(storage.getItems()); // ["Nanitoids", "Prolonger", "Antigravitator", "Droid"]
storage.removeItem("Prolonger");
console.log(storage.getItems()); // ["Нанитоиды", "Антигравитатор", "Droid"]

//14 Wykonaj refaktor klasy StringBuilder, czyniąc właściwość value prywatną.Pod komentarzem dodaliśmy inicjalizację egzemplarza i wywołanie metod w tej kolejności, w której twój kod będzie testowany. Prosimy niczego tam nie zmieniać.
class StringBuilder {
    // Change code below this line
  #value
    constructor(initialValue) {
      this.#value = initialValue;
    }
  
    getValue() {
      return this.#value;
    }
  
    padEnd(str) {
      this.#value += str;
    }
  
    padStart(str) {
      this.#value = str + this.#value;
    }
  
    padBoth(str) {
      this.padStart(str);
      this.padEnd(str);
    }
  }
  
  // Change code above this line
  const builder2 = new StringBuilder(".");
  console.log(builder2.getValue()); // "."
  builder2.padStart("^");
  console.log(builder2.getValue()); // "^."
  builder2.padEnd("^");
  console.log(builder2.getValue()); // "^.^"
  builder2.padBoth("=");
  console.log(builder2.getValue()); // "=^.^="
  

  //15 Wykonaj refaktor klasy Car. Uczyń właściwości model i price prywatnymi, tak samo jak #brand. Standaryzuj publiczny interfejs klasy, zamieniając już zadeklarowane metody na gettery i settery brand, model i price dla interakcji z prywatnymi właściwościami.
  class Car {
    // Change code below this line
    #brand;
    #model;
    #price;
    constructor({ brand, model, price }) {
        this.#brand = brand;
        this.#model = model;
        this.#price = price;
    }

    get brand() {
        return this.#brand;
    }

    set brand(newBrand) {
        this.#brand = newBrand;
    }

    get model() {
        return this.#model;
    }

    set model(newModel) {
        this.#model = newModel;
    }

    get price() {
        return this.#price;
    }

    set price(newPrice) {
        this.#price = newPrice;
    }
    // Change code above this line
}


//16 Wykonaj refaktor klasy Car. Dodaj publiczną statyczną właściwość MAX_PRICE z wartością 50000 - maksymalna możliwa cena samochodu.Dodaj do settera price sprawdzenie przekazywanej wartości parametru newPrice. Jeśli wynosi więcej niż MAX_PRICE, setter niczego nie zrozbi, a jeśli mniej lub równo, wtedy nadpisuje cenę samochodu.
class Car {
    // Change code below this line
    static MAX_PRICE = 50000;
    #price;

    constructor({ price }) {
        this.#price = price;
    }

    get price() {
        return this.#price;
    }

    set price(newPrice) {
        if (newPrice > Car.MAX_PRICE) {
            return;
        }
        this.#price = newPrice;
    }

    // Change code above this line
}

const audi = new Car({ price: 35000 });
console.log(audi.price); // 35000

audi.price = 49000;
console.log(audi.price); // 49000

audi.price = 51000;
console.log(audi.price); // 49000


//17 Dodaj do klasy Car publiczną metodę statyczną checkPrice(price), przyjmującą cenę samochodu. Metoda powinna porównać wartości parametru price i prywatnej statycznej właściwości MAX_PRICE.Jeżeli cena samochodu przewyższa maksymalną, metoda powinna zwrócić łańcuch "Error! Price exceeds the maximum".W przeciwnym yrazie metoda powinna zwrócić łańuch "Success! Price is within acceptable limits".Pod zadeklarowaniem klasy dodaliśmy inicjalizację egzemplarza i wywołanie metod, aby pokazać, jak wykorzystywana będzie metoda checkPrice(price).
class Car {
    static MAX_PRICE = 50000;
    // Change code below this line
    static checkPrice(price) {
        //let MAX_PRICE = 50000;
        if (price > this.MAX_PRICE) {
            return "Error! Price exceeds the maximum";
        }
        return "Success! Price is within acceptable limits";
    }
    #price;
    // Change code above this line
    constructor({ price }) {
        this.#price = price;
    }
}


const audi = new Car({ price: 36000 });
const bmw = new Car({ price: 64000 });

console.log(Car.checkPrice(audi.price)); // "Success! Price is within acceptable limits"
console.log(Car.checkPrice(bmw.price)); // "Error! Price exceeds the maximum"

//18 W aplikacji potrzebny jest administrator z możliwością dodawania poczty użytkowników do czarnej listy.Zadeklaruj klasę Admin, która dziedziczy od klasy UserDodaj do klasy Admin publiczną właściwość statyczną AccessLevel (poziom dostępu), wartością której jest obiekt { BASIC: "basic", SUPERUSER: "superuser" }
class User {
    constructor(email) {
      this.email = email;
    }
  
    get email() {
      return this.email;
    }
  
    set email(newEmail) {
      this.email = newEmail;
    }
  }
  // Change code below this line
      class Admin extends User {
                  static AccessLevel = {
                      BASIC: "basic",
                      SUPERUSER: "superuser",
                  }
              }

//19 Dodaj klasę Admin metodę constructor, która przyjmuje jeden parametr – obiekt ustawień z dwiema właściwościami email i accessLevel. Dodaj klasę Admin publiczną właściwość accessLevel, wartość której będzie przekazywana przy wywołaniu konstruktora.Aby pokazać, jak używa się klasy Admin, dodaliśmy inicjalizację egzemplarza pod zadeklarowaniem klasy.
class User {
    email;
  
    constructor(email) {
      this.email = email;
    }
  
    get email() {
      return this.email;
    }
  
    set email(newEmail) {
      this.email = newEmail;
    }
  }
  
  class Admin extends User {
    // Change code below this line
       static AccessLevel = {
                      BASIC: "basic",
                      SUPERUSER: "superuser",
                  };
                  constructor({ email, accessLevel }) {
                      super(email);
                      this.accessLevel = accessLevel;
                  }
    // Change code above this line
  }
  
  const mango = new Admin({
    email: "mango@mail.com",
    accessLevel: Admin.AccessLevel.SUPERUSER,
  });
  
  console.log(mango.email); // "mango@mail.com"
  console.log(mango.accessLevel); // "superuser"

  
  //20 Dodaj klasie Admin następujące właściwości i metody.Publiczną właściwość blacklistedEmails dla przechowywania czarnej listy adresów pocztowych użytkowników. Wartość domyślna to pusta tablica.Publiczną metodę blacklist(email) dla dodania poczty na czarną listę. Metoda powinna dodawać wartości parametru email do tablicy zapisującej się we właściwości blacklistedEmails.Publiczną metodę isBlacklisted(email) dla sprawdzenia poczty na czarnej liście. Metoda powinna sprawdzać obecność wartości parametru email w tablicy zapisującej się we właściwości blacklistedEmails i zwracać true lub false.Po zadeklarowaniu klasy dodaliśmy inicjalizację egzemplarza i wywołanie metod w tej kolejności, w której twój kod będzie testowany. Prosimy niczego tam nie zmieniać.

  class User {
    email;
  
    constructor(email) {
      this.email = email;
    }
  
    get email() {
      return this.email;
    }
  
    set email(newEmail) {
      this.email = newEmail;
    }
  }
  class Admin extends User {
    // Change code below this line
              static AccessLevel = {
                      BASIC: "basic",
                      SUPERUSER: "superuser",
                  }
                  constructor({ email, accessLevel }) {
                      super(email);
                      this.accessLevel = accessLevel;
                  }
                  blacklistedEmails = [];
  
                  blacklist(email) {
                      this.blacklistedEmails.push(email);
                  }
                  isBlacklisted(email) {
                      if (this.blacklistedEmails.includes(email)) {
                          return true;
                      }
                      return false;
                  }
    // Change code above this line
  }
  
  const mango2 = new Admin({
    email: "mango@mail.com",
    accessLevel: Admin.AccessLevel.SUPERUSER,
  });
  
  console.log(mango2.email); // "mango@mail.com"
  console.log(mango2.accessLevel); // "superuser"
  
  mango2.blacklist("poly@mail.com");
  console.log(mango2.blacklistedEmails); // ["poly@mail.com"]
  console.log(mango2.isBlacklisted("mango@mail.com")); // false
  console.log(mango2.isBlacklisted("poly@mail.com")); // true


  ///////////

  

