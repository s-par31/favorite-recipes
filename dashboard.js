const recipes = [
    "Chocolate Chip Cookies",
    "Spaghetti",
    "Pancakes"
];

document.getElementById("recipeCount").textContent = recipes.length;

const favorites =
JSON.parse(localStorage.getItem("favorites")) || [];

document.getElementById("favoriteCount").textContent =
favorites.length;