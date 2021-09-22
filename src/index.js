const express = require('express');
const app = express();
const path = require('path');
//Configuracion (Settings)
app.set('port',4000);
app.set('view engine','ejs');
app.engine('html',require('ejs').renderFile);
app.set('views',path.join(__dirname,'views'));

//Middlewares

//Routes
app.use(require('./routes/index'));

//Static Routes
app.use(express.static(path.join(__dirname,'public')));

//Listening Server
app.listen(app.get('port'),() =>{
    console.log('Iniciado en el Puerto',app.get('port'));
});