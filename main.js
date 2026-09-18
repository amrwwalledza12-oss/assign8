const RECIPES = [
  {
    title: "Creamy Spaghetti Carbonara",
    desc: "A classic Italian pasta dish with eggs, cheese, and pancetta",
    image: "https://images.unsplash.com/photo-1612874742237-6526221588e3?auto=format&fit=crop&w=800&q=80",
    diff: "Easy", cuisine: "Italian",
    rating: "4.8", reviews: "234",
    prep: "15 min", cook: "20 min", servings: "4 people",
    extendedPrep: false,
    ingredients: ["400g spaghetti pasta", "200g pancetta or guanciale, diced", "4 large eggs", "100g Pecorino Romano cheese, grated", "50g Parmesan cheese, grated", "Freshly ground black pepper", "Salt for pasta water"],
    instructions: ["Bring a large pot of salted water to a boil and cook spaghetti until al dente.", "While pasta cooks, fry the pancetta in a pan until crisp and golden.", "Whisk the eggs with the grated Pecorino and Parmesan in a bowl.", "Drain the pasta, reserving a cup of the cooking water.", "Off the heat, toss the hot pasta with the pancetta, then quickly stir in the egg mixture.", "Add splashes of pasta water until silky and creamy.", "Finish with black pepper and extra cheese, then serve immediately."],
    nutrition: { cal: "580", protein: "32g", carbs: "62g", fat: "24g", fiber: "3g", sodium: "780mg" },
    tips: ["Take the pan off the heat before adding the eggs so they don't scramble.", "Guanciale gives a more authentic flavor than pancetta if you can find it.", "Always save some pasta water — it's the secret to a silky sauce."]
  },
  {
    title: "Lasagna Bolognese",
    desc: "Layered Italian pasta with rich meat sauce and béchamel",
    image: "https://images.unsplash.com/photo-1574894709920-11b28e7367e3?auto=format&fit=crop&w=800&q=80",
    diff: "Intermediate", cuisine: "Italian",
    rating: "4.9", reviews: "478",
    prep: "40 min", cook: "60 min", servings: "6 people",
    extendedPrep: true,
    ingredients: ["12 lasagna sheets", "500g ground beef", "1 onion, diced", "2 carrots, diced", "2 celery stalks, diced", "800g canned tomatoes", "60g butter", "60g flour", "700ml milk", "150g Parmesan, grated", "2 tbsp olive oil", "Salt and pepper"],
    instructions: ["Sauté onion, carrot, and celery in olive oil until soft.", "Add the ground beef and cook until browned.", "Stir in canned tomatoes and simmer the ragù for 40 minutes.", "Melt butter, whisk in flour, then gradually add milk to make béchamel.", "Layer pasta sheets, ragù, and béchamel in a baking dish, repeating.", "Top with Parmesan and bake at 190°C for 35 minutes until golden.", "Rest for 10 minutes before slicing and serving."],
    nutrition: { cal: "680", protein: "42g", carbs: "58g", fat: "28g", fiber: "6g", sodium: "920mg" },
    tips: ["Let the ragù simmer low and slow for the deepest flavor.", "Resting the lasagna before cutting keeps the layers neat.", "Make it a day ahead — it tastes even better reheated."]
  },
  {
    title: "Mediterranean Quinoa Bowl",
    desc: "Healthy bowl with quinoa, vegetables, and tahini dressing",
    image: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?auto=format&fit=crop&w=800&q=80",
    diff: "Easy", cuisine: "Mediterranean",
    rating: "4.5", reviews: "156",
    prep: "20 min", cook: "35 min", servings: "2 people",
    extendedPrep: true,
    ingredients: ["1 cup quinoa", "200g firm tofu, cubed", "1 cup cherry tomatoes, halved", "1 cucumber, diced", "1/2 red cabbage, shredded", "1 cup sweet corn", "2 boiled eggs", "3 tbsp tahini", "1 lemon, juiced", "2 tbsp olive oil"],
    instructions: ["Rinse and cook the quinoa according to package instructions.", "Pan-sear the tofu cubes until golden on all sides.", "Whisk tahini, lemon juice, olive oil, and a splash of water into a dressing.", "Arrange quinoa in bowls and top with tomatoes, cucumber, cabbage, and corn.", "Add the tofu and halved boiled eggs.", "Drizzle generously with the tahini dressing before serving."],
    nutrition: { cal: "480", protein: "18g", carbs: "58g", fat: "20g", fiber: "10g", sodium: "540mg" },
    tips: ["Press the tofu for 10 minutes before cooking for a crispier sear.", "Make extra dressing — it keeps well in the fridge for a week.", "Swap in any seasonal vegetables you have on hand."]
  },
  {
    title: "Traditional Layered Eggplant Casserole",
    desc: "Traditional layered eggplant casserole with lamb",
    image: "https://images.unsplash.com/photo-1541544741938-0af808871cc0?auto=format&fit=crop&w=800&q=80",
    diff: "Intermediate", cuisine: "Mediterranean",
    rating: "4.8", reviews: "234",
    prep: "30 min", cook: "60 min", servings: "4 people",
    extendedPrep: true,
    ingredients: ["3 large eggplants, sliced", "500g ground lamb", "1 onion, diced", "3 garlic cloves, minced", "400g canned tomatoes", "1 tsp cinnamon", "60g butter", "60g flour", "600ml milk", "100g cheese, grated", "Olive oil for frying"],
    instructions: ["Salt the eggplant slices and let them sit for 20 minutes, then pat dry.", "Fry or brush the eggplant slices with oil and roast until soft.", "Cook the lamb with onion and garlic until browned.", "Stir in tomatoes and cinnamon and simmer for 15 minutes.", "Make a béchamel with butter, flour, and milk.", "Layer eggplant and lamb sauce in a baking dish, then top with béchamel and cheese.", "Bake at 180°C for 35–40 minutes until golden on top."],
    nutrition: { cal: "580", protein: "36g", carbs: "32g", fat: "32g", fiber: "8g", sodium: "820mg" },
    tips: ["Salting the eggplant first stops the dish from turning watery.", "Cinnamon is traditional — don't skip it, it rounds out the lamb.", "Let it rest 10 minutes before serving so the layers hold together."]
  },
  {
    title: "Thai Green Curry",
    desc: "Fragrant coconut curry with chicken and vegetables",
    image: "https://images.unsplash.com/photo-1455619452474-d2be8b1e70cd?auto=format&fit=crop&w=800&q=80",
    diff: "Intermediate", cuisine: "Thai",
    rating: "4.7", reviews: "312",
    prep: "20 min", cook: "25 min", servings: "4 people",
    extendedPrep: false,
    ingredients: ["500g chicken thigh, sliced", "3 tbsp green curry paste", "400ml coconut milk", "1 eggplant, cubed", "100g green beans", "2 kaffir lime leaves", "2 tbsp fish sauce", "1 tbsp palm sugar", "Fresh basil leaves", "Jasmine rice, for serving"],
    instructions: ["Fry the curry paste in a splash of oil until fragrant.", "Add the thick part of the coconut milk and simmer until it splits slightly.", "Add the chicken and cook until no longer pink.", "Pour in the rest of the coconut milk, eggplant, and green beans.", "Season with fish sauce, palm sugar, and lime leaves.", "Simmer until the vegetables are tender.", "Stir through basil leaves and serve over jasmine rice."],
    nutrition: { cal: "520", protein: "34g", carbs: "22g", fat: "34g", fiber: "5g", sodium: "890mg" },
    tips: ["Frying the paste until fragrant is key to unlocking its flavor.", "Adjust the heat level with extra or less curry paste.", "Full-fat coconut milk gives the richest, silkiest curry."]
  },
  {
    title: "Classic Beef Tacos",
    desc: "Crispy tacos with seasoned beef and fresh toppings",
    image: "https://images.unsplash.com/photo-1565299585323-38d6b0865b47?auto=format&fit=crop&w=800&q=80",
    diff: "Easy", cuisine: "Mexican",
    rating: "4.6", reviews: "389",
    prep: "15 min", cook: "15 min", servings: "4 people",
    extendedPrep: false,
    ingredients: ["8 taco shells", "500g ground beef", "1 packet taco seasoning", "1 cup shredded lettuce", "1 cup diced tomatoes", "1 cup shredded cheese", "1/2 cup sour cream", "1 avocado, sliced", "Lime wedges"],
    instructions: ["Brown the ground beef in a skillet over medium heat.", "Stir in the taco seasoning with a splash of water and simmer 5 minutes.", "Warm the taco shells in the oven for a few minutes.", "Fill each shell with the seasoned beef.", "Top with lettuce, tomatoes, cheese, and avocado.", "Finish with a dollop of sour cream and a squeeze of lime."],
    nutrition: { cal: "460", protein: "28g", carbs: "30g", fat: "26g", fiber: "5g", sodium: "760mg" },
    tips: ["Warm the shells right before filling so they stay crisp.", "Set out toppings buffet-style so everyone builds their own.", "Drain excess fat from the beef for a lighter filling."]
  },
  {
    title: "Chicken Teriyaki Rice Bowl",
    desc: "Glazed chicken over steamed rice with sesame vegetables",
    image: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&w=800&q=80",
    diff: "Easy", cuisine: "Japanese",
    rating: "4.7", reviews: "267",
    prep: "15 min", cook: "20 min", servings: "3 people",
    extendedPrep: false,
    ingredients: ["500g chicken thighs", "4 tbsp soy sauce", "3 tbsp mirin", "2 tbsp sugar", "1 tbsp sesame oil", "2 cups steamed rice", "1 cup steamed broccoli", "1 tbsp sesame seeds", "2 spring onions, sliced"],
    instructions: ["Whisk soy sauce, mirin, and sugar together for the teriyaki sauce.", "Sear the chicken thighs skin-side down until golden.", "Flip and cook through, then pour in the teriyaki sauce.", "Simmer until the sauce thickens and coats the chicken.", "Slice the chicken and serve over steamed rice.", "Add steamed broccoli, sesame seeds, and spring onions on top."],
    nutrition: { cal: "540", protein: "36g", carbs: "52g", fat: "18g", fiber: "3g", sodium: "980mg" },
    tips: ["Let the sauce reduce until sticky for a proper glaze.", "Chicken thighs stay juicier than breast for this dish.", "Toast the sesame seeds for extra aroma."]
  },
  {
    title: "Creamy Mushroom Risotto",
    desc: "Slow-cooked Arborio rice with mushrooms and Parmesan",
    image: "https://images.unsplash.com/photo-1633964913295-ceb43826e7c9?auto=format&fit=crop&w=800&q=80",
    diff: "Intermediate", cuisine: "Italian",
    rating: "4.8", reviews: "198",
    prep: "10 min", cook: "35 min", servings: "4 people",
    extendedPrep: false,
    ingredients: ["1.5 cups Arborio rice", "300g mixed mushrooms, sliced", "1 onion, finely diced", "1 liter vegetable stock, warm", "100ml white wine", "60g butter", "60g Parmesan, grated", "2 tbsp olive oil"],
    instructions: ["Sauté the mushrooms in olive oil until golden, then set aside.", "In the same pan, cook the onion in butter until soft.", "Add the rice and toast for 2 minutes, stirring constantly.", "Pour in the wine and stir until absorbed.", "Add warm stock one ladle at a time, stirring until each is absorbed.", "Continue until the rice is creamy and just tender, about 20 minutes.", "Stir in the mushrooms and Parmesan, then serve immediately."],
    nutrition: { cal: "510", protein: "14g", carbs: "68g", fat: "18g", fiber: "4g", sodium: "640mg" },
    tips: ["Keep the stock warm so it doesn't cool the rice down.", "Stir constantly for the creamiest texture.", "Risotto waits for no one — serve it the moment it's ready."]
  },
  {
    title: "Grilled Salmon with Lemon Butter",
    desc: "Pan-seared salmon fillets with a bright lemon butter sauce",
    image: "https://images.unsplash.com/photo-1519708227418-c8fd9a32b7a2?auto=format&fit=crop&w=800&q=80",
    diff: "Easy", cuisine: "American",
    rating: "4.9", reviews: "301",
    prep: "10 min", cook: "15 min", servings: "2 people",
    extendedPrep: false,
    ingredients: ["2 salmon fillets", "2 tbsp butter", "1 lemon, juiced and zested", "2 garlic cloves, minced", "1 tbsp olive oil", "Fresh dill", "Salt and pepper"],
    instructions: ["Season the salmon fillets with salt and pepper.", "Sear skin-side down in olive oil until crisp, about 5 minutes.", "Flip and cook until just cooked through.", "Remove the salmon and melt butter in the same pan.", "Add garlic, lemon juice, and zest, and stir until fragrant.", "Spoon the lemon butter sauce over the salmon and top with dill."],
    nutrition: { cal: "420", protein: "38g", carbs: "4g", fat: "28g", fiber: "1g", sodium: "420mg" },
    tips: ["Don't move the salmon while searing so it forms a crisp crust.", "Basting with the butter sauce keeps the fish moist.", "Serve immediately — salmon keeps cooking off the heat."]
  },
  {
    title: "Vegetable Stir-Fry with Noodles",
    desc: "Quick wok-fried noodles with crisp seasonal vegetables",
    image: "https://images.unsplash.com/photo-1585032226651-759b368d7246?auto=format&fit=crop&w=800&q=80",
    diff: "Easy", cuisine: "Chinese",
    rating: "4.5", reviews: "142",
    prep: "15 min", cook: "12 min", servings: "3 people",
    extendedPrep: false,
    ingredients: ["300g egg noodles", "1 bell pepper, sliced", "1 carrot, julienned", "1 cup broccoli florets", "1 cup bean sprouts", "3 tbsp soy sauce", "1 tbsp oyster sauce", "2 garlic cloves, minced", "1 tbsp sesame oil", "2 tbsp vegetable oil"],
    instructions: ["Boil the noodles until just tender, then drain and set aside.", "Heat vegetable oil in a wok over high heat.", "Stir-fry garlic, then add carrot and broccoli first.", "Add bell pepper and bean sprouts and stir-fry 2 minutes.", "Toss in the noodles, soy sauce, and oyster sauce.", "Stir everything together until well coated and heated through.", "Drizzle with sesame oil and serve immediately."],
    nutrition: { cal: "430", protein: "14g", carbs: "70g", fat: "12g", fiber: "6g", sodium: "1020mg" },
    tips: ["Keep the wok hot for that smoky stir-fry flavor.", "Cut vegetables uniformly so they cook evenly.", "Add noodles last so they don't turn mushy."]
  }
];

