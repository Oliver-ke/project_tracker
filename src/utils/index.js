import { successResponse, errorResponse } from './responses';
import * as bcrypt from './bcrypt';
import Jwt from './jwt';
import strategyCallback from './passportStrategyCallback';
import getCallbackUrls from './getCallbackUrls';
import emailTemplatesFunction from './emailTemplateFunction';

const { generateToken, verifyToken } = Jwt;
const { hashPassword, comparePassword } = bcrypt;

export {
	Jwt,
	bcrypt,
	hashPassword,
	generateToken,
	verifyToken,
	comparePassword,
	successResponse,
	errorResponse,
	strategyCallback,
	getCallbackUrls,
	emailTemplatesFunction,
};
