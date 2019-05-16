exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex("cars")
    .truncate()
    .then(function() {
      // Inserts seed entries
      return knex("cars").insert([
        { id: 1, make: "Acura", model: "MDX", year: 2018 },
        { id: 2, make: "BMW", model: "M3", year: 2018 },
        { id: 3, make: "Tesla", model: "Model 3", year: 2018 }
      ]);
    });
};
