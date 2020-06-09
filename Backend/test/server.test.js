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

describe('Veiculo', function() {
    describe('#save()', function() {
      it('Deve salvar sem erro', function(done) {
        var veiculo = new Veiculo();
        veiculo.placa = "ABC-1234";
        veiculo.chassi = "abc1234b333ccc1c2";
        veiculo.modelo = "Uno";
        veiculo.renavam = "1223bb48883";
        veiculo.marca = "Fiat";
        veiculo.ano = "93/94";

        veiculo.save(done);
      });
    });
  });

  describe('Veiculo', function() {
    describe('#remove()', function() {
      it('Deve deletar sem erro', function(done) {
        var veiculo = new Veiculo();
        //Buscar id e deletar dinamicamente
        veiculo._id = "5edee1429b28363328f9e589";

        veiculo.remove(done);

        // it('Teste de chamada get/veiculo sem erro', (done) => {
        //     request(app)
        //     .get('/veiculo')
        //     .expect(200)
        //     .end(done);
        // });
      });
    });
  });


  describe('Veiculo', function() {
    describe('#update()', function() {
      it('Deve modificar sem erro', function(done) {
        var veiculo = new Veiculo();
        veiculo._id = "5edee4f7e27ac50844e4975e";
        veiculo.placa = "3";
        veiculo.chassi = "abc1234b333ccc1c2";
        veiculo.modelo = "Uno";
        veiculo.renavam = "1223bb48883";
        veiculo.marca = "Fiat";
        veiculo.ano = "93/94";

        veiculo.updateOne(() => {},(done));
      });
    });
  });
