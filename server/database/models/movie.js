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
      title: {
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
      vote_average: {
        type: DataTypes.DOUBLE,
        allowNull: false,
      },
      createdAt: {
        allowNull: false,
        type: DataTypes.DATE,
      },
      updatedAt: {
        allowNull: false,
        type: DataTypes.DATE,
      },
    },
    {
      sequelize,
      modelName: 'Movie',
    },
  );
  return Movie;
};
