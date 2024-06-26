// -Async
// -Await

// Async keyword

// Async function always return a promise 
// -If the function returns a value, the promise will be resolved with that value
// -If the function throws an exception, the promise will be rejected

const sing = async () => {
    throw "OH NO, Problem" // due to this throw execution stops here and doesn't proceed to return statement making a error
    return 'LA LA LA LA' 
}

sing()
.then((data) => {
    console.log("PROMISED RESOLVED WITH", data)
})
.catch((err) => {
    console.log("OH NO, PROMISE REJECTION", err)
})

// Practical example:

const login = async (username, password) => {
    if(!username || !password) throw 'Missing Credentials'
    if(password === 'corgi') return 'Welcome!'
    throw 'Invalid Password'
}

login('asd')
.then((msg) => {
    console.log("LOGGED IN", msg)
})
.catch((err) => {
    console.log("Error!", err)
})

//-------------------------------------------------

// Await Keyword

//-We can mostly use the await keyword inside of functions declared with async
//-await will pause the execution of the function, waiting for promises to be resolved

const delayedColorChange = (newColor, delay) => {
    setTimeout(() =>{
        document.body.style.backgroundColor = newColor;
    }, delay)
}

async function rainbow(){
    await delayedColorChange('red', 1000)
    await delayedColorChange('orange', 1000)
    await delayedColorChange('yellow', 1000)
    await delayedColorChange('purple', 1000)
    await delayedColorChange('pink', 1000)
    await delayedColorChange('blue', 1000)
}

rainbow().then(() => console.log("End of Rainbow"))

// Handling error ina sync function

const fakeRequest = (url) => {
    return new  Promise((resolve, reject) => {

        const delay = Math.floor(Math.random() * 4500) + 500;  // random delay value are thrown 
        setTimeout(() => {
            if(delay > 4000) {
                reject('Connection Timeout :(')
            }
            else{
                resolve(`Here is your fake data from ${url}`)
            }
            
        },delay)
    })
}


async function makeTwoRequest() {
    try{
        let data1 = await fakeRequest('/page1');
        let data2 = await fakeRequest('/page2');
        console.log(data1);     // this execution will wait until fakeRequest to execute due to await keyword
    }catch (e){
        console.log("Caught an error!")
        console.log("Error is: ", e)
    }
}