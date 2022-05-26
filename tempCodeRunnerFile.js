const express = require('express');
const app = express();
const handlebars = require('express-handlebars');

app.engine('handlebars', handlebars.engine({defaultLayout: 'main'}))
app.set('view engine', 'handlebars')


//definindo rotas
app.get('/pagamento', function(re,res){
    res.send('Pagina para listar os pagamentos');
});

app.get('/add-pagamento', function(re,res){
    res.send('Formulario para cadastrar pagamento');
});

app.listen(8080)