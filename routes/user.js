const express = require('express');
const userController = require('../controllers/userController');

const router = express.Router();

// Rota para criar um novo usuário
router.post('/', userController.createUser);

// Rota para obter todos os usuários
router.get('/', userController.getAllUsers);

// Rota para obter um usuário específico por ID
router.get('/:userId', userController.getUserById);

// Rota para atualizar as informações de um usuário
router.put('/:userId', userController.updateUser);

// Rota para excluir um usuário
router.delete('/:userId', userController.deleteUser);

// Rota para registrar um novo usuário
router.post('/register', userController.registerUser);

// Rota para autenticar um usuário
router.post('/login', userController.authenticateUser);

module.exports = router;
