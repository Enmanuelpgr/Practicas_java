const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const Empleado = require('./models/empleado.model');

const app = express();

app.use(cors());
app.use(express.json());

mongoose.connect('mongodb://diazbenitezenmanuel_db_user:JjKTpT8P0CxmiRCN@ac-pdeev3k-shard-00-00.cjdzsz1.mongodb.net:27017,ac-pdeev3k-shard-00-01.cjdzsz1.mongodb.net:27017,ac-pdeev3k-shard-00-02.cjdzsz1.mongodb.net:27017/?ssl=true&replicaSet=atlas-en76fw-shard-0&authSource=admin&appName=Cluster0')
  .then(() => console.log(' Conectado a MongoDB'))
  .catch(err => console.error(' Error de conexión:', err));

app.get('/api/empleados', async (req, res) => {
    const empleados = await Empleado.find();
    res.json(empleados);
});

// 2. Crear un empleado
app.post('/api/empleados', async (req, res) => {
    try {
        const nuevo = new Empleado(req.body);
        await nuevo.save();
        res.status(201).json({ mensaje: 'Guardado con éxito' });
    } catch (error) {
        console.error("Error exacto al guardar:", error.message);
        res.status(500).json({ mensaje: 'Error interno', detalle: error.message });
    }
});

// 3. Actualizar
app.put('/api/empleados/:id', async (req, res) => {
    await Empleado.findByIdAndUpdate(req.params.id, req.body);
    res.json({ mensaje: 'Actualizado' });
});

// 4. Eliminar
app.delete('/api/empleados/:id', async (req, res) => {
    await Empleado.findByIdAndDelete(req.params.id);
    res.json({ mensaje: 'Eliminado' });
});

// Encender el servidor
app.listen(3000, () => {
    console.log('Servidor de empleados corriendo en el puerto 3000');
});