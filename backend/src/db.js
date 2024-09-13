const { Sequelize } = require("sequelize");
require("dotenv").config();
const { DB_USER, DB_PASSWORD, DB_HOST, DB_NAME } = process.env;

const CvModel = require("./models/cv");

const sequelize = new Sequelize(
  `postgres://${DB_USER}:${DB_PASSWORD}@${DB_HOST}/${DB_NAME}`,
  {
    logging: false,
    native: false,
  }
);

CvModel(sequelize);

const { Cv } = sequelize.models;

module.exports = {
  conn: sequelize,
  Cv,
};
