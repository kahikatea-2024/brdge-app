/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export function up(knex) {
  return knex.schema.createTable('post_comments', (table) => {
    table.increments('comment_id')
    table.integer('feed_post_id')
    table.integer('user_id')
    table.varchar('content')
    table.varchar('timestamp')
  })
}

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export function down(knex) {
  return knex.schema.dropTable('post_comments')
}
