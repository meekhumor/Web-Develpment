const fs = require('fs');

// Write file will create a new file or overwrite the existing file in same folder
fs.writeFile('test.txt', 'Hello World!', function(err){
    if(err) throw err;
    console.log('File is created successfully.');
});

// Append file will add content to the existing file
fs.appendFile('test.txt', 'Hello Node.js!', function(err){
    if(err) throw err;
    console.log('Content is appended to file successfully.');
});

// Rename file will rename the existing file
fs.rename('test.txt', 'test1.txt', function(err){
    if(err) throw err;
    console.log('File is renamed successfully.');
});

// Delete file will delete the existing file
fs.unlink('test1.txt', function(err){
    if(err) throw err;
    console.log('File is deleted successfully.');
}); 