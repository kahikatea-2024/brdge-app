/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export function up(knex) {
  return knex.schema.createTable('employers', (table) => {
    table.increments('employer_id')
    table.varchar('employer_company_name')
    table.varchar('employer_contact_email')
    table.varchar('employer_contact_name')
    table.varchar('employer_contact_number')
  })
}

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export function down(knex) {
  return knex.schema.dropTable('employers')
}
