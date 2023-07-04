const express = require('express');
const cors = require('cors');
const { Pool } = require('pg');
const app = express();
const port = 3000;
const bodyParser = require('body-parser');
app.use(cors());
// Configurar body-parser
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

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
const getCatag = require('./rutasCruds/GetCatalogs');
// Asignación del CRUD Docente
const CrudDocente = require('./rutasCruds/crudDocentes');


// Ruta principal
app.get('/', (req, res) => {
  res.send('Hello World!');
});

// ------------------------------- Rutas de los catálogos ------------------------------
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
// Ruta para obtener los datos de la tabla "Rol"
app.get('/rol', (req, res) => {
  getCatag.getRol(pool, req, res);
});
// Ruta para obtener los datos de la tabla "Estado"
app.get('/estado', (req, res) => {
  getCatag.getEstado(pool, req, res);
});
// Ruta para obtener los datos de la tabla "Rama"
app.get('/rama', (req, res) => {
  getCatag.getRama(pool, req, res);
});
// Ruta para obtener los datos de la tabla "Facultad"
app.get('/Facultad', (req, res) => {
  getCatag.getFacultad(pool, req, res);
});

// ------------------------ Rutas para el CRUD de docentes --------------------------
// -- Get Todos los docentes
app.get('/docentes', (req, res) => {
  CrudDocente.getDocentes(pool, req, res);
});
// -- Get docente específico
app.get('/docentes/:id', (req, res) => {
  CrudDocente.getDocente(pool, req, res);
});
// -- Crear docente
app.post('/docentes', (req, res) => {
  CrudDocente.createDocente(pool, req, res);
});
// -- Update docente
app.put('/docentes/:id', (req, res) => {
  CrudDocente.updateDocente(pool, req, res);
});
// -- Delete docente
app.delete('/docentes/:id', (req, res) => {
  CrudDocente.deleteDocente(pool, req, res);
});

// ------------------------ Rutas para el CRUD de docentes --------------------------





app.use(express.json());
app.listen(port, () => {
  console.log(`Servidor backend escuchando en http://localhost:${port}`);
});