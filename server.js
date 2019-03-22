const express = require('express');
const mongoose = require('mongoose');
const requireDir = require('require-dir');
const path = require('path');
//const routes = require('./src/routes');

const port = process.env.PORT || 3001;
const router = express.Router();
const bodyParser = require('body-parser');
// Iniciando App
const app = express();
app.use(express.json());


// Iniciando o DB
mongoose.connect('mongodb://localhost:27017/nodeapi');
requireDir('./src/models');    


// Rotas
app.use('/api', require('./src/routes'));
app.set('view engine', 'html');

app.use([bodyParser.json(), bodyParser.urlencoded({extended: true})]);
app.use(express.static(path.join(__dirname, './client')));
app.use((err, req, res, next) => {
  console.log(err);
  res.status(500).send('Server Error');
});

router.get('/', (req, res, next) => {
  res.sendFile(path.join(__dirname, '.', 'client', 'index.html'));
});


app.listen(port, "0.0.0.0", (err) => {
  err
    ? console.log('Cannot connect...', err)
    : console.log(`Connected! Server is listening on port ${port}`);
});
