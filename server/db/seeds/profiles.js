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
        'https://i.pinimg.com/236x/5e/71/0b/5e710bb38b1cae44a3cae02342248eae.jpg',
      cover_image:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTAs_TDUTeHiZQ1tqLJlvItaBOjcmRTeoSbHw&s',
      location: 'Far Far Away',
      email: 'shrek@exampleswamp.com',
    },
    {
      profile_id: 2,
      user_id: 2,
      bio: "Hello! I'm Fiona, a frontend web developer with [X] years of experience. I specialize in crafting intuitive user interfaces that blend functionality with aesthetics. Passionate about leveraging the latest technologies, I create responsive websites and applications that exceed client expectations from concept to deployment.",
      avatar_image:
        'https://64.media.tumblr.com/abdba580b7f46e44590d76ac172087ef/tumblr_inline_pdmkzmXp8x1s442te_640.jpg',
      cover_image:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTAs_TDUTeHiZQ1tqLJlvItaBOjcmRTeoSbHw&s',
      location: 'Far Far Away',
      email: 'fiona@exampleswamp.com',
    },
    {
      profile_id: 3,
      user_id: 3,
      bio: "Hello! I'm Donkey, a backend web developer with [X] years of experience specializing in building robust server-side applications and APIs. I excel in creating scalable solutions that drive seamless digital experiences. Passionate about solving complex challenges and optimizing performance, I ensure reliability and efficiency from database architecture to API integrations.",
      avatar_image:
        'https://th.bing.com/th/id/OIP.X3gID7u9zykX0pgqXfbeLQAAAA?rs=1&pid=ImgDetMain',
      cover_image:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTAs_TDUTeHiZQ1tqLJlvItaBOjcmRTeoSbHw&s',
      location: 'Far Far Away',
      email: 'donkey@exampleswamp.com',
    },
  ])
}
