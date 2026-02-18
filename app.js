// Wrap entire app in IIFE for encapsulation
const RecipeApp = (() => {
    
    // ============================================
    // PRIVATE: Recipe Data
    // ============================================
    const recipes = [
    {
        id: 1,
        title: "Classic Spaghetti Carbonara",
        time: 25,
        difficulty: "easy",
        description: "A creamy Italian pasta dish made with eggs, cheese, pancetta, and black pepper.",
        category: "pasta",
        ingredients: [
            "400g spaghetti",
            "200g pancetta or guanciale",
            "4 large eggs",
            "100g Pecorino Romano cheese",
            "Black pepper",
            "Salt"
        ],
        steps: [
            "Bring a large pot of salted water to boil",
            "Cook spaghetti according to package directions",
            {
                text: "Prepare the sauce",
                substeps: [
                    "Beat eggs in a bowl",
                    "Grate cheese and add to eggs",
                    "Add generous black pepper",
                    "Mix well"
                ]
            },
            "Cook pancetta in a large pan until crispy",
            "Drain pasta, reserve 1 cup pasta water",
            "Add hot pasta to pancetta pan (off heat)",
            "Quickly mix in egg mixture, adding pasta water to create creamy sauce",
            "Serve immediately with extra cheese"
        ]        
    },
    {
        id: 2,
        title: "Chicken Tikka Masala",
        time: 45,
        difficulty: "medium",
        description: "Tender chicken pieces in a creamy, spiced tomato sauce.",
        category: "curry",
        ingredients: [
            "750g boneless chicken breasts",
            "1 cup yogurt",
            "3 tbsp tikka masala paste",
            "2 tbsp ginger-garlic paste",
            "1 onion, finely chopped",
            "400ml coconut cream",
            "400g canned tomatoes",
            "2 tbsp oil",
            "Fresh cilantro",
            "Salt and pepper"
        ],
        steps: [
            {
                text: "Marinate the chicken",
                substeps: [
                    "Mix yogurt and tikka masala paste",
                    "Add ginger-garlic paste and salt",
                    "Cut chicken into 2-inch cubes",
                    "Coat chicken in marinade",
                    "Let sit for 15-30 minutes"
                ]
            },
            "Heat oil in a pan and cook marinated chicken until browned, set aside",
            "In the same pan, sauté chopped onions until golden brown",
            "Add remaining tikka masala paste and cook for 2 minutes",
            "Pour in canned tomatoes and simmer for 5 minutes",
            "Add cooked chicken back to the pan",
            "Stir in coconut cream and simmer for 10-15 minutes",
            "Garnish with fresh cilantro and serve with rice or naan bread"
        ]
    },
    {
        id:3,
        title:"Homemade Croissants",
        time:180,
        difficulty:"hard",
        description: "Buttery, flaky French pastries that require patience but deliver amazing results.",
        category: "baking",
        ingredients: [
            "500g all-purpose flour",
            "300g cold butter",
            "10g salt",
            "10g sugar",
            "100ml warm water",
            "7g instant yeast",
            "1 egg (for egg wash)",
            "Extra butter for lamination"
        ],
        steps: [
            "Mix flour, salt, sugar, yeast, and warm water to form dough",
            "Knead for 10 minutes until smooth",
            "Cover and let rest for 30 minutes",
            "Flatten dough into a rectangle",
            "Place cold butter in the center and fold dough around it",
            "Roll out dough and fold into thirds (lamination process)",
            "Repeat folding process 3 more times, chilling between folds (30 min each)",
            "Roll final dough to 3mm thickness and cut into triangles",
            "Roll each triangle from base to point and shape into crescent",
            "Place on baking sheet and let proof for 2 hours",
            "Brush with egg wash and bake at 200°C for 20-25 minutes until golden"
        ]
    },
    {
        id:4,
        title: "Greek Salad",
        time: 15,
        difficulty: "easy",
        description: "Fresh vegetables, feta cheese, and olives tossed in olive oil and herbs.",
        category: "salad",
        ingredients: [
            "4 medium tomatoes",
            "1 cucumber",
            "1 red onion",
            "200g feta cheese",
            "150g Kalamata olives",
            "3 tbsp olive oil",
            "1 tbsp red wine vinegar",
            "1 tsp dried oregano",
            "Salt and pepper"
        ],
        steps: [
            "Cut tomatoes into wedges and place in a large bowl",
            "Dice cucumber and add to tomatoes",
            "Thinly slice red onion and add to the bowl",
            "Add Kalamata olives to the mixture",
            "Cut feta cheese into cubes and add to salad",
            "In a small bowl, whisk together olive oil, red wine vinegar, oregano, salt, and pepper",
            "Pour dressing over salad and toss gently",
            "Let sit for 5 minutes before serving to allow flavors to blend"
        ]
    },
    {
        id:5,
        title: "Beef Wellington",
        time: 120,
        difficulty: "hard",
        description: "Tender beef fillet coated with mushroom duxelles and wrapped in puff pastry.",
        category: "meat",
        ingredients: [
            "1.5kg beef fillet",
            "500g mushrooms, finely chopped",
            "2 shallots, minced",
            "3 cloves garlic, minced",
            "200g pâté",
            "400g puff pastry",
            "3 tbsp olive oil",
            "2 tbsp Dijon mustard",
            "200g prosciutto slices",
            "1 egg (for egg wash)",
            "Salt and pepper"
        ],
        steps: [
            {
                text: "Prepare the beef",
                substeps: [
                    "Season beef fillet with salt and pepper",
                    "Heat olive oil and sear beef on all sides until browned",
                    "Brush with Dijon mustard",
                    "Let cool completely"
                ]
            },
            {
                text: "Make mushroom duxelles",
                substeps: [
                    "Heat olive oil and sauté shallots and garlic",
                    "Add finely chopped mushrooms",
                    "Cook until all moisture is released and mixture is dry",
                    "Season with salt and pepper and cool"
                ]
            },
            "Lay out prosciutto slices in an overlapping rectangle",
            "Spread mushroom duxelles over prosciutto",
            "Place beef fillet on top and roll tightly using plastic wrap",
            "Unwrap and wrap entire bundle in puff pastry",
            "Brush with egg wash and score decoratively",
            "Bake at 180°C for 25-35 minutes until pastry is golden and beef is cooked to desired doneness",
            "Let rest for 10 minutes before slicing and serving"
        ]
    },
    {
        id:6,
        title: "Vegetable Stir Fry",
        time: 20,
        difficulty: "easy",
        description: "Colorful mixed vegetables cooked quickly in a savory sauce.",
        category: "vegetarian",
        ingredients: [
            "2 cups broccoli florets",
            "1 red bell pepper, sliced",
            "1 yellow bell pepper, sliced",
            "2 carrots, julienned",
            "1 cup snap peas",
            "3 cloves garlic, minced",
            "2 tbsp soy sauce",
            "1 tbsp sesame oil",
            "2 tsp cornstarch",
            "3 tbsp vegetable oil",
            "Sesame seeds for garnish"
        ],
        steps: [
            "Prepare all ingredients and have them ready before cooking (mise en place)",
            "Mix soy sauce, sesame oil, and cornstarch with 3 tbsp water to create sauce",
            "Heat vegetable oil in a wok or large pan over high heat",
            "Add garlic and stir fry for 30 seconds until fragrant",
            "Add harder vegetables first (carrots, broccoli) and stir fry for 3-4 minutes",
            "Add bell peppers and snap peas, stir fry for 2-3 minutes",
            "Pour sauce into the pan and toss vegetables until coated and sauce thickens",
            "Garnish with sesame seeds and serve immediately over rice"
        ]
    },
    {
        id:7,
        title: "Pad Thai",
        time: 30,
        difficulty: "medium",
        description: "Thai stir-fried rice noodles with shrimp, peanuts, and tangy tamarind sauce.",
        category: "noodles",
        ingredients: [
            "400g dried rice noodles",
            "300g large shrimp, peeled and deveined",
            "3 tbsp tamarind paste",
            "3 tbsp fish sauce",
            "2 tbsp palm sugar",
            "3 cloves garlic, minced",
            "2 eggs",
            "1 cup bean sprouts",
            "3 green onions, cut into 2-inch pieces",
            "1/2 cup roasted peanuts, crushed",
            "2 tbsp vegetable oil",
            "Lime wedges"
        ],
        steps: [
            "Soak rice noodles in room temperature water for 30-40 minutes until softened",
            "Mix tamarind paste, fish sauce, and palm sugar in a small bowl to create sauce",
            "Heat vegetable oil in a wok or large pan over high heat",
            "Add garlic and stir fry for 30 seconds",
            "Add shrimp and cook for 2-3 minutes until starting to turn pink",
            "Push shrimp to the side, crack eggs into the pan and scramble lightly",
            "Add drained noodles to the pan and mix with shrimp and eggs",
            "Pour tamarind sauce over noodles and toss everything together for 2-3 minutes",
            "Add bean sprouts and green onions, toss for 1 minute",
            "Transfer to serving plates and top with crushed peanuts",
            "Serve with lime wedges on the side"
        ]
    },
    {
        id:8,
        title: "Margherita Pizza",
        time: 60,
        difficulty: "medium",
        description: "Classic Italian pizza with fresh mozzarella, tomatoes, and basil.",
        category: "pizza",
        ingredients: [
            "500g pizza dough",
            "200ml tomato sauce",
            "250g fresh mozzarella",
            "4 medium tomatoes, sliced",
            "Fresh basil leaves",
            "3 tbsp olive oil",
            "2 cloves garlic, minced",
            "Salt and pepper",
            "Flour for dusting"
        ],
        steps: [
            "Let pizza dough come to room temperature for 30 minutes",
            "Preheat oven to 250°C with a pizza stone or baking sheet inside",
            "Mix tomato sauce with minced garlic, salt, and pepper",
            "Dust a work surface with flour and stretch dough into a 12-inch circle",
            "Transfer dough to a pizza peel or additional baking sheet",
            "Spread tomato sauce evenly over dough, leaving a border for crust",
            "Tear fresh mozzarella into pieces and distribute over sauce",
            "Arrange tomato slices over mozzarella",
            "Drizzle with olive oil and sprinkle with salt and pepper",
            "Slide pizza onto hot pizza stone and bake for 12-15 minutes until crust is golden",
            "Remove from oven and top with fresh basil leaves",
            "Let cool for 2 minutes before slicing and serving"
        ]
    }
];
    
    // ============================================
    // PRIVATE: State Variables
    // ============================================
    let currentFilter = 'all';
    let currentSort = 'none';
    let searchQuery = '';
    let favorites = JSON.parse(localStorage.getItem('recipeFavorites')) || [];
    let debounceTimer;
    
    // ============================================
    // PRIVATE: DOM References
    // ============================================
    const recipeContainer = document.querySelector('#recipe-container');
    const filterButtons = document.querySelectorAll('.filter-btn');
    const sortButtons = document.querySelectorAll('.sort-btn');
    const searchInput = document.querySelector('#search-input');
    const clearSearchBtn = document.querySelector('#clear-search');
    const recipeCountDisplay = document.querySelector('#recipe-count');
    
    // ============================================
    // PRIVATE: Utility Functions
    // ============================================
    // Recursive function to render steps (handles nesting)
    const renderSteps = (steps, level = 0) => {
        // Determine the CSS class based on nesting level
        const listClass = level === 0 ? 'steps-list' : 'substeps-list';
        
        let html = `<ol class="${listClass}">`;
        
        steps.forEach(step => {
            // Check if step is a string or object
            if (typeof step === 'string') {
                // Simple step - just add as list item
                html += `<li>${step}</li>`;
            } else {
                // Nested step - has text and substeps
                html += `<li>`;
                html += step.text;  // Main step text
                
                // Recursively call renderSteps for substeps
                if (step.substeps && step.substeps.length > 0) {
                    // RECURSIVE CALL - this is the key!
                    html += renderSteps(step.substeps, level + 1);
                }
                
                html += `</li>`;
            }
        });
        
        html += `</ol>`;
        return html;
    };

    const createRecipeCard = (recipe) => {
        // Check if favorited
        const isFavorited = favorites.includes(recipe.id);
        const heartIcon = isFavorited ? '❤️' : '🤍';
        
        return `
            <div class="recipe-card" data-id="${recipe.id}">
                <!-- NEW: Favorite Button -->
                <button class="favorite-btn ${isFavorited ? 'favorited' : ''}" 
                        data-recipe-id="${recipe.id}">
                    ${heartIcon}
                </button>
                
                <h3>${recipe.title}</h3>
                <div class="recipe-meta">
                    <span>⏱️ ${recipe.time} min</span>
                    <span class="difficulty ${recipe.difficulty}">${recipe.difficulty}</span>
                </div>
                <p>${recipe.description}</p>
                
                <!-- Toggle Buttons -->
                <div class="card-actions">
                    <button class="toggle-btn" data-recipe-id="${recipe.id}" data-toggle="steps">
                        📋 Show Steps
                    </button>
                    <button class="toggle-btn" data-recipe-id="${recipe.id}" data-toggle="ingredients">
                        🥗 Show Ingredients
                    </button>
                </div>
                
                <!-- Ingredients Section (hidden by default) -->
                <div class="ingredients-container" data-recipe-id="${recipe.id}">
                    <h4>Ingredients:</h4>
                    <ul>
                        ${recipe.ingredients.map(ingredient => `<li>${ingredient}</li>`).join('')}
                    </ul>
                </div>
                
                <!-- Steps Section (hidden by default) -->
                <div class="steps-container" data-recipe-id="${recipe.id}">
                    <h4>Cooking Steps:</h4>
                    ${createStepsHTML(recipe.steps)}
                </div>
            </div>
        `;
    };
    
    const filterByDifficulty = (recipes, difficulty) => {
        return recipes.filter(recipe => recipe.difficulty === difficulty);
    };

    // Filter recipes by maximum cooking time
    const filterByTime = (recipes, maxTime) => {
        return recipes.filter(recipe => recipe.time <= maxTime);
    };

    // NEW: Search filter
    const filterBySearch = (recipes, query) => {
        if (!query || query.trim() === '') {
            return recipes;
        }
        
        const lowerQuery = query.toLowerCase().trim();
        
        return recipes.filter(recipe => {
            // Search in title
            const titleMatch = recipe.title.toLowerCase().includes(lowerQuery);
            
            // Search in ingredients
            const ingredientMatch = recipe.ingredients.some(ingredient => 
                ingredient.toLowerCase().includes(lowerQuery)
            );
            
            // Search in description
            const descriptionMatch = recipe.description.toLowerCase().includes(lowerQuery);
            
            return titleMatch || ingredientMatch || descriptionMatch;
        });
    };

    // NEW: Favorites filter
    const filterFavorites = (recipes) => {
        return recipes.filter(recipe => favorites.includes(recipe.id));
    };

    // Apply the current filter
    const applyFilter = (recipes, filterType) => {
        switch(filterType) {
            case 'easy':
                return filterByDifficulty(recipes, 'easy');
            case 'medium':
                return filterByDifficulty(recipes, 'medium');
            case 'hard':
                return filterByDifficulty(recipes, 'hard');
            case 'quick':
                return filterByTime(recipes, 30);
            case 'favorites':
                return filterFavorites(recipes);
            case 'all':
            default:
                return recipes;  // Return all recipes (no filter)
        }
    };
    
    const sortByName = (recipes) => {
        // Create a copy with spread operator, then sort
        return [...recipes].sort((a, b) => a.title.localeCompare(b.title));
    };

    // Sort recipes by cooking time (fastest first)
    const sortByTime = (recipes) => {
        // Create a copy with spread operator, then sort
        return [...recipes].sort((a, b) => a.time - b.time);
    };

    // Apply the current sort
    const applySort = (recipes, sortType) => {
        switch(sortType) {
            case 'name':
                return sortByName(recipes);
            case 'time':
                return sortByTime(recipes);
            case 'none':
            default:
                return recipes;  // Return as-is (no sorting)
        }
    };
    
    // NEW: Update recipe counter
    const updateRecipeCounter = (showing, total) => {
        if (recipeCountDisplay) {
            recipeCountDisplay.textContent = `Showing ${showing} of ${total} recipes`;
        }
    };
    
    const updateDisplay = () => {
        // Step 1: Start with all recipes
        let recipesToDisplay = recipes;
        
        // NEW: Step 2: Apply search FIRST
        recipesToDisplay = filterBySearch(recipesToDisplay, searchQuery);
        
        // Step 3: Apply current filter
        recipesToDisplay = applyFilter(recipesToDisplay, currentFilter);
        
        // Step 4: Apply current sort
        recipesToDisplay = applySort(recipesToDisplay, currentSort);
        
        // NEW: Step 5: Update counter
        updateRecipeCounter(recipesToDisplay.length, recipes.length);
        
        // Step 6: Render the filtered and sorted recipes
        renderRecipes(recipesToDisplay);
        
        // Step 7: Update active buttons
        updateActiveButtons();
        
        // Step 8: Log for debugging
        console.log(`Displaying ${recipesToDisplay.length} recipes (Filter: ${currentFilter}, Sort: ${currentSort})`);
    };
    
    const updateActiveButtons = () => {
        // Update filter buttons
        filterButtons.forEach(btn => {
            const filterType = btn.dataset.filter;
            if (filterType === currentFilter) {
                btn.classList.add('active');
            } else {
                btn.classList.remove('active');
            }
        });
        
        // Update sort buttons
        sortButtons.forEach(btn => {
            const sortType = btn.dataset.sort;
            if (sortType === currentSort) {
                btn.classList.add('active');
            } else {
                btn.classList.remove('active');
            }
        });
    };
    
    // ============================================
    // FAVORITES MANAGEMENT
    // ============================================
    
    // Save favorites to localStorage
    const saveFavorites = () => {
        localStorage.setItem('recipeFavorites', JSON.stringify(favorites));
    };

    // Toggle favorite status
    const toggleFavorite = (recipeId) => {
        const id = parseInt(recipeId);
        
        if (favorites.includes(id)) {
            // Remove from favorites
            favorites = favorites.filter(fav => fav !== id);
        } else {
            // Add to favorites
            favorites.push(id);
        }
        
        saveFavorites();
        updateDisplay();
    };
    
    const handleFilterClick = (event) => {
        const filterType = event.target.dataset.filter;
        
        // Update state
        currentFilter = filterType;
        
        // Update UI
        updateActiveButtons();
        updateDisplay();
    };

    // Handle sort button clicks
    const handleSortClick = (event) => {
        const sortType = event.target.dataset.sort;
        
        // Update state
        currentSort = sortType;
        
        // Update UI
        updateActiveButtons();
        updateDisplay();
    };
    
    const setupEventListeners = () => {
        // From Part 2 - filter buttons
        filterButtons.forEach(btn => {
            btn.addEventListener('click', handleFilterClick);
        });
        
        // From Part 2 - sort buttons
        sortButtons.forEach(btn => {
            btn.addEventListener('click', handleSortClick);
        });
        
        // Event delegation for toggle buttons
        recipeContainer.addEventListener('click', handleToggleClick);
        
        // NEW: Search event listeners
        if (searchInput) {
            searchInput.addEventListener('input', handleSearchInput);
        }
        
        if (clearSearchBtn) {
            clearSearchBtn.addEventListener('click', handleClearSearch);
        }
        
        // NEW: Favorite button handler (event delegation on recipe container)
        recipeContainer.addEventListener('click', handleFavoriteClick);
        
        console.log('Event listeners attached!');
    };

    const renderRecipes = (recipesToRender) => {
        recipeContainer.innerHTML = recipesToRender
            .map(createRecipeCard)
            .join('');
    };
    
    const createStepsHTML = (steps) => {
        // Check if steps exist
        if (!steps || steps.length === 0) {
            return '<p>No steps available</p>';
        }
        
        // Call the recursive function to generate the nested list
        return renderSteps(steps);
    };
    
    const handleToggleClick = (event) => {
        // Check if clicked element is a toggle button
        if (!event.target.classList.contains('toggle-btn')) {
            return;  // Not a toggle button, ignore
        }
        
        const button = event.target;
        const recipeId = button.dataset.recipeId;
        const toggleType = button.dataset.toggle;  // "steps" or "ingredients"
        
        // Find the corresponding container
        const containerClass = toggleType === 'steps' ? 'steps-container' : 'ingredients-container';
        const container = document.querySelector(`.${containerClass}[data-recipe-id="${recipeId}"]`);
        
        // Toggle visibility
        if (container) {
            container.classList.toggle('visible');
            
            // Update button text
            const isVisible = container.classList.contains('visible');
            if (toggleType === 'steps') {
                button.textContent = isVisible ? '📋 Hide Steps' : '📋 Show Steps';
            } else {
                button.textContent = isVisible ? '🥗 Hide Ingredients' : '🥗 Show Ingredients';
            }
        }
    };
    
    // NEW: Search input handler
    const handleSearchInput = (event) => {
        const query = event.target.value;
        
        // Show/hide clear button
        if (clearSearchBtn) {
            clearSearchBtn.style.display = query ? 'block' : 'none';
        }
        
        // Debouncing
        clearTimeout(debounceTimer);
        
        // Set new timer
        debounceTimer = setTimeout(() => {
            searchQuery = query;
            updateDisplay();
        }, 300);
    };

    // NEW: Clear search handler
    const handleClearSearch = () => {
        searchQuery = '';
        if (searchInput) {
            searchInput.value = '';
        }
        if (clearSearchBtn) {
            clearSearchBtn.style.display = 'none';
        }
        updateDisplay();
    };

    // NEW: Favorite button handler (event delegation)
    const handleFavoriteClick = (event) => {
        if (!event.target.classList.contains('favorite-btn')) {
            return;
        }
        
        const recipeId = event.target.dataset.recipeId;
        toggleFavorite(recipeId);
    };
    
    // ============================================
    // INITIALIZATION FUNCTION
    // ============================================
    const init = () => {
        console.log('🍳 RecipeApp initializing...');
        setupEventListeners();
        updateDisplay();
        console.log('✅ RecipeApp ready!');
        console.log(`📊 ${recipes.length} recipes loaded`);
        console.log(`❤️  ${favorites.length} favorites saved`);
    };
    
    // ============================================
    // PUBLIC API - What's accessible from outside
    // ============================================
    return {
        init: init,
        // Expose updateDisplay so filter/sort handlers can call it
        updateDisplay: updateDisplay
    };
    
})();  // <-- IIFE is immediately invoked

// ============================================
// START THE APP
// ============================================
RecipeApp.init();

