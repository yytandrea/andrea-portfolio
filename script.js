
//import Lenis from '@studio-freight/lenis';

/*const lenis = new Lenis({
    duration: 1.2,
    easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t))
  });
  
  function raf(time) {
    lenis.raf(time);
    requestAnimationFrame(raf);
  }
  requestAnimationFrame(raf);
  
  // Animate loader sequence
  window.addEventListener("load", () => {
    const loader = document.getElementById("loader");
    const name = document.querySelector(".loader-name");
    const icons = document.querySelector(".loader-icons");
  
    const tl = gsap.timeline();
  
    tl.to(name, { opacity: 1, y: -10, duration: 0.8 })
      .to(icons, { opacity: 1, y: -10, duration: 0.8, delay: 0.3 })
      .to(loader, { opacity: 0, duration: 1, delay: 1 })
      .set(loader, { display: "none" })
      .from("#topbar", { y: -50, opacity: 0, duration: 0.8 });
  });
  
  // You can add scroll-based animations here
  // Example:
  // gsap.from(".home-spatial", {
  //   scrollTrigger: ".home-spatial",
  //   y: 50,
  //   opacity: 0,
  //   duration: 1
  // });
  */
document.addEventListener("DOMContentLoaded",(event) =>{
  gsap.to("h2", { 
  duration: 2,
  rotation: 360,
  })
});
