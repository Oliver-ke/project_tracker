import { Router } from 'express';
import ReportController from '../../controllers/ReportController';
import { Authenticate } from '../../middlewares';
const { verifyAdmin, verifyToken } = Authenticate;

const { createReport, deleteReport, getProjectReports } = ReportController;
const router = Router();

router.post('/:projectId', verifyToken, createReport);
router.get('/:projectId', verifyToken, verifyAdmin, getProjectReports);
router.delete('/:reportId', verifyToken, verifyAdmin, deleteReport);

export default router;
