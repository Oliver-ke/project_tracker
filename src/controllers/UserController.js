import models from '../database/model';
import * as services from '../services';

import { hashPassword, generateToken, successResponse, errorResponse, Jwt, bcrypt } from '../utils/index';

const { Users } = models;

export default class UserController {
	static async registerUser(req, res) {
		const { name: firstName, email } = req.body;
		try {
			const userExits = await Users.findOne({ where: { email } });
			if (userExits) {
				return errorResponse(res, 403, 'User already exist');
			}
			const passKey = Math.random().toString(36).substring(2, 15);
			// refused hasing password
			const newUser = await Users.create({ firstName, email, password: passKey });
			const response = newUser.toJSON();
			delete response.password;
			await services.sendEmail(email, 'confirmAccount', { firstName, code: passKey });
			return successResponse(res, 201, 'Account created please verify', response);
		} catch (error) {
			console.log(error);
			return errorResponse(res, 500, 'Server error');
		}
	}

	static async signInUser(req, res) {
		try {
			const { email, password } = req.body;
			const user = await Users.findOne({ where: { email } });
			if (!user) {
				return errorResponse(res, 401, 'Invalid credencial');
			}
			const { firstName, lastName, isVerified, id: userId } = user.dataValues;

			if (!isVerified) {
				return errorResponse(res, 401, 'Account not verified');
			}
			const isPasswordValid = await bcrypt.comparePassword(user.password, password);

			if (!isPasswordValid) {
				return errorResponse(res, 401, 'Invalid credentials');
			}

			const response = {
				firstName,
				lastName,
			};
			const token = await Jwt.generateToken({ userId, firstName, lastName });
			return successResponse(res, 200, 'success', response, token);
		} catch (error) {
			console.log(error);
			return errorResponse(res, status.error, messages.signIn.error);
		}
	}

	static async verifyUser(req, res) {
		const { code, password } = req.body;
		try {
			const user = await Users.findOne({ where: { password: code } });
			if (user) {
				const hashed = hashPassword(password);
				const newUser = await Users.update(
					{
						password: hashed,
						isVerified: true,
					},
					{ where: { email: user.dataValues.email } },
				);
				delete user.password;
				const response = user.dataValues;
				const token = await generateToken({ userId: user.dataValues.id });
				return successResponse(res, 200, 'logged in', response, token);
			}
			return errorResponse(res, 401, 'Invalid code, or code has already been used');
		} catch (error) {
			console.log(error);
			return errorResponse(res, 500, 'Internal server error');
		}
	}
}
