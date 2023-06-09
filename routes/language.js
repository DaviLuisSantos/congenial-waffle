const express = require('express');
const router = express.Router();
const languageController = require('../controllers/languageController');

// Rota para obter todas as línguas de um usuário específico
router.get('/:userId/languages', languageController.getUserLanguages);

// Rota para adicionar uma nova língua para um usuário específico
router.post('/:userId/languages', languageController.addUserLanguage);

// Rota para atualizar uma língua de um usuário específico
router.put('/:userId/languages/:languageId', languageController.updateUserLanguage);

// Rota para excluir uma língua de um usuário específico
router.delete('/:userId/languages/:languageId', languageController.deleteUserLanguage);

module.exports = router;
