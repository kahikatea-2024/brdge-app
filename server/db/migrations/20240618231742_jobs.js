/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export function up(knex) {
  return knex.schema.createTable('jobs', (table) => {
    table.increments('job_id')
    table.varchar('job_title')
    table.varchar('company')
    table.integer('employer_id')
    table.date('posting_date')
    table.varchar('job_contract_type')
    table.varchar('job_description')
  })
}

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export function down(knex) {
  return knex.schema.dropTable('jobs')
}
