const express = require("express");
const Model = require("../db/models/todo-model");

async function getTodos(req, res) {
    try {
        let todos = await Model.Todo.find({});
        if(Object.keys(todos).length > 0){
            res.send({
                status: 200, 
                todos
            });
        } else {
            res.send({
                status: 300, 
                message: "No Todo Found", 
            });
        }        
    } catch (error) {
        res.send({
            status: 400, 
            message: "An Unknown error occured", 
            error
        });
    }
}


// Create Todo 
async function createTodo(req, res) {
    try {
        let { title } = req.body;
        let todo = await Model.Todo({ title: title }).save();

        if (todo && todo._id) {
            res.send({
                status: 200,
                message: "Todo Created Successfully!",
                todo
            });
        } else {
            res.send({
                status: 300,
                message: "Failed to create Todo, Please try again"
            });
        }

    } catch (error) {
        res.send({
            status: 400,
            message: "Somehting went wrong on our side."
        });
    }
}

// Update Todo 
async function updateTodo(req, res) {
    try {
        let { title, _id } = req.body;
        let todo = await Model.Todo.findOneAndUpdate({ _id: _id }, { $set: { title: title } }, { new: true });

        if (todo && todo._id) {
            res.send({
                status: 200,
                message: "Todo Updated Successfully!",
                todo
            });
        } else {
            res.send({
                status: 300,
                message: "Failed to Update Todo, Please try again"
            });
        }

    } catch (error) {
        res.send({
            status: 400,
            message: "Somehting went wrong on our side."
        });
    }
}

// Update Todo Status
async function updateTodoStatus(req, res) {
    try {
        let { status, _id } = req.body;
        let todo = await Model.Todo.findOneAndUpdate({ _id: _id }, { $set: { status: status } }, { new: true });

        if (todo && todo._id) {
            res.send({
                status: 200,
                message:  todo?.status == 'pending' ? "Todo status marked as Pending" : "Todo status marked as Completed",
                todo
            });
        } else {
            res.send({
                status: 300,
                message: "Todo Status Update failed"
            });
        }

    } catch (error) {
        res.send({
            status: 400,
            message: "Somehting went wrong on our side."
        });
    }
}

async function deleteTodo(req, res) {
    try {

        let { _id } = req.body;
        let todo = await Model.Todo.deleteOne({ _id: _id });
        if (todo.deletedCount > 0) {
            res.send({
                status: 200,
                message: "Todo Deleted Successfully",
            })
        } else {
            res.send({
                status: 300,
                message: "Todo Not Found"
            });
        }
    } catch (error) {
        console.log(error);
        res.send({
            status: 400,
            message: "An Unknown Error Occured!",
            error
        })
    }
}


module.exports = {
    getTodos,
    createTodo,
    updateTodo,
    updateTodoStatus,
    deleteTodo
}