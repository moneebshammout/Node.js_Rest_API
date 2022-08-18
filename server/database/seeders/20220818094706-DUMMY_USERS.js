module.exports = {
  // eslint-disable-next-line no-unused-vars
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      'User',
      [
        {
          id: 1,
          email: 'moneeb@yahoo.com',
          password:
            '$2b$10$/jVJcinpu.uZYFMTbPuaW./OE6X1wcpHOKbmOp2OhPA0CxG7tOf5e',
          salt: '$2b$10$/jVJcinpu.uZYFMTbPuaW.',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: 3,
          email: 'moneebe@gmail.com',
          password:
            '$2b$10$I6fjryeZoMpbL6S5eHhm2OWADUNEzQmQbBReyUPKftIyGvkDaFDbe',
          salt: '$2b$10$I6fjryeZoMpbL6S5eHhm2O',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {},
    );
  },

  async down(queryInterface, Sequelize) {
    const { Op } = Sequelize;
    await queryInterface.bulkDelete('User', { id: { [Op.ne]: [-1] } }, {});
  },
};
