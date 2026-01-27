
import express from 'express';
import * as page from '../controllers/pageController.js';
import checklogin from '../middleware/checkLogin.js';

const router = express.Router();

router.get('/', page.homePage);

router.get('/home.ejs', page.homePage);

router.get('/about.ejs', page.aboutPage);

router.get('/signup.ejs', page.signupPage);

router.get('/login.ejs', page.loginPage);

router.get('/form.ejs', checklogin, page.formPage);
export default router;