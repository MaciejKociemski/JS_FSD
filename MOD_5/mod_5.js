//1

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

  
  //2
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
  
//3
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

  //4
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

  //5
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

  //6
  class Car{}

  //7
  class Car {
    // Change code below this line
  constructor(brand,model,price){
  this.brand = brand;
  this.model = model;
  this.price = price}
  
  
    // Change code above this line
  }

  //8
  class Car {
    // Change code below this line
    constructor({ brand, model, price }) {
        this.brand = brand;
        this.model = model;
        this.price = price;
    }
    // Change code above this line
}


//9
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

//10
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

//11
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


//12
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


//13
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

//14
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
  

  //15
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


//16
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


//17
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

//18
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

//19
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

  
  //20

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

  

