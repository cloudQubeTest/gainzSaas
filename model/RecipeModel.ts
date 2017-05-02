import Mongoose = require('mongoose');
import DataAccess from '../DataAccess';
import IListModel from '../interfaces/iRecipeModel';

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
        this.model = mongooseConnection.model<iRecipeModel>("recipes", this.schema);
    }

    public retrieveAllLists(response:any): any {
        var query = this.model.find({});
        query.exec( (err, itemArray) => {
            response.json(itemArray) ;
        });
    }
}