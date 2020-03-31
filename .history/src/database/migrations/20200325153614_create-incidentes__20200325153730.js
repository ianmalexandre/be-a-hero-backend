
exports.up = function(knex) {
    return knex.schema.createTable('incidents', function (table){
        table.increments();
        table.string('name').notNullable();
        table.string('whatsapp').notNullable();
        table.string('email').notNullable();
        table.string('city').notNullable();
        table.string('uf',2).notNullable();
      });
};

exports.down = function(knex) {
  
};
