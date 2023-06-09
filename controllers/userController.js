const User = require('../models/user');
const Experience = require('../models/Experience');
const Education = require('../models/education');
const Skill = require('../models/Skill');
const Certification = require('../models/Certification');
const Language = require('../models/Language');
const Project = require('../models/Project');

// Controlador para criar um novo usuário
async function createUser(req, res) {
    try {
        const { full_name, email, phone, address } = req.body;
        const newUser = await User.create({
            full_name,
            email,
            phone,
            address,
        });
        res.status(201).json(newUser);
    } catch (error) {
        res.status(500).json({ error: 'Erro ao criar o usuário' });
    }
}

// Controlador para obter todos os usuários
async function getAllUsers(req, res) {
    try {
        const users = await User.findAll();
        res.json(users);
    } catch (error) {
        res.status(500).json({ error: 'Erro ao buscar os usuários' });
    }
}

// Controlador para obter um usuário específico por ID
async function getUserById(req, res) {
    const { userId } = req.params;
    try {
        const user = await User.findByPk(userId);
        if (user) {
            res.json(user);
        } else {
            res.status(404).json({ error: 'Usuário não encontrado' });
        }
    } catch (error) {
        res.status(500).json({ error: 'Erro ao buscar o usuário' });
    }
}

// Controlador para atualizar as informações de um usuário
async function updateUser(req, res) {
    const { userId } = req.params;
    const { full_name, email, phone, address } = req.body;
    try {
        const user = await User.findByPk(userId);
        if (user) {
            user.full_name = full_name;
            user.email = email;
            user.phone = phone;
            user.address = address;
            await user.save();
            res.json(user);
        } else {
            res.status(404).json({ error: 'Usuário não encontrado' });
        }
    } catch (error) {
        res.status(500).json({ error: 'Erro ao atualizar o usuário' });
    }
}

// Controlador para excluir um usuário
async function deleteUser(req, res) {
    const { userId } = req.params;
    try {
        // Exclua os registros relacionados na tabela Experience
        await Experience.destroy({ where: { user_id: userId } });

        // Exclua os registros relacionados na tabela Education
        await Education.destroy({ where: { user_id: userId } });

        // Exclua os registros relacionados na tabela Skill
        await Skill.destroy({ where: { user_id: userId } });

        // Exclua os registros relacionados na tabela Certification
        await Certification.destroy({ where: { user_id: userId } });

        // Exclua os registros relacionados na tabela Projects
        await Project.destroy({ where: { user_id: userId } });

        // Exclua os registros relacionados na tabela Language
        await Language.destroy({ where: { user_id: userId } });

        // Exclua o usuário
        const deletedUser = await User.destroy({ where: { user_id: userId } });

        if (deletedUser) {
            res.json({ message: 'Usuário excluído com sucesso' });
        } else {
            res.status(404).json({ error: 'Usuário não encontrado' });
        }
    } catch (error) {
        console.error('Erro ao excluir o usuário:', error);
        res.status(500).json({ error: 'Erro ao excluir o usuário' });
    }
}

module.exports = {
    createUser,
    getAllUsers,
    getUserById,
    updateUser,
    deleteUser,
};

