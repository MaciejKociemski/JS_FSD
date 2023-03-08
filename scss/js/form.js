const form = document.querySelector(".register-form");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  const {
    elements: { username, password }
  } = e.currentTarget;
  console.log(username.value, password.value);
});


