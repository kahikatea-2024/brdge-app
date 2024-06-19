/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.seed = async function (knex) {
  // Deletes ALL existing entries
  await knex('profile_websites').del()
  await knex('profile_websites').insert([
    { profile_website_id: 1, user_id: 1, website_url: 'github.com' },
    { profile_website_id: 2, user_id: 1, website_url: 'linkedin.com' },
    { profile_website_id: 3, user_id: 1, website_url: 'glassdoor.com' },
  ])
}
