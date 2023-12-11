// auth.routes.js
const express = require('express');
const router = express.Router();
const { loginUser } = require('../controllers/auth.controller');

// Asegúrate de que loginUser es una función exportada correctamente desde auth.controller.js
router.post('/login', loginUser);

module.exports = router;
