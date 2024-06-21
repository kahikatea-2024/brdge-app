/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export function up(knex) {
  return knex.schema.createTable('user_background', (table) => {
    table.increments('user_background_id')
    table.integer('user_id')
    table.integer('background_id')
    table.varchar('duration')
    table.varchar('position_or_qualification')
    table.boolean('isExperience')
  })
}

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export function down(knex) {
  return knex.schema.dropTable('user_background')
}
