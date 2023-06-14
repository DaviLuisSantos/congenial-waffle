const Sequelize = require('sequelize');
const sequelize = require('../config/sequelize');
const bcrypt = require('bcrypt');

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
        unique: true,
    },
    password: {
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
    isActive: {
        type: Sequelize.BOOLEAN,
        allowNull: false,
        defaultValue: true,
    },
    createdAt: {
        type: Sequelize.DATE,
        allowNull: false,
        defaultValue: Sequelize.NOW,
    },
    updatedAt: {
        type: Sequelize.DATE,
        allowNull: false,
        defaultValue: Sequelize.NOW,
    },
});

// Hash the password before saving the user
User.beforeCreate(async (user) => {
    const hashedPassword = await bcrypt.hash(user.password, 10);
    user.password = hashedPassword;
});

module.exports = User;
