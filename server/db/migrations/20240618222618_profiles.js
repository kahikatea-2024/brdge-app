/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export function up(knex) {
  return knex.schema.createTable('profiles', (table) => {
    table.increments('profile_id'),
      table.integer('user_id'),
      table.varchar('bio'),
      table.varchar('avatar_image'),
      table.varchar('cover_image')
    table.varchar('location'), table.varchar('email')
  })
}

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export function down(knex) {
  return knex.schema.dropTable('profiles')
}
