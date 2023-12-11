const Student = require('../models/student.model');

// Aquí van las funciones para manejar las operaciones CRUD de Student

exports.getAllStudents = async (req, res) => {
    try {
        const students = await Student.findAll();
        res.send(students);
    } catch (error) {
        res.status(500).send({
            message: error.message || "Some error occurred while retrieving students."
        });
    }
};

// 