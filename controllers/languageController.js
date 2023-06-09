const Language = require('../models/Language');

// Obtém todas as linguagens de um usuário
exports.getUserLanguages = async (req, res) => {
    try {
        const userId = req.params.userId;
        const languages = await Language.findAll({
            where: { user_id: userId },
        });
        res.json(languages);
    } catch (error) {
        console.error('Erro ao obter as linguagens:', error);
        res.status(500).json({ error: 'Erro ao obter as linguagens' });
    }
};

// Adiciona uma nova linguagem para um usuário
exports.addUserLanguage = async (req, res) => {
    try {
        const userId = req.params.userId;
        const { language_name, proficiency_level } = req.body;
        const language = await Language.create({
            user_id: userId,
            language_name,
            proficiency_level,
        });
        res.json(language);
    } catch (error) {
        console.error('Erro ao adicionar a linguagem:', error);
        res.status(500).json({ error: 'Erro ao adicionar a linguagem' });
    }
};

// Atualiza uma linguagem de um usuário
exports.updateUserLanguage = async (req, res) => {
    try {
        const languageId = req.params.languageId;
        const { language_name, proficiency_level } = req.body;
        const language = await Language.findByPk(languageId);
        if (!language) {
            return res.status(404).json({ error: 'Linguagem não encontrada' });
        }
        language.language_name = language_name;
        language.proficiency_level = proficiency_level;
        await language.save();
        res.json(language);
    } catch (error) {
        console.error('Erro ao atualizar a linguagem:', error);
        res.status(500).json({ error: 'Erro ao atualizar a linguagem' });
    }
};

// Remove uma linguagem de um usuário
exports.deleteUserLanguage = async (req, res) => {
    try {
        const languageId = req.params.languageId;
        const language = await Language.findByPk(languageId);
        if (!language) {
            return res.status(404).json({ error: 'Linguagem não encontrada' });
        }
        await language.destroy();
        res.sendStatus(204);
    } catch (error) {
        console.error('Erro ao remover a linguagem:', error);
        res.status(500).json({ error: 'Erro ao remover a linguagem' });
    }
};
