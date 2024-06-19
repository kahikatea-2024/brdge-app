/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export async function seed(knex) {
  // Deletes ALL existing entries
  await knex('jobs').del()
  await knex('jobs').insert([
    {
      job_id: 1,
      job_title: 'Junior Dev',
      company: 'swampco',
      employer_id: 1,
      posting_date: '2024-06-19',
      job_contract_type: 'Fulltime',
      job_description: 'keep people out of the swamp',
    },
    {
      job_id: 2,
      job_title: 'Junior Dev',
      company: 'farawayHomes',
      employer_id: 2,
      posting_date: '2024-06-19',
      job_contract_type: 'Fulltime',
      job_description: 'save the princess',
    },
    {
      job_id: 3,
      job_title: 'Junior Dev',
      company: 'Royal Castle',
      employer_id: 3,
      posting_date: '2024-06-19',
      job_contract_type: 'Fulltime',
      job_description: 'kiss the frog king',
    },
  ])
}
