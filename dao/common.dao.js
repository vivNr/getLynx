const db = require('../database/db');
const { Op } = require('sequelize');
const create = async (data, model) => db[model].create(data);

const createOrUpdate = async (data, model, whereClause) => {
	const resp = await db[model].findOne({ where: whereClause });
	if (resp) {
		return db[model].update(data, { where: whereClause });
	} else {
		return create(data, model);
	}
};
const updateView = async ( model,id) => {
	  await db[model].findOne({ where: whereClause });
		return db[model].update(data, { where: whereClause });

};

const findSortPaginationCount = async (pageInfo, sort, option, model) => {
	return db[model].findAll({
		where: option,
		distinct: true,
		limit: pageInfo.limit,
		offset: pageInfo.skip,
		order: [sort],
	});
};

const findById = async (id, model) => db[model].findOne({ where: { id } });


const updatById = async (id, updatedData, model) =>
	db[model].update(updatedData, { where: { id } });



const deleteById = async (id, model) => db[model].destroy({ where: { id } });

module.exports = {
	create,
	createOrUpdate,
	findSortPaginationCount,
	findById,
	updatById,
	deleteById,
	updateView
};
