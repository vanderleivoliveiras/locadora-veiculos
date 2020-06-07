const mongoose = require('mongoose');

mongoose.Promise = global.Promise

mongoose.connect('mongodb+srv://vanderlei-santos:v27031995@cluster0-pvs0b.gcp.mongodb.net/locadora_veiculo?retryWrites=true&w=majority',
            {useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false})
    .then(() => console.log("Database OK"))
    .catch((error) => console.log(error));

module.exports = mongoose;