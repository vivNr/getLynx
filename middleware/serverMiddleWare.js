const express = require('express');
const app = require('../app');
const helmet = require('helmet');
app.use(function (req, res, next) {
	/* Access allowed to Vivek's IP
	if((req.headers['postman-token'] !==undefined || req.headers['postman-token'] != null || req.headers['postman-token'] > 0) && !(req.ip.includes('122.163.176.191') || req.ip.includes('::1') )) {
		res.send({'message': "Not Authorized"});
		return false;
	}*/

	res.header('Access-Control-Allow-Origin', '*');
	res.header('Access-Control-Allow-Methods', 'GET, POST, PATCH, PUT, DELETE, OPTIONS');
	res.header(
		'Access-Control-Allow-Headers',
		'Origin, Content-Type, X-Auth-Token, Accept, Authorization, X-Request-With, Access-Control-Request-Method, Access-Control-Request-Headers'
	);
	next();
});

// Logging Middleware

var num = 0;
app.use(function (req, res, next) {
	var ip = req.headers['x-forwarded-for'] || req.connection.remoteAddress;
	var method = req.method;
	var url = req.url;
	// console.log('- - - - - - - - - - - -\n' + ++num + '. IP ' + ip + ' ' + method + ' ' + url + '\n');
	next();
});

app.use(express.json({ limit: '20mb' }));
app.use(express.urlencoded({ extended: true }));
app.use(helmet());
