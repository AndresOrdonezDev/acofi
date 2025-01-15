// server.js
const express = require('express');
const app = express();
require('dotenv').config();

// Middleware para manejar datos en formato JSON
app.use(express.json());

// Ruta base de prueba
app.get('/', (req, res) => {
  res.send('API funcionando correctamente.');
});

// Configuración del servidor
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});
