/**
 * Christian Santacruz 
 * 
 * David Inguilan
 * 
 * Cafe Arandia 2.0
 * 
 * Controlador - Usuarios
 */

const User = require('../models/User');

exports.registerUser = (req, res) => {
    const { id, nombre, email, contraseña } = req.body;
    const newUser = new User(id, nombre, email, contraseña);
    
    newUser.registrar(); 
    res.status(201).json({ message: 'Usuario registrado con éxito', user: newUser });
};

exports.loginUser = (req, res) => {
    const { email, contraseña } = req.body;
    
    res.status(200).json({ message: 'Sesión iniciada' });
};

exports.updateUser = (req, res) => {
    const { id } = req.params;
    const { nombre, email, contraseña } = req.body;

   
    res.status(200).json({ message: `Usuario con ID ${id} actualizado` });
};


exports.deleteUser = (req, res) => {
    const { id } = req.params;


    res.status(200).json({ message: `Usuario con ID ${id} eliminado` });
};