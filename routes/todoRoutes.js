const express = require('express');
const Todo = require('../models/Todo');
const router = express.Router();

// Get all todos
router.get('/', async (req, res) => {
  const todos = await Todo.find();
  res.json(todos);
});

// Create a todo
router.post('/', async (req, res) => {
  const newTodo = new Todo({ text: req.body.text });
  await newTodo.save();
  res.json(newTodo);
});

// Delete a todo
router.delete('/:id', async (req, res) => {
  await Todo.findByIdAndDelete(req.params.id);
  res.json({ message: 'Todo deleted' });
});

module.exports = router;
