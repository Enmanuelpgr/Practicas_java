const mongoose = require('mongoose');

const EmpleadoSchema = new mongoose.Schema({
    empleadoId: { type: String, required: true },
    nombre: { type: String, required: true },
    cargo: { type: String, required: true },
    departamento: { type: String, required: true },
    salario: { type: Number, required: true },
    correo: { type: String, required: true }
});

module.exports = mongoose.model('Empleado', EmpleadoSchema);