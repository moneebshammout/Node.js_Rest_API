module.exports = {
  // eslint-disable-next-line no-unused-vars
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      'user',
      [
        {
          id: 1,
          email: 'monesdfsdeb@yahoo.com',
          password:
            '$2b$10$/jVJcinpu.uZYFMTbPuaW./OE6X1wcpHOKbmOp2OhPA0CxG7tOf5e',
          salt: '$2b$10$/jVJcinpu.uZYFMTbPuaW.',
        },
        {
          id: 2,
          email: 'moneebe@gssmail.com',
          password:
            '$2b$10$I6fjryeZoMpbL6S5eHhm2OWADUNEzQmQbBReyUPKftIyGvkDaFDbe',
          salt: '$2b$10$I6fjryeZoMpbL6S5eHhm2O',
        },
      ],
      {},
    );
  },

  async down(queryInterface, Sequelize) {
    const { Op } = Sequelize;
    await queryInterface.bulkDelete('user', { id: { [Op.ne]: [-1] } }, {});
  },
};
