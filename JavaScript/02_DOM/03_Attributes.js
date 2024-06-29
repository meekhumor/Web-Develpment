// Properties:

// -classList: can modify a attribute
const h2 = document.querySelector('h2');
h2.classList.add('purple')

// -getAttributes('attribute'): can get atrributes value
const firstLink = document.querySelector('a');
firstLink.getAttribute('href');     // http://www.umich.edu/
 
// -setAttributes('attribute','change the atrribute'): 
firstLink.setAttribute('src','www.google.com');

// getComputedStyle('Tag'): predefined computer styles
const h1 = document.querySelector('h1')
window.getComputedStyle(h1)

// -appendChild(): it implies newly created element
const newImg = document.createElement('img')
newImg.src = 'https://images.unsplash.com/photo-1711499936918-f89154f501af?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
document.body.appendChild(newImg)

// -append('text'): it adds new text to last term in element
document.querySelector('p').append('hi')

// insertAdjacentElement('position', 'text'): it add new adjacent to given position in element 
    const h3 = document.querySelector('h3');
    h3.append('hello says me');
    h1.insertAdjacentElement("afterend",h2); // after end of h1, h3 gets appended

// -prepend(): it adds before first term of element 

// -removeChild(): it removes the child of tag
    const firstLi = document.querySelector("li");
    firstLi.parentElement.removeChild(firstLi);
// -remove(): it removes the element 
// -createElement: it creates new tag(element)

// Methods:

// -innerText: we can edit inner content of any tag
// -textContent: similar to innerText, with spacing
// -innerHTML: we can edit inner content and can also add html tags via js 
// -value: 
// -parentElement: it displays the parent tag of a tag 
// -children: it displays children tag of a tag
// -nextSibling: it show next adjacent tag of a tag
// -previousSibling: it show previos adjacent tag of a tag
// -style: it is used to give style via js, style are camelcased and value should be string('')

// can change id of tag by document.querySelector('#banner').id = "whoops";