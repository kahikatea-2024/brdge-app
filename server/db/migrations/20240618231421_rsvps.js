/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export function up(knex) {
  return knex.schema.createTable('rsvps', (table) => {
    table.increments('rsvp_id')
    table.integer('user_id')
    table.integer('event_id')
    table.varchar('rsvp_status')
  })
}

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export function down(knex) {
  return knex.schema.dropTable('rsvps')
}
