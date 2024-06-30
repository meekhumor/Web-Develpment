// Breaks the text in the h1 tag into spans
function breakText(){
    var h1 = document.querySelector("h1")
    var h1Text = h1.textContent
    var splittedText = h1Text.split("")
    
    var clutter = ""
    
    splittedText.forEach(function(letter){
        clutter += `<span>${letter}</span>`
    })  
    
    h1.innerHTML = clutter
}

breakText()

gsap.from("h1 span", {
    y:40,
    opacity:0,
    duration: 0.6,
    delay: 0.1,
    stagger: 0.15,
})