const express = require('express')
const Todo = require('../models/Todo')

// Ajouter une liste de tâches
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

// Récupérer toute la liste des taches
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

// Récuperer une seule tache grâce à son id
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
};

// Mettre à jour une tache en utilisant son id
const updateTodo = async (req, res) => {
    const {id} = req.params;

    try {
        const todo = await Todo.findByIdAndUpdate(id, req.body);
        if (!todo) {
            return res.status(404).json({error : "La tâche n'existe pas"});
        }
    
        const  updatedTodo = await Todo.findById(id);
        return res.status(200).json(updatedTodo);
    } catch (error) {
        console.log(error);
    }
};

// Supprimer une tache en utilisant son id
const deleteTodo = async (req, res) => {
    const {id} = req.params;

    try {
        const todo = await Todo.findByIdAndDelete(id);
        if(!todo) {
            return res.status(404).json({ error : 'Cette tache est déja supprimé.' });
        }

        return res.status(200).json("La tache a été supprimé avec succès");

    } catch (error) {
        console.log(error);
    }
}


module.exports = {
    createTodo,
    getAllTodo,
    getTodoById,
    updateTodo,
    deleteTodo
}