const express = require("express");
const Model = require("../db/models/todo-model");

async function getTodos(req, res) {
    try {
        // let todos = await Model.Todo.find({});
        // if(Object.keys(todos).length > 0){
        //     res.send({
        //         status: 200, 
        //         todos
        //     });
        // } else {
        //     res.send({
        //         status: 300, 
        //         message: "No Todo Found", 
        //     });
        // }
        res.send({
            status: 200, 
            todos: [
                {
                    id: 1,
                    title: "Todo 1", 
                    status: "pending", 
                    created_at: Date.now(),
                    updated_at: Date.now()
                },
                {
                    id: 2,
                    title: "Todo 2", 
                    status: "pending", 
                    created_at: Date.now(),
                    updated_at: Date.now()
                },
                {
                    id: 3,
                    title: "Todo 2", 
                    status: "pending", 
                    created_at: Date.now(),
                    updated_at: Date.now()
                },
            ]
        })
    } catch (error) {
        res.send({
            status: 400, 
            message: "An Unknown error occured", 
            error
        });
    }
}



module.exports = {
    getTodos
}