var express = require('express');
var router = express.Router();

var companies = require('../controllers/Companies'); // Nous allons récuperer notre controlleur fait précédement

/* GET Récupère la liste des utilisateurs */
router.get('/', companies.index);

/* POST Création d'un nouvel utilisateur */
router.post('/', companies.create);

/* PUT Modification d'un utilisateur */
router.put('/:id(\\d+)', companies.update);

/* DELETE Suppression d'un utilisateur */
router.delete('/:id(\\d+)', companies.delete);

module.exports = router;
