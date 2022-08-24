// Handle and Send the Error Response to Client
const handleErrorResponse = (res, message) => {
	let msg = '';
	if (message.message) {
		msg = message.message;
	} else {
		msg = message;
	}
	return res.send({
		status: 200,
		error: true,
		message: msg,
	});
};

// Handle and Send the Success Response to Client
const handleSuccessResponse = (status,res, data, message) => {
	return res.send({
		status,
		error: false,
		data,
		message,
	});
};

module.exports = {
	handleErrorResponse,
	handleSuccessResponse,
};
