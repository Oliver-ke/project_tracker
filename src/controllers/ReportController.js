import models from '../database/model';
import { errorResponse, successResponse } from '../utils';

const { Reports } = models;

export default class ReportController {
	static async createReport(req, res) {
		try {
			const { projectId } = req.params;
			const { report, files } = req.body;
			const newReport = await Reports.create({
				projectId,
				report,
				files,
			});
			const response = newReport.toJSON();
			return successResponse(res, 201, 'comment created', response);
		} catch (error) {
			console.log(error);
			errorResponse(res, 500, 'server error');
		}
	}

	static async getProjectReports(req, res) {
		try {
			const { projectId } = req.params;
			const projectReports = await Reports.findAll({
				where: { projectId },
			});
			return successResponse(res, 200, 'success', projectReports);
		} catch (error) {
			console.log(error);
			return errorResponse(res, 500, 'internal server error');
		}
	}

	static async deleteReport(req, res) {
		try {
			const { reportId } = req.params;
			const isExist = await Reports.findByPk(reportId);
			if (!isExist) {
				return errorResponse(res, 404, 'report does not extis');
			}
			await Reports.destroy({ where: { id: reportId } });
			return successResponse(res, 200, 'Report deleted');
		} catch (error) {
			console.log(error);
			return errorResponse(res, 500, 'server error');
		}
	}
}
