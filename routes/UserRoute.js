import { Router } from 'express';
import userControllers from '../controllers/userControllers.js'
const router = Router();

router.get('/hello', userControllers.Hello);

export default router;
