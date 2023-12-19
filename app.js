//IMPORTAR MÓDULO EXPRESS
const express =  require('express');

//MÓDULO express-handlebars
const { engine } = require('express-handlebars');

//IMPORTAR MÓDULO MYSQL
const mysql = require('mysql2');

//APP
const app = express();

//Adicionar Bootstrap
app.use('/bootstrap', express.static('./node_modules/bootstrap/dist'));

//Adiconar CSS
app.use('/css', express.static('./css'));

//Configuração do express-handlebars
app.engine('handlebars', engine());
app.set('view engine', 'handlebars');
app.set('views', './views');

//Manipulação de dados via rotas
app.use(express.json());
app.use(express.urlencoded({extended:false}));

//Configuração de conexão
const conexao =mysql.createConnection({
    host:'localhost',
    user:'root',
    password:'1983',
    database:'projeto'
});

//Teste  de conexão
conexao.connect(function(erro) {
    if(erro) throw erro;
    console.log('Conexão efetuada com sucesso!');
});

//Rota Principal
app.get('/', function(req, res) {
    res.render('formulario');
});

//Rota de cadastro
app.post('/cadastrar', function(req, res){
    console.log(req.body);
    res.end();
});

//Servidor
app.listen(8080);