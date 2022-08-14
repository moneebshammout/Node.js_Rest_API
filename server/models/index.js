const cls = require('cls-hooked');

const namespace = cls.createNamespace('my-very-own-namespace');
const { Sequelize } = require('sequelize');
const { sequelizeJoi, Joi } = require('sequelize-joi');

Sequelize.useCLS(namespace);

const sequelize = new Sequelize('todos_dev', 'postmoneeb', 'shammout123', {
  host: 'localhost',
  dialect: 'postgres',
  define: {
    freezeTableName: true,
  },
});

sequelizeJoi(sequelize);
const db = {};
db.Movie = require('./movie')(sequelize);

db.Sequelize = Sequelize;
db.sequelize = sequelize;
db.Joi = Joi;

module.exports = db;
