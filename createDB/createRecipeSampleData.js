db = db.getSiblingDB('recipeSample')
db.createCollection('recipes')
recipesCollection = db.getCollection("recipes")
recipesCollection.remove({})
recipesCollection.insert(
{
    recipeTitle: 'Matcha Smoothie',
	recipeId: 1,
    ingredients: "1 banana, 1/2 cup of ice, 1 cup of almond milk, 1 scoop of vanilla protein powder, 2 tbsp of matcha powder, honey to taste",
    instructions: "Blend together until smooth",
    calories: 307,
    protein: 26.5,
    fat: 27.5,
    carbs: 40,
    sugar: 20,
    goal: 'Maintain'
}
)
recipesCollection.insert(
{
    recipeTitle: 'Large Pepperoni Pizza',
	recipeId: 2,
    ingredients: "Cheese, Bread, Pepperoni",
    instructions: "Throw some pepperonis on some bread and cheese and melt it",
    calories: 500,
    protein: 8,
    fat: 27.5,
    carbs: 40,
    sugar: 10,
    goal: 'Bulk'
}
)
recipesCollection.insert(
{
    recipeTitle: 'Chicken Salad',
	recipeId: 3,
    ingredients: "Lettuce, Chicken, Dressing",
    instructions: "Cut Lettuce and chicken, add dresssing, toss",
    calories: 250,
    protein: 20,
    fat: 10,
    carbs: 20,
    sugar: 3,
    goal: 'Cut'
}
)
recipesCollection.insert(
{
    recipeTitle: "Avocado Toast",
	recipeId: 4,
    ingredients: "Avocado, Whole Wheat Bread, Lemon, Salt, Pepper, Smoked Salmon (Optional)",
    instructions: "Mash avocado with lemon juice, add salt and pepper. Spread on toasted whole wheat bread and top with smoked salmon.",
    calories: 300,
    protein: 30,
    fat: 15,
    carbs: 18,
    sugar: 2,
    goal: 'Cut'
}
)