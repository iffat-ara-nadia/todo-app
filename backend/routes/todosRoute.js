const Todo = require("../models/todoModel");
const express = require("express");
const router = express.Router();

router.get("/", async (req, res) => {
  const todos = await Todo.find().sort({ name: 1 });
  res.send(todos);
});

router.get("/:id", async (req, res) => {
  const todo = await Todo.findById(req.params.id); // I forgot to write req.params.id
  if (!todo)
    return res.status(404).send("The todo with the given ID was not found...");
  res.send(todo);
});

router.post("/", async (req, res) => {
  let todo = new Todo({
    description: req.body.description,
    responsible: req.body.responsible,
    priority: req.body.priority,
    isCompleted: req.body.isCompleted
  });

  todo = await todo.save();
  res.send(todo);
});

router.put("/:id", async (req, res) => {
  const todo = await Todo.findByIdAndUpdate(
    req.params.id,
    {
      description: req.body.description,
      responsible: req.body.responsible,
      priority: req.body.priority,
      isCompleted: req.body.isCompleted
    },
    { new: true }
  );

  if (!todo)
    return res.status(404).send("The todo with the given ID wasn't found....");
  res.send(todo);
  await todo.save();
  res.send(todo);
});

router.delete("/:id", async (req, res) => {
  const todo = await Todo.findByIdAndRemove(req.params.id);
  if (!todo)
    return res.status(404).send("The todo with the given ID wasn't found....");
  res.send(todo);
});

module.exports = router;
