
import express from 'express';
import checklogin from '../middleware/checkLogin.js';
import { upload } from '../middleware/upload.js';
import{validationRegistration} from '../validations/formValidation.js';
import { submitForm} from '../controllers/formController.js';

const router= express.Router();

router.post('/submit',checklogin,
     upload.single('UploadPhoto'), validationRegistration, submitForm);

     export default router;