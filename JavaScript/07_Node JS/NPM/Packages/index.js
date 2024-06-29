const jokes = require('give-me-a-joke')
const color = require('colors')

// Terminal: To install package npm i {package name}

jokes.getRandomDadJoke(function (joke) {
    console.log(joke.rainbow);
})

console.log('Omg Rainbow'.rainbow)