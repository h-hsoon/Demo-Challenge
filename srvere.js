const express = require('express');
const router = require('./config/routes');
const mongo = require('./config/mongoDB');
const app = express();
const port = 3000;

app.use('/public',express.static('public'));
app.set('view engine','ejs');
app.use(express.urlencoded({extended : false}));
app.use(router);

app.listen(port,console.log(`srvere in runind on ${port}`));

