require('express-async-errors');
const express = require('express');
const cors = require('cors');
const winston = require('winston');
const errorHandler = require('./middleware/error-handler');
const errorSubscriber = require('./utilities/error-subscriber');
const router = require('./routes/index');

const app = express();

winston.add(new winston.transports.File({ filename: 'errorLogs.log' }));
errorSubscriber('unhandledRejection');
errorSubscriber('uncaughtException');

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(router);
app.use(errorHandler);

app.listen(3000, async () => {
  console.log('Running on port 3000');
});

module.exports = app;
