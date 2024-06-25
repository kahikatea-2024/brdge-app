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
      bio: "Hello! I'm Shrek, a seasoned web developer with [X] years of experience. I specialize in crafting clean, efficient code and creating dynamic, responsive web applications for seamless user experiences. I excel in solving complex challenges with elegant solutions, whether it's building scalable backend systems or designing intuitive frontends. My dedication ensures high-quality results that surpass expectations.",
      avatar_image:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTAs_TDUTeHiZQ1tqLJlvItaBOjcmRTeoSbHw&s',
      cover_image:
        'https://uproxx.com/wp-content/uploads/2023/02/hrek-tf-uproxx.jpg?w=1600&h=500&crop=1',
      location: 'Far Far Away',
      email: 'shrek@exampleswamp.com',
    },
    {
      profile_id: 2,
      user_id: 2,
      bio: "Hello! I'm Fiona, a frontend web developer with [X] years of experience. I specialize in crafting intuitive user interfaces that blend functionality with aesthetics. Passionate about leveraging the latest technologies, I create responsive websites and applications that exceed client expectations from concept to deployment.",
      avatar_image:
        'https://upload.wikimedia.org/wikipedia/en/b/b9/Princess_Fiona.png',
      cover_image:
        'https://static0.gamerantimages.com/wordpress/wp-content/uploads/2024/04/shrek-2-far-far-away.jpg',
      location: 'Far Far Away',
      email: 'fiona@exampleswamp.com',
    },
    {
      profile_id: 3,
      user_id: 3,
      bio: "Hello! I'm Donkey, a backend web developer with [X] years of experience specializing in building robust server-side applications and APIs. I excel in creating scalable solutions that drive seamless digital experiences. Passionate about solving complex challenges and optimizing performance, I ensure reliability and efficiency from database architecture to API integrations.",
      avatar_image:
        'https://upload.wikimedia.org/wikipedia/en/6/6c/Donkey_%28Shrek%29.png',
      cover_image:
        'https://qph.cf2.quoracdn.net/main-qimg-889bc3c990171ce2225ecdbb0a13d362-pjlq',
      location: 'Far Far Away',
      email: 'donkey@exampleswamp.com',
    },
  ])
}
