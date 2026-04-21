import pageRoutes from '../routes/pageRoutes.js';
import formRoutes from '../routes/formRoutes.js';
import authRoutes from '../routes/authRoutes.js';

import express from 'express';
import path from 'path';

import session from 'express-session';


const app = express();

const publicPath = path.resolve('public');
app.use(express.static(publicPath));

app.set('view engine', 'ejs');
app.use(express.urlencoded({ extended: false }));

// session middleware
app.use(
    session({
        secret: 'replace-this-with-a-secure-secret',
        resave: false,
        saveUninitialized: true,
    })
);


app.use('/', pageRoutes);
app.use('/', authRoutes);
app.use('/', formRoutes);


app.use((req, res) => res.status(404).render('404page'));

app.listen(4000, () => console.log('Server running on http://localhost:4000'));
