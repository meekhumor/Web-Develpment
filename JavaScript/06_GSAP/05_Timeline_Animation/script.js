var menu = document.querySelector("#nav i")
var cross = document.querySelector("#full i")

// timeline
var tl = gsap.timeline() 

tl.to("#full",{
    right:0,
    duration: 0.6,
})
tl.from("#full h4",{
    x: 150,
    opacity: 0,
    duration: 0.7,
    delay: 0.2,
    stagger: 0.3,
})
tl.from("#full i",{
    opacity: 0,
})

tl.pause() // paused for now

menu.addEventListener("click", function(){
    tl.play() // played
})
cross.addEventListener("click", function(){
    tl.reverse() // reversed
})