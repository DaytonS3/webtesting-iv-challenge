const db = require("./dbConfig");

module.exports = {
  getCars: () => {
    return db("cars");
  },

  addCar: car => {
    return db("cars").insert(car);
  },

  deleteCar: id => {
    return db("cars")
      .where("id", Number(id))
      .del();
  }
};
