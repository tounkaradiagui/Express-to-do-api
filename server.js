const dotenv = require('dotenv').config()
const express = require('express')
const mongoose = require('mongoose')
const app = express()
const todoRoutes = require('./routes/todoRoutes')

// Middleware pour parser les données envoyées dans le corps de la requête.
app.use(express.json());

// Port sur lequel le serveur est écouté
const PORT = process.env.PORT || 8000

//  Connexion à MongoDB
const mongo_url = process.env.MONGO_URL

// Définition d'une route de base faculttatif qui renvoie un message pour tester le serveur
app.get('/', (req, res) => {
    res.send("Bienvenue sur le serveur TODO API ! Le backend est prêt pour la connexion")
});

// ******************************** CRUD - Gestion de TODO: CREATE, READ, UPDATE et DELETE ***********************************

// Routes 
app.use('/api/todo/', todoRoutes);

// Connexion à la base de données
mongoose.connect(mongo_url).then(() => {

    console.log("Connexion réussie à MongoDB");
    
    app.listen(PORT, () => {
        console.log(`Le serveur s'exécute sur le port ${PORT}`);
    });

}).catch((error) => {
    console.log(error);
});