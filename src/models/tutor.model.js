// Similar al modelo Student
const { DataTypes } = require('sequelize');
const sequelize = require('../config/db.config');

const Tutor = sequelize.define('Tutor', {
    // Asumiendo que la tabla Usuarios ya existe y que usuario_id es la FK
    usuario_id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        references: {
            model: 'Usuarios',
            key: 'id',
        }
    },
    nombre_completo: {
        type: DataTypes.STRING,
        allowNull: false
    },
    biografia: {
        type: DataTypes.TEXT,
        allowNull: true
    },
    foto_url: {
        type: DataTypes.STRING,
        allowNull: true
    }
}, {
    // opciones adicionales
});

module.exports = Tutor;
