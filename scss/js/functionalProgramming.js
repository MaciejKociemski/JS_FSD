
const users = [
  {
    "id": 1,
    "name": "Leanne Graham",
    "username": "Bret",
    "email": "Sincere@april.biz",
    "address": {
      "street": "Kulas Light",
      "suite": "Apt. 556",
      "city": "Gwenborough",
      "zipcode": "92998-3874",
      "geo": {
        "lat": "-37.3159",
        "lng": "81.1496"
      }
    },
    "phone": "1-770-736-8031 x56442",
    "website": "hildegard.org",
    "company": {
      "name": "Romaguera-Crona",
      "catchPhrase": "Multi-layered client-server neural-net",
      "bs": "harness real-time e-markets"
    }
  },
  {
    "id": 2,
    "name": "Ervin Howell",
    "username": "Antonette",
    "email": "Shanna@melissa.tv",
    "address": {
      "street": "Victor Plains",
      "suite": "Suite 879",
      "city": "Wisokyburgh",
      "zipcode": "90566-7771",
      "geo": {
        "lat": "-43.9509",
        "lng": "-34.4618"
      }
    },
    "phone": "010-692-6593 x09125",
    "website": "anastasia.net",
    "company": {
      "name": "Deckow-Crist",
      "catchPhrase": "Proactive didactic contingency",
      "bs": "synergize scalable supply-chains"
    }
  },
  {
    "id": 3,
    "name": "Clementine Bauch",
    "username": "Samantha",
    "email": "Nathan@yesenia.net",
    "address": {
      "street": "Douglas Extension",
      "suite": "Suite 847",
      "city": "McKenziehaven",
      "zipcode": "59590-4157",
      "geo": {
        "lat": "-68.6102",
        "lng": "-47.0653"
      }
    },
    "phone": "1-463-123-4447",
    "website": "ramiro.info",
    "company": {
      "name": "Romaguera-Jacobson",
      "catchPhrase": "Face to face bifurcated interface",
      "bs": "e-enable strategic applications"
    }
  }
]


// Czysta funkcja, ktora zmieni "company" wszystkich userow na null
function removeCompany(users) {
  return users.map(user => ({
    ...user,
    company: null
  }));
}

console.log(...removeCompany(users))

// function updateUserZipcodeById(users, id, newZipcode) {
//     return users.map(user => {
//         if (user.id === id) {
//             return {
//                 ...user,
//                 address: {
//                     ...user.address,
//                     zipcode: newZipcode
//                 }
// funkcja, która zmienia dane adresowe użytkownika, jeśli pracuje dla firmy "Romaguera"
// i zwraca imiona wszystkich użytkowników oraz dane adresowe wybranego użytkownika
function modifyAddressAndPrintUsers(id) {
  const romagueraCompanies = ["Romaguera-Crona", "Romaguera-Jacobson"];

  // funkcja, która sprawdza, czy firma użytkownika to "Romaguera"
  function isRomagueraCompany(user) {
    return romagueraCompanies.some((companyName) =>
      user.company.name.includes(companyName)
    );
  }

  const userIndex = users.findIndex((user) => user.id === id);

  if (userIndex !== -1) {
    const user = users[userIndex];

    // jeśli użytkownik pracuje dla firmy "Romaguera", zmień dane adresowe
    if (isRomagueraCompany(user)) {
      user.address.street = "New Street";
      user.address.suite = "New Suite";
      user.address.city = "New City";
      user.address.zipcode = "New Zipcode";
    }

    // zwróć imiona wszystkich użytkowników oraz dane adresowe wybranego użytkownika
    const names = users.map((user) => user.name).join(", ");
    const address = `Street: ${user.address.street}, Suite: ${user.address.suite}, City: ${user.address.city}, Zipcode: ${user.address.zipcode}`;

    return `Users: ${names}\nUser ${user.name} address: ${address}`;
  }

  return "User not found";
}

console.log(modifyAddressAndPrintUsers(2));

//funkcja, która zmieni dane w "address", jeśli użytkownik pracuje dla któregokolwiek z firmy typu "Romaguera" ("Romaguera-Crona", "Romaguera-Jacobson" lub jakiejkolwiek innej "Romaguera-"). Funkcja przyjmie id, po którym wybierze użytkownika:

function changeAddressIfRomaguera(id, data) {
  return data.map((user) => {
    if (
      user.company.name.includes("Romaguera-") &&
      user.id === id &&
      user.address
    ) {
      user.address = {
        ...user.address,
        street: "New Street",
        suite: "New Suite",
        city: "New City",
        zipcode: "New Zipcode",
        geo: {
          lat: "New Lat",
          lng: "New Lng",
        },
      };
    }
    return user;
  });
}

//Aby wyświetlić imiona wszystkich użytkowników, którzy pracują dla firmy typu "Romaguera", można użyć następującej funkcji:

function getUsersWithRomagueraCompany(data) {
  const users = data.filter(
    (user) => user.company.name.includes("Romaguera-")
  );
  const names = users.map((user) => user.name);
  return names;
}

//Aby wyświetlić dane adresowe pojedynczego użytkownika w jednym łańcuchu znaków, można użyć następującej funkcji:

function getAddressStringById(id, data) {
  const user = data.find((user) => user.id === id);
  if (user && user.address) {
    const address = user.address;
    const addressString = `${address.street}, ${address.suite}, ${address.city}, ${address.zipcode}`;
    return addressString;
  } else {
    return "";
  }
}

//Aby wyświetlić imiona, adresy e-mail, numery telefonów i strony internetowe wszystkich użytkowników z możliwością kliknięcia na adres e-mail (wysyłając e-mail), numer telefonu (otwierając numer telefonu w aplikacji telefonu) lub stronę internetową (otwierając stronę w nowej karcie), można użyć następującej funkcji:


function getUsersWithClickableData(data) {
  return data.map((user) => {
    const emailLink = `<a href="mailto:${user.email}">${user.email}</a>`;
    const phoneLink = `<a href="tel:${user.phone.replace(/[^0-9+]/g, "")}">${user.phone}</a>`;
    const websiteLink = `<a href="${user.website}" target="_blank">${user.website}</a>`;
    return {
      name: user.name,
      email: emailLink,
      phone: phoneLink,
      website: websiteLink,
    };
  });
}

///[^0-9+]/g, aby usunąć ze stringa phone wszystko oprócz cyfr i znaku plus, ponieważ jest to format wymagany przez link do telefonu.


//funkcje wzrór od Mikołaja kubery wykładowcy

const setUserId = (user, id) => ({ ...user, id });