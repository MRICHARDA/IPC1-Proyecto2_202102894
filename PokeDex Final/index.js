const express = require('express');
const morgan = require('morgan');
const app = express();
const cors = require('cors');

app.use(morgan('dev'));
app.use(express.json());
app.use(express.urlencoded({extended: false}));
app.use(cors());

app.use(require('./rutas/endpoint'));

app.listen(3000, ()=>{
    console.log("server iniciado");
});

