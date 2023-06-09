const Sequelize = require('sequelize');
const sequelize = require('../config/sequelize');

const User = sequelize.define('User', {
    user_id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    full_name: {
        type: Sequelize.TEXT,
        allowNull: false,
    },
    email: {
        type: Sequelize.TEXT,
        allowNull: false,
    },
    phone: {
        type: Sequelize.TEXT,
        allowNull: true,
    },
    address: {
        type: Sequelize.TEXT,
        allowNull: true,
    },
});

module.exports = User;
