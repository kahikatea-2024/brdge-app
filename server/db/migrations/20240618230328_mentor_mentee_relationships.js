/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export function up(knex) {
  return knex.schema.createTable('mentor_mentee_relationships', (table) => {
    table.increments('relationship_id')
    table.integer('mentor_id')
    table.integer('mentee_id')
  })
}

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export function down(knex) {
  return knex.schema.dropTable('mentor_mentee_relationships')
}
