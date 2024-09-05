/**
 * Christian Santacruz 
 * 
 * David Inguilan
 * 
 * Cafe Arandia 2.0
 * 
 * Controlador - Recetas
 */
const Recipe = require('../models/Recipe');

let recipes = []; 


exports.createRecipe = (req, res) => {
    const { id, calificacion, comentario, fecha } = req.body;
    const newRecipe = { id, calificacion, comentario, fecha };
    recipes.push(newRecipe); 
    res.status(201).json({ message: 'Receta creada con éxito', recipe: newRecipe });
};


exports.getRecipes = (req, res) => {
    res.status(200).json(recipes); 
};


exports.updateRecipe = (req, res) => {
    const { id } = req.params;
    const { calificacion, comentario, fecha } = req.body;
    const recipe = recipes.find(r => r.id == id);

    if (recipe) {
        recipe.calificacion = calificacion;
        recipe.comentario = comentario;
        recipe.fecha = fecha;
        res.status(200).json({ message: `Receta con ID ${id} actualizada`, recipe });
    } else {
        res.status(404).json({ message: `Receta con ID ${id} no encontrada` });
    }
};


exports.deleteRecipe = (req, res) => {
    const { id } = req.params;
    const index = recipes.findIndex(r => r.id == id);

    if (index !== -1) {
        recipes.splice(index, 1);
        res.status(200).json({ message: `Receta con ID ${id} eliminada` });
    } else {
        res.status(404).json({ message: `Receta con ID ${id} no encontrada` });
    }
};