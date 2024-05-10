const args = process.argv.slice(2);
for (let arg of args) {
    console.log(`Hi there, ${arg}`)
}

// Terminal: node argv.js {Any name} to execute this