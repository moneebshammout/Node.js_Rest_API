const { DataTypes } = require('sequelize');
const { Joi } = require('sequelize-joi');

module.exports = (sequelize) =>
  sequelize.define(
    'Movie',
    {
      id: {
        type: DataTypes.INTEGER,
        schema: Joi.number().required(),
        allowNull: false,
        primaryKey: true,
      },
      adult: {
        type: DataTypes.BOOLEAN,
        schema: Joi.number().required(),
        allowNull: false,
      },
      title: {
        type: DataTypes.STRING,
        schema: Joi.string().required(),
        allowNull: false,
      },
      backdrop_path: {
        type: DataTypes.STRING,
        schema: Joi.string().required(),
        allowNull: false,
      },
      genre_ids: {
        type: DataTypes.ARRAY(DataTypes.INTEGER),
        schema: Joi.array().required(),
        allowNull: false,
      },
      original_language: {
        type: DataTypes.STRING,
        schema: Joi.string().required(),
        allowNull: false,
      },
      original_title: {
        type: DataTypes.STRING,
        schema: Joi.string().required(),
        allowNull: false,
      },
      overview: {
        type: DataTypes.TEXT,
        schema: Joi.string().required(),
        allowNull: false,
      },
      popularity: {
        type: DataTypes.DOUBLE,
        schema: Joi.number().required(),
        allowNull: false,
      },
      poster_path: {
        type: DataTypes.STRING,
        schema: Joi.string().required(),
        allowNull: false,
      },
      release_date: {
        type: DataTypes.STRING,
        schema: Joi.string().required(),
        allowNull: false,
      },
      video: {
        type: DataTypes.BOOLEAN,
        schema: Joi.boolean().required(),
        allowNull: false,
      },

      vote_average: {
        type: DataTypes.DOUBLE,
        schema: Joi.number().required(),
        allowNull: false,
      },
      vote_count: {
        type: DataTypes.INTEGER,
        schema: Joi.number().required(),
        allowNull: false,
      },
    },
    {},
  );
