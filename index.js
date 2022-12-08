const express = require('express');
const mongoose = require('mongoose');
const app = express();
const bodyparser = require('body-parser');
const port = process.env.PORT || 3080;
require('./src/db/conn');
const exphbs = require("express-handlebars");
const path = require('path');
app.use(express.static(path.join(__dirname,'public')));
const controller = require('./src/controller/controller');
const {allowInsecurePrototypeAccess} = require('@handlebars/allow-prototype-access')
const Handlebars = require('handlebars');

app.use(bodyparser.urlencoded({
    extended: true
}));


app.use(bodyparser.json());
//path
app.set('views', path.join(__dirname, '/views/'));
app.engine('.hbs', exphbs.engine({ extname: '.hbs', defaultLayout: "index", layoutsDir: __dirname + '/views/layouts/', handlebars: allowInsecurePrototypeAccess(Handlebars)}));
app.set('view engine', 'hbs');

app.use('/',controller);

app.listen(3080,()=>{
    console.log(`listening to port number ${port}`);
});