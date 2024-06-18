/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export function up(knex) {
  return knex.schema.createTable('events', (table) => {
    table.increments('event_id')
    table.integer('event_organiser_id')
    table.varchar('event_name')
    table.varchar('event_description')
    table.time('event_time')
    table.varchar('event_location')
    table.date('event_date')
  })
}

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export function down(knex) {
  return knex.schema.dropTable('events')
}
