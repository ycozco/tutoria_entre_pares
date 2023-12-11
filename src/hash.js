const bcrypt = require('bcrypt');

const password = '112358'; // Cambia esto por la contraseña que quieras
const saltRounds = 1;

bcrypt.genSalt(saltRounds, function(err, salt) {
    bcrypt.hash(password, salt, function(err, hash) {
        console.log('Contraseña hasheada:', hash);
    });
});
