import * as path from 'path';
import * as express from 'express';
import * as logger from 'morgan';
import * as url from 'url';
import * as bodyParser from 'body-parser';

import RecipeModel from './model/RecipeModel';
import DataAccess from './DataAccess';

// Creates and configures an ExpressJS web server.
class App {

  // ref to Express instance
  public express: express.Application;
  public recipes:RecipeModel;
  public idGenerator:number;

  //Run configuration methods on the Express instance.
  constructor() {
    this.express = express();
    this.middleware();
    this.routes();
    this.idGenerator = 100;
    this.recipes = new RecipeModel();
  }

  // Configure Express middleware.
  private middleware(): void {
    this.express.use(logger('dev'));
    this.express.use(bodyParser.json());
    this.express.use(bodyParser.urlencoded({ extended: false }));
  }

  // Configure API endpoints.
  private routes(): void {
    let router = express.Router();
    
    router.get('/app/recipe/:recipeId/count', (req, res) => {
        var id = req.params.recipeId;
        console.log('Query single recipe with id: ' + id);
        this.Tasks.retrieveTasksCount(res, {recipeId: id});
    });

    router.post('/app/recipe/', (req, res) => {
        console.log(req.body);
        var jsonObj = req.body;
        jsonObj.recipeId = this.idGenerator;
        this.recipes.model.create([jsonObj], (err) => {
            if (err) {
                console.log('object creation failed');
            }
        });
        res.send(this.idGenerator.toString());
        this.idGenerator++;
    });

    router.get('/app/recipe/:recipeId', (req, res) => {
        var id = req.params.recipeId;
        console.log('Query single recipe with id: ' + id);
        this.Tasks.retrieveTasksDetails(res, {recipeId: id});
    });

    router.get('/app/recipe/', (req, res) => {
        console.log('Query All recipe');
        this.recipes.retrieveAllrecipes(res);
    });


    this.express.use('/', router);

    this.express.use('/app/json/', express.static(__dirname+'/app/json'));
    this.express.use('/images', express.static(__dirname+'/img'));
    this.express.use('/', express.static(__dirname+'/pages'));

  }

}

export default new App().express;
