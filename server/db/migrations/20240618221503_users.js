/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export function up(knex) {
  return knex.schema.createTable('users', (table) => {
    table.increments('user_id'),
      table.string('auth0Id').notNullable(),
      table.varchar('username'),
      table.varchar('first_name'),
      table.varchar('last_name'),
      table.date('join_date'),
      table.date('birth_date'),
      table.varchar('user_email'),
      table.boolean('is_mentor')
  })
}

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export function down(knex) {
  return knex.schema.dropTable('users')
}
