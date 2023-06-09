const express = require('express');
const router = express.Router();
const certificationController = require('../controllers/certificationControlller');

// Rota para obter todas as certificações de um usuário específico
router.get('/:userId/certifications', certificationController.getUserCertifications);

// Rota para adicionar uma nova certificação para um usuário específico
router.post('/:userId/certifications', certificationController.addUserCertification);

// Rota para atualizar uma certificação de um usuário específico
router.put('/:userId/certifications/:certificationId', certificationController.updateUserCertification);

// Rota para excluir uma certificação de um usuário específico
router.delete('/:userId/certifications/:certificationId', certificationController.deleteUserCertification);

module.exports = router;
