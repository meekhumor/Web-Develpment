// Node - a javascript runtime.
//   Node. js provides a runtime environment outside of the browser. 
//   It's also built on the Chrome V8 JavaScript engine. 
//   This makes it possible to build back-end applications using the same JavaScript programming language you may be familiar with 
  
  
//   What do people build with node ?
//   - web serves 
//   - command line tools 
//   - native apps (vs code is a node app!)
//   - video games 
//   - drone software 
//   - a whole lot more!

// File system

// All file system have synchronous and asynchronous forms.
/* In busy processes , use the asynchronous versions of calls , 
the synchronous versions will block the entire process until they complete halting all connections. */

// The node:fs module enables interacting with the file system in a way modeled on standard POSIX functions.
// refer boilerplate.js

// Processes and argv

// The process object provides information about, and control over, the current Node.js process.
//https://nodejs.org/docs/v20.12.1/api/process.html#process - learn all about process.
//process.version : version of node js
//process.release : specific node release that we are using 
//process.cwd() : path of current directory 

// process.argv: The process.argv property returns an array containing the command-line arguments passed when the Node.js process was launched.
// The first element will be process.execPath. See process.argv0 if access to the original value of argv[0] is needed.
//  The second element will be the path to the JavaScript file being executed. 
// The remaining elements will be any additional command-line arguments.