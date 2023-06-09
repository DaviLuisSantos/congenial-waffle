const Education = require('../models/education');

// Obtém todas as formações educacionais de um usuário
exports.getUserEducations = async (req, res) => {
    try {
        const userId = req.params.userId;
        const educations = await Education.findAll({
            where: { user_id: userId },
        });
        res.json(educations);
    } catch (error) {
        console.error('Erro ao obter as formações educacionais:', error);
        res.status(500).json({ error: 'Erro ao obter as formações educacionais' });
    }
};

// Adiciona uma nova formação educacional para um usuário
exports.addUserEducation = async (req, res) => {
    try {
        const userId = req.params.userId;
        const { institution, course, start_date, end_date, degree, projects } = req.body;
        const education = await Education.create({
            user_id: userId,
            institution,
            course,
            start_date,
            end_date,
            degree,
            projects,
        });
        res.json(education);
    } catch (error) {
        console.error('Erro ao adicionar a formação educacional:', error);
        res.status(500).json({ error: 'Erro ao adicionar a formação educacional' });
    }
};

// Atualiza uma formação educacional de um usuário
exports.updateUserEducation = async (req, res) => {
    try {
        const educationId = req.params.educationId;
        const { institution, course, start_date, end_date, degree, projects } = req.body;
        const education = await Education.findByPk(educationId);
        if (!education) {
            return res.status(404).json({ error: 'Formação educacional não encontrada' });
        }
        education.institution = institution;
        education.course = course;
        education.start_date = start_date;
        education.end_date = end_date;
        education.degree = degree;
        education.projects = projects;
        await education.save();
        res.json(education);
    } catch (error) {
        console.error('Erro ao atualizar a formação educacional:', error);
        res.status(500).json({ error: 'Erro ao atualizar a formação educacional' });
    }
};

// Remove uma formação educacional de um usuário
exports.deleteUserEducation = async (req, res) => {
    try {
        const educationId = req.params.educationId;
        const education = await Education.findByPk(educationId);
        if (!education) {
            return res.status(404).json({ error: 'Formação educacional não encontrada' });
        }
        await education.destroy();
        res.sendStatus(204);
    } catch (error) {
        console.error('Erro ao remover a formação educacional:', error);
        res.status(500).json({ error: 'Erro ao remover a formação educacional' });
    }
};
