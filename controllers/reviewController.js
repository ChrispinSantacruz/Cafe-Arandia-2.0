/**
 * Christian Santacruz 
 * 
 * David Inguilan
 * 
 * Cafe Arandia 2.0
 * 
 * Controlador - Reseñas
 */

const Review = require('../models/Review');

let reviews = [];


exports.createReview = (req, res) => {
    const { id, calificacion, comentario, fecha } = req.body;
    const newReview = { id, calificacion, comentario, fecha };
    reviews.push(newReview);
    res.status(201).json({ message: 'Reseña creada con éxito', review: newReview });
};


exports.getReviews = (req, res) => {
    res.status(200).json(reviews); 
};


exports.updateReview = (req, res) => {
    const { id } = req.params;
    const { calificacion, comentario, fecha } = req.body;
    const review = reviews.find(r => r.id == id);

    if (review) {
        review.calificacion = calificacion;
        review.comentario = comentario;
        review.fecha = fecha;
        res.status(200).json({ message: `Reseña con ID ${id} actualizada`, review });
    } else {
        res.status(404).json({ message: `Reseña con ID ${id} no encontrada` });
    }
};


exports.deleteReview = (req, res) => {
    const { id } = req.params;
    const index = reviews.findIndex(r => r.id == id);

    if (index !== -1) {
        reviews.splice(index, 1);
        res.status(200).json({ message: `Reseña con ID ${id} eliminada` });
    } else {
        res.status(404).json({ message: `Reseña con ID ${id} no encontrada` });
    }
};