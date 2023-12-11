const express = require('express');
const router = express.Router();

// Define las rutas para 'users' aquí...
router.get('/test', (req, res) => {
  res.status(200).send('User route is working!');
});

// Asegúrate de exportar el router después de definir todas las rutas.
module.exports = router;
