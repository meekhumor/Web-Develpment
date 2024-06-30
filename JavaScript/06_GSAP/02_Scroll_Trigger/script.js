gsap.from("#page1 #box", {
  scale: 0,
  duration: 2,
  delay: 1,
  rotate: 360,
});
gsap.from("#page2 #box", {
  scale: 0,
  duration: 2,
  rotate: 360,
  scrollTrigger: {
    trigger: "#page2 #box",
    markers: true,
    start: "top 60%",
    end: "bottom 10%",
    scrub: 1,
    // scrub: animation will take place between scroller start and end
  },
});

// pin: true(for parent) -> will pin the element to the top of the viewport