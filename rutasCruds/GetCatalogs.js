
function getCarrera(pool, req, res) {
    pool.query('SELECT * FROM carrera', (error, result) => {
        if (error) {
            console.error('Error al obtener los datos de la tabla "Carrera"', error);
            res.status(500).send('Error al obtener los datos de la tabla "Carrera"');
        } else {
            res.status(200).json(result.rows);
        }
    });
}
function getDias(pool, req, res) {
    pool.query('SELECT * FROM Dias where id_dia <= 5', (error, result) => {
        if (error) {
            console.error('Error al obtener los datos de la tabla "Dias"', error);
            res.status(500).send('Error al obtener los datos de la tabla "Dias"');
        } else {
            res.status(200).json(result.rows);
        }
    });
}
function getJornada(pool, req, res) {
    pool.query('SELECT * FROM jornada', (error, result) => {
        if (error) {
            console.error('Error al obtener los datos de la tabla "Jornada"', error);
            res.status(500).send('Error al obtener los datos de la tabla "Jornada"');
        } else {
            res.status(200).json(result.rows);
        }
    });
}
function getNivel(pool, req, res) {
    pool.query('SELECT * FROM nivel', (error, result) => {
        if (error) {
            console.error('Error al obtener los datos de la tabla "Nivel"', error);
            res.status(500).send('Error al obtener los datos de la tabla "Nivel"');
        } else {
            res.status(200).json(result.rows);
        }
    });
}
function getParalelo(pool, req, res) {
    pool.query('SELECT * FROM paralelo', (error, result) => {
        if (error) {
            console.error('Error al obtener los datos de la tabla "Paralelo"', error);
            res.status(500).send('Error al obtener los datos de la tabla "Paralelo"');
        } else {
            res.status(200).json(result.rows);
        }
    });
}
function getRol(pool, req, res) {
    pool.query('SELECT * FROM rol', (error, result) => {
        if (error) {
            console.error('Error al obtener los datos de la tabla "Rol"', error);
            res.status(500).send('Error al obtener los datos de la tabla "Rol"');
        } else {
            res.status(200).json(result.rows);
        }
    });
}
function getEstado(pool, req, res) {
    pool.query('SELECT * FROM estado', (error, result) => {
        if (error) {
            console.error('Error al obtener los datos de la tabla "Estado"', error);
            res.status(500).send('Error al obtener los datos de la tabla "Estado"');
        } else {
            res.status(200).json(result.rows);
        }
    });
}

function getRama(pool, req, res) {
    pool.query('SELECT * FROM rama', (error, result) => {
        if (error) {
            console.error('Error al obtener los datos de la tabla "Rama"', error);
            res.status(500).send('Error al obtener los datos de la tabla "Rama"');
        } else {
            res.status(200).json(result.rows);
        }
    });
}
function getFacultad(pool, req, res) {
    pool.query('SELECT * FROM facultad', (error, result) => {
        if (error) {
            console.error('Error al obtener los datos de la tabla "Facultad"', error);
            res.status(500).send('Error al obtener los datos de la tabla "Facultad"');
        } else {
            res.status(200).json(result.rows);
        }
    });
}

module.exports = {
    getCarrera,
    getDias,
    getJornada,
    getNivel,
    getParalelo,
    getRol,
    getEstado,
    getFacultad,
    getRama
};