const mongoose = require("mongoose");

const todoSchema = new mongoose.Schema({
  description: String,
  responsible: String,
  priority: String,
  isCompleted: Boolean
});

const Todo = mongoose.model("Todo", todoSchema);

module.exports = Todo;
