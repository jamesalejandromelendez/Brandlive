import express from 'express';
import router from './routes/index.js';

const app = express();

// Middleware para manejar solicitudes JSON
app.use(express.json());

// Middleware para manejar solicitudes con datos codificados en URL
app.use(express.urlencoded({ extended: false }));

app.use(router);

export default app;