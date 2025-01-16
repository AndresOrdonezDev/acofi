import express from 'express'
import dotenv from "dotenv";
import colors from "colors";

import consecutiveRoute from './routes/consecutiveRoute.js'

const app = express();


// Middleware
app.use(express.json());


// Use the rutes to CRUD consecutive
app.use('/api/consecutive', consecutiveRoute);


// Ruta base de prueba
app.get('/', (req, res) => {
  res.send('API funcionando correctamente.');
});

// Configuración del servidor
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});
