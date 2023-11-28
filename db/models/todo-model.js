const Schema = require("../schemas/todo-schema");
const mongoose = require("mongoose");

module.exports = {
    Todo: mongoose.model("Todo", Schema.Todo)
}