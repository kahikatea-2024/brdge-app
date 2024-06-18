# Fullstack app setup with Tailwinds and Storybook

## Setup

### What's included

This repo includes:

* a single, simple API endpoint (`/api/v1/fruits`)
* frontend routing via react-router
* an auth0 setup waiting to be configured
* an example database module (`server/db/fruits.js`)
* an API client module (`client/apis/fruits.js`)
* configuration for Vitest and testing library
* configuration for server-side debugging in VS Code
* configuration for preprocessing css with tailwind support

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