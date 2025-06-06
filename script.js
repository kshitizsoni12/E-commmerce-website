function init() {
    gsap.registerPlugin(ScrollTrigger);

    // Using Locomotive Scroll from Locomotive https://github.com/locomotivemtl/locomotive-scroll

    const locoScroll = new LocomotiveScroll({
        el: document.querySelector(".main"),
        smooth: true,
        lerp: 0.05,  // very smooth/slow
        multiplier: 0.5,  // half speed

    });
    // each time Locomotive Scroll updates, tell ScrollTrigger to update too (sync positioning)
    locoScroll.on("scroll", ScrollTrigger.update);

    // tell ScrollTrigger to use these proxy methods for the ".main" element since Locomotive Scroll is hijacking things
    ScrollTrigger.scrollerProxy(".main", {
        scrollTop(value) {
            return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
        }, // we don't have to define a scrollLeft because we're only scrolling vertically.
        getBoundingClientRect() {
            return { top: 0, left: 0, width: window.innerWidth, height: window.innerHeight };
        },
        // LocomotiveScroll handles things completely differently on mobile devices - it doesn't even transform the container at all! So to get the correct behavior and avoid jitters, we should pin things with position: fixed on mobile. We sense it by checking to see if there's a transform applied to the container (the LocomotiveScroll-controlled element).
        pinType: document.querySelector(".main").style.transform ? "transform" : "fixed"
    });



    // each time the window updates, we should refresh ScrollTrigger and then update LocomotiveScroll. 
    ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

    // after everything is set up, refresh() ScrollTrigger and update LocomotiveScroll because padding may have been added for pinning, etc.
    ScrollTrigger.refresh();

}
init();




let bar = document.querySelector(".bar");
let nav = document.querySelector(".nav-links");
let close = document.querySelector("#close-menu");

bar.addEventListener("click", function (event) {
    nav.classList.add("active")
})

close.addEventListener("click", function (event) {
    nav.classList.remove("active")
})




var tl = gsap.timeline();

tl.from(".logo", {
    opacity: 0,
    x: -30,
    duration: 0.5,
    delay: 1,
}, "heading")

tl.from(".nav-links li a", {
    opacity: 0,
    x: -30,
    duration: 1,
    delay: 1,
    stagger: 0.15
}, "heading")

tl.from("#hero-text", {
    opacity: 0,
    x: -50,
    duration: 1,
    delay: 1.5,
    stagger: 0.15
}, "heading")

