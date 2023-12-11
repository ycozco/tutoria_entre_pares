const User = require('../models/user.model');

exports.getUserData = async (req, res) => {
  try {
    const user = await User.findByPk(req.userId);
    if (!user) {
      return res.status(404).send({ message: 'Usuario no encontrado' });
    }
    res.json({ username: user.username, tipo: user.tipo });
  } catch (error) {
    res.status(500).send({ message: error.message });
  }
};