let currentIndex = 0;

const nutriMeta = [
  { key: "cal", label: "Calories", icon: "fa-fire", bg: "#fdece3", color: "#e8483a", unit: " kcal" },
  { key: "protein", label: "Protein", icon: "fa-dumbbell", bg: "#eaf1fb", color: "#2f6fce", unit: "" },
  { key: "carbs", label: "Carbohydrates", icon: "fa-wheat-awn", bg: "#fdf6e3", color: "#c99a1e", unit: "" },
  { key: "fat", label: "Fat", icon: "fa-droplet", bg: "#fdeaea", color: "#d9463c", unit: "" },
  { key: "fiber", label: "Fiber", icon: "fa-seedling", bg: "#e9f7ef", color: "#1e8e5a", unit: "" },
  { key: "sodium", label: "Sodium", icon: "fa-cube", bg: "#fdeaf3", color: "#c23b8a", unit: "" }
];

function renderRecipe(index) {
  const r = RECIPES[index];
  currentIndex = index;

  document.getElementById("recipeImageTag").src = r.image;
  document.getElementById("recipeImageTag").alt = r.title;

  document.getElementById("ratingText").textContent = `${r.rating} (${r.reviews} reviews)`;
  document.getElementById("prepTime").textContent = r.prep;
  document.getElementById("cookTime").textContent = r.cook;
  document.getElementById("servings").textContent = r.servings;
  document.getElementById("diffBadge").textContent = r.diff;
  document.getElementById("cuisineBadge").textContent = r.cuisine;
  document.getElementById("recipeTitle").textContent = r.title;
  document.getElementById("recipeDesc").textContent = r.desc;
  document.getElementById("warningBox").style.display = r.extendedPrep ? "block" : "none";

  document.getElementById("panel-ingredients").innerHTML = r.ingredients.map((ing, i) => `
    <div class="ing-item">
      <span class="ing-num">${i + 1}</span>
      <span>${ing}</span>
    </div>`).join("");

  document.getElementById("panel-instructions").innerHTML = r.instructions.map((step, i) => `
    <div class="step-item">
      <span class="step-num">${i + 1}</span>
      <span class="step-text">${step}</span>
    </div>`).join("");

  document.getElementById("panel-nutrition").innerHTML = `<div class="nutri-grid">` +
    nutriMeta.map(m => `
      <div class="nutri-item">
        <div class="nutri-icon" style="background:${m.bg}; color:${m.color};"><i class="fa-solid ${m.icon}"></i></div>
        <div>
          <span class="lbl">${m.label}</span>
          <span class="val">${r.nutrition[m.key]}${m.unit}</span>
        </div>
      </div>`).join("") + `</div>`;

  document.getElementById("panel-tips").innerHTML = r.tips.map(t => `
    <div class="tip-item">
      <i class="fa-solid fa-lightbulb"></i>
      <span>${t}</span>
    </div>`).join("");

  document.querySelectorAll(".meal-mini").forEach((el, i) => {
    el.classList.toggle("active-mini", i === index);
  });
}

