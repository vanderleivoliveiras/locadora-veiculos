const mongoose = require('mongoose');
const URI = 'mongodb+srv://vanderlei-santos:v27031995@cluster0-pvs0b.gcp.mongodb.net/locadora_veiculo?retryWrites=true&w=majority';
mongoose.connect(URI, { useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false })
    .then(() => console.log("Database OK"))
    .catch((error) => {
        console.log(error)
        resolve();
    });

module.exports = mongoose;