/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export function up(knex) {
  return knex.schema.createTable('favorite_songs', function (table) {
    table.increments();
    table.string('name');
    table.string('artist');
    table.string('album');
    table.boolean('listened')
  });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export function down(knex) {
  return knex.schema.dropTable('favorite_songs');
};
