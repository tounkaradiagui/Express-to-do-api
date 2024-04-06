### Documentation de l'API

# *** Choix technologique  ***
## MERN Stack et React Native
1. Fonctionalités de l'API (Backend)
    - Utilisation d'un framework NodeJS pour la gestion des requêtes HTTP et la génération du code source.
    - Utilisation de Express, un middleware de routing pour faciliter le développement de l'application.
    - Utilisation de MongoDB en tant que base de données NoSQL pour stocker les informations de la liste de tâches.

    # Gestion de tâche en utilisant le framework Express JS
    * [x] Création de tâche
    * [x] Liste de tâches
    * [x] Mise à jour de tâches
    * [x] Suppression de tâches
2. Interface Utilisateur (Frontend)
    - J'ai utilisé Vite et React JS pour la gestion des tâches côté frontend
    - Utilisation de axios pour les appels API vers le serveur Express.js
    - L'interface est basée sur une application monopage qui utilise les composants React pour afficher les éléments graphiques.
    
    # Gestion de tache avec Vite et React JS
    * [x] Affichage de la liste des taches
    * [x] Ajout d'une nouvelle
    * [ ] Modification d'une tache existante
    * [ ] Suppression d'une tache

3. Base de données
        Pour stocker les informations sur les tâches, j'utilise une base de données NoSQL MongoDB. Cette dernière est gérée par Mongo.
        La documentation de MongoDB peut être trouvée [ici](https://docs.mongodb.com/manual/).
        ## Installation
            bash npm install mongodb
        
        ## Configuration
            Dans le fichier server.js, il est nécessaire d'ajouter votre URI de connexion MongoDB :
        - Définir  une variable d'environnement `MONGODB_URI` contenant votre URI de connexion MongoDB dans le fichier .env

### Routes

#### POST
Ajoute une nouvelle tache au tableau de taches. Retourne le nouvel élément ajouté si réussi.
json
{
   "title":"Titre",
   "status": "" ###  Status par defaut: 'à faire'
}

#### GET /api/todo
Renvoie toutes les tâches stockées dans la base de données.
Retourne un tableau json contenant tous les éléments de la collection tâche.
[
   {
      "_id":"5f6e0794c8d1bebaafce6666",
      "title":"Titre de la tache",
      "status":"Le status de la tache"
   }
]

#### PUT /api/todo/:id
Met à jour une tache existante avec l'ID fourni en paramètre. Retourne la tache mise à jour.
Format json:
{
  "title":"Nouveau Titre",
  "status":"Nouvelle tache"
}

#### DELETE /api/todo/:id
Supprime une tache existante avec l'ID fourni en paramètre. Retourne la tache supprimée.


### Cloner ce repo et lancer le projet
    bash git clone https://github.com/tounkaradiagui/Express-to-do-api
    cd Express-to-do-api
    npm install
    npm run dev

4. Vue Mobile
    - Gestion complète de taches avec React Native (Expo) pour mobile
    - Utilisation d'expo pour faciliter la création de l'application mobile
    - Installation des dépendances nécessaires : expo, axios...
    - Création du composant TodoItem qui affichera chaque tache
    - Ajout d'un bouton plus (+) pour ajouter une nouvelle tache
    - Affichage de la liste des tâches
    - Possibilité de modifier ou supprimer une tache
    - Mise à jour de la tache sélectionnée lorsqu'il est modifié
    - Enregistrement de la tache lorsque vous avez terminé de modifier ou créer une tache

5. Défis rencontré pendant le développement:
    * Lors du développement de ctte application  j’ai eu beaucoup de difficultés à savoir :astronaut:
    + Comment faire pour terminer le projet dans le temps donné qui 24h avec le problème de délestage actuel au Mali ?
    + Comment faire pour que les données soient stockées dans un serveur ?
    + Comment communiquer entre mon API NodeJS et ma partie mobile / React JS ?
    + Comment afficher correctement mes données dans un composant React Native ?
    
    Pour résoudre ces défis je me suis appuyé sur plusieurs ressources comme :
    