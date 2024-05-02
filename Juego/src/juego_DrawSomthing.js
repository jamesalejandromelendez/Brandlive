const express = require('express');
const { appendFile } = require('fs');
const app = express();

// middlewares
app.use(express.json());
app.use(express.urlencoded({extended:false}));

//Routes
app.use(require('./routes/index'));
app.listen(3000);