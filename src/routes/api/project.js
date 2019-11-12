import { Router } from 'express';
import ProjectController from '../../controllers/ProjectController';
import { Authenticate } from '../../middlewares';
const { verifyAdmin, verifyToken } = Authenticate;
const router = Router();
const { createProject, updateProject, getProjects, deleteProject, getProjectQuery } = ProjectController;

router.post('/', verifyToken, verifyAdmin, createProject);
router.put('/:id', verifyToken, verifyAdmin, updateProject);
router.delete('/:id', verifyToken, verifyAdmin, deleteProject);
router.get('/', verifyToken, getProjects);
router.get('/search', verifyToken, getProjectQuery);

export default router;
