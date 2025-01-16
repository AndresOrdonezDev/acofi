// config/db.js
import mysql from 'mysql'
// Configura el pool de conexiones a MySQL
export const db = async () => {
  if (!pool) {
    pool = mysql.createPool({
      connectionLimit: 10, // Establece el límite de conexiones en el pool
      host: process.env.HOST,
      user: process.env.USER,
      password: process.env.PASSWORD,
      database: process.env.DATABASE,
    });

    // Manejo de eventos de error
    pool.on('error', function(err) {
      console.error(colors.bgRed("Error en la conexión de la base de datos:"), err);
      if (err.code === 'PROTOCOL_CONNECTION_LOST') {
        console.log('Se perdió la conexión con la base de datos. Intentando reconectar...');
        pool = null; // Reinicia el pool para que se cree uno nuevo en el próximo intento de conexión
        db(); // Intenta reconectar
      } else {
        throw err;
      }
    });
    
    console.log(colors.bgGreen("Conexión exitosa"));
  }

  return pool;
};
