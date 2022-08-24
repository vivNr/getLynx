const fs = require('fs');
const path = require('path');
const basename = path.basename(__filename);
const Sequelize = require('sequelize');
const dbConfig = require('./dbConfig');

const config = {
	host: dbConfig.db_host,
	port: dbConfig.db_port,
	dialect: dbConfig.db_dialect || 'mysql',
	operatorsAliases: 0,
	define: {
		freezeTableName: true,
		underscored: false,
		undesrcoredAll: false,
		timestamps: false,
	},
	pool: {
		max: dbConfig.db_pool.max,
		min: dbConfig.db_pool.min,
		acquire: dbConfig.db_pool.acquire,
		idle: dbConfig.db_pool.idle,
	},
	logging: function (str) {
		// console.log(str);
	},
};
const sequelize = new Sequelize(
	dbConfig.db_name,
	dbConfig.db_user_name,
	dbConfig.db_password,
	config
);

const db = {};
fs.readdirSync(path.join(__dirname, 'models'))
	.filter(file => {
		return file.indexOf('.') !== 0 && file !== basename && file.slice(-3) === '.js';
	})
	.forEach(file => {
		const model = require(path.join(__dirname, 'models', file))(sequelize, Sequelize.DataTypes);
		db[model.name] = model;
	});

db.sequelize = sequelize;
db.Sequelize = Sequelize;

module.exports = db;
