const Tutor = require('../models/tutor.model');

// Similar al controlador de Student, pero para Tutores
exports.getAllTutors = async (req, res) => {
    try {
        const tutores = await Tutor.findAll();
        res.send(tutores);

    }
    catch(error){
            res.status(500).send({
                message: error.message || "Some error occurred while retrieving tutors."
            });
    }
};

