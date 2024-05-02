import pkg from 'pg';
import express from 'express';
import router from './routes/index.js';
const { Pool } = pkg;
const app = express();

// middlewares
app.use(express.json());
app.use(express.urlencoded({extended:false}));

//Routes
app.use(router);
app.listen(3000);


const config = {
    user:'postgres',
    host:'localhost',
    password:'753',
    database:'activityDB'
}
const pool = new Pool(config);

export default pool; 