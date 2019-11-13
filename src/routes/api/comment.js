import { Router } from 'express';
import CommentController from '../../controllers/CommentController';
import { Authenticate } from '../../middlewares';
const { verifyAdmin, verifyToken } = Authenticate;

const { createComment, getProjectComments } = CommentController;
const router = Router();

router.post('/:projectId', verifyToken, createComment);
router.get('/:projectId', verifyToken, getProjectComments);

export default router;
