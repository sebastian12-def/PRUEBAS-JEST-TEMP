import express from 'express';
import router from './routes/producto.js';
import conectarDB from './config/db.js';

const app = express();

// CONECTAR MONGO
conectarDB();

app.use(express.json());

app.use('/api/productos', router);

export default app;