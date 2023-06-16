const express = require('express');
const router = express.Router();

router.post('/postdocentes', (req, res) => {
  const { id_docente, nombres_docente, apellidos_docente, contacto_docente, email_docente, contrasenia_docente, id_rama, id_facultad } = req.body; // Obtén los datos enviados en el cuerpo de la solicitud

  // Realiza la consulta SQL para insertar los datos en la tabla "facultad"
  const query = 'INSERT INTO docente (id_docente, nombres_docente, apellidos_docente, contacto_docente, email_docente, contrasenia_docente, id_rama, id_facultad ) VALUES ($1, $2)';
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