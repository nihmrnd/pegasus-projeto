const express = require('express');
const app = express();
const handlebars = require('express-handlebars');

app.engine('handlebars', handlebars.engine({defaultLayout: 'main'}))
app.set('view engine', 'handlebars')


//definindo rotas
app.get('/add-pagamento', function(re,res){
    res.render('add-pagamento');
});

app.get('/pagamento', function(req,res){
    res.render('pagamento');
});

app.listen(8000)