const Sequelize = require('sequelize');
const sequelize = require('../config/sequelize');
const User = require('./user');

const Language = sequelize.define('Language', {
    language_id: {
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
    language_name: {
        type: Sequelize.TEXT,
        allowNull: false,
    },
    proficiency_level: {
        type: Sequelize.TEXT,
        allowNull: false,
    },
});

module.exports = Language;
