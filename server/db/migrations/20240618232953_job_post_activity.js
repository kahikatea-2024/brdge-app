/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export function up(knex) {
  return knex.schema.createTable('job_post_activity', (table) => {
    table.increments('job_post_activity_id')
    table.integer('user_id')
    table.integer('job_id')
    table.date('application_date')
  })
}

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export function down(knex) {
  return knex.schema.dropTable('job_post_activity')
}
