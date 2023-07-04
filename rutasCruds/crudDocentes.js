// ------------------ CRUD para el recurso "docente" ------------------

// Obtener todos los docentes
function getDocentes(pool, req, res) {
  const query = 'SELECT * FROM Docente';
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
function getDocente(pool, req, res) {
  const id_docente = req.params.id;

  const query = 'SELECT * FROM Docente WHERE id_docente = $1';
  const values = [id_docente];

  pool.query(query, values, (error, result) => {
    if (error) {
      console.error('Error al obtener el docente', error);
      res.status(500).send('Error al obtener el docente');
    } else {
      if (result.rows.length === 0) {
        res.status(404).send('Docente no encontrado');
      } else {
        res.status(200).json(result.rows[0]);
      }
    }
  });
}

// Crear un nuevo docente
function createDocente(pool, req, res) {
  const { id_docente, nombres_docente, apellidos_docente, contacto_docente, email_docente, contrasenia_docente, id_rama, id_facultad, id_estado, id_rol } = req.body;
  const query = 'INSERT INTO Docente (id_docente, nombres_docente, apellidos_docente, contacto_docente, email_docente, contrasenia_docente, id_rama, id_facultad, id_estado, id_rol) VALUES ($1, $2, $3, $4, $5 ,$6, $7, $8, $9, $10)';
  const values = [id_docente, nombres_docente, apellidos_docente, contacto_docente, email_docente, contrasenia_docente, id_rama, id_facultad, id_estado, id_rol];

  pool.query(query, values, (error, result) => {
    if (error) {
      console.error('Error al crear el docente', error);
      res.status(500).send('Error al crear el docente');
    } else {
      res.status(201).send('Docente creado correctamente');
    }
  });
}


// Actualizar un docente existente
function updateDocente(pool, req, res) {
  const id_docente = req.params.id; // Obtener el ID del docente desde los parámetros de la ruta
  const { nombres_docente, apellidos_docente, contacto_docente, email_docente, contrasenia_docente, id_rama, id_facultad, id_estado, id_rol } = req.body; // Obtener los nuevos datos del docente desde el cuerpo de la solicitud

  const query = 'UPDATE Docente SET nombres_docente = $1, apellidos_docente = $2, contacto_docente = $3, email_docente = $4, contrasenia_docente = $5, id_rama = $6, id_facultad = $7, id_estado = $8, id_rol = $9 WHERE id_docente = $10';
  const values = [nombres_docente, apellidos_docente, contacto_docente, email_docente, contrasenia_docente, id_rama, id_facultad, id_estado, id_rol, id_docente];

  pool.query(query, values, (error, result) => {
    if (error) {
      console.error('Error al actualizar el docente', error);
      res.status(500).send('Error al actualizar el docente');
    } else {
      if (result.rowCount === 0) {
        res.status(404).send('Docente no encontrado');
      } else {
        res.status(200).send('Docente actualizado correctamente');
      }
    }
  });
}

// Eliminar un docente
function deleteDocente(pool, req, res) {
  const id_docente = req.params.id; // Obtener el ID del docente desde los parámetros de la ruta

  const query = 'DELETE FROM Docente WHERE id_docente = $1';
  const values = [id_docente];

  pool.query(query, values, (error, result) => {
    if (error) {
      console.error('Error al eliminar el docente', error);
      res.status(500).send('Error al eliminar el docente');
    } else {
      if (result.rowCount === 0) {
        res.status(404).send('Docente no encontrado');
      } else {
        res.status(200).json({ message: 'Docente eliminado correctamente' });
      }
    }
  });
}


// Exportar las funciones del CRUD
module.exports = {
  getDocentes,
  getDocente,
  createDocente,
  updateDocente,
  deleteDocente
};