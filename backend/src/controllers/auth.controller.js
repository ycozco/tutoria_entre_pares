const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const User = require('../models/user.model'); // Asegúrate de que la ruta sea la correcta

exports.loginUser = async (req, res) => {
  // Obtén el username y la contraseña desde el cuerpo de la petición
  const { username, password } = req.body;
  console.log('Intento de inicio de sesión para el usuario:', username);

  try {
    // Busca el usuario por su username
    const user = await User.findOne({ where: { username } });
    console.log('Usuario encontrado:', user ? user.username : 'No encontrado');

    // Si no se encuentra el usuario, devuelve un error
    if (!user) {
      return res.status(401).json({ message: 'Usuario no encontrado o credenciales incorrectas' });
    }

    // Comparar la contraseña proporcionada por el usuario con el hash almacenado
    const isMatch = await bcrypt.compare(password, user.password);
    console.log('La contraseña coincide:', isMatch);

    // Si la contraseña no coincide, devuelve un error
    if (!isMatch) {
      return res.status(401).json({ message: 'Contraseña incorrecta' });
    }

    // Si la contraseña coincide, genera un token JWT
    const token = jwt.sign(
      { id: user.id, tipo: user.tipo },
      process.env.JWT_SECRET,
      { expiresIn: '1h' }
    );
    console.log('Token generado:', token);

    // Envía el token y la información del usuario como respuesta
    res.json({
      message: 'Inicio de sesión exitoso',
      user: {
        id: user.id,
        username: user.username,
        tipo: user.tipo,
        email: user.email // Opcional, depende si quieres enviar el email en la respuesta
      },
      token
    });
  } catch (error) {
    console.error('Error en el inicio de sesión:', error);
    res.status(500).json({ message: 'Error del servidor al intentar iniciar sesión' });
  }
};