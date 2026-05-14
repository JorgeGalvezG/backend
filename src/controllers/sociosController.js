const pool = require('../config/db');

// Función para LISTAR todos los socios OFICIALES (Excluye pendientes y rechazados)
const obtenerSocios = async (req, res) => {
    try {
        const query = `
            SELECT id_socio, nombres, apellidos, dni, clasificacion, estado_membresia, fecha_ingreso 
            FROM socios 
            WHERE estado_membresia != 'Pendiente' AND estado_membresia != 'Rechazado'
            ORDER BY fecha_ingreso DESC
        `;
        const resultado = await pool.query(query);
        
        res.status(200).json(resultado.rows);
    } catch (error) {
        console.error('Error al obtener socios:', error);
        res.status(500).json({ mensaje: 'Error al cargar la lista de socios.' });
    }
};

module.exports = {
    obtenerSocios
};