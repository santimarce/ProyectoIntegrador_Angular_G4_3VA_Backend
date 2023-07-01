const express = require('express');
const cors = require('cors');
const { Pool } = require('pg');
const app = express();
const port = 3000;
app.use(cors());

// Cargar variables de entorno desde el archivo .env
require('dotenv').config();

// Crear un pool de conexiones a la base de datos basados en las variables de entorno
const pool = new Pool({
  host: process.env.PGHOST,
  user: process.env.PGUSER,
  database: process.env.PGDATABASE,
  password: process.env.PGPASSWORD,
  port: process.env.PGPORT,
});

// Asignaciones e inicialización de los Catálogos
const getCatag = require('./getCatag');

// Ruta principal
app.get('/', (req, res) => {
  res.send('Hello World!');
});

//Rutas de los catálogos
// -- Ruta para obtener los datos de la tabla "Carrera"
app.get('/carrera', (req, res) => {
  getCatag.getCarrera(pool, req, res);
});
// -- Ruta para obtener los datos de la tabla "Dias"
app.get('/dias', (req, res) => {
  getCatag.getDias(pool, req, res);
});
// -- Ruta para obtener los datos de la tabla "Jornada"
app.get('/jornada', (req, res) => {
  getCatag.getJornada(pool, req, res);
});
// -- Ruta para obtener los datos de la tabla "Nivel"
app.get('/nivel', (req, res) => {
  getCatag.getNivel(pool, req, res);
});
// -- Ruta para obtener los datos de la tabla "Paralelo"
app.get('/paralelo', (req, res) => {
  getCatag.getParalelo(pool, req, res);
});
// Ruta para obtener los datos de la tabla "Carrera"
app.get('/carrera', (req, res) => {
  getCatag.getEstado(pool, req, res);
});

// Rutas del CRUD Docente


app.use(express.json());
app.listen(port, () => {
  console.log(`Servidor backend escuchando en http://localhost:${port}`);
});