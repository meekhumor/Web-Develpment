/*CJS and ESM refer to different module systems in JavaScript.

CJS (CommonJS): CommonJS is a module system for JavaScript that was initially designed for server-side JavaScript environments, notably Node.js. In CommonJS, modules are loaded synchronously, meaning that dependencies are resolved and loaded before the module's code is executed. CommonJS modules use the require() function to import modules and the module.exports or exports object to export values from a module. 
ESM (ECMAScript Modules): ESM is the native module system for JavaScript introduced in ECMAScript 6 (ES6). ESM provides a standardized way of defining modules in JavaScript that is built into the language itself. Unlike CommonJS, ESM supports both synchronous and asynchronous module loading. In ESM, modules are loaded asynchronously, and dependencies are resolved dynamically at runtime. ESM modules use the import and export keywords to import and export values between modules.*/

const fs = require("node:fs");
const folderName = process.argv[2] || "Project";
// console.log(fs);
// fs.mkdir("dogs", { recursive: true }, (err) => {
//     console.log("IN THE CALLBACK") /* Here IN THE CALLBACK is printed after words due to it being a async function. */
//   if (err) throw err;
// });
// console.log("I come after MKDIR");

//-------------------------now sync version -----------------------
try {
  fs.mkdirSync(folderName);
  fs.writeFileSync(`${folderName}/index.html`, "");
  fs.writeFileSync(`${folderName}/app.css`, "");
  fs.writeFileSync(`${folderName}/app.js`, "");
  // fs.writeFileSync method, in addition to passing the file name and path that you are writing to as the first argument (string), you must also provide the second argument called "data" which is now mandatory — in our case, the "data" argument can just be an empty string ''
  // This second "data" argument to the fs.writeFileSync method specifies the content you want to write to the file internally (in our example here, we are not writing any internal content to the files we're creating and that's why we just specify an empty string there).
} catch (e) {
  console.log("SOMETHING WENT WRONG");
  console.log(e);
}