

import { connection } from '../config/db.js';


 const usersCollectionName = 'users';

 export const register = async (req, res) => {
    try {
        const db = await connection();
        const users = db.collection(usersCollectionName);
        const exists = await users.findOne({ username: req.body.username });
        if (exists) return res.status(400).render('signup', { error: 'Username already taken' });

        await users.insertOne({ yourname: req.body.yourname,
             username: req.body.username, password: req.body.password });
        res.redirect('/login.ejs');
    } catch (err) {
        res.status(500).render('error', { error: err });
    }
}


export const login=async (req, res) => {
    try {
        const db = await connection();
        const users = db.collection(usersCollectionName);
        const user = await users.findOne({ username: req.body.username });
        if (!user) return res.render('login', { error: 'User not found' });
        if (user.password !== req.body.password) return res.render('login', { error: 'Invalid password' });

        req.session.user = { username: user.username };
        req.session.save(() => res.redirect('/form.ejs'));
    } catch (err) {
        console.log(err);
        res.status(500).send('Error occurred');
    }
}

export const logout =  (req, res) => {
    req.session.destroy(() => res.redirect('/login.ejs'));
}