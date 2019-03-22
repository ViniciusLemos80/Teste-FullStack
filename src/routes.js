const express = require('express');
const routes = express.Router();

const PessoasController = require('./controllers/PessoasController');

routes.get("/pessoas", PessoasController.index);
routes.get("/pessoa/:id", PessoasController.buscar);
routes.post('/pessoa', PessoasController.cadastrar);
routes.put('/pessoa/:id', PessoasController.update);
routes.delete('/pessoa/:id', PessoasController.delete);
module.exports = routes;    