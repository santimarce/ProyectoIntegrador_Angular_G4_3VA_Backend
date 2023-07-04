// ------------------ CRUD para el recurso "alumno" ------------------

// Obtener todos los alumnos
function getAlumnos(pool, req, res) {
    const query = 'SELECT * FROM Alumno';
    pool.query(query, (error, result) => {
      if (error) {
        console.error('Error al obtener los alumnos', error);
        res.status(500).send('Error al obtener los alumnos');
      } else {
        res.status(200).json(result.rows);
      }
    });
  }
  
  // Obtener un alumno por su ID
  function getAlumno(pool, req, res) {
    const id_alumno = req.params.id;
  
    const query = 'SELECT * FROM Alumno WHERE id_alumno = $1';
    const values = [id_alumno];
  
    pool.query(query, values, (error, result) => {
      if (error) {
        console.error('Error al obtener el alumno', error);
        res.status(500).send('Error al obtener el alumno');
      } else {
        if (result.rows.length === 0) {
          res.status(404).send('Alumno no encontrado');
        } else {
          res.status(200).json(result.rows[0]);
        }
      }
    });
  }
  
  // Crear un nuevo alumno
  function createAlumno(pool, req, res) {
    const { id_alumno, nombres_alumno, apellidos_alumno, fechanacimiento_alumno, contacto_alumno, direccion_alumno, email_alumno, contrasenia_alumno, id_jornada, id_nivel, id_paralelo, id_carrera } = req.body;
    const query = 'INSERT INTO Alumno (id_alumno, nombres_alumno, apellidos_alumno, fechanacimiento_alumno, contacto_alumno, direccion_alumno, email_alumno, contrasenia_alumno, id_jornada, id_nivel, id_paralelo, id_carrera ) VALUES ($1, $2, $3, $4, $5 ,$6, $7, $8, $9, $10, $11, $12)';
    const values = [id_alumno, nombres_alumno, apellidos_alumno, fechanacimiento_alumno, contacto_alumno, direccion_alumno, email_alumno, contrasenia_alumno, id_jornada, id_nivel, id_paralelo, id_carrera ];
  
    pool.query(query, values, (error, result) => {
      if (error) {
        console.error('Error al crear el alumno', error);
        res.status(500).send('Error al crear el alumno');
      } else {
        res.status(201).send('Alumno creado correctamente');
      }
    });
  }
  
  
  // Exportar las funciones del CRUD
  module.exports = {
    getAlumnos,
    getAlumno,
    createAlumno
  };