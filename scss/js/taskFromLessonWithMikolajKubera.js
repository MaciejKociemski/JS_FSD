const users = [
{id: 1, username: "Pawel", password: "qwireir94unc_jds"},
{id: 2, username: "Beniamin", password: "kr94unc_j$$s0df8d0ds"},
{id: 3, username: "Dominik", password: "iodjuc98du98d"},
]



//Napisz czysta funkcje, ktora zmienia (bez mutacji) username pojedynczego usera wewnatrz Array userow.

//Napisz czysta funkcje, ktora zmienia (bez mutacji) username pojedynczego usera, ktorego wskazujemy po id w Array userow. (np. chcemy, zeby user o id 1 nazywal sie nie "Pawel" tylko "Krystian")


//1

function updateUser(users, userId, newUsername) {
  return users.map(user => {
    if (user.id === userId) {
      return { ...user, username: newUsername };
    }
    return user;
  });
}


//rozwiazania 
function updateUser(users, userId, newUsername) {
  return users.map(user => {
    if (user.id === userId) {
      return { ...user, username: newUsername };
    }
    return user;
  });
}


function updateUser(users, userId, newUsername) {
  return users.map(user => {
    if (user.id === userId) {
      return { ...user, username: newUsername };
    }
    return user;
  });
}


function updateUser(users, userId, newUsername) {
  return users.map(user => {
    if (user.id === userId) {
      return { ...user, username: newUsername };
    }
    return user;
  });
}


// const changeUsersNameById = [...users].map(user, index => user.username[i] = newUsername    const changeUsersName = [...users].map(user => user.username = newUsername)



// const changer = ({id, newUsername}) => changerUsername[id-1].username = newUsername;
// undefined



// const changer = ({id, newUsername}) => changerUsername[id-1].username = newUsername;
// undefined



// const changer = ({id, newUsername}) => changerUsername[id-1].username = newUsername;
// undefined



//2

function updateUserById(users, userId, newUsername) {
  return users.map(user => {
    if (user.id === userId) {
      return { ...user, username: newUsername };
    }
    return user;
  });
}

console.log(newUsername)


// arrow function 

let add2 = (n) => n + 2;
console.log(add2(2));