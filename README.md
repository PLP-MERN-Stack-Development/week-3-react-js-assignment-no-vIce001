[![Open in Visual Studio Code](https://classroom.github.com/assets/open-in-vscode-2e0aaae1b6195c2367325f4f02e2d04e9abb55f0b24a779b69b11b9e10269abc.svg)](https://classroom.github.com/online_ide?assignment_repo_id=19804527&assignment_repo_type=AssignmentRepo)
# React.js and Tailwind CSS Assignment

This assignment focuses on building a responsive React application using JSX and Tailwind CSS, implementing component architecture, state management, hooks, and API integration.

## Assignment Overview

You will:
1. Set up a React project with Vite and Tailwind CSS
2. Create reusable UI components
3. Implement state management using React hooks
4. Integrate with external APIs
5. Style your application using Tailwind CSS

## Getting Started

1. Accept the GitHub Classroom assignment invitation
2. Clone your personal repository that was created by GitHub Classroom
3. Install dependencies:
   ```
   npm install
   ```
4. Start the development server:
   ```
   npm run dev
   ```

## Files Included

- `Week3-Assignment.md`: Detailed assignment instructions
- Starter files for your React application:
  - Basic project structure
  - Pre-configured Tailwind CSS
  - Sample component templates

## Requirements

- Node.js (v18 or higher)
- npm or yarn
- Modern web browser
- Code editor (VS Code recommended)

## Project Structure

```
src/
├── components/       # Reusable UI components
├── pages/           # Page components
├── hooks/           # Custom React hooks
├── context/         # React context providers
├── api/             # API integration functions
├── utils/           # Utility functions
└── App.jsx/         # Main application component
```

## Submission

Your work will be automatically submitted when you push to your GitHub Classroom repository. Make sure to:

1. Complete all required components and features
2. Implement proper state management with hooks
3. Integrate with at least one external API
4. Style your application with Tailwind CSS
5. Deploy your application and add the URL to your README.md

## Resources

- [React Documentation](https://react.dev/)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
- [Vite Documentation](https://vitejs.dev/guide/)
- [React Router Documentation](https://reactrouter.com/)



# 🚀 PLP Week 3: Project Setup

This project is a responsive React application built with Vite and Tailwind CSS. It demonstrates component architecture, state management with hooks, context for theming, and API integration. The app includes a task manager and a public API data viewer, styled with reusable UI components.

---

## 📦 Features

- **Reusable UI Components:** Button, Card, Navbar, Footer, Layout, and more.
- **Task Manager:** Add, complete, delete, and filter tasks. Tasks persist in local storage.
- **API Integration:** Fetches and displays posts from JSONPlaceholder with search and pagination.
- **Theme Switcher:** Light/dark mode using React Context and Tailwind's dark mode.
- **Responsive Design:** Works on mobile, tablet, and desktop.
- **Modern Stack:** Vite, React, Tailwind CSS, React Router.

---

## 🛠️ Setup Instructions

### 1. Prerequisites

- [Node.js](https://nodejs.org/) (v18 or higher)
- npm (comes with Node.js) or [Yarn](https://yarnpkg.com/)
- Modern web browser
- Code editor (VS Code recommended)

### 2. Clone the Repository

```sh
git clone <your-repo-url>
cd <your-repo-folder>
```

### 3. Install Dependencies
```
npm install
```

### 4. Start the Development Server
```
npm run dev
```
Visit <http://localhost:5173> in your browser.

## 🗂️ Project Structure

```
src/
├── components/       # Reusable UI components (Button, Card, Navbar, Footer, Layout etc.)
│   └── ui/           # UI primitives (button, card, avatar, etc.)
├── pages/            # Page components (Home, Tasks, ApiData)
├── hooks/            # Custom React hooks (useLocalStorage)
├── context/          # React context providers (ThemeContext)
├── utils/            # Utility functions (api.js)
├── App.jsx/          # Main application component
├── main.jsx/         # Entry point
├── index.css/         # Tailwind CSS styles
```

## ✨ Usage
- **Task Manager**: Go to the "Tasks" page to add, complete, delete, and filter your tasks.
- **API Data**: Go to the "API Data" page to view and search posts from JSONPlaceholder.
- **Theme Switcher**: Use the theme toggle button in the navbar to switch between light and dark mode.

## 🚀 Deployment
You can deploy this app for free using Vercel:
1. Push your code to GitHub.
2. Go to [vercel.com](https://vercel.com/)and import your repository.
3. Follow the prompts to deploy.

## 📸 Screenshots
![](screenshots/home.png)
![](screenshots/all-tasks.png)
![](screenshots/active-tasks.png)
![](screenshots/completed-tasks.png)
![](screenshots/api-data.png)
![](screenshots/light-mode.png)

## 🔗 Resources
- [React Documentation](https://react.dev/)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
- [Vite Documentation](https://vitejs.dev/guide/)
- [React Router Documentation](https://reactrouter.com/) 

## 📬 Submission
1. Commit and push your code regularly.
2. Include all project files and this README.md.
3. Add screenshots and your deployed app URL below:
    * **Deployed App URL**: (https://your-deployment-url)