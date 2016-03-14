var express = require('express');
var router = express.Router();

var results = require('../controllers/Results'); // Nous allons récuperer notre controlleur fait précédement

/* GET Récupère la liste des utilisateurs */
router.get('/', results.index);

/* POST Création d'un nouvel utilisateur */
router.post('/', results.create);

/* PUT Modification d'un utilisateur */
router.put('/:id(\\d+)', results.update);

/* DELETE Suppression d'un utilisateur */
router.delete('/:id(\\d+)', results.delete);

module.exports = router;
