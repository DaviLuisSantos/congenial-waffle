const Sequelize = require('sequelize');
const sequelize = require('../config/sequelize');
const User = require('./user');

const Certification = sequelize.define('Certification', {
    certification_id: {
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
    certification_name: {
        type: Sequelize.TEXT,
        allowNull: false,
    },
    date_earned: {
        type: Sequelize.TEXT,
        allowNull: true,
    },
});

module.exports = Certification;
