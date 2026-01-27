
import express from 'express';
import  * as auth from '../controllers/authController.js';

const router = express.Router();

router.post('/Resistration', auth.register);
router.post('/loginpage', auth.login);
router.get('/logout', auth.logout);

export default router;