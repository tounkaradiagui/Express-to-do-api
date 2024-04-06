const express = require('express')
const router = express.Router()
const cors = require('cors')
const {createTodo, getAllTodo, getTodoById, updateTodo, deleteTodo} = require('../controllers/todoController')

// Définir le middleware pour les cross-origin requests (CORS)
router.use(cors({
    credentials:true,
    origin:"http://localhost:5173"
}));

// Liste des routes de l'API
router.post('/create', createTodo);
router.get('/', getAllTodo);
router.get('/:id', getTodoById);
router.put('/update/:id', updateTodo);
router.delete('/delete/:id', deleteTodo);

module.exports = router;