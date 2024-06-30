var main = document.querySelector("#main")
var cursor = document.querySelector("#cursor")
var image = document.querySelector("#image")

// Mouse Move
main.addEventListener("mousemove", function(dets) {
    gsap.to(cursor, {
        x: dets.x, // we are changing the x position (fixed)
        y: dets.y,
        duration: 0.1,
        ease: "power1.Out", // Gsap easing
    })
})

// Mouse Enter
image.addEventListener("mouseenter", function(dets) {
    gsap.to(cursor,{
        scale: 4,
        opacity:0.2,
    })
})

// Mouse Leave
image.addEventListener("mouseleave", function(dets) {
    gsap.to(cursor,{
        scale: 1,
        opacity: 1,
    })
})
