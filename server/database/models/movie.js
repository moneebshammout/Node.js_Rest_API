const { Model, DataTypes } = require('sequelize');

module.exports = (sequelize) => {
  class Movie extends Model {}
  Movie.init(
    {
      id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
      },
      adult: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
      },
      title: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      backdrop_path: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      genre_ids: {
        type: DataTypes.ARRAY(DataTypes.INTEGER),
        allowNull: false,
      },
      original_language: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      original_title: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      overview: {
        type: DataTypes.TEXT,
        allowNull: false,
      },
      popularity: {
        type: DataTypes.DOUBLE,
        allowNull: false,
      },
      poster_path: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      release_date: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      video: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
      },

      vote_average: {
        type: DataTypes.DOUBLE,
        allowNull: false,
      },
      vote_count: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
    },
    {
      sequelize,
      modelName: 'Movie',
    },
  );
  return Movie;
};
