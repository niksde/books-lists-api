const Sequelize = require("sequelize");
const config = require("config");

module.exports = function() {
  const db = config.get("db");
  console.log(db);
  const connection = new Sequelize(db);

  connection
    .authenticate()
    .then(() => {
      console.log(
        "Connection to postgres server has established successfully."
      );
    })
    .catch(function(err) {
      console.log("Unable to connect to the database:", err);
    });
};
