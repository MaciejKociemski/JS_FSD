fetch("https://my-api.com")
    .then(res => res.json())
    .then(value => console.log(value))
    .catch(error => console.log(error));



fetch("https://my-api.com"), {
    Headers: { Accept: "aplication/json" }
}

console.log(10)


fetch("https://jsonplaceholder.typicode.com/posts")
  .then(response => response.json())
  .then(posts => console.log(posts))
    .catch(error => console.log(error));
  


// Change this number to fetch different post
const postId = 1;

fetch(`https://jsonplaceholder.typicode.com/posts/${postId}`)
  .then(response => response.json())
  .then(post => console.log(post))
    .catch(error => console.log(error));
  



    const postToAdd = {
  author: "Mango",
  body: "CRUD is awesome",
};

const options = {
  method: "POST",
  body: JSON.stringify(postToAdd),
  headers: {
    "Content-Type": "application/json; charset=UTF-8",
  },
};

fetch("https://jsonplaceholder.typicode.com/posts", options)
  .then(response => response.json())
  .then(post => console.log(post))
    .catch(error => console.log(error));
  

    // Change value of id property to update different post
const postToUpdate = {
  id: 1,
  body: "CRUD is really awesome",
};

const options2 = {
  method: "PATCH",
  body: JSON.stringify(postToUpdate),
  headers: {
    "Content-Type": "application/json; charset=UTF-8",
  },
};

fetch(`https://jsonplaceholder.typicode.com/posts/${postToUpdate.id}`, options2)
  .then(response => response.json())
  .then(post => console.log(post))
    .catch(error => console.log("ERROR" + error));
  



    const postIdToDelete = 1;

fetch(`https://jsonplaceholder.typicode.com/posts/${postIdToDelete}`, {
  method: "DELETE",
})
  .then(() => console.log("Post deleted"))
    .catch(error => console.log("Error:", error));
  


    