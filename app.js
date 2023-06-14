const express = require('express');
const bodyParser = require('body-parser');
const app = express();
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
// Importe as rotas
const indexRoutes = require('./routes/index');
// Importe as rotas relacionadas a cada modelo
const userRoutes = require('./routes/user');
const educationRoutes = require('./routes/education');
const skillRoutes = require('./routes/skill');
const certificationRoutes = require('./routes/certification');
const experienceRoutes = require('./routes/experience');
const languageRoutes = require('./routes/language');
const projectRoutes = require('./routes/project');

// Defina as rotas
app.use('/', indexRoutes);
app.use('/users', userRoutes);
app.use('/users', educationRoutes);
app.use('/users', skillRoutes);
app.use('/users', certificationRoutes);
app.use('/users', experienceRoutes);
app.use('/users', languageRoutes);
app.use('/users', projectRoutes);

// Restante do código do seu aplicativo...

// Inicie o servidor
app.listen(3000, () => {
    console.log('Servidor iniciado na porta 3000');
});
