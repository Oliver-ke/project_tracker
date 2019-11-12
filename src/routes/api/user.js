import { Router } from 'express';
import UserController from '../../controllers/UserController';

const router = Router();
const { registerUser, verifyUser, signInUser } = UserController;

router.post('/', registerUser);
router.post('/signin', signInUser);
router.post('/verify', verifyUser);

export default router;
