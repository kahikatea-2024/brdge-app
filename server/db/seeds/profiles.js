/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export async function seed(knex) {
  // Deletes ALL existing entries
  await knex('profiles').del()
  await knex('profiles').insert([
    {
      profile_id: 1,
      user_id: 1,
      bio: 'blah blah',
      avatar_image:
        'https://i.pinimg.com/236x/5e/71/0b/5e710bb38b1cae44a3cae02342248eae.jpg',
      location: 'Far Far Away',
      website: 'swamp.com',
    },
    {
      profile_id: 2,
      user_id: 2,
      bio: 'blah blah',
      avatar_image:
        'https://upload.wikimedia.org/wikipedia/en/b/b9/Princess_Fiona.png',
      location: 'Far Far Away',
      website: 'swamp.com',
    },
    {
      profile_id: 3,
      user_id: 3,
      bio: 'blah blah',
      avatar_image:
        'https://upload.wikimedia.org/wikipedia/en/6/6c/Donkey_%28Shrek%29.png',
      location: 'Far Far Away',
      website: 'swamp.com',
    },
  ])
}
