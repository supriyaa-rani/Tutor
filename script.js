gsap.registerPlugin(ScrollTrigger);

// Using Locomotive Scroll from Locomotive https://github.com/locomotivemtl/locomotive-scroll

const locoScroll = new LocomotiveScroll({
  el: document.querySelector(".main"),
  smooth: true
});
// each time Locomotive Scroll updates, tell ScrollTrigger to update too (sync positioning)
locoScroll.on("scroll", ScrollTrigger.update);

// tell ScrollTrigger to use these proxy methods for the ".main" element since Locomotive Scroll is hijacking things
ScrollTrigger.scrollerProxy(".main", {
  scrollTop(value) {
    return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
  }, // we don't have to define a scrollLeft because we're only scrolling vertically.
  getBoundingClientRect() {
    return {top: 0, left: 0, width: window.innerWidth, height: window.innerHeight};
  },
  // LocomotiveScroll handles things completely differently on mobile devices - it doesn't even transform the container at all! So to get the correct behavior and avoid jitters, we should pin things with position: fixed on mobile. We sense it by checking to see if there's a transform applied to the container (the LocomotiveScroll-controlled element).
  pinType: document.querySelector(".main").style.transform ? "transform" : "fixed"
});






// each time the window updates, we should refresh ScrollTrigger and then update LocomotiveScroll. 
ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

// after everything is set up, refresh() ScrollTrigger and update LocomotiveScroll because padding may have been added for pinning, etc.
ScrollTrigger.refresh();

const scroll = new LocomotiveScroll({
    el: document.querySelector('.main'),
    smooth: true
});

const values = document.querySelectorAll('.val-1');
// const interval = 3000;/////////////////////////////////////////////connected

values.forEach((val)=>{
  let startVal = 0;
  let endVal = parseInt(val.getAttribute('data-count'));

  // let endVal = values.dataset.count
  // let duration = Math.floor(interval/endVal);///////////////////////////////connected

  let counter = setInterval(function(){
    startVal += 1;
    val.textContent = startVal;

    // if (startVal < 1000) {
    //   startVal += 5
    //   values.innerText = startVal
    // }

    // if (startVal >= 1000) {
    //   startVal += 100
    //   values.innerText = startVal 
    // }

    if(startVal == endVal){
      clearInterval(counter);
    }
  }, 2)

  // const counting = setInterval(updateCounting,1);

  // function updateCounting() {
  //   startVal += 1;
  //   values.innerText = startVal

  //   if (startVal >= endVal) {
  //     clearInterval(counting)
    // }
  // }
})

// gsap

gsap.from(".yellow-sec h5",{
  scale:0,
  opacity:0,
  duration:3,
  scrollTrigger:{
    trigger: '.yellow-sec',
    scroller: '.main',
    // markers: true,
    start:"top 10%",
    end: "top 0%",
    scrub: true
  }
})

gsap.from(".page1-content-right img",{
  opacity:0,
  scale: 0.8,
  duration:2,
})

gsap.from(".boxes1",{
  opacity:0,
  scale: 0.8,
  duration:3,
  scrollTrigger:{
    trigger: ".boxes1",
    scroller: ".main",
    // markers: true,
    start: "top 70%",
    end: "top 50%",
    scrub: true,
  }
})

gsap.from('.page2-content>img:nth-child(2)', {
  scale: 2,
  opacity: 0,
  scrollTrigger:{
    trigger: '.page2-content>img:nth-child(2)',
    scroller: '.main',
    // markers: true,
    start: 'top 65%',
    end: 'top 40%',
    scrub: true,
  }
})


gsap.from(".egg1",{
  opacity:0,
  scale: 0.8,
  duration:3,
  scrollTrigger:{
    trigger: ".egg1",
    scroller: ".main",
    markers: true,
    start: "top 85%",
    end: "top 50%",
    scrub: true,
  }
})

