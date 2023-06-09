const Sequelize = require('sequelize');
const sequelize = require('../config/sequelize');
const User = require('./user');

const Education = sequelize.define('Education', {
    education_id: {
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
    institution: {
        type: Sequelize.TEXT,
        allowNull: false,
    },
    course: {
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
    degree: {
        type: Sequelize.TEXT,
        allowNull: true,
    },
    projects: {
        type: Sequelize.TEXT,
        allowNull: true,
    },
});

module.exports = Education;
