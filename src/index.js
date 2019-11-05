const express = require('express')
const mongoose = require('mongoose');
const cors = require('cors');
const path = require('path');
const Routes = require('./Routes');

let app = express();

mongoose.connect('mongodb+srv://raock:raock1234@myclusternode-acbtt.mongodb.net/my_base?retryWrites=true&w=majority',{
    useNewUrlParser : true,
    useUnifiedTopology : true
})

app.use('/files', express.static(path.resolve(__dirname,'..', 'uploads')))
app.use(cors())
app.use(express.json());
app.use(Routes);

app.listen(3000, ()=>{
    console.log('conectado');
})