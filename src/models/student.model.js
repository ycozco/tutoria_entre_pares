// Importamos Sequelize y los tipos de datos
const { DataTypes } = require('sequelize');
// Importamos la instancia de sequelize que ya tienes configurada
const sequelize = require('../config/db.config');

// Definimos el modelo para 'Student'
const Student = sequelize.define('Student', {
    // Aquí defines las propiedades del modelo, basándote en tu estructura SQL
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
    nivel_educativo: {
        type: DataTypes.ENUM('primaria', 'secundaria', 'preparatoria', 'universidad'),
        allowNull: false
    },
    foto_url: {
        type: DataTypes.STRING,
        allowNull: true // si quieres permitir que sea nulo
    }
}, {
    // opciones adicionales
});

// Exportamos el modelo
module.exports = Student;
