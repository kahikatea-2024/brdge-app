/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export function up(knex) {
  return knex.schema.createTable('feed_posts', (table) => {
    table.increments('feed_post_id')
    table.integer('user_id')
    table.varchar('content')
    table.timestamp('timestamp').defaultTo(knex.fn.now())
    table.varchar('image_url')
    table.varchar('username')
    table.varchar('avatar_image')
    table.varchar('poster_auth0Id')
  })
}

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export function down(knex) {
  return knex.schema.dropTable('feed_posts')
}
