<img src="https://user-images.githubusercontent.com/114384910/200634293-54163cc9-20b2-4cbb-ba32-76f0feebace9.jpg"/>

<h1 align="center">Welcome to React Electron Template 👋</h1>

<p align="center">
   <a href="https://github.com/AjayKanniyappan/react-electron-template#readme" target="_blank">
    <img alt="Documentation" src="https://img.shields.io/badge/Documentation-yes-brightgreen.svg" />
  </a>
   <img alt="Version" src="https://img.shields.io/badge/Version-1.0.0-blue.svg?cacheSeconds=2592000" />
  <a href="https://github.com/AjayKanniyappan/react-electron-template/blob/main/LICENSE" target="_blank">
    <img alt="License: MIT" src="https://img.shields.io/badge/License-MIT-yellow.svg" />
  </a>
</p>

**React Electron Template** is help you to build multi-platform desktop apps easier. **Don't worry about the configuration 🔨** this template will take care of that, focus on your codes⌨️ <!-- million dollar projects --> and project ideas 💡. The idea is to solve the common issues with connecting those frameworks, build a robust Template to support daily development needs, and help developers use better practices while working with popular JavaScript components.

## 📚 Before You Begin

Before you begin we recommend you read about the basic building blocks that assemble a **React Electron Template**:

