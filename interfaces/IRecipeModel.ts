import Mongoose = require("mongoose");

interface IRecipeModel extends Mongoose.Document {
    recipeTitle: string;
    recipeID: number;
    ingredients: string;
    instructions: number;
    calories: number;
    protein: number;
    fat: number;
    carbs: number;
    sugar: number;
}
export default IRecipeModel;