## BRDG

### Overview
**BRDG** is a social media platform specifically designed for junior professionals who are embarking on a new career path. Unlike LinkedIn, which can be overwhelming for newcomers, BRDG offers a more focused and supportive environment tailored to the needs of:

- Career Switchers
- Graduates
- School Leavers

### Purpose
Our mission is to create a dedicated space where juniors can:
- **Discuss**: Engage in meaningful conversations about their career journey.
- **Connect**: Network with peers and professionals in their field.
- **Get Advice**: Seek guidance on various career-related topics.
- **Have Mentorship**: Receive mentorship from senior professionals and leaders in their new field.
- **Get Better Prepared**: Equip themselves with the knowledge and skills necessary to thrive in their chosen career.

### Tech Stack
## Welcome to the tech stack section of our project! Here’s a quick overview of the technologies we’re using:

## Frontend
Tech Stack
Welcome to the tech stack section of our project! Here’s a quick overview of the technologies we’re using:

# Frontend
- React <img src="https://github.com/user-attachments/assets/a1ac5748-3ce9-4fcd-b26a-98cf9acdd18c" alt="Description" width="30"/>
- TypeScript <img src="https://github.com/user-attachments/assets/282c93e0-6240-48de-b580-87e51cb2b805" alt="Description" width="30"/>
- JavaScript  <img src="https://github.com/user-attachments/assets/4eca706f-40d1-4366-8382-cd0975e61a13" alt="Description" width="30"/>
- HTML5 <img src="https://github.com/user-attachments/assets/40fa0f68-d244-4478-914b-cee9048e6074" width="30"/>
- Tailwind CSS <img src="https://github.com/user-attachments/assets/953ba9af-74aa-42e1-9203-e6fddeed8b4a" alt="Description" width="30"/>
- Storybook<img src="https://github.com/user-attachments/assets/603fa386-ae2e-4f0d-9dae-4bda8577e879" alt="Description" width="30"/>

# Backend
- TypeScript <img src="https://github.com/user-attachments/assets/282c93e0-6240-48de-b580-87e51cb2b805" alt="Description" width="30"/>
- JavaScript  <img src="https://github.com/user-attachments/assets/4eca706f-40d1-4366-8382-cd0975e61a13" alt="Description" width="30"/>
- SQLite3 <img src="https://github.com/user-attachments/assets/81a2f3b4-a8df-449a-bea5-61ec35f3c244" alt="Description" width="30"/>
- Node.js <img src="https://github.com/user-attachments/assets/fa325b44-8ae8-4ca6-a549-80d18cc3552a" alt="Description" width="30"/>   
- Express <img src="https://github.com/user-attachments/assets/e720775b-f2cb-4af1-a142-afb8120d402d" alt="Description" width="30"/>   
- Knex.js <img src="https://github.com/user-attachments/assets/863dce2c-14e6-4b24-ae93-9c2db1ed34d8" alt="Description" width="30"/>   


# Frontend Development

Welcome to the frontend section of our project! Here’s a quick rundown of what we’ve been up to:

### Building the Frontend
Our team has been hard at work developing user story features using **TypeScript** and **React components**. We then integrated these features into various pages to bring our app's frontend to life.

### Testing with Storybook
To make sure everything works perfectly, we used a tool called **Storybook**. It helped us 

# Backend Development

Welcome to the backend section of our project! Here’s a quick rundown of what we’ve been up to:

### Creating Databases
Our backend team focused on building our complex databases using **SQLite3**. This provided us with a reliable and efficient way to store our data.

### Querying with Knex.js
To interact with our databases, we used **Knex.js**. This powerful query builder made it easy for us to manage and retrieve data.

### Implementing CRUD Operations
We then created our **CRUD operations**: **GET**, **PATCH**, **POST**, and **DELETE**. These operations enabled seamless communication between the front end and the back end, allowing our app to handle data efficiently and provide a smooth user experience.

#Setup
### Installation

These commands will take care of migrating the latest database schema and populating seed data.
npm run dev will take care of running the server and auto-updating the tailwinds css output file in the public folder as new components and styling is applied and saved.

```
npm install
npm run dbsetup
npm run dev
```

### General file management

Break down components as much as you reasonably can following the guideline here: https://www.componentdriven.org/#how\
For smaller blocks use: /client/components/UI/[UI Element Name]/ElementName.tsx\
For page elements use: /client/components/[component name]/ComponentName.tsx\
For page layouts use /client/pages/[page name]/PageName.tsx

Every UI element should have a story file associated with it in the same subfolder.

You can find the server running on [http://localhost:3000](http://localhost:3000) and the client running on [http://localhost:5173](http://localhost:5173).


### How We Create Branches

Please use the ticket number and the name of the ticket for example:
4/design-text-field
