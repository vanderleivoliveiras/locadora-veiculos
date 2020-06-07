const mongoose = require('mongoose');

const VeiculoSchema = new mongoose.Schema({
    placa: String,
    modelo:String
});

const Veiculo = mongoose.model('Veiculo', VeiculoSchema,'veiculos');
module.exports = Veiculo;