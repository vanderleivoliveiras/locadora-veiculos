process.env.ENV = 'test'

const request = require('supertest');
const mongoose = require('../database/mongoose');
const app = require('../app');
const Veiculo = require('../database/models/veiculo');
var assert = require('assert');

// it('Teste de chamada get/veiculo sem erro', (done) => {
//     request(app)
//         .get('/veiculo')
//         .expect(200)
//         .end(done);
// });

describe('POST /veiculo', function () {
    before((done)=>{
        mongoose.connect()
        .then(() => done())
        .catch((erro) => done(erro))
    })

    before((after)=>{
        mongoose.connect()
        .then(() => done())
        .catch((erro) => done(erro))
    })
    

    it('Criação de veiculo deve funcionar', (done) => {
        request(app).post('/veiculo')
            .send({
                placa: "ABC-1234",
                chassi: "abc1234b333ccc1c2",
                modelo: "Uno",
                renavam: "1223bb48883",
                marca: "Fiat",
                ano: "93/94"
            })
            .then(res =>{
                const body = res.body;
                expect(body).to.contains.property('_id');
                expect(body).to.contains.property('placa');
                expect(body).to.contains.property('modelo');
                expect(body).to.contains.property('renavam');
                done();
            })
            .catch(erro => {done(erro)})
    })
})

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

