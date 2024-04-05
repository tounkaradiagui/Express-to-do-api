const express = require('express')
const router = express.Router()
const {createTodo, getAllTodo, getTodoById} = require('../controllers/todoController')

router.post('/todo/create', createTodo);
router.get('/todo', getAllTodo);
router.get('/todo/:id', getTodoById);

module.exports = router;