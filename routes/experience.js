const express = require('express');
const router = express.Router();
const experienceController = require('../controllers/experienceController');

// Rota para obter todas as experiências de um usuário específico
router.get('/:userId/experiences', experienceController.getUserExperiences);

// Rota para adicionar uma nova experiência para um usuário específico
router.post('/:userId/experiences', experienceController.addUserExperience);

// Rota para atualizar uma experiência de um usuário específico
router.put('/:userId/experiences/:experienceId', experienceController.updateUserExperience);

// Rota para excluir uma experiência de um usuário específico
router.delete('/:userId/experiences/:experienceId', experienceController.deleteUserExperience);

module.exports = router;
