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


module.exports = router;