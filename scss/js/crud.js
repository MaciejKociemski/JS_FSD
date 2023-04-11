// fetch("https://my-api.com")
//     .then(res => res.json())
//     .then(value => console.log(value))
//     .catch(error => console.log(error));



// fetch("https://my-api.com"), {
//     Headers: { Accept: "aplication/json" }
// }

// console.log(10)


// fetch("https://jsonplaceholder.typicode.com/posts")
//   .then(response => response.json())
//   .then(posts => console.log(posts))
//     .catch(error => console.log(error));
  


// // Change this number to fetch different post
// const postId = 1;

// fetch(`https://jsonplaceholder.typicode.com/posts/${postId}`)
//   .then(response => response.json())
//   .then(post => console.log(post))
//     .catch(error => console.log(error));
  



//     const postToAdd = {
//   author: "Mango",
//   body: "CRUD is awesome",
// };

// const options = {
//   method: "POST",
//   body: JSON.stringify(postToAdd),
//   headers: {
//     "Content-Type": "application/json; charset=UTF-8",
//   },
// };

// fetch("https://jsonplaceholder.typicode.com/posts", options)
//   .then(response => response.json())
//   .then(post => console.log(post))
//     .catch(error => console.log(error));
  

//     // Change value of id property to update different post
// const postToUpdate = {
//   id: 1,
//   body: "CRUD is really awesome",
// };

// const options2 = {
//   method: "PATCH",
//   body: JSON.stringify(postToUpdate),
//   headers: {
//     "Content-Type": "application/json; charset=UTF-8",
//   },
// };

// fetch(`https://jsonplaceholder.typicode.com/posts/${postToUpdate.id}`, options2)
//   .then(response => response.json())
//   .then(post => console.log(post))
//     .catch(error => console.log("ERROR" + error));
  



//     const postIdToDelete = 1;

// fetch(`https://jsonplaceholder.typicode.com/posts/${postIdToDelete}`, {
//   method: "DELETE",
// })
//   .then(() => console.log("Post deleted"))
//     .catch(error => console.log("Error:", error));
  


//eszcze dorzucam pelen FEndowy CRUD, ktory mozna napisac w niecalych 100 linijkach kodu

// CRUD - Create Read Update Delete

// helper functions
const qs = (selector) => document.querySelector(selector);

// MODEL
let model = {
  items: [{ id: uuid.v4(), name: "WOOT", isEdited: false }],
  appTitle: "App"
};

// UPDATE
const addItem = (oldModel, newItem) => ({
  ...oldModel,
  items: [...oldModel.items, newItem]
});
const deleteItem = (oldModel, itemId) => ({
  ...oldModel,
  items: oldModel.items.filter(({ id }) => id !== itemId)
});
const toggleItemIsEdited = (oldModel, itemId) => ({
  ...oldModel,
  items: oldModel.items.map((item) =>
    item.id === itemId ? { ...item, isEdited: !item.isEdited } : item
  )
});
const editItem = (oldModel, itemId, newName) => ({
  ...oldModel,
  items: oldModel.items.map((item) =>
    item.id === itemId ? { ...item, name: newName } : item
  )
});

// VIEW

const renderItems = () => {
  const itemsDOM = qs("#items");
  itemsDOM.innerHTML = ""; // reset UI/View
  model.items.forEach(({ id, name, isEdited }) => {
    if (isEdited) {
      const li = `<li data-id="${id}">
          <form>
            <input type="text" name="name" value="${name}" />
            <button>confirm</button>
          </form>
        </li>`;
      itemsDOM.insertAdjacentHTML("beforeend", li);

      const liConfirmEditForm = qs(`li[data-id="${id}"] form`);
      liConfirmEditForm.addEventListener("submit", (e) => {
        e.preventDefault();

        const { name } = e.currentTarget.elements;

        model = editItem(model, id, name.value);
        model = toggleItemIsEdited(model, id);
        renderApp();
      });
    } else {
      const li = `<li data-id="${id}">${name} <button data-btn-type="edit">edit</button><button data-btn-type="delete">delete</button></li>`;
      itemsDOM.insertAdjacentHTML("beforeend", li);

      const liEditBtn = qs(`li[data-id="${id}"] button[data-btn-type="edit"]`);
      liEditBtn.addEventListener("click", () => {
        model = toggleItemIsEdited(model, id);
        renderApp();
      });

      const liDeleteBtn = qs(
        `li[data-id="${id}"] button[data-btn-type="delete"]`
      );
      liDeleteBtn.addEventListener("click", () => {
        model = deleteItem(model, id);
        renderApp();
      });
    }
  });
};
const renderApp = () => {
  renderItems();
};

// EVENTS
const addItemForm = qs("#addItemForm");
addItemForm.addEventListener("submit", (e) => {
  e.preventDefault();

  const { name } = e.currentTarget.elements;

  const newTask = { id: uuid.v4(), name: name.value, isEdited: false };
  model = addItem(model, newTask);
  renderApp();
});

// START
renderApp();

//




const planettoUpperCase = planets.map(planet=>planet.toUpperCase)
console.log(...planetsUpperCase)
console.log(planetsUpperCase)

fetch("https://jsonplaceholder.typicode.com/posts/1")
  .then(response => response.json())
  .then(posts => console.log(posts))
  .catch(error => console.log(error));

//
const postToAdd = {
  author: "Mango",
  body:"Crud is awsome",
}
  
console.log(postToAdd)

const options = {
  method: "POST",
  body: JSON.stringify(postToAdd),
  Headers: {
    "content -type": "application/json; charset=UTF-8",
  }
};
fetch("https://jasonplaceholder.typicode.com/posts", options)
  .then(response => response.json())
  .then(post => console.log(post))
  .catch (error => console.log(error));