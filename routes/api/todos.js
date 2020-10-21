const express = require('express')
const router = express.Router()
const auth = require('../../middleware/auth')

// Budget Model
const Todo = require('../../models/Todo')

// @route   GET api/todos
// @desc    Get All Todos
// @access  Private
router.get('/', auth, (req, res) => {
    Todo.find()
      .sort({ date: -1 })
      .then((todos) => res.json(todos));
})

// @route   POST api/todos
// @desc    Create an Todo
// @access  Private
router.post('/', auth, (req, res) => {
    const newTodo = new Todo({
        name: req.body.name
    })

    newTodo.save()
        .then(todo => res.json(todo))
})

// @route   DELETE api/todos/:id
// @desc    Delete An Todo
// @access  Private
router.delete('/:id', auth, (req, res) => {
    Todo.findById(req.params.id)
        .then(todo => todo.remove()
            .then(() => res.json({ success: true }))
        )
        .catch(err => res.status(404).json({ success: false }))
})

module.exports = router