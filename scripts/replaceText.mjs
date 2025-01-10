import { readdir, readFile, writeFile } from "fs";
import { join, resolve, dirname } from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const folderPath = resolve(__dirname, "../src/components/icons/version02/"); // Change this to your folder path
const searchText = "IconComponentType"; // The text you want to replace
const replaceText = "IconComponent"; // The text you want to replace with

function replaceTextInFiles(directoryPath, searchText, replaceText) {
  readdir(directoryPath, (err, files) => {
    if (err) {
      console.error(`PATH: ${directoryPath}\nDirectory path is required`);
      console.error("Error reading the directory", err);
      return;
    }

    console.error(`PATH: ${directoryPath}`);
    files.forEach((file) => {
      const filePath = join(directoryPath, file);

      readFile(filePath, "utf8", (err, data) => {
        if (err) {
          console.error("Error reading the file", err);
          return;
        }

        if (data.includes(searchText)) {
          const updatedData = data.split(searchText).join(replaceText);

          writeFile(filePath, updatedData, "utf8", (err) => {
            if (err) {
              console.error("Error writing the file", err);
            } else {
              console.log(`Replaced text in ${file}`);
            }
          });
        }
      });
    });
  });
}

replaceTextInFiles(folderPath, searchText, replaceText);

// Run the script using the following command:
// node scripts/replacetext.mjs

// The script will replace the text in all the files in the specified folder.
// Conclusion
// In this article, you learned how to replace text in files using Node.js. You can use the  fs  module to read the contents of a file, replace the text, and write the updated content back to the file.
// You can use the script to replace text in multiple files by specifying the folder path.
// I hope this article was helpful to you. If you have any questions or suggestions, feel free to leave a comment.
// JavaScript is a versatile language with many frameworks and libraries. One of these is React, a library for building user interfaces. React is a popular option for developers, and it's used by many companies, including Facebook, Instagram, and Airbnb.
// In this article, you'll learn how to build a simple React application. You'll create a basic React component and render it in the browser.
// Prerequisites
// To follow this tutorial, you'll need:

// Node.js installed on your machine. You can download it from the  official website.
// A code editor. You can use Visual Studio Code, Sublime Text, or any other editor of your choice.

// Setting Up a React Project
// To create a new React project, you can use the  create-react-app  tool. This tool sets up a new React project with all the necessary dependencies and configuration.
// Open your terminal and run the following command to create a new React project:
// npx create-react-app react-app

// This command will create a new folder named  react-app  with a new React project inside it.
// Change to the project directory:
// cd react-app

// Start the development server by running the following command:
// npm start

// This command will start the development server and open the React application in your default web browser.
// You should see a page like this:
// Creating a React Component
// In React, you can create components to encapsulate different parts of your user interface. Components are reusable and can be composed together to build complex applications.
// Let's create a simple React component. Open the  src  directory in your project and create a new file named  Hello.js .
// Add the following code to the  Hello.js  file:
// // src/Hello.js
