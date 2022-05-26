const db = require('./db');

const Cadastro = db.sequelize.define('cadastros', {
    nome: {
        type: db.Sequelize.STRING
    },
    cpf: {
        type: db.Sequelize.INTEGER
    },
    nascimento: {
        type: db.Sequelize.DATE
    },
    cartao: {
        type: db.Sequelize.INTEGER
    },
    email: {
        type: db.Sequelize.STRING
    },
    atendimento: {
        type: db.Sequelize.STRING
    },
});

//Cadastro.sync({force:true});

module.exports = Cadastro;