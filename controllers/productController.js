/**
 * Christian Santacruz 
 * 
 * David Inguilan
 * 
 * Cafe Arandia 2.0
 * 
 * Controlador - Productos
 */
const Product = require('../models/Product');

let products = [];


exports.addProduct = (req, res) => {
    const { id, nombre, precio, descripcion } = req.body;
    const newProduct = new Product(id, nombre, precio, descripcion); 
    products.push(newProduct);
    res.status(201).json({ message: 'Producto agregado con éxito', product: newProduct });
};


exports.getProducts = (req, res) => {
    res.status(200).json(products); 
};


exports.updateProduct = (req, res) => {
    const { id } = req.params;
    const { nombre, precio, descripcion } = req.body;
    const product = products.find(p => p.id == id);

    if (product) {
        product.nombre = nombre;
        product.precio = precio;
        product.descripcion = descripcion;
        res.status(200).json({ message: `Producto con ID ${id} actualizado`, product });
    } else {
        res.status(404).json({ message: `Producto con ID ${id} no encontrado` });
    }
};


exports.deleteProduct = (req, res) => {
    const { id } = req.params;
    const index = products.findIndex(p => p.id == id);

    if (index !== -1) {
        products.splice(index, 1);
        res.status(200).json({ message: `Producto con ID ${id} eliminado` });
    } else {
        res.status(404).json({ message: `Producto con ID ${id} no encontrado` });
    }
};
