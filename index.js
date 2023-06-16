const express = require('express');
const cors = require('cors');
const { Pool } = require('pg');
const app = express();
const port = 3000;

app.use(cors());
// Cargar variables de entorno desde el archivo .env
require('dotenv').config();

// Crear un pool de conexiones a la base de datos
const pool = new Pool({
  host: process.env.PGHOST,
  user: process.env.PGUSER,
  database: process.env.PGDATABASE,
  password: process.env.PGPASSWORD,
  port: process.env.PGPORT,
});

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.get('/dias', (req, res) => {
  pool.query('SELECT * FROM Dias', (error, result) => {
    if (error) {
      console.error('Error al obtener los datos de la tabla "Dias"', error);
      res.status(500).send('Error al obtener los datos de la tabla "Dias"');
    } else {
      res.status(200).json(result.rows);
    }
  });
});

app.use(express.json());

app.listen(port, () => {
  console.log(`Servidor backend escuchando en http://localhost:${port}`);
});
