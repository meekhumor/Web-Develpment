// Node - a javascript runtime environment
//   Node. js provides a runtime environment outside of the browser. 
//   It's also built on the Chrome V8 JavaScript engine. 
//   This makes it possible to build back-end applications using the same JavaScript programming language you may be familiar with 
  

// NPM

// npm is node ka playstore jahape bohot saare packages milte hai
// Example:
// npm package for text -> voice (just like templates)
// Note: If we want to run our own package , we need to first write it in script section of package.json then type npm run <package-name>


// File system

// In documentation you will find file system operations. Some impostant operations are:
// fs.writeFile(path, data, callback)
// fs.appendFile(path, data, callback)
// fs.unlink(path, callback)
// fs.rename(oldPath, newPath, callback)
// fs.copyFile(src, dest, callback)


// Http 

// In documentation you will find file system operations. Some impostant operations are:
// http.createServer(function(res,req){})


// Processes and argv

// The process object provides information about, and control over, the current Node.js process.
// https://nodejs.org/docs/v20.12.1/api/process.html#process - learn all about process.
// process.version : version of node js
// process.release : specific node release that we are using 
// process.cwd() : path of current directory 

// process.argv: The process.argv property returns an array containing the command-line arguments passed when the Node.js process was launched.
// The first element will be process.execPath. See process.argv0 if access to the original value of argv[0] is needed.
//  The second element will be the path to the JavaScript file being executed. 
// The remaining elements will be any additional command-line arguments.