const Sequelize = require('sequelize');
const sequelize = require('../config/sequelize');
const User = require('./user');

const Project = sequelize.define('Project', {
    project_id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    user_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
            model: User,
            key: 'user_id',
        },
    },
    project_name: {
        type: Sequelize.TEXT,
        allowNull: false,
    },
    description: {
        type: Sequelize.TEXT,
        allowNull: true,
    },
    contribution: {
        type: Sequelize.TEXT,
        allowNull: true,
    },
    results: {
        type: Sequelize.TEXT,
        allowNull: true,
    },
});

module.exports = Project;