- **Node.js** - Start by going through [Node.js Official Website](http://nodejs.org/) and this [StackOverflow Thread](http://stackoverflow.com/questions/2353818/how-do-i-get-started-with-node-js), which should get you going with the Node.js platform in no time.

- **Electron.js** - The best way to understand Electron is through its [Official Website](https://www.electronjs.org/), which has a [Getting Started](https://www.electronjs.org/docs/latest) guide, You can also go through this [TutorialsPoint Guide](https://www.tutorialspoint.com/electron/index.htm) for more resources.

- **React.js** - React's [Official Website](https://reactjs.org/) is a great starting point. You can also use [W3Schools Popular Guide](https://www.w3schools.com/REACT/DEFAULT.ASP), and [Egghead Videos](https://egghead.io/).

- **TypeScript** - Go through [TypeScript Official Website](https://www.typescriptlang.org/) and proceed to their [Official Manual](https://www.typescriptlang.org/docs/), which should help you understand TypeScript better.

## 🖥️ Prerequisites

Make sure you have installed all of the following prerequisites on your development machine:

- **Git** - [Download & Install Git](https://git-scm.com/downloads). OSX and Linux machines typically have this already installed.
- **Node.js** - [Download & Install Node.js](https://nodejs.org/en/download/) and the npm package manager. If you encounter any problems, you can also use this [GitHub Gist](https://gist.github.com/isaacs/579814) to install Node.js.

NOTE: This project requires NodeJS (version 14 or later) and NPM.
[Node](http://nodejs.org/) and [NPM](https://npmjs.org/) are really easy to install.

## ⏩ Table of contents

- [Before You Begin](#-before-you-begin)
- [Prerequisites](#%EF%B8%8F-prerequisites)
- [Table of contents](#-table-of-contents)
- [Features](#-features)
- [Getting Started](#%EF%B8%8F-getting-started)
- [Directory Structure](#-directory-structure)
- [Quick Start](#-quick-start)
  - [Cloning The GitHub Repository](#-cloning-the-github-repository)
  - [Downloading The Repository Zip File](#%EF%B8%8F-downloading-the-repository-zip-file)
  - [Quick Install](#-quick-install)
- [Starting Development](#-starting-development)
  - [Running Your Application](#-running-your-application)
  - [Vscode Debugging](#-vscode-debugging)
  - [Style your Code](#-style-your-code)
  - [Git Commits](#%EF%B8%8F-git-commits)
  - [Clean Cache](#-clean-cache)
- [Packaging for Production](#-packaging-for-production)
  - [Running in Production mode](#%EF%B8%8F-running-in-production-mode)
  - [Debugging in Production mode](#-debugging-in-production-mode)
  - [Debugging in Release Build](#-debugging-in-release-build)
- [Release a Distribution Version](#-release-a-distribution-version)
  - [Build for Windows](#%EF%B8%8F-build-for-windows)
  - [Build for macOS](#-build-for-macos)
  - [Build for Linux](#-build-for-linux)
- [Built With](#%EF%B8%8F-built-with)
- [Contributing](#-contributing)
- [Show your support](#-show-your-support)
- [Donate](#-donate)
- [Authors](#%EF%B8%8F-author)
- [License](#%EF%B8%8F-license)

<!-- ### 🏠 [Homepage](https://github.com/AjayKanniyappan/react-electron-template) -->

## 🔍 Features

- 🐞 Vscode debugging
- 🔥 Hot Reload
- 📦 Packaging for Production
- 🎯 Make Development simple
- 💪 Eslint, Prettier and Airbnb make your code stronger
- 🖥 Build your application for multi-platform

## 🏃‍♂️ Getting Started

These instructions will get you a copy of the project and running on your local machine for development and testing purposes. See Distribution for notes on how to Package the Application for Desktop.

## 📂 Directory Structure

**React Electron Template** files and folder structure.

```diff
+├── .husky                       Automate your git commits
+├── .vscode                      vscode debug folder and extension support
+├── app                          Your application Build folder
 │   ├── dist                     Your generated source code folder
+│   └── package.json             Your runnable application package.json (If you want native node module you need to add here)
 │
+├── assets                       Project assets folder
 │   ├── icons                    Icon sets folder
 │   │  └── NxN.png               Different pixel png's
 │   ├── icon.icns                Icon for the application on macOS and Linux
 │   └── icon.ico                 Icon for the application
 │
+├── configs                      configuration folder
 │
+├── release                      your application release folder
+│   └── build                    Generated after production build, contains executables
 │       ├── {os}-unpacked        Contains unpacked application executable
 │       └── Setup.{ext}          Installer for the application
 │
+├── src                          Source code folder
+│   ├── main                     Electron related code
 │   │   ├── main.ts              Main process source code
 │   │   └── preload.ts           Preload scripts source code
 │   │
+│   └── renderer                 Renderer source code, your React application
 │        ├── App.tsx             React router source code
 │        └── index.tsx           React index source code
 │
 ├── .eslintrc.json               Eslint configuration
 ├── .prettierrc                  prettier code formatter
+├── DevConfig.json               React development port
+├── electron-builder.yml         Electron builder configuration
+├── package.json                 Package.json for development
 ├── tsconfig.json                TypeScript Configuration
+└── tsconfig.node.json           TypeScript paths
```

## 🛫 Quick Start

There are several ways you can get the React Electron Template:

### 🌀 Cloning The GitHub Repository

The recommended way to get React Electron Template is to use git to directly clone the repository:

```bash
# Clone the project
git clone https://github.com/AjayKanniyappan/react-electron-template.git <your-project-name>

# Enter the project directory
cd <your-project-name>
```

This will clone the latest version of the React Electron Template repository to a **react-electron-template** folder.

### 🗃️ Downloading The Repository Zip File

Another way to use the React Electron Template is to download a zip copy from the [main branch on GitHub](https://github.com/AjayKanniyappan/react-electron-template/archive/refs/heads/main.zip). You can also do this using the `wget` command:

```sh
wget https://github.com/AjayKanniyappan/react-electron-template/archive/refs/heads/main.zip -O react-electron-template-main.zip; unzip react-electron-template-main.zip; rm react-electron-template-main.zip
```

Don't forget to rename react-electron-template-main after your project name.

### 🧰 Quick Install

Once you've downloaded the Template and installed all the prerequisites, you're just a few steps away from starting to develop your Electron, React application.

The Template comes pre-bundled with a `package.json` file that contain the list of modules you need to start your application.

To install the dependencies, run this in the application folder from the command-line:

```bash
# Install dependency
npm install
```

Or if you prefer using Yarn:

```bash
# Install dependency
yarn add
```

This command does a few things:

- First it will install the dependencies needed for the application to run.
- If you're running in a development environment, it will then also install development dependencies needed for testing and running your application.

## 👨‍💻 Starting Development

Use your favorite JavaScript Package Managers **npm** or **yarn** or **pnpm**

### 🏃 Running Your Application

Run your application using npm:

```sh
npm start
```

Or if you prefer using Yarn:

```sh
yarn start
```

<!-- Your application should run on port 5050 with the development environment configuration, so in your browser just go to http://localhost:3000

That's it! Your application should be running. To proceed with your development, check the other sections in this documentation. If you encounter any problems, try the Troubleshooting section.

Explore config/env/development.js for development environment configuration options. -->

### 🆚 Vscode Debugging

### 💈 Style your Code

### 🛰️ Git Commits

### 🧹 Clean Cache

## ⚡ Packaging for Production

### 🏃‍♂️ Running in Production mode

### 🐞 Debugging in Production mode

### 🐞 Debugging in Release Build

## 📦 Release a Distribution Version

### 🖥️ Build for Windows

### 🍎 Build for macOS

### 🐧 Build for Linux

## 🏗️ Built With

**React Electron Template Uses**

<p><img src="https://img.shields.io/badge/React%20-%2361DAFB.svg?&style=for-the-badge&logo=React&logoColor=white"/>
<br/>
<img src="https://img.shields.io/badge/React_Router%20-%23CA4245.svg?&style=for-the-badge&logo=React%20Router&logoColor=white"/> 
<br/>
<img src="https://img.shields.io/badge/Electron%20-%2347848F.svg?&style=for-the-badge&logo=Electron&logoColor=white"/>
<br/>
<img src="https://img.shields.io/badge/JavaScript%20-%23F7DF1E.svg?&style=for-the-badge&logo=JavaScript&logoColor=white"/>
<br/> 
<img src="https://img.shields.io/badge/TypeScript%20-%233178C6.svg?&style=for-the-badge&logo=TypeScript&logoColor=white"/> 
<br/>
<img src="https://img.shields.io/badge/HTML5%20-%23E34F26.svg?&style=for-the-badge&logo=HTML5&logoColor=white"/>   
<br/>  
<img src="https://img.shields.io/badge/CSS3%20-%231572B6.svg?&style=for-the-badge&logo=CSS3&logoColor=white"/>
<br/> 
<img src="https://img.shields.io/badge/Sass%20-%23CC6699.svg?&style=for-the-badge&logo=Sass&logoColor=white"/>
<br/>
<img src="https://img.shields.io/badge/Node.js%20-%23339933.svg?&style=for-the-badge&logo=Node.js&logoColor=white"/> 
<br/> 
<img src="https://img.shields.io/badge/Webpack%20-%238DD6F9.svg?&style=for-the-badge&logo=Webpack&logoColor=white"/>
<br/> 
<img src="https://img.shields.io/badge/Prettier%20-%23F7B93E.svg?&style=for-the-badge&logo=Prettier&logoColor=white"/> 
<br/>  
<img src="https://img.shields.io/badge/ESLint%20-%234B32C3.svg?&style=for-the-badge&logo=ESLint&logoColor=white"/>
<br/>  
<img src="https://img.shields.io/badge/Airbnb%20-%23FF5A5F.svg?&style=for-the-badge&logo=Airbnb&logoColor=white"/></p>

## 🤝 Contributing

Contributions, issues and feature requests are welcome! Just be sure to read the [contributing](https://github.com/AjayKanniyappan/react-electron-template/blob/main/CONTRIBUTING.md) document to get started. Feel free to check [issues page](https://github.com/AjayKanniyappan/react-electron-template/issues).

## 💖 Show your support

**I hope 🙏 it will helped you! Give a ⭐️ to support this project!**

If you like 💗 the project, there is other way to support us

- Tweet about it
- Refer this project in your project's readme
- Mention the project at local meetups and tell your friends/colleagues

## ☕ Donate

Donations will help us to ensure the following:

- ⚡ Quick responses to issues, bug reports and help requests
- ➕ Adding new features
- ⚒️ Long term maintenance of the project

<a href="https://www.buymeacoffee.com/ajaykanniyappan">
<img height="40" width="150" src="https://cdn.buymeacoffee.com/buttons/v2/default-yellow.png">
</a>

## 🛠️ Author

👨‍💻 **Ajay Kanniyappan**

- Website: https://ajaykanniyappan.com
- Twitter: [@AjayKanniyappan](https://twitter.com/AjayKanniyappan)
- Github: [AjayKanniyappan](https://github.com/AjayKanniyappan)
- LinkedIn: [AjayKanniyappan](https://linkedin.com/in/AjayKanniyappan)

## ©️ License

[MIT License](https://github.com/AjayKanniyappan/react-electron-template/blob/main/LICENSE) © Ajay Kanniyappan
