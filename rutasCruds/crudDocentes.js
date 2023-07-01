const express = require('express');
const router = express.Router();

router.post('/postdocentes', (req, res) => {
  const { id_docente, nombres_docente, apellidos_docente, contacto_docente, email_docente, contrasenia_docente, id_rama, id_facultad } = req.body; // Obtén los datos enviados en el cuerpo de la solicitud

  // Realiza la consulta SQL para insertar los datos en la tabla "facultad"
  const query = 'INSERT INTO docente (id_docente,nombres_docente, apellidos_docente, contacto_docente, email_docente, contrasenia_docente, id_rama, id_facultad ) VALUES ($1, $2)';
  pool.query(query, [id_docente, nombres_docente, apellidos_docente, contacto_docente, email_docente, contrasenia_docente, id_rama, id_facultad], (err, result) => {
    if (err) {
      console.error('Error al insertar en la tabla "docentes"', err);
      res.status(500).send('Error al insertar en la tabla "docentes"');
    } else {
      res.status(201).send('Docente agregado correctamente');
    }
  });
});
module.exports = router;

// CRUD para el recurso "docente"

// Obtener todos los docentes
function getDocentes(pool, req, res) {
  const query = 'SELECT * FROM Docentes';

  pool.query(query, (error, result) => {
    if (error) {
      console.error('Error al obtener los docentes', error);
      res.status(500).send('Error al obtener los docentes');
    } else {
      res.status(200).json(result.rows);
    }
  });
}

// Obtener un docente por su ID
function getDocente(req, res) {
  // ...
}

// Crear un nuevo docente
function crearDocente(req, res) {
  // ...
}

// Actualizar un docente existente
function actualizarDocente(req, res) {
  // ...
}

// Eliminar un docente
function eliminarDocente(req, res) {
  // ...
}

// Exportar las funciones del CRUD
module.exports = {
  getDocentes,
  getDocente,
  crearDocente,
  actualizarDocente,
  eliminarDocente
};
