/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.seed = async function (knex) {
  // Deletes ALL existing entries
  await knex('friendship').del()
  await knex('friendship').insert([
    { friendship_id: 1, user_id: 1, friend_user_id: 2 },
    { friendship_id: 2, user_id: 2, friend_user_id: 3 },
    { friendship_id: 3, user_id: 1, friend_user_id: 3 },
  ])
}
