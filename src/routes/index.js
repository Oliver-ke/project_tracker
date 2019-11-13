import { Router } from 'express';
import authRoutes from './api/auth';
import userRoute from './api/user';
import projectRoute from './api/project';
import commentRoute from './api/comment';
import reportRoute from './api/report';
const router = new Router();

router.use('/auth', authRoutes);
router.use('/user', userRoute);
router.use('/comment', commentRoute);
router.use('/report', reportRoute);
router.use('/project', projectRoute);

export default router;
