//DEFININDO VARIAVEIS E IMPORTAÇÕES
const express = require('express');
const app = express();
const handlebars = require('express-handlebars');
const bodyParser = require('body-parser');
const cadastro = require('./models/Cadastro'); //alterar pelo novo banco depois


//CONFIGURAÇÕES GERAIS
app.engine('handlebars', handlebars.engine({defaultLayout: 'main'}))
app.set('view engine', 'handlebars')

app.use(bodyParser.urlencoded({extended:false}))
app.use(bodyParser.json())


//ROTA DAS PAGINAS DE VIEW
app.get('/cad-cadastro', function(re,res){
    res.render('cad-cadastro');
});

//ROTA PARA RECEBER DADOS DO FORMULARIO
app.post('/add-cadastro', function(req,res){
    cadastro.create({
        nome: req.body.nome,
        cpf: req.body.cpf,
        nascimento: req.body.nascimento,
        cartao: req.body.cartao,
        email: req.body.email,
        atendimento: req.body.atendimento
    }).then(function(){
        res.send('Beneficiario(a) cadastrada!' + '<br></br>' + 'SENHA: ' + (Math.random().toString(36).substr(2)) );
    }).catch(function(err){
        res.send('Erro: Beneficiario(a) não cadastrado com sucesso' + err);
    })
    
});


//DEFININDO E INICIANDO PORTA
app.listen(8000)