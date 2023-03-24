[
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


//content
// Dane (Model): http://jsonplaceholder.typicode.com/users?_limit=3
// Logika (Update):
// Czysta funkcja, ktora zmieni "company" wszystkich userow na null.
// Czysta funkcja, ktora zmieni "zipcode" pojedynczego usera wybranego po "id"
// Czysta funkcja, ktora zmieni  dane w "address" , jesli user pracuje dla ktorejkolwiek firmy typu "Romaguera" ("Romaguera-Crona", "Romaguera-Jacobson", lub jakiejkolwiek innej "Romaguera-" )
// Prezentacja (View):
// Wyswietl jedynie imiona wszystkich userow.
// Wyswietl jedynie dane adresowe pojedynczego usera w jednym Stringu (ciagu/linijce). (funkcja powinna przyjac id, po ktorym wybierze usera).
// Wyswietl jedynie imiona, oraz emaile i telefon i strone www wszystkich userow tak, zeby uzytkownik strony mogl:
// kliknieciem na email wyslac email (uzywajac samego HTML)
// kliknieciem na telefon mogl dostac link do numeru telefonu (tylko HTML)
// kliknieciem na link otworzyl strone w nowej zakladce (tylko HTML)