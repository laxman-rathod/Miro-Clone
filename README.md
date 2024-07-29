<div align="center">
  <br />
    <a href="https://miro-clone-w.vercel.app" target="_blank">
      <img src="https://github.com/laxman-rathod/Miro-Clone/blob/main/public/homepage.png" alt="Project Banner">
    </a>
  <br />
  <div>
    <img src="https://img.shields.io/badge/-Next_JS-black?style=for-the-badge&logoColor=white&logo=nextdotjs&color=000000" alt="nextdotjs" />
    <img src="https://img.shields.io/badge/-ReactJs-61DAFB?logo=react&logoColor=white&style=for-the-badge" alt="reactdotjs" />
    <img src="https://img.shields.io/badge/-TypeScript-purple?style=for-the-badge&logoColor=white&logo=typescript&color=purple" alt="typescript" />
    <img src="https://img.shields.io/badge/-Tailwind_CSS-black?style=for-the-badge&logoColor=white&logo=tailwindcss&color=06B6D4" alt="tailwindcss" />
    <img src="https://img.shields.io/badge/-Convex-orange?style=for-the-badge&logoColor=white&logo=convex&color=orange" alt="convex" />
    <img src="https://img.shields.io/badge/-ClerkJS-green?style=for-the-badge&logoColor=white&logo=clerkjs&color=green" alt="clerkjs" />
  </div>
  <h3 align="center">Miro-Clone: Your Collaborative Whiteboard, Reimagined 🎨</h3>

   <div align="center">
     A powerful, real-time collaborative whiteboard application built with cutting-edge web technologies.
    </div>
</div>

## 🍁 Overview

This Miro clone replicates the core functionality of the popular collaborative tool, offering a seamless, real-time whiteboard experience. It's designed to showcase the capabilities of modern web development frameworks and services.

## 🚀 Features

- **Real-time Collaboration:** Seamlessly collaborate with others on the whiteboard in real-time. </br>
- **Whiteboard Functionality:** Create and interact with shapes, sticky notes, and freehand drawings.</br>
- **Favorite Boards:** Keep your most important boards easily accessible with our favoriting system.</br>
- **Comprehensive Toolbar:** Effortlessly add Text, Shapes (Rectangles & Ellipses), Sticky Notes, and freehand drawings with the intuitive Pencil tool.</br>
- **Seamless Layering:** Organize your thoughts and ideas with precision using our intuitive layering system.</br>
- **Vibrant Coloring:** Bring your whiteboard to life with a rich color palette for all your elements.</br>
- **Undo & Redo:** Made a mistake? No problem! Our undo/redo functionality has you covered.</br>
- **Keyboard Shortcuts:** Work faster and smarter with handy keyboard shortcuts for common actions.</br>
- **Persistent Storage:** Data is saved and synced in real-time using a robust database solution.</br>
- **User Authentication:** Secure user management and authentication with Clerk.

## 💻 Technologies Used

- **Next.js 14:** A React framework for building performant and SEO-friendly web applications.
- **React.js:** A declarative JavaScript library for building dynamic and interactive user interfaces.
- **Tailwind CSS:** A utility-first CSS framework for rapidly building custom designs.
- **TypeScript:** Adding type safety and improved code maintainability.
- **Clerk:** A comprehensive authentication and user management platform.
- **Convex:** A serverless platform for building and deploying real-time applications.
- **Liveblocks:** A real-time collaboration library for building collaborative applications.

## 🪴 Deployment

- **Live Preview:** [Miro-Clone](https://miro-clone-w.vercel.app)
- **Source Code:** [GH Repo ](https://github.com/laxman-rathod/Miro-Clone)

## ⚙️ Getting Started

### Prerequisites

- **Node.js and npm:** Download and install Node.js from [NodeJS](https://nodejs.org). This will also install npm.
- **Convex:** Creat a [Convex](https://convex.dev) account if you already not Convex.dev.
- **Clerk:** Create a [Clerk](https://clerk.com) account for user authentication and get your [Secret keys](https://clerk.com/docs/references/nextjs/overview).
- **Liveblocks:** Make sure to have an account with [Liveblocks](https://liveblocks.io) and get your secret key for real-time collaboration.

1. **Clone the Repository:**

   ```bash
   git clone https://github.com/laxman-rathod/Miro-Clone.git
   ```

2. **Navigate to the project directory:**

   ```bash
   cd Miro-Clone
   ```

3. **Install dependencies:**

   ```bash
   npm install
   ```

4. **Create a .env.local file in the root directory and add the following environment variables:**

```bash
CONVEX_DEPLOYMENT=<your-convex-deployment-url>
NEXT_PUBLIC_CONVEX_URL=<your-convex-url>
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=<your-clerk-publishable-key>
CLERK_SECRET_KEY=<your-clerk-secret-key>
LIVEBLOCKS_SECRET_KEY=<your-liveblocks-secret-key>
```

5. **Run the development server:**

```bash
npx convex dev
npm run dev
```

The application should now be running at [http://localhost:3000](http://localhost:3000).

## 🤝 Contributing

Contributions are welcome! Please open an issue or submit a pull request.

To contribute:

Fork the repository </br>
Create your feature branch (`git checkout -b feature/your-feature`) </br>
Commit your changes (`git commit -m 'feat: add your feature'`) </br>
Push to the branch (`git push origin feature/your-feature`) </br>
Open a pull request

## 📄 License

This project is open source and available under the [License](LICENSE).
