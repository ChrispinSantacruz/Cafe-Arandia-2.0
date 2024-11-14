// config/db.js

// Importa y configura las variables de entorno
require('dotenv').config();

// Importa la biblioteca de PostgreSQL
const { Pool } = require('pg');

// Crea una nueva instancia de Pool utilizando las variables de entorno
const pool = new Pool({
  user: process.env.DB_USER || 'postgres',              // Usuario de la base de datos o 'postgres' por defecto
  host: process.env.DB_HOST || 'db_dev',                // Host donde se encuentra la base de datos o 'db_dev' por defecto
  database: process.env.DB_NAME || 'mydatabase',        // Nombre de la base de datos o 'mydatabase' por defecto
  password: process.env.DB_PASSWORD || '12345',         // Contraseña para el usuario de la base de datos o '12345' por defecto
  port: process.env.DB_PORT || 5432,                    // Puerto en el que está corriendo PostgreSQL o 5432 por defecto
});
    
// Función para ejecutar consultas en la base de datos
const query = (text, params) => pool.query(text, params);

// Exporta la función 'query' para ser utilizada en otras partes del proyecto
module.exports = {
  query,
};
