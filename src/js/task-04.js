const decrementBtn = document.querySelector("button[data-action=decrement]");

const incrementBtn = document.querySelector("button[data-action=increment]");

const spanEl = document.querySelector("#value");

let counterValue = 0;

decrementBtn.addEventListener("click", () => {
  counterValue -= 1;
  spanEl.textContent = counterValue;
  console.log(spanEl.textContent);
});

incrementBtn.addEventListener("click", () => {
  counterValue += 1;
  spanEl.textContent = counterValue;
});
