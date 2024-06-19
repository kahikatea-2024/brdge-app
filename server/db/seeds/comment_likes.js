/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.seed = async function (knex) {
  // Deletes ALL existing entries
  await knex('comment_likes').del()
  await knex('comment_likes').insert([
    { comment_likes_id: 1, user_id: 1, comment_id: 1 },
    { comment_likes_id: 2, user_id: 1, comment_id: 2 },
    { comment_likes_id: 3, user_id: 1, comment_id: 3 },
  ])
}
