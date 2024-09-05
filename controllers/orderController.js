/**
 * Christian Santacruz 
 * 
 * David Inguilan
 * 
 * Cafe Arandia 2.0
 * 
 * Controlador - Ordenes
 */

const Order = require('../models/Order');

let orders = [];

exports.createOrder = (req, res) => {
    const { id, fecha, estado, total } = req.body;
    const newOrder = { id, fecha, estado, total };
    orders.push(newOrder); 
    res.status(201).json({ message: 'Pedido creado con éxito', order: newOrder });
};


exports.getOrders = (req, res) => {
    res.status(200).json(orders); 
};


exports.updateOrder = (req, res) => {
    const { id } = req.params;
    const { fecha, estado, total } = req.body;
    const order = orders.find(o => o.id == id);

    if (order) {
        order.fecha = fecha;
        order.estado = estado;
        order.total = total;
        res.status(200).json({ message: `Pedido con ID ${id} actualizado`, order });
    } else {
        res.status(404).json({ message: `Pedido con ID ${id} no encontrado` });
    }
};



exports.deleteOrder = (req, res) => {
    const { id } = req.params;
    const index = orders.findIndex(o => o.id == id);

    if (index !== -1) {
        orders.splice(index, 1);
        res.status(200).json({ message: `Pedido con ID ${id} eliminado` });
    } else {
        res.status(404).json({ message: `Pedido con ID ${id} no encontrado` });
    }
};