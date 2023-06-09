const Sequelize = require('sequelize');
const sequelize = require('../config/sequelize');
const User = require('./user');

const Skill = sequelize.define('Skill', {
    skill_id: {
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
    skill_name: {
        type: Sequelize.TEXT,
        allowNull: false,
    },
    proficiency_level: {
        type: Sequelize.TEXT,
        allowNull: false,
    },
});

module.exports = Skill;
