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
      bio: "👋 Hello! I'm Shrek, a passionate web developer with [X] years of experience crafting clean and efficient code. My expertise lies in creating dynamic and responsive web applications that deliver a seamless user experience. \nI thrive on tackling complex challenges and turning them into elegant solutions. Whether it's building scalable backend systems or designing intuitive frontends, I'm dedicated to delivering high-quality results that exceed expectations.",
      avatar_image:
        'https://i.pinimg.com/236x/5e/71/0b/5e710bb38b1cae44a3cae02342248eae.jpg',
      cover_image:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTAs_TDUTeHiZQ1tqLJlvItaBOjcmRTeoSbHw&s',
      location: 'Far Far Away',
      website: 'swamp.com',
    },
    {
      profile_id: 2,
      user_id: 2,
      bio: "Hi there! I'm Fiona, a dedicated web developer with a focus on crafting intuitive and engaging user interfaces. With [X] years of experience in frontend development, I thrive on creating seamless digital experiences that blend functionality with aesthetics.\n🔧 I am passionate about leveraging the latest technologies and best practices to build responsive websites and web applications that not only meet but exceed client expectations. From conceptualization to deployment, I'm committed to delivering projects that are both visually appealing and user-friendly.",
      avatar_image:
        'https://upload.wikimedia.org/wikipedia/en/b/b9/Princess_Fiona.png',
      cover_image:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTAs_TDUTeHiZQ1tqLJlvItaBOjcmRTeoSbHw&s',
      location: 'Far Far Away',
      website: 'swamp.com',
    },
    {
      profile_id: 3,
      user_id: 3,
      bio: "👋 Hello! I'm Donkey, a results-driven web developer specializing in backend technologies. With [X] years of hands-on experience in building robust server-side applications and APIs, I am dedicated to creating scalable solutions that power seamless digital experiences.\n🔧 I thrive on solving complex technical challenges and optimizing performance to deliver high-performing backend solutions. From database architecture to API integrations, I am committed to ensuring reliability and efficiency in every project I undertake.",
      avatar_image:
        'https://upload.wikimedia.org/wikipedia/en/6/6c/Donkey_%28Shrek%29.png',
      cover_image:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTAs_TDUTeHiZQ1tqLJlvItaBOjcmRTeoSbHw&s',
      location: 'Far Far Away',
      website: 'swamp.com',
    },
  ])
}
