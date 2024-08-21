/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export function up(knex) {
  return knex.schema.createTable('post_comments', (table) => {
    table.increments('id')
    table.integer('user_id')
    table.string('body')
    table.integer('parent_id')
    table.timestamp('created_at').defaultTo(knex.fn.now())
    table.integer('feed_post_id')
  })
}

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export function down(knex) {
  return knex.schema.dropTable('post_comments')
}
