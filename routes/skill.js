const express = require('express');
const router = express.Router();
const skillController = require('../controllers/skillController');

// Rota para obter todas as habilidades de um usuário específico
router.get('/:userId/skills', skillController.getUserSkills);

// Rota para adicionar uma nova habilidade para um usuário específico
router.post('/:userId/skills', skillController.addUserSkill);

// Rota para atualizar uma habilidade de um usuário específico
router.put('/:userId/skills/:skillId', skillController.updateUserSkill);

// Rota para excluir uma habilidade de um usuário específico
router.delete('/:userId/skills/:skillId', skillController.deleteUserSkill);

module.exports = router;
