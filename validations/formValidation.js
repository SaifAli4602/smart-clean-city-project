import { body } from "express-validator";


 export const validationRegistration = [
    body('user_name')
        .notEmpty()
        .withMessage('User name is required')
        .isLength({ min: 5 })
        .withMessage('User name must be at least 5 characters long')
        .matches(/^[a-zA-Z\s]+$/)
        .withMessage('User name must contain only letters and spaces'),
    body('contact')
        .notEmpty()
        .withMessage('Contact is required')
        .isLength({ min: 10, max: 10 })
        .withMessage('Contact must be 10 digits long'),
    body('location')
        .notEmpty()
        .withMessage('Location is required')
        .matches(/^[a-zA-Z\s]+$/)
        .withMessage('Location must contain only letters and spaces'),
    body('description')
        .notEmpty()
        .withMessage('Description is required')
        .matches(/^[a-zA-Z\s]+$/)
        .withMessage('Description must contain only letters and spaces'),
];
