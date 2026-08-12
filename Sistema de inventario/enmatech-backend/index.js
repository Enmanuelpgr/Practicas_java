require('dotenv').config(); // 🔐 Lee nuestro archivo oculto .env
const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose'); // 🍃 Herramienta para conectar con MongoDB
const Producto = require('./models/Producto');

const app = express();

app.use(cors());
app.use(express.json());

// 🔌 Conexión a la base de datos usando la variable secreta
mongoose.connect(process.env.MONGO_URI)
    .then(() => console.log('¡Conectado exitosamente a MongoDB! 🍃'))
    .catch((error) => console.error('Error conectando a la base de datos:', error));

app.get('/', (req, res) => {
    res.send('¡El servidor de EnmaTech está vivo! 🚀');
});
// Ruta POST para crear un producto
app.post('/api/productos', async (req, res) => {
    try {
        const nuevoProducto = new Producto(req.body);
        await nuevoProducto.save(); // Guarda el producto en MongoDB
        res.status(201).send(nuevoProducto);
    } catch (error) {
        res.status(400).send(error);
    }
});
// Ruta GET para obtener TODOS los productos
app.get('/api/productos', async (req, res) => {
    try {
        const productos = await Producto.find();
        res.json(productos);
    } catch (error) {
        res.status(500).send(error);
    }
});

// Ruta GET para obtener un SOLO producto por su ID
app.get('/api/productos/:id', async (req, res) => {
    try {
        const producto = await Producto.findById(req.params.id);
        if (!producto) {
            return res.status(404).json({ mensaje: 'Producto no encontrado' });
        }
        res.json(producto);
    } catch (error) {
        res.status(500).send(error);
    }
});

// Ruta PUT para actualizar un producto existente
app.put('/api/productos/:id', async (req, res) => {
    try {
        const productoActualizado = await Producto.findByIdAndUpdate(
            req.params.id, 
            req.body, 
            { new: true } // Esto devuelve el producto ya actualizado
        );
        if (!productoActualizado) {
            return res.status(404).json({ mensaje: 'Producto no encontrado' });
        }
        res.json(productoActualizado);
    } catch (error) {
        res.status(500).send(error);
    }
});

// Ruta DELETE para eliminar un producto
app.delete('/api/productos/:id', async (req, res) => {
    try {
        const productoEliminado = await Producto.findByIdAndDelete(req.params.id);
        if (!productoEliminado) {
            return res.status(404).json({ mensaje: 'Producto no encontrado' });
        }
        res.json({ mensaje: 'Producto eliminado con éxito' });
    } catch (error) {
        res.status(500).send(error);
    }
});
// Ruta GET para obtener todos los productos
app.get('/api/productos', async (req, res) => {
    try {
        const productos = await Producto.find();
        res.send(productos);
    } catch (error) {
        res.status(500).send(error);
    }
});
const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Servidor corriendo en http://localhost:${PORT}`);
});