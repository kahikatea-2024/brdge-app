/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export async function seed(knex) {
  // Deletes ALL existing entries
  await knex('employers').del()
  await knex('employers').insert([
    {
      employer_id: 1,
      employer_company_name: 'swampco',
      employer_contact_email: 'shrek@swampco.com',
      employer_contact_name: 'Shrek',
      employer_contact_number: '0212322393',
    },
    {
      employer_id: 2,
      employer_company_name: 'farawyHomes',
      employer_contact_email: 'fiona@dragonkeep.com',
      employer_contact_name: 'Fiona',
      employer_contact_number: '0212326723',
    },
    {
      employer_id: 3,
      employer_company_name: 'Royal Castle',
      employer_contact_email: 'queenie@royalcastle',
      employer_contact_name: 'Queen',
      employer_contact_number: '0215882323',
    },
  ])
}
