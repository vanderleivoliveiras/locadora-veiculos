const request = require('supertest');
const app = require('../app').app;
const Veiculo = require('../database/models/veiculo');
var assert = require('assert');

it('Teste de chamada get/veiculo sem erro', (done) => {
    request(app)
    .get('/veiculo')
    .expect(200)
    .end(done);
});

// describe('Veiculo', function() {
//     describe('#save()', function() {
//       it('Deve salvar sem erro', function(done) {
//         var veiculo = new Veiculo();
//         veiculo.placa = "ABC-1234";
//         veiculo.chassi = "abc1234b333ccc1c2";
//         veiculo.modelo = "Uno";
//         veiculo.renavam = "1223bb48883";
//         veiculo.marca = "Fiat";
//         veiculo.ano = "93/94";

//         veiculo.save(done);
//       });
//     });
//   });

