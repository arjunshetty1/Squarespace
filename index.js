const tl = gsap.timeline()

tl.from("nav img,nav h3,nav h4,nav button", {
    y: -70,
    duration: 1,
    opacity: 0,
    stagger: 0.1
})

tl.from(".main h1", {
    y: 100,
    opacity: 0,
    stagger: 0.3
})

gsap.from(".main #img1,.main #img2,.main #img3, .main #img4", {
    scale: -0,
    delay: 2.5,
    duration: 0.25,
    opacity: 0,
    stagger: 0.1
})


