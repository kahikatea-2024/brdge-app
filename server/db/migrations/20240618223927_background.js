/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export function up(knex) {
  return knex.schema.createTable('background', (table) => {
    table.increments('background_id')
    table.boolean('is_education')
    table.boolean('is_experience')
    table.varchar('logo_url')
    table.varchar('name_of_place')
    table.varchar('location')
  })
}

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export function down(knex) {
  return knex.schema.dropTable('background')
}
