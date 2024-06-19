/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export async function seed(knex) {
  // Deletes ALL existing entries
  await knex('mentor_mentee_relationships').del()
  await knex('mentor_mentee_relationships').insert([
    { relationship_id: 1, mentor_id: 1, mentee_id: 2 },
    { relationship_id: 2, mentor_id: 1, mentee_id: 3 },
  ])
}
