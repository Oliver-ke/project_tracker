import models from '../database/model';
import { Op } from 'sequelize';
import { errorResponse, successResponse } from '../utils';

const { Projects } = models;

export default class ProjectController {
	static async getProjects(req, res) {
		try {
			const projects = await Projects.findAll();
			return successResponse(res, 200, 'projects', projects);
		} catch (error) {
			console.log(error);
			return errorResponse(res, 500, 'server error');
		}
	}
	static async getProjectQuery(req, res) {
		const key = Object.keys(req.query)[0];
		const value = Object.values(req.query)[0];
		try {
			const projects = await Projects.findAll({
				where: {
					[key]: {
						[Op.iLike]: `${value}%`,
					},
				},
			});
			return successResponse(res, 200, 'search result', projects);
		} catch (error) {
			console.log(error);
			return errorResponse(res, 500, 'server error');
		}
	}
	static async createProject(req, res) {
		const {
			LGA,
			community,
			category,
			state,
			location,
			projectType,
			projectDescription,
			budgetedCost,
			commitment,
		} = req.body;
		try {
			const newProject = await Projects.create({
				LGA,
				community,
				category,
				state,
				location,
				projectType,
				projectDescription,
				budgetedCost,
				commitment,
			});
			const response = newProject.toJSON();
			successResponse(res, 201, 'Project created', response);
		} catch (error) {
			console.log(error);
			errorResponse(res, 500, 'Internal server error');
		}
	}

	static async deleteProject(req, res) {
		const { id: projectId } = req.params;
		try {
			const project = await Projects.findByPk(projectId);
			if (!project) {
				return errorResponse(res, 404, 'Project does not exist');
			}
			await Projects.destroy({ where: { id: projectId } });
			return successResponse(res, 200, 'project deleted success');
		} catch (error) {
			console.log(error);
			return errorResponse(res, 500, 'server error');
		}
	}

	static async updateProject(req, res) {
		const { id: projectId } = req.params;
		try {
			const project = await Projects.findByPk(projectId);
			if (!project) {
				return errorResponse(res, 404, 'Project does not exist');
			}
			const update = await Projects.update(req.body, { where: { id: projectId } });
			return successResponse(res, 200, 'project updated', update);
		} catch (error) {
			console.log(error);
			return errorResponse(res, 500, 'server error');
		}
	}
}
