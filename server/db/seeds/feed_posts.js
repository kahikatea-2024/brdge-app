/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export async function seed(knex) {
  // Deletes ALL existing entries
  await knex('feed_posts').del()
  await knex('feed_posts').insert([
    {
      feed_post_id: 1,
      user_id: 2,
      content: `Hey, hey, hey! Donkey here, reporting live from Shreks swamp. Guess what? Were knee-deep in CODING! Shreks debuggin like a pro, Fionas cracking algorithms left and right, and Im still tryin to figure out if &quot;honk&quot; counts as code. Join us for pixel-powered fun and plenty of laughs in Far, Far Away! #DonkeysCodingChronicles #SwampyTechAdventure`,
      timestamp: '2024-06-20 10:42:33',
      image_url:
        'https://w0.peakpx.com/wallpaper/881/646/HD-wallpaper-shrek-donkey-princess-princess-fiona-dragon-fire-background-shrek.jpg',
    },
    {
      feed_post_id: 2,
      user_id: 3,
      content: `Hey there, coder! Ever thought about variables like food? Oh, I love food! Think of variables as your favorite snacks. You can name 'em anything you like. Want to store a number? Call it numCookies. Got a word in mind? Name it myFavoriteQuote. Just remember to be clear so you don't end up eating cake when you wanted waffles! Variables are the tasty morsels in your code recipe!`,
      timestamp: '2024-06-20 10:55:33',
      image_url:
        'https://static1.moviewebimages.com/wordpress/wp-content/uploads/article/VcBaOCD8tXLaRk7uzyYUoMUHLJnh4F.jpg',
    },
    {
      feed_post_id: 3,
      user_id: 1,
      content: `Alright, listen up, you lot. Loops in coding are like walking through a swamp. Sometimes, you've gotta keep on going until you find what you're looking for. A for loop is like counting the steps – you know exactly how many you need. An while loop is more like wandering around until you see a familiar tree. Either way, keep your wits about you and don't get lost. And remember, always have a good reason to get out of that loop – otherwise, you'll be stuck in the muck forever!`,
      timestamp: '2024-06-20 10:56:33',
      image_url: '../../../public/images/shrekdev.webp',
    },
    {
      feed_post_id: 4,
      user_id: 1,
      content: `Debugging? It's like cleaning up after a feast. You've got crumbs everywhere, and you need to find out where the smell is coming from. Sometimes, it's a tiny error – a missing semicolon or a misspelled word. Other times, it's like an ogre's layer of bugs. You need patience and a good nose for trouble. Trace your steps, check each line, and don’t be afraid to ask for help. Even ogres need a hand sometimes.`,
      timestamp: '2024-06-20 10:56:33',
      image_url:
        'https://static1.cbrimages.com/wordpress/wp-content/uploads/2022/03/Puss-Shrek.jpg',
    },
    {
      feed_post_id: 5,
      user_id: 2,
      content: `Alright, everyone, let's talk about responsive design. Think of it like preparing for a royal ball. You need to be ready for anything – whether it's a grand ballroom or a small cottage gathering. In coding, that means your website should look good on any device, from a huge desktop monitor to a tiny smartphone screen. Use flexible grids, adjust images, and make sure your text is readable. Just like how I can go from being an ogre to a princess, your website should adapt gracefully to any situation. A true royal always stays prepared!`,
      timestamp: '2024-06-20 10:56:33',
      image_url:
        'https://carboncostume.com/wordpress/wp-content/uploads/2022/01/warriorfiona-shrekeverafter-character.png',
    },
    {
      feed_post_id: 6,
      user_id: 3,
      content: `🌟 Hello devs! Let's talk about functions today. Think of them as your kitchen gadgets 🍳 Need to fry some logic? Use 'em like a skillet. Want to bake a reusable process? Think of it as your trusty oven. Just like cooking, make sure your functions are well-seasoned and serve up code that's deliciously efficient! #CodingKitchen #FunctionsAreTools`,
      timestamp: '2024-06-20 10:56:33',
      image_url:
        'https://static1.colliderimages.com/wordpress/wp-content/uploads/2023/04/shrek-5-mike-myers.jpg?q=50&fit=contain&w=1140&h=&dpr=1.5',
    },
    {
      feed_post_id: 7,
      user_id: 1,
      content: `🔍 Hey coders! Ever hunted for bugs in your code? 🐞 It's like being a detective 🔎 Look for clues (or errors), follow the tracks (check those logs!), and when you crack the case, celebrate like Sherlock with a victory dance! Remember, debugging is where you sharpen your skills and level up your code! #BugBounty #CodeDetective`,
      timestamp: '2024-06-20 10:56:33',
      image_url: 'https://images2.alphacoders.com/500/500075.jpg',
    },
    {
      feed_post_id: 8,
      user_id: 3,
      content: `🎨 Hey devs! Time to brush up on CSS! Imagine it as your design palette 🖌️ Need to style your webpage? CSS is like choosing colors and fonts. Want to make things pop? Add animations like fireworks! Remember, good design isn't just about looks—it's about crafting user experiences that shine! Share your best CSS tips! #CreativeCoding #CSSArtistry`,
      timestamp: '2024-06-20 10:56:33',
      image_url: 'https://images2.alphacoders.com/219/219782.jpg',
    },
    {
      feed_post_id: 9,
      user_id: 2,
      content: `🔧 Hey there, coding wizards! Let's dive into algorithms today. Think of them as recipes for solving puzzles 🧩 Need to sort data? Algorithms are your sous chef. Want to search efficiently? They're your compass in a vast digital world. Just like cooking, master the basics and innovate with your own secret sauce! What's your favorite algorithmic dish? #CodeCuisine #AlgorithmMasters`,
      timestamp: '2024-06-20 10:56:33',
      image_url:
        'https://static1.colliderimages.com/wordpress/wp-content/uploads/2023/04/shrek-5-mike-myers.jpg?q=50&fit=contain&w=1140&h=&dpr=1.5',
    },
  ])
}
