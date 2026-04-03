const btn = document.querySelector(".login-form");
btn.addEventListener("submit", (event) => {
  event.preventDefault();
  const cleanEmail = event.target.elements.email.value.trim();
  const cleanPass = event.target.elements.password.value.trim();
  if (cleanEmail === "" || cleanPass === "") {
    alert("All form fields must be filled in");
  } else {
    console.log({
      email: cleanEmail,
      password: cleanPass,
    });
    event.target.reset();
  }
});
