const forgeResponse = (res, statusCode, message, data = null, token = null) => {
	const response = {
		status: statusCode,
		message,
	};

	if (data) response.data = data;
	if (data && token) response.data.token = token;

	return res.status(statusCode).json(response);
};

const successResponse = (res, statusCode, message, userData, token) =>
	forgeResponse(res, statusCode, message, userData, token);

const errorResponse = (res, statusCode, message) => forgeResponse(res, statusCode, message);

export { successResponse, errorResponse };
