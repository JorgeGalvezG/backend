const express = require('express');
const router = express.Router();
const { obtenerSocios } = require('../controllers/sociosController');
const { verificarToken, autorizarRoles } = require('../middlewares/authMiddleware');

// RUTA GET: Listar todos los socios
router.get('/', verificarToken, autorizarRoles(1, 2, 3), obtenerSocios);

module.exports = router;