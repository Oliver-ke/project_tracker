import { Router } from 'express';
import authRoutes from './api/auth';
import userRoute from './api/user';
import projectRoute from './api/project';
const router = new Router();

router.use('/auth', authRoutes);
router.use('/user', userRoute);
router.use('/project', projectRoute);

export default router;
