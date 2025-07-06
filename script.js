gsap.registerPlugin (Flip);


const lenis = new Lenis({
    duration: 1.2,
    easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t))
});
  
function raf(time) {
  lenis.raf(time);
  requestAnimationFrame(raf);
}
requestAnimationFrame(raf);
  
// Animate loader sequence
window.addEventListener("load",()=>{

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
      }, index*1
      /*index === 0 ? 0 : ">-1.5"*/);
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
      duration: 0.5,
      onComplete: () => loader.remove()
    });
    return tl;
  }


  let tlLoader=gsap.timeline()
    .add(loaderIntro())
    .add(()=>loaderOutro())
    .add(loaderRemove());
});


  /*const clonedName = loaderName.cloneNode(true);
  const clonedIcons = loaderIcons.cloneNode(true);
  clonedName.classList.add ("cloned");
  clonedIcons.classList.add("cloned");
  logo.innerHTML = "";
  logo.appendChild(cloneName);
  topbarNav.innerHTML="";
  [...clonedIcons.children].forEach(icon => topbarNav.appendChild(icon));*/



  /*const tl = gsap.timeline();

  tl.to(loaderName, { opacity: 1, y: -10, duration: 0.8 })
    .to(loaderIcons, { opacity: 1, y: -10, duration: 0.8, delay: 0.3 })
    .to(loader, { opacity: 0, duration: 1, delay: 1 })
    .set(loader, { display: "none" })
    .from("#topbar", { y: -50, opacity: 0, duration: 0.8 });
 });*/
  
  // You can add scroll-based animations here
  // Example:
  // gsap.from(".home-spatial", {
  //   scrollTrigger: ".home-spatial",
  //   y: 50,
  //   opacity: 0,
  //   duration: 1
  // });
