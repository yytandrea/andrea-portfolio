gsap.registerPlugin (Flip);
gsap.registerPlugin (ScrollTrigger);

// Init Lenis//
const lenis = new Lenis({
    //duration: 1.2,
    //easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t))
});
  
function raf(time) {
  lenis.raf(time);
  requestAnimationFrame(raf);
}
requestAnimationFrame(raf);

// Synchronize Lenis scrolling with GSAP's ScrollTrigger plugin
lenis.on('scroll', ScrollTrigger.update);

// Add Lenis's requestAnimationFrame (raf) method to GSAP's ticker
// This ensures Lenis's smooth scroll animation updates on each GSAP tick
gsap.ticker.add((time) => {
  lenis.raf(time * 1000); // Convert time from seconds to milliseconds
});

// Disable lag smoothing in GSAP to prevent any delay in scroll animations
gsap.ticker.lagSmoothing(0);

  
// Animate loader sequence
/*window.addEventListener("load",()=>{

  const loader = document.getElementById("loader");

  function loaderIntro(){
    const loaderChildren = Array.from(loader.children);
    let tl = gsap.timeline();

    loaderChildren.forEach((element, index) => {
      tl.from(element, {
        x: 100,
        opacity: 0,
        duration: loaderChildren.length - index ,
        ease: "power3.inOut"
      }, index*1.5);
    });
    return tl;
  }
  
  function loaderOutro(){

    const pairs = [
      { item: ".loader-name", newContainer: ".nav-name" },
      { item: ".loader-icon-spatial", newContainer: ".nav-spatial" },
      { item: ".loader-icon-visual", newContainer: ".nav-visual" },
      { item: ".loader-icon-interactive", newContainer: ".nav-interactive" }
    ];

    pairs.forEach(({ item, newContainer }) => {
      const element = document.querySelector(item);
      const target = document.querySelector(newContainer);
      const state = Flip.getState(element);

      target.appendChild(element); // move element to target

      Flip.from(state, {
        duration: 1,
        ease: "power2.inOut",
        absolute: true,
        scale: true
      });
    });

  }


  function loaderRemove(){
    const tl = gsap.timeline();
    tl.to(loader, {
      opacity: 0,
      duration: 2,
      onComplete: () => loader.remove()
    });
    return tl;
  }


  let tlLoader=gsap.timeline()
    .add(loaderIntro())
    .add(()=>loaderOutro())
    .add(loaderRemove());
});
*/
