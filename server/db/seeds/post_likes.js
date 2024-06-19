/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.seed = async function (knex) {
  // Deletes ALL existing entries
  await knex('post_likes').del()
  await knex('post_likes').insert([
    { post_likes_id: 1, user_id: 3, feed_post_id: 1 },
    { post_likes_id: 2, user_id: 3, feed_post_id: 2 },
    { post_likes_id: 3, user_id: 2, feed_post_id: 3 },
  ])
}
