"use strict";
exports.__esModule = true;
var DataAccess_1 = require("../DataAccess");
var mongoose = DataAccess_1["default"].mongooseInstance;
var mongooseConnection = DataAccess_1["default"].mongooseConnection;
var TaskModel = (function () {
    function TaskModel() {
        this.createSchema();
        this.createModel();
    }
    TaskModel.prototype.createSchema = function () {
        this.schema = mongoose.Schema({
            listId: Number,
            tasks: [{
                    description: String,
                    taskId: Number,
                    shared: String,
                    status: String
                }]
        }, { collection: 'tasks' });
    };
    TaskModel.prototype.createModel = function () {
        this.model = mongooseConnection.model("Task", this.schema);
    };
    TaskModel.prototype.retrieveTasksDetails = function (response, filter) {
        var query = this.model.findOne(filter);
        query.exec(function (err, itemArray) {
            response.json(itemArray);
        });
    };
    TaskModel.prototype.retrieveTasksCount = function (response, filter) {
        var query = this.model.find(filter).select('tasks').count();
        query.exec(function (err, numberOfTasks) {
            console.log('number of tasks: ' + numberOfTasks);
            response.json(numberOfTasks);
        });
    };
    return TaskModel;
}());
exports["default"] = TaskModel;
