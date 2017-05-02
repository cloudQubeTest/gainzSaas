import Mongoose = require('mongoose');
import DataAccess from '../DataAccess';
import IRecipeModel from '../interfaces/IRecipeModel';

var mongoose = DataAccess.mongooseInstance;
var mongooseConnection = DataAccess.mongooseConnection;

export default class RecipeModel {
    public schema:Mongoose.Schema;
    public model:any;

    public constructor() {
        this.createSchema();
        this.createModel();
    }

    public createSchema(): void {
        this.schema =  mongoose.Schema(
            {
                recipeTitle: String,
                recipeID: Number,
                ingredients: String,
                instructions: Number,
                calories: Number,
                protein: Number,
                fat: Number,
                carbs: Number,
                sugar: Number
            }, {collection: 'recipes'}
        );
    }

    public createModel(): void {
        this.model = mongooseConnection.model<IRecipeModel>("Recipes", this.schema);
    }

    public retrieveAllRecipes(response:any): any {
        var query = this.model.find({});
        query.exec( (err, itemArray) => {
            response.json(itemArray) ;
        });
    }
}