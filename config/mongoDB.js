const mongoes = require('mongoose');

mongoes.connect('mongodb+srv://hanna:hanna@cluster0.sbdxr18.mongodb.net/')
.then(()=>{console.log('connected to database')})
.catch((err)=>{console.log(err)})