const plusButton = document.querySelector(".bx-plus");
const input = document.querySelector("#addItem");

plusButton.addEventListener("click", (evento) => {
  console.log(evento);
  console.log(input.value);
});

input.addEventListener("keydown", (evento) => {
  if (evento.key === "Enter") {
    console.log(input.value);
  }
});
