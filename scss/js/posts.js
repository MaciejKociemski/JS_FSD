//ta aplikacja jest zdecydowanie duzo blizsza temu, co kazdy Junior powinien umiec napisac. (Jezeli ma tak jasna strukture, to zostanie bardzo doceniony na rozmowach. Ale nic sie nie stanie, jesli struktura jest bardziej "juniorska".)


const postsDOM = document.querySelector("#posts");

// Data (Model)
let posts = [{ id: 1, title: "Hello world", autor: "Mr Programista" }];

// Fns
// Create
const createPost = (newPost) => {
  // TODO: fetchPOST
  posts = [...posts, newPost];
};
// Update
const updatePost = (id, newPost) => {
  posts = posts.map((post) => (post.id === id ? newPost : post));
};
// Delete
const deletePost = (id) => {
  posts = posts.filter((post) => post.id !== id);
};

createPost({ id: 2, title: "1984", author: "George Orwell" });
createPost({ id: 3, title: "Red Book", author: "Carl Gustav Jung" });
updatePost(2, { id: 2, title: "Ninteen-eighty Four", author: "George Orwell" });
deletePost(1);

// Read
posts.forEach((post) => {
  postsDOM.innerHTML += `<li>${post.title} by ${post.author}</li>`;
});
