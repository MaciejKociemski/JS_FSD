fetch("https://my-api.com")
    .then(res => res.json())
    .then(value => console.log(value))
    .catch(error => console.log(error));



fetch("https://my-api.com"), {
    Headers: { Accept: "aplication/json" }
}