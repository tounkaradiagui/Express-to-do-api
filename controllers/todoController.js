const express = require('express')
const Todo = require('../models/Todo')

const createTodo = async (req, res) => {
    try {
        const {title, status} = req.body;

        if(!title || title === "") {
            return res.status(400).json( { error: 'Le titre est obligatoire.' });
        }

        const newTodo = await Todo.create({ title:title, status:status });

        return res.status(200).json({newTodo});

    } catch (error) {
        return  res.status(500).json( { error : "Une erreur est survenue lors de l'ajout d'une tache." });
    }
};

const getAllTodo = async (req, res) => {
    try {
        const todo = await Todo.find({});
        if(!todo) {
            return res.status(404).json({ error : "Aucune tâche trouvée" });
        }
        return res.status(200).json({todo })
    } catch (error) {
        console.log(error);
    }
};

const getTodoById = async (req, res) => {
    const id = req.params.id;
    try {
        const todo = await Todo.findOne({_id:id});
        if (!todo) {
            return res.status(404).json({error: "Aucune tâche n'est associée à cette ID"});
        }
        return res.status(200).json(todo);
    } catch (error) {
        console.log(error);
    }
}


module.exports = {
    createTodo,
    getAllTodo,
    getTodoById
}