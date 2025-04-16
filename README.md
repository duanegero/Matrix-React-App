# Matrix React + Vite App

This is a web application built using React and Vite, providing users with an interactive interface to connect to a Supabase db and send CRUD requests.

- [Installation](#installation)
- [Usage](#usage)
- [Features](#features)

## Installation

1. Clone Repository<br>
   `git clone https://github.com/duanegero/Matrix-React-App.git`
2. Navigate to the Project Directory<br>
   `cd Matrix-React-App`
3. Install Dependencies:<br>
   `npm install`
4. Start App<br>
   `npm run dev`

## Usage

Once the app is running, it will establish a connection with Supabase, allowing users to:

- Sign up and log in securely
- View and edit their personal profile details
- Send and retrieve data from the database in real time
- Perform Create, Read, Update, and Delete operations through the UI

The app is designed to provide a smooth and responsive user experience, with real-time feedback and clear error handling.

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript and enable type-aware lint rules. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.
