const express = require('express');
const router = express.Router();
const educationController = require('../controllers/educationController');

// Rota para obter todas as educações de um usuário específico
router.get('/:userId/educations', educationController.getUserEducations);

// Rota para adicionar uma nova educação para um usuário específico
router.post('/:userId/educations', educationController.addUserEducation);

// Rota para atualizar uma educação de um usuário específico
router.put('/:userId/educations/:educationId', educationController.updateUserEducation);

// Rota para excluir uma educação de um usuário específico
router.delete('/:userId/educations/:educationId', educationController.deleteUserEducation);

module.exports = router;
