const Skill = require('../models/Skill');

// Obtém todas as habilidades de um usuário
exports.getUserSkills = async (req, res) => {
    try {
        const userId = req.params.userId;
        const skills = await Skill.findAll({
            where: { user_id: userId },
        });
        res.json(skills);
    } catch (error) {
        console.error('Erro ao obter as habilidades:', error);
        res.status(500).json({ error: 'Erro ao obter as habilidades' });
    }
};

// Adiciona uma nova habilidade para um usuário
exports.addUserSkill = async (req, res) => {
    try {
        const userId = req.params.userId;
        const { skill_name, proficiency_level } = req.body;
        const skill = await Skill.create({
            user_id: userId,
            skill_name,
            proficiency_level,
        });
        res.json(skill);
    } catch (error) {
        console.error('Erro ao adicionar a habilidade:', error);
        res.status(500).json({ error: 'Erro ao adicionar a habilidade' });
    }
};

// Atualiza uma habilidade de um usuário
exports.updateUserSkill = async (req, res) => {
    try {
        const skillId = req.params.skillId;
        const { skill_name, proficiency_level } = req.body;
        const skill = await Skill.findByPk(skillId);
        if (!skill) {
            return res.status(404).json({ error: 'Habilidade não encontrada' });
        }
        skill.skill_name = skill_name;
        skill.proficiency_level = proficiency_level;
        await skill.save();
        res.json(skill);
    } catch (error) {
        console.error('Erro ao atualizar a habilidade:', error);
        res.status(500).json({ error: 'Erro ao atualizar a habilidade' });
    }
};

// Remove uma habilidade de um usuário
exports.deleteUserSkill = async (req, res) => {
    try {
        const skillId = req.params.skillId;
        const skill = await Skill.findByPk(skillId);
        if (!skill) {
            return res.status(404).json({ error: 'Habilidade não encontrada' });
        }
        await skill.destroy();
        res.sendStatus(204);
    } catch (error) {
        console.error('Erro ao remover a habilidade:', error);
        res.status(500).json({ error: 'Erro ao remover a habilidade' });
    }
};
