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
        'https://ew.com/thmb/MJ9fepugxxMz1ymEz5Vynl4oZNM=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/GettyImages-488099013-dfb78fc13f984cb580d4a9aa444c8a33.jpg',
    },
    {
      feed_post_id: 2,
      user_id: 3,
      content: `Hey there, coder! Ever thought about variables like food? Oh, I love food! Think of variables as your favorite snacks. You can name 'em anything you like. Want to store a number? Call it numCookies. Got a word in mind? Name it myFavoriteQuote. Just remember to be clear so you don't end up eating cake when you wanted waffles! Variables are the tasty morsels in your code recipe!`,
      timestamp: '2024-06-20 10:55:33',
      image_url: '',
    },
    {
      feed_post_id: 3,
      user_id: 1,
      content: `Alright, listen up, you lot. Loops in coding are like walking through a swamp. Sometimes, you've gotta keep on going until you find what you're looking for. A for loop is like counting the steps – you know exactly how many you need. An while loop is more like wandering around until you see a familiar tree. Either way, keep your wits about you and don't get lost. And remember, always have a good reason to get out of that loop – otherwise, you'll be stuck in the muck forever!`,
      timestamp: '2024-06-20 10:56:33',
      image_url:
        'https://media.istockphoto.com/id/1017296544/photo/testing-software.jpg?s=612x612&w=0&k=20&c=9K02VDBeVtaLCThLojKphZpZ6x8o7DUi3UQ4r1tTmQU=',
    },
    {
      feed_post_id: 4,
      user_id: 1,
      content: `Debugging? It's like cleaning up after a feast. You've got crumbs everywhere, and you need to find out where the smell is coming from. Sometimes, it's a tiny error – a missing semicolon or a misspelled word. Other times, it's like an ogre's layer of bugs. You need patience and a good nose for trouble. Trace your steps, check each line, and don’t be afraid to ask for help. Even ogres need a hand sometimes.`,
      timestamp: '2024-06-20 10:56:33',
      image_url: '',
    },
    {
      feed_post_id: 5,
      user_id: 2,
      content: `Alright, everyone, let's talk about responsive design. Think of it like preparing for a royal ball. You need to be ready for anything – whether it's a grand ballroom or a small cottage gathering. In coding, that means your website should look good on any device, from a huge desktop monitor to a tiny smartphone screen. Use flexible grids, adjust images, and make sure your text is readable. Just like how I can go from being an ogre to a princess, your website should adapt gracefully to any situation. A true royal always stays prepared!`,
      timestamp: '2024-06-20 10:56:33',
      image_url: '',
    },
    {
      feed_post_id: 6,
      user_id: 3,
      content: `🌟 Hello devs! Let's talk about functions today. Think of them as your kitchen gadgets 🍳 Need to fry some logic? Use 'em like a skillet. Want to bake a reusable process? Think of it as your trusty oven. Just like cooking, make sure your functions are well-seasoned and serve up code that's deliciously efficient! #CodingKitchen #FunctionsAreTools`,
      timestamp: '2024-06-20 10:56:33',
      image_url:
        'https://uploads.dailydot.com/6d6/a0/740bf5f811111c88.jpg?auto=compress&fm=pjpg',
    },
    {
      feed_post_id: 7,
      user_id: 1,
      content: `🔍 Hey coders! Ever hunted for bugs in your code? 🐞 It's like being a detective 🔎 Look for clues (or errors), follow the tracks (check those logs!), and when you crack the case, celebrate like Sherlock with a victory dance! Remember, debugging is where you sharpen your skills and level up your code! #BugBounty #CodeDetective`,
      timestamp: '2024-06-20 10:56:33',
      image_url: '',
    },
    {
      feed_post_id: 8,
      user_id: 3,
      content: `🎨 Hey devs! Time to brush up on CSS! Imagine it as your design palette 🖌️ Need to style your webpage? CSS is like choosing colors and fonts. Want to make things pop? Add animations like fireworks! Remember, good design isn't just about looks—it's about crafting user experiences that shine! Share your best CSS tips! #CreativeCoding #CSSArtistry`,
      timestamp: '2024-06-20 10:56:33',
      image_url:
        'https://static.vecteezy.com/system/resources/previews/002/949/141/non_2x/programming-code-coding-or-hacker-background-vector.jpg',
    },
    {
      feed_post_id: 9,
      user_id: 2,
      content: `🔧 Hey there, coding wizards! Let's dive into algorithms today. Think of them as recipes for solving puzzles 🧩 Need to sort data? Algorithms are your sous chef. Want to search efficiently? They're your compass in a vast digital world. Just like cooking, master the basics and innovate with your own secret sauce! What's your favorite algorithmic dish? #CodeCuisine #AlgorithmMasters`,
      timestamp: '2024-06-20 10:56:33',
      image_url:
        'https://media.istockphoto.com/id/537331500/photo/programming-code-abstract-technology-background-of-software-deve.jpg?s=612x612&w=0&k=20&c=jlYes8ZfnCmD0lLn-vKvzQoKXrWaEcVypHnB5MuO-g8=',
    },
  ])
}
