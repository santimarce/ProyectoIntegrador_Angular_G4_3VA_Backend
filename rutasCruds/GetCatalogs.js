
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

module.exports = {
    getCarrera,
    getDias,
    getJornada,
    getNivel,
    getParalelo
};