
exports.up = function(knex) {
  knex.schema.createTable('ongs', function (table){
    table.string('id').primary();
    table.string('name').notNullable();
  });

};

exports.down = function(knex) {
  
};
