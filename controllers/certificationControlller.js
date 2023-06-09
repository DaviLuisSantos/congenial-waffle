const Certification = require('../models/Certification');

// Obtém todas as certificações de um usuário
exports.getUserCertifications = async (req, res) => {
  try {
    const userId = req.params.userId;
    const certifications = await Certification.findAll({
      where: { user_id: userId },
    });
    res.json(certifications);
  } catch (error) {
    console.error('Erro ao obter as certificações:', error);
    res.status(500).json({ error: 'Erro ao obter as certificações' });
  }
};

// Adiciona uma nova certificação para um usuário
exports.addUserCertification = async (req, res) => {
  try {
    const userId = req.params.userId;
    const { certification_name, date_earned } = req.body;
    const certification = await Certification.create({
      user_id: userId,
      certification_name,
      date_earned,
    });
    res.json(certification);
  } catch (error) {
    console.error('Erro ao adicionar a certificação:', error);
    res.status(500).json({ error: 'Erro ao adicionar a certificação' });
  }
};

// Atualiza uma certificação de um usuário
exports.updateUserCertification = async (req, res) => {
  try {
    const certificationId = req.params.certificationId;
    const { certification_name, date_earned } = req.body;
    const certification = await Certification.findByPk(certificationId);
    if (!certification) {
      return res.status(404).json({ error: 'Certificação não encontrada' });
    }
    certification.certification_name = certification_name;
    certification.date_earned = date_earned;
    await certification.save();
    res.json(certification);
  } catch (error) {
    console.error('Erro ao atualizar a certificação:', error);
    res.status(500).json({ error: 'Erro ao atualizar a certificação' });
  }
};

// Remove uma certificação de um usuário
exports.deleteUserCertification = async (req, res) => {
  try {
    const certificationId = req.params.certificationId;
    const certification = await Certification.findByPk(certificationId);
    if (!certification) {
      return res.status(404).json({ error: 'Certificação não encontrada' });
    }
    await certification.destroy();
    res.sendStatus(204);
  } catch (error) {
    console.error('Erro ao remover a certificação:', error);
    res.status(500).json({ error: 'Erro ao remover a certificação' });
  }
};
