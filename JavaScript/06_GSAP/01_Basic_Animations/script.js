var tl = gsap.timeline()

tl.from("h2",{
    y: -20,
    opacity:0,
    duration: 0.5,
    delay: 0.5, 
})
tl.from("h4",{
    y: -20,
    opacity:0,
    duration: 0.5,
    delay: 0.5, 
    stagger: 0.3,
})