const mongoose = require('mongoose');
const URI = 'mongodb+srv://vanderlei-santos:v27031995@cluster0-pvs0b.gcp.mongodb.net/locadora_veiculo?retryWrites=true&w=majority';
mongoose.Promise = global.Promise

function connect() {
    return new Promise((resolve, reject) => {
        if (process.env.ENV == 'test') {
            const Mockgoose = require('mockgoose').Mockgoose;
            const mockgoose = new Mockgoose(mongoose);

            mockgoose.prepareStorage()
                .then(() => {
                    mongoose.connect(URI, { useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false })
                        .then(() => console.log("Database OK"))
                        .catch((error) => {
                            console.log(error)
                            resolve();
                        });
                })
        } else {
            mongoose.connect(URI, { useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false })
                .then(() => console.log("Database OK"))
                .catch((error) => {
                    console.log(error)
                    resolve();
                });
        }
    })
}

function disconnect() {

}

module.exports = { mongoose, connect, disconnect };