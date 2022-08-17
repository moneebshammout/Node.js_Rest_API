const { sequelize } = require('../database/models/index');
const { toJson } = require('../utilities/methods');

/**
 * Get all records from a table in database.
 *
 * @param {string} tableName Sequelize model name.
 * @param {object} attributes Attributes to be sent.
 *
 * @return {Object<string>} JSON response.
 */
const getAll = async (tableName, attributes) => {
  const response = await sequelize.models[tableName].findAll(attributes);
  return toJson(response);
};

/**
 * Create a single record in the database.
 *
 * @param {string} tableName Sequelize model name.
 * @param {object} data Record Data.
 *
 * @return {Object<string>} JSON response.
 */
const createOne = async (tableName, data) => {
  const response = await sequelize.models[tableName].create(data);
  return toJson(response);
};

/**
 * Update a single record in the database.
 *
 * @param {string} tableName Sequelize model name.
 * @param {object} updatedData Data to be changed.
 * @param {object} whereOption Condition to change for.
 *
 * @return {Object<string>} JSON response.
 */
const update = async (tableName, updatedData, whereOption) => {
  const response = await sequelize.models[tableName].update(
    updatedData,
    whereOption,
  );
  return toJson(response);
};

/**
 * Delete records from the database.
 *
 * @param {string} tableName Sequelize model name.
 * @param {object} whereOption Condition for deleting rows.
 *
 * @return {Object<string>} JSON response.
 */
const destroy = async (tableName, whereOption) => {
  const response = await sequelize.models[tableName].destroy(whereOption);
  return toJson(response);
};

module.exports = {
  getAll,
  update,
  createOne,
  destroy,
};
