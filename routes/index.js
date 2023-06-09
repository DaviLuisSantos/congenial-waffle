const express = require('express');
const app = express();
const router = express.Router();

app.use(express.static('public'));

// Rota inicial
router.get('/', (req, res) => {
    res.sendFile('C:/Users/davil/OneDrive/Documentos/projetos/Sistema-de-curriculo/views/index.html');
});

module.exports = router;
