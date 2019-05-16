const db = require("./dbConfig");

module.exports = {
  getCars: () => {
    return db("cars");
  }
};
