const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];

const listIngredients = ingredients.map((name) => {
  const ingredient = document.createElement("li");
  ingredient.textContent = name;
  ingredient.classList = "item";
  //ingredient.classList.add("item");
  return ingredient;
});

const listEL = document.querySelector("#ingredients");
listEL.append(...listIngredients);

// const listIngredients = ingredients
//   .map((name) => `<li class='item'> ${name} </li>`)
//   .join("");
// listEL.innerHTML = listIngredients;
