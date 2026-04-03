const input = document.querySelector("input#name-input");
const span = document.querySelector("span#name-output");

input.addEventListener("input", (event) => {
  const cleanInput = event.target.value.trim();
  span.textContent = cleanInput === "" ? "Anonymous" : cleanInput;
});
