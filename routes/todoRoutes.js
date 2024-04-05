const express = require('express')
const router = express.Router()
const {createTodo, getAllTodo, getTodoById, updateTodo, deleteTodo} = require('../controllers/todoController')

router.post('/create', createTodo);
router.get('/', getAllTodo);
router.get('/:id', getTodoById);
router.put('/update/:id', updateTodo);
router.delete('/delete/:id', deleteTodo);

module.exports = router;