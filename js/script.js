let controller = new ScrollMagic.Controller();
let timeline = new TimelineMax();

timeline
  .to(".coral", 10, { y: -200 })
  .to(".turtle", 10, { y: -300 }, "-=10")
  .fromTo(".bg", { y: 50 }, { y: 0, duration: 10 }, "-=10")
  .to(".container-nosotros", 10, { top: "0%" }, "-=10")
  .fromTo(".text", { opacity: 0 }, { opacity: 1, duration: 3 })
  .fromTo(".container-img", { opacity: 0 }, { opacity: 1, duration: 3 });

let scene = new ScrollMagic.Scene({
  triggerElement: "section",
  duration: "300%",
  triggerHook: 0,
})
  .setTween(timeline)
  .setPin("section")
  .addTo(controller);