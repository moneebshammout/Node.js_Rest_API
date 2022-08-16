module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Movies', {
      id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        primaryKey: true,
      },
      adult: {
        type: Sequelize.BOOLEAN,
        allowNull: false,
      },
      title: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      backdrop_path: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      genre_ids: {
        type: Sequelize.ARRAY(Sequelize.INTEGER),
        allowNull: false,
      },
      original_language: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      original_title: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      overview: {
        type: Sequelize.TEXT,
        allowNull: false,
      },
      popularity: {
        type: Sequelize.DOUBLE,
        allowNull: false,
      },
      poster_path: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      release_date: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      video: {
        type: Sequelize.BOOLEAN,
        allowNull: false,
      },

      vote_average: {
        type: Sequelize.DOUBLE,
        allowNull: false,
      },
      vote_count: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
    });
  },
  async down(queryInterface) {
    await queryInterface.dropTable('Movies');
  },
};
