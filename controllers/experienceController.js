const Experience = require('../models/Experience');

// Obtém todas as experiências de um usuário
exports.getUserExperiences = async (req, res) => {
    try {
        const userId = req.params.userId;
        const experiences = await Experience.findAll({
            where: { user_id: userId },
        });
        res.json(experiences);
    } catch (error) {
        console.error('Erro ao obter as experiências:', error);
        res.status(500).json({ error: 'Erro ao obter as experiências' });
    }
};

// Adiciona uma nova experiência para um usuário
exports.addUserExperience = async (req, res) => {
    try {
        const userId = req.params.userId;
        const {
            company_name,
            position,
            start_date,
            end_date,
            responsibilities,
            achievements,
        } = req.body;
        const experience = await Experience.create({
            user_id: userId,
            company_name,
            position,
            start_date,
            end_date,
            responsibilities,
            achievements,
        });
        res.json(experience);
    } catch (error) {
        console.error('Erro ao adicionar a experiência:', error);
        res.status(500).json({ error: 'Erro ao adicionar a experiência' });
    }
};

// Atualiza uma experiência de um usuário
exports.updateUserExperience = async (req, res) => {
    try {
        const experienceId = req.params.experienceId;
        const {
            company_name,
            position,
            start_date,
            end_date,
            responsibilities,
            achievements,
        } = req.body;
        const experience = await Experience.findByPk(experienceId);
        if (!experience) {
            return res.status(404).json({ error: 'Experiência não encontrada' });
        }
        experience.company_name = company_name;
        experience.position = position;
        experience.start_date = start_date;
        experience.end_date = end_date;
        experience.responsibilities = responsibilities;
        experience.achievements = achievements;
        await experience.save();
        res.json(experience);
    } catch (error) {
        console.error('Erro ao atualizar a experiência:', error);
        res.status(500).json({ error: 'Erro ao atualizar a experiência' });
    }
};

// Remove uma experiência de um usuário
exports.deleteUserExperience = async (req, res) => {
    try {
        const experienceId = req.params.experienceId;
        const experience = await Experience.findByPk(experienceId);
        if (!experience) {
            return res.status(404).json({ error: 'Experiência não encontrada' });
        }
        await experience.destroy();
        res.sendStatus(204);
    } catch (error) {
        console.error('Erro ao remover a experiência:', error);
        res.status(500).json({ error: 'Erro ao remover a experiência' });
    }
};
