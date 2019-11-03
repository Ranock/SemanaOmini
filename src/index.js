const express = require('express')

const mongoose = require('mongoose');

const Routes = require('./Routes');

let app = express();

mongoose.connect('mongodb+srv://raock:raock1234@myclusternode-acbtt.mongodb.net/my_base?retryWrites=true&w=majority',{
    useNewUrlParser : true,
    useUnifiedTopology : true
})

app.use(express.json());
app.use(Routes);

app.listen(3000, ()=>{
    console.log('conectado');
})