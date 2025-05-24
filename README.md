# Meal Finder 🍽️

Meal Finder is an interactive web application that allows you to explore a variety of meal recipes. You can browse
through different dishes and, upon selecting one, view all its details (such as ingredients and preparation) in a
convenient modal window.

This project was initiated with [Vite](https://vitejs.dev/) using the React + TypeScript template.

## ✨ Key Features

* **Meal Catalog:** View a list of meals with images and names.
* **Details in Modal:** Clicking on a meal displays a modal window with detailed information, including:
    * Ingredients and their quantities.
    * Preparation instructions.
    * Meal image.
* **Intuitive Interface:** Clean and easy-to-navigate design.

## 🛠️ Technologies Used

* **[React](https://reactjs.org/)**
* **[TypeScript](https://www.typescriptlang.org/)**
* **[Vite](https://vitejs.dev/)**
* **[ESLint](https://eslint.org/)**
    * The project is set up with ESLint. Core TypeScript linting is typically provided by
      `@typescript-eslint/eslint-plugin` (you can verify this and its version in your `package.json`).
    * The "Expanding the ESLint Configuration" section below details how to add and configure other useful plugins like
      `eslint-plugin-react-x` and `eslint-plugin-react-dom` for React-specific rules, if they are not already part of
      your setup.
    * **To see all currently installed ESLint plugins and related packages, please refer to the `devDependencies`
      section in your `package.json` file.**
* **Dependencies**
    * Axios
    * Chakra UI v2.10.9
    * React Icons

## 🚀 Getting Started

Follow these steps to set up and run a local copy of the project.

### Prerequisites

Ensure you have the following installed on your system:

* Node.js (v18.x or higher recommended)
* npm (v9.x or higher) or yarn (v1.22.x or higher)

### Installation

1. **Clone the repository:** Note: Ensure the project path in parserOptions correctly points to your tsconfig.json file(
   s). tsconfigRootDir helps ESLint locate these files.Adding React-Specific Lint RulesYou can also install and
   configure plugins like eslint-plugin-react-x and eslint-plugin-react-dom for React-specific linting.First, install
   them if they aren't already in your package.json:    (Replace `https://YOUR_REPOSITORY_URL_HERE/meal-finder.git` with
   the actual URL of your repository)

2. **Navigate to the project directory:** Then, update your eslint.config.js (or equivalent ESLint configuration file):
   3.
   **Install dependencies:**
   With npm:Important: The way plugins are configured and configurations are extended can vary. Always refer to the
   respective plugin's documentation for the most up-to-date integration instructions and ensure your ESLint
   configuration file reflects the plugins actually installed in your package.json.