exports.up = function(knex, Promise) {
  return knex.schema.createTable("cars", tbl => {
    tbl.increments();
    tbl.string("make").notNullable();
    tbl.string("model").notNullable();
    tbl.integer("year").notNullable();
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExist("cars");
};
