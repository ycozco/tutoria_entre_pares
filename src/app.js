require('dotenv').config(); // Utiliza variables de entorno desde un archivo .env
const sequelize = require('./config/db.config'); // Configuración de la base de datos
const express = require('express');
const bodyParser = require('body-parser'); // Middleware para parsear el cuerpo de las peticiones
const cors = require('cors'); // Middleware para configurar CORS

const app = express();

app.use(cors()); // Habilita CORS para todas las rutas
app.use(bodyParser.json()); // Para parsear JSON en las peticiones
app.use(bodyParser.urlencoded({ extended: true })); // Para parsear cuerpos con codificación URL

// Servir archivos estáticos (opcional, depende de tu aplicación)
app.use(express.static('public'));

// Rutas
const authRoutes = require('./routes/auth.routes');
const userRoutes = require('./routes/user.routes');

app.use('/api/auth', authRoutes);
app.use('/api/users', userRoutes);

// Página 404 para rutas no encontradas
app.use((req, res, next) => {
  res.status(404).send("Lo sentimos, no pudimos encontrar eso!");
});

// Manejador de errores global
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send('¡Algo salió mal!');
});

// Verificar la conexión a la base de datos y sincronizar los modelos
sequelize.authenticate()
  .then(() => {
    console.log('Conexión a la base de datos establecida correctamente.');
    return sequelize.sync(); // Añade esto para sincronizar los modelos
  })
  .then(() => {
    console.log('Modelos sincronizados correctamente.');
    // Iniciar el servidor solo después de que la base de datos esté lista
    const PORT = process.env.PORT || 3000;
    app.listen(PORT, () => {
      console.log(`Server is running on port ${PORT}.`);
    });
  })
  .catch(err => {
    console.error('No se pudo conectar a la base de datos:', err);
  });
