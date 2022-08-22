const { Model } = require('sequelize');

/**
 * Over riding model class to add custom methods.
 */
class BaseModel extends Model {
  /**
   * Get all records from a table in database.
   *
   * @param {object} attributes Attributes to be sent.
   *
   * @return {object.<string>} JSON response.
   */
  static async getAll(attributes) {
    const response = await this.findAll(attributes);
    return response;
  }

  /**
   * Get one record from a table in database.
   *
   * @param {object} attributes Attributes to be sent.
   *
   * @return {object.<string>} JSON response.
   */
  static async getOne(attributes) {
    const response = await this.findOne(attributes);
    return response;
  }

  /**
   * Get one page records from the database.
   *
   * @param {Array.<string>} order List of order by columns.
   * @param {number} limit Max records per page.
   * @param {number} pageNumber
   *
   * @return {object.<string>} JSON response.
   */
  static async getOnePage(order, limit, pageNumber) {
    const response = await this.findAll({
      offset: (pageNumber - 1) * limit,
      limit,
      order,
      raw: true,
    });
    return response;
  }

  /**
   * Create a single record in the database.
   *
   * @param {object} data Record Data.
   *
   * @return {object.<string>} JSON response.
   */
  static async createOne(data) {
    const response = await this.create(data);
    return JSON.stringify(response, null, 2);
  }

  /**
   * Update records in the database.
   *
   * @param {object} updatedData Data to be changed.
   * @param {object} whereOption Condition to change for.
   *
   * @return {object.<string>} JSON response.
   */
  static async update(updatedData, whereOption) {
    const response = await this.update(updatedData, whereOption);
    return response;
  }

  /**
   * Delete records from the database.
   *
   * @param {object} whereOption Condition for deleting rows.
   *
   * @return {object.<string>} JSON response.
   */
  static async destroyRecord(whereOption) {
    const response = await this.destroy(whereOption);
    return response;
  }
}

module.exports = BaseModel;
