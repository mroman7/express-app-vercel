const express = require("express");
const router = express.Router();

const todoController = require("../controller/todo-controller");

// *********************************************
//        API Pre-defined Routes
// *********************************************
router.get("/", (req, res) => {
  // res.send("Greeting");
  res.send({
      title: "greeting"
  });
});


router.get("/todos", todoController.getTodos);
router.post("/todos/create", todoController.createTodo);
router.post("/todos/update", todoController.updateTodo);
router.post("/todos/update-status", todoController.updateTodoStatus);
router.delete("/todos/delete", todoController.deleteTodo);

module.exports = router;