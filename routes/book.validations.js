const { param, body } = require('express-validator');
const { isLength, max } = require('lodash');

const allowedEmotions = ['Inspiration', 'Curiosity', 'Escapism', 'Nostalgia', 'Happiness', 'Sadness'];

exports.validateEmotion = [param('emotion').isIn(allowedEmotions).withMessage('Invalid emotion')];

// TODO: Iteración 4...validar los campos que nos vienen del POST.. RECORDAR que también hay que usar validationREsults en el controlador. Mirar el ejemplo de getRecommendationsByEmotion
exports.validatePost = [
    body('title').
        isLength({ max: 30 })
        .withMessage('The title length is too long'), 
    body('isbn')
        .matches(/^[0-9]{13}$/)
        .withMessage('The isbn is longer than 13 characters'), 
    body('price')
        .isCurrency({ require_symbol: false })
        .withMessage('The provided price is not valid')
        .isFloat({min: 0})
        .withMessage('The price must be a positive number'),
    body('emotions')
        .isArray({ min: 1 })
        .withMessage('Book must include at least 1 emotion')
        .isIn(allowedEmotions)
        .withMessage('The provided emotion is not valid.')
]


