const lenis = new Lenis({
    duration: 1.2,
    easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
    smoothWheel: true,
    wheelMultiplier: 20
})

function raf(time){
    lenis.raf(time)
    requestAnimationFrame(raf)
}
requestAnimationFrame(raf)


const tl = gsap.timeline({
    scrollTrigger:{
        trigger: ".one",
        pin: true,
        scrub: true,
        start: "top top",
        end: "bottom+=1000px bottom"
    }
}), images = gsap.utils.toArray(".img")
    images.reverse()

images.forEach(image => {
    tl.to(image,{
        x: "100vh",
        y: "50vh",
        rotate: 90,
        duration: 8
    }).to(image,{
        x: -1500,
        y: 500,
        duration: 8
    })
})

tl.to(".heading",{
        yPercent: -120,
        duration: 8
    })