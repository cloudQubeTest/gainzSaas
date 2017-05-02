"use strict";
exports.__esModule = true;
var DataAccess_1 = require("../DataAccess");
var mongoose = DataAccess_1["default"].mongooseInstance;
var mongooseConnection = DataAccess_1["default"].mongooseConnection;
var ListModel = (function () {
    function ListModel() {
        this.createSchema();
        this.createModel();
    }
    ListModel.prototype.createSchema = function () {
        this.schema = mongoose.Schema({
            name: String,
            description: String,
            listId: Number,
            due: String,
            state: String,
            owner: String
        }, { collection: 'lists' });
    };
    ListModel.prototype.createModel = function () {
        this.model = mongooseConnection.model("Lists", this.schema);
    };
    ListModel.prototype.retrieveAllLists = function (response) {
        var query = this.model.find({});
        query.exec(function (err, itemArray) {
            response.json(itemArray);
        });
    };
    return ListModel;
}());
exports["default"] = ListModel;
