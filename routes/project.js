const express = require('express');
const router = express.Router();
const projectController = require('../controllers/projectController');

// Rota para obter todos os projetos de um usuário específico
router.get('/:userId/projects', projectController.getUserProjects);

// Rota para adicionar um novo projeto para um usuário específico
router.post('/:userId/projects', projectController.addUserProject);

// Rota para atualizar um projeto de um usuário específico
router.put('/:userId/projects/:projectId', projectController.updateUserProject);

// Rota para excluir um projeto de um usuário específico
router.delete('/:userId/projects/:projectId', projectController.deleteUserProject);

module.exports = router;
