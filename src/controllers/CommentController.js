import models from '../database/model';
import { errorResponse, successResponse } from '../utils';

const { Comments } = models;

export default class CommentController {
	static async createComment(req, res) {
		const { userId, firstName, lastName } = req.user;
		try {
			const { projectId } = req.params;
			const { comment } = req.body;
			const newComment = await Comments.create({
				projectId,
				comment,
				authorName: `${firstName} ${lastName}`,
				userId,
			});
			const response = newComment.toJSON();
			return successResponse(res, 201, 'comment created', response);
		} catch (error) {
			console.log(error);
			errorResponse(res, 500, 'server error');
		}
	}

	static async getProjectComments(req, res) {
		try {
			const { projectId } = req.params;
			const projectComments = await Comments.findAll({
				where: { projectId },
			});
			return successResponse(res, 200, 'success', projectComments);
		} catch (error) {
			console.log(error);
			return errorResponse(res, 500, 'internal server error');
		}
	}

	static async deleteComment(req, res) {}
}
