const { Sequelize, DataTypes } = require("sequelize");

const connection = new Sequelize("shoes", "root", "root", {
  host: "localhost",
  dialect: "mysql",
});

const User = require("./user")(connection, DataTypes);
const Product = require("./product")(connection, DataTypes);

connection
  .authenticate()
  .then(() => {
    console.log("Sequelize is connected");
  })
  .catch((error) => {
    console.error("Error authenticating", error);
  });

User.hasMany(Product);
Product.belongsTo(User);

/* connection.sync({ alter: true })
  .then(() => {
    console.log("All models were synchronized successfully.");
  })
  .catch((error) => {
    console.error("Error synchronizing models", error);
  }); */

module.exports = { User, Product, connection };

