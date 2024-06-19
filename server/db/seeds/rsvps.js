/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export async function seed(knex) {
  // Deletes ALL existing entries
  await knex('rsvps').del()
  await knex('rsvps').insert([
    { rsvp_id: 1, user_id: 1, event_id: 1, rsvp_status: 'Going' },
    { rsvp_id: 2, user_id: 2, event_id: 1, rsvp_status: 'Going' },
    { rsvp_id: 3, user_id: 3, event_id: 1, rsvp_status: 'Going' },
  ])
}
