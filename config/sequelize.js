const Sequelize = require('sequelize');

const sequelize = new Sequelize({
    dialect: 'sqlite',
    storage: 'bancodedados.db', // Nome do arquivo do banco de dados SQLite
});
// Defina os modelos e as associações aqui

// Sincronize os modelos com o banco de dados
sequelize.sync().then(() => {
    console.log('Banco de dados sincronizado.');
}).catch((error) => {
    console.error('Erro ao sincronizar o banco de dados:', error);
});

module.exports = sequelize;
