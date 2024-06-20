/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export function up(knex) {
  return knex.schema.createTable('feed_posts', (table) => {
    table.increments('feed_post_id')
    table.integer('user_id')
    table.varchar('content')
    table.varchar('timestamp')
    table.varchar('image_url')
  })
}

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export function down(knex) {
  return knex.schema.dropTable('feed_posts')
}
