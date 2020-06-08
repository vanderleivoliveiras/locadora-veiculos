const mongoose = require('mongoose');

const VeiculoSchema = new mongoose.Schema({
    placa: String,
    chassi: String,
    modelo:String,
    renavam: String,
    marca: String,
    ano: String
});

const Veiculo = mongoose.model('Veiculo', VeiculoSchema,'veiculos');

module.exports = Veiculo;