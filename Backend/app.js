const express = require('express');
const app = express();
const mongoose = require('./database/mongoose');

const Veiculo = require('./database/models/veiculo');
app.use(express.json());

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods", "GET, POST,  HEAD, OPTIONS, PUT, PATCH, DELETE");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
  });

app.post('/veiculo', (req, res) => {
    var veiculo = new Veiculo();
    veiculo.placa = req.body.placa;
    veiculo.chassi = req.body.chassi;
    veiculo.modelo = req.body.modelo;
    veiculo.renavam = req.body.renavam;
    veiculo.marca = req.body.marca;
    veiculo.ano = req.body.ano;

    veiculo.save()    
    .then(() => res.send(veiculo))
    .catch((error) => console.log(error));

});

app.get('/veiculo', (req, res) => {
    Veiculo.find({})
        .then(veiculo => res.send(veiculo))
        .catch((error) => console.log(error));
});

app.get('/veiculo/:id', (req, res) => {
    Veiculo.find({ _id: req.params.id})
        .then(veiculo => res.send(veiculo))
        .catch((error) => console.log(error));
});

app.patch('/veiculo/:id', (req, res) => {
    Veiculo.findOneAndUpdate({'_id': req.params.id}, { $set: req.body })
        .then(veiculo => res.send(veiculo))
        .catch((error) => console.log(error));
});

app.delete('/veiculo/:id', (req, res) => {
    Veiculo.findByIdAndDelete(req.params.id)
        .then(veiculo => res.send(veiculo))
        .catch((error) => console.log(error));
});

app.listen(3000, () => console.log("Server connected on 3000"));

module.exports.app = app;