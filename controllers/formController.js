

import { connection } from '../config/db.js';
import { validationResult } from 'express-validator';


    const collectionName = 'city';

    export const submitForm=async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) 
        return res.status(400).render('form', { errors: errors.array(), old: req.body });

    try {
        const db = await connection();
        const col = db.collection(collectionName);
        await col.insertOne({
            user_name: req.body.user_name,
            contact: req.body.contact,
            location: req.body.location,
            description: req.body.description,
            photo: req.file ? req.file.filename : null,
            createdAt: new Date(),
        });
        res.render('success');
    } catch (err) {
        res.status(500).render('error', { error: err });
    }
}
