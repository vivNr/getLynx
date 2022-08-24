const joi = require('joi');
const ApiError = require('../utility/ApiError');

const signupValidator = (req, res, next) => {
	const schema = joi.object({
		name: joi.string().required(),
		email: joi.string().required(),
		phone_number: joi.string().min(10).required(),
		password: joi.string().min(3).max(15).required(),
		password_confirmation: joi
			.any()
			.valid(joi.ref('password'))
			.required()
			.options({ messages: { 'any.only': 'password does not match' } }),
		profile_image: joi.string().allow(''),
		adminUUID: joi.string(),
	});
	const { error } = schema.validate(req.body);
	if (error) {
		throw ApiError.badRequest(error.details[0].message);
	}
	next();
};

const loginValidator = async (req, res, next) => {
	const schema = joi.object({
		email: joi.string().email().required(),
		password: joi.string().min(3).max(15).required(),
	});
	const { error } = schema.validate(req.body);
	if (error) {
		throw ApiError.badRequest(error.details[0].message);
	}
	next();
};
const resetPasswordValidator = (req, res, next) => {
	const schema = joi.object({
		oobCode: joi.string().required(),
		password: joi.string().required(),
	});
	const { error } = schema.validate(req.body);
	if (error) {
		throw ApiError.badRequest(error.details[0].message);
	}
	next();
};
const validateOtpValidator = (req, res, next) => {
	const schema = joi.object({
		email: joi.string().required(),
		otp: joi.string().required(),
		password: joi.string().required(),
	});
	const { error } = schema.validate(req.body);
	if (error) {
		throw ApiError.badRequest(error.details[0].message);
	}
	next();
};
const emailRequiredValidator = (req, res, next) => {
	const schema = joi.object({
		email: joi.string().required(),
	});
	const { error } = schema.validate(req.body);
	if (error) {
		throw ApiError.badRequest(error.details[0].message);
	}
	next();
};
const changePasswordValidator = (req, res, next) => {
	const schema = joi.object({
		oldPassword: joi.string().required(),
		newPassword: joi.string().required(),
	});
	const { error } = schema.validate(req.body);
	if (error) {
		throw ApiError.badRequest(error.details[0].message);
	}
	next();
};
module.exports = {
	signupValidator,
	loginValidator,
	resetPasswordValidator,
	validateOtpValidator,
	emailRequiredValidator,
	changePasswordValidator,
};
