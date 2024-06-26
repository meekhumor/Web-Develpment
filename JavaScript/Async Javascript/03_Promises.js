// A promises is an object representing the eventual completion or failure of an asynchronous operation

// Before promises

const fakeRequestCallback = (url, success, failure) => {
    const delay = Math.floor(Math.random() * 4500) + 500;  // random delay value are thrown 
    setTimeout(() => {
        if(delay > 4000) {
            failure('Connection Timeout :(')
        }
        else{
            success(`Here is your fake data from ${url}`)
        }

    },delay)
}

fakeRequestCallback('book.com',     // calling a function
    (response) => {  
        console.log('It worked!!')
        console.log(response);
        fakeRequestCallback('book.com/page1',
            (response) => {  
                console.log('It worked again!!')
                console.log(response);
            }, 
            (error)=> {
                console.log('Error (2nd req)!!', error)
            })
    }, 
    (error)=> {
        console.log('Error!!', error)
    }
)

//--------------------------------------------------------------------------------------------------------------------------------

// After promises

const fakeRequestPromise = (url) => {
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

// fakeRequestPromise('yelp.com/api/coffee')
// .then(() =>{
//     console.log('Promise Approved!'); // when resolves runs
//     fakeRequestPromise('yelp.com/api/coffee/page1')
//     .then(() =>{
//         console.log('Promise Approved!(2nd)'); 
//     })
//     .catch(() =>{
//         console.log('Promise Rejected! (2nd)');
//     })
// })
// .catch(() =>{
//     console.log('Promise Rejected!'); // when rejects run
// })

// A promise is a returned object to which you attach callbacks, instead of passing callbacks into a function

// Magic of promises

fakeRequestPromise('yelp.com/api/coffee/page1')
.then((data) =>{
    console.log('Promise Approved!(1st)', data); // when resolves runs
    return fakeRequestPromise('yelp.com/api/coffee/page2')
})
.then((data) =>{
    console.log('Promise Approved!(2nd)', data); // when resolves runs
    return fakeRequestPromise('yelp.com/api/coffee/page3')
})
.then((data) =>{
    console.log('Promise Approved!(3rd)',data); // when resolves runs
})
.catch((data) =>{
    console.log('Promise Rejected!' ,data); // when rejects run
})
