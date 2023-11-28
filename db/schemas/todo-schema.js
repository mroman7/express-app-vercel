const mongoose = require("mongoose");

const Todo = mongoose.Schema({
    title: { type: String, require: true },
    status: { type: String, default: "pending" },
    created_at: { type: Date, default: Date.now() },
    updated_at: { type: Date, default: Date.now() }    
});

module.exports = {
    Todo
}