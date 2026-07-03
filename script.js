// ===========================
// Recipe Data
// ===========================

const recipes = [
    {
        name: "Chocolate Chip Cookies",
        image: "https://images.unsplash.com/photo-1499636136210-6f4ee915583e?auto=format&fit=crop&w=800&q=80",
        ingredients: [
            "2 cups flour",
            "1 cup sugar",
            "1 cup chocolate chips",
            "2 eggs",
            "1 tsp vanilla extract",
            "1/2 cup butter"
        ],
        steps: [
            "Preheat oven to 350°F (175°C).",
            "Mix butter and sugar until creamy.",
            "Add eggs and vanilla.",
            "Mix in flour.",
            "Fold in chocolate chips.",
            "Bake for 10–12 minutes."
        ]
    },

    {
        name: "Spaghetti",
        image: "https://images.unsplash.com/photo-1621996346565-e3dbc646d9a9?auto=format&fit=crop&w=800&q=80",
        ingredients: [
            "1 lb spaghetti",
            "1 lb ground beef",
            "1 jar pasta sauce",
            "2 cloves garlic",
            "Parmesan cheese"
        ],
        steps: [
            "Cook spaghetti according to package directions.",
            "Brown the ground beef.",
            "Add garlic and pasta sauce.",
            "Simmer for 15 minutes.",
            "Serve over spaghetti.",
            "Top with Parmesan cheese."
        ]
    },

    {
        name: "Pancakes",
        image: "https://images.unsplash.com/photo-1528207776546-365bb710ee93?auto=format&fit=crop&w=800&q=80",
        ingredients: [
            "2 cups flour",
            "2 tbsp sugar",
            "2 tsp baking powder",
            "2 eggs",
            "1½ cups milk",
            "2 tbsp melted butter"
        ],
        steps: [
            "Mix dry ingredients.",
            "Whisk wet ingredients together.",
            "Combine both mixtures.",
            "Pour batter onto a hot skillet.",
            "Flip when bubbles appear.",
            "Serve with syrup."
        ]
    }
];

// ===========================
// Display Recipes
// ===========================

const recipeContainer = document.getElementById("recipeContainer");

function displayRecipes(recipeList) {

    recipeContainer.innerHTML = "";

    recipeList.forEach(recipe => {

        const card = document.createElement("div");

        card.className = "card";

        card.innerHTML = `
            <img src="${recipe.image}" alt="${recipe.name}">

            <div class="content">

                <h2>${recipe.name}</h2>

                <h3>Ingredients</h3>

                <ul>
                    ${recipe.ingredients.map(item => `<li>${item}</li>`).join("")}
                </ul>

                <h3>Directions</h3>

                <ol>
                    ${recipe.steps.map(step => `<li>${step}</li>`).join("")}
                </ol>

            </div>
        `;

        recipeContainer.appendChild(card);

    });

}

// Show recipes when page loads
displayRecipes(recipes);

// ===========================
// Search Function
// ===========================

const search = document.getElementById("search");

search.addEventListener("input", function () {

    const value = this.value.toLowerCase();

    const filteredRecipes = recipes.filter(recipe =>
        recipe.name.toLowerCase().includes(value)
    );

    displayRecipes(filteredRecipes);

});

// ===========================
// Dark Mode
// ===========================

const themeBtn = document.getElementById("themeBtn");

themeBtn.addEventListener("click", () => {

    document.body.classList.toggle("dark");

    if (document.body.classList.contains("dark")) {

        themeBtn.textContent = "☀️";

    } else {

        themeBtn.textContent = "🌙";

    }

});