function renderGrid() {
  const grid = document.getElementById("mealGrid");
  grid.innerHTML = RECIPES.map((r, i) => `
    <div class="meal-mini" data-index="${i}">
      <div class="mini-img-wrap">
        <img src="${r.image}" alt="${r.title}" loading="lazy">
      </div>
      <h6>${r.title}</h6>
      <span class="mini-rating"><i class="fa-solid fa-star"></i> ${r.rating} (${r.reviews})</span>
    </div>`).join("");

  grid.querySelectorAll(".meal-mini").forEach(el => {
    el.addEventListener("click", () => {
      renderRecipe(parseInt(el.dataset.index));
      window.scrollTo({ top: 0, behavior: "smooth" });
    });
  });
}

document.querySelectorAll(".tab-btn").forEach(btn => {
  btn.addEventListener("click", () => {
    document.querySelectorAll(".tab-btn").forEach(b => b.classList.remove("active"));
    document.querySelectorAll(".tab-panel").forEach(p => p.classList.remove("active"));
    btn.classList.add("active");
    document.getElementById(`panel-${btn.dataset.tab}`).classList.add("active");
  });
});

document.getElementById("tryAnotherBtn").addEventListener("click", () => {
  let next;
  do {
    next = Math.floor(Math.random() * RECIPES.length);
  } while (next === currentIndex && RECIPES.length > 1);
  renderRecipe(next);
});

renderGrid();
renderRecipe(0);