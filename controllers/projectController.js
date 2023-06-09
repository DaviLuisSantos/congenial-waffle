const Project = require('../models/Project');

// Obtém todos os projetos de um usuário
exports.getUserProjects = async (req, res) => {
    try {
        const userId = req.params.userId;
        const projects = await Project.findAll({
            where: { user_id: userId },
        });
        res.json(projects);
    } catch (error) {
        console.error('Erro ao obter os projetos:', error);
        res.status(500).json({ error: 'Erro ao obter os projetos' });
    }
};

// Adiciona um novo projeto para um usuário
exports.addUserProject = async (req, res) => {
    try {
        const userId = req.params.userId;
        const { project_name, description, contribution, results } = req.body;
        const project = await Project.create({
            user_id: userId,
            project_name,
            description,
            contribution,
            results,
        });
        res.json(project);
    } catch (error) {
        console.error('Erro ao adicionar o projeto:', error);
        res.status(500).json({ error: 'Erro ao adicionar o projeto' });
    }
};

// Atualiza um projeto de um usuário
exports.updateUserProject = async (req, res) => {
    try {
        const projectId = req.params.projectId;
        const { project_name, description, contribution, results } = req.body;
        const project = await Project.findByPk(projectId);
        if (!project) {
            return res.status(404).json({ error: 'Projeto não encontrado' });
        }
        project.project_name = project_name;
        project.description = description;
        project.contribution = contribution;
        project.results = results;
        await project.save();
        res.json(project);
    } catch (error) {
        console.error('Erro ao atualizar o projeto:', error);
        res.status(500).json({ error: 'Erro ao atualizar o projeto' });
    }
};

// Remove um projeto de um usuário
exports.deleteUserProject = async (req, res) => {
    try {
        const projectId = req.params.projectId;
        const project = await Project.findByPk(projectId);
        if (!project) {
            return res.status(404).json({ error: 'Projeto não encontrado' });
        }
        await project.destroy();
        res.sendStatus(204);
    } catch (error) {
        console.error('Erro ao remover o projeto:', error);
        res.status(500).json({ error: 'Erro ao remover o projeto' });
    }
};
