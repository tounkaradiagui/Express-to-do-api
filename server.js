const dotenv = require('dotenv').config()
const express = require('express')
const mongoose = require('mongoose')
const app = express()
const cors =  require("cors")
const todoRoutes = require('./routes/todoRoutes.js')

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

// Utilisation des routes définies dans le fichier "todoRoutes"
app.use('/api/todo', todoRoutes);

// Connexion à la base de données
mongoose.connect(mongo_url).then(() => {
    console.log("Connexion réussie à MongoDB");
    app.listen(PORT, () => {
        console.log(`Le serveur s'exécute sur http://192.168.216.140/${PORT}`);
    });

}).catch((error) => {
    console.log(error);
});
