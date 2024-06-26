setTimeout(() => {
    document.body.style.backgroundColor = 'red';
    setTimeout(() => {
        document.body.style.backgroundColor = 'orange';
        setTimeout(() => {
            document.body.style.backgroundColor = 'yellow';
        }, 1000)
    }, 1000)
}, 1000)

const delayedColorChange = (newColor, delay, doNext) => {
    setTimeout(() =>{
        document.body.style.backgroundColor = newColor;
        doNext();   // it calls next function
    }, delay)
}

// delayedColorChange = ('olive', 3000);

delayedColorChange('red', 1000,() => {
    delayedColorChange('teal',1000,() => {
        delayedColorChange('beige',1000,() => {
            delayedColorChange('black',1000,() => {

            })
        })
    })
})

searchMoviesAPI('amadeus', () => {
    saveToMyDB(movies,() => {
        //if it works, run this
    }, () => {
        //if it doesn't work, run this
    })
})

