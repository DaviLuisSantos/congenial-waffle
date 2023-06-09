const Sequelize = require('sequelize');
const sequelize = require('../config/sequelize');
const User = require('./user');

const Experience = sequelize.define('Experience', {
    experience_id: {
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
    company_name: {
        type: Sequelize.TEXT,
        allowNull: false,
    },
    position: {
        type: Sequelize.TEXT,
        allowNull: false,
    },
    start_date: {
        type: Sequelize.TEXT,
        allowNull: false,
    },
    end_date: {
        type: Sequelize.TEXT,
        allowNull: true,
    },
    responsibilities: {
        type: Sequelize.TEXT,
        allowNull: true,
    },
    achievements: {
        type: Sequelize.TEXT,
        allowNull: true,
    },
});

module.exports = Experience;
