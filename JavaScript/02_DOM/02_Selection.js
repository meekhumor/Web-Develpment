// Selecting
// -getElementById

console.log(document.getElementById('left'));

// -getElementsByTagName

const allImages = document.getElementsByTagName('img');
for (const Images of allImages) {
    console.log(Images);
}

// -getElementByClassName

console.log(document.getElementsByClassName('myClass'));

//querySelector: it select all element

document.querySelector('img');
document.querySelector('#red');
document.querySelector('.big');

// querySelectorAll to selct all element of specific class or id

