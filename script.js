gsap.registerPlugin (Flip);
gsap.registerPlugin (ScrollTrigger);

// Init Lenis//
const lenis = new Lenis({
    duration: 0.5,
    easing: (x) => x,
    smooth:true,
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


window.addEventListener("load", () =>{

  const body = document.querySelector("body");

  /*const initImgs = document.querySelectorAll(".init-img");
  const initOldContainers = document.querySelectorAll(".initOldContainer");
  const initImgTargets = document.querySelectorAll(".initNewContainer");
  const sectionTimelines = [];

  initImgs.forEach((initImg,index) => {
    initImg.setAttribute ("style", `width:${body.offsetWidth-100}px`);
    
    let sectionTl = gsap.timeline({paused :true});
    
    const initImgState = Flip.getState(initImg);
    initImgTargets[index].appendChild(initImg);
    
    sectionTl.addLabel("start");
    
    sectionTl.add(
      Flip.from(initImgState, {
        duration: 1,
        ease: "power2.inOut",
        absolute: true,
        scale: true,
      }),
      "start"
    );

    ScrollTrigger.create({
      trigger: initOldContainers[index],
      start: "top 100px",
      once:true,
      onEnter:() => sectionTl.play()
    })

    sectionTimelines [index] = sectionTl;
  });
*/
   

  
  const gallerySlides = document.querySelectorAll(".gallery-slide");
  gallerySlides.forEach(slide =>{
    slide.setAttribute("style", `width:${body.offsetWidth-100}px`)
  });
  const gallery = document.querySelector(".gallery-stack");
  const numSlides = gallery.children.length;


    gsap.to(gallery,{
      xPercent:-100*(numSlides-1),
      ease:"none",
      scrollTrigger:{
        trigger: ".home-spatial",
        start:"top 100px",
        end: () => `+=${gallery.offsetWidth}`,
        scrub: true,
        pin:true,
        anticipatePin:1 ,
        markers:true
      }
   })

 

  const shelf = document.querySelector(".visual-shelf");
  shelf.setAttribute("style",`width:${body.offsetWidth-100}px`);
  const text = document.querySelector(".visual-text");
 
 
    gsap.to(text,{
      scrollTrigger:{
        trigger: text,
        start: 'top 100px',
        end: () => `+=${shelf.scrollHeight-text.clientHeight}`,
        scrub:true,
        pin:true,
      }
    })

    

  const track = document.querySelector(".interactive-track");
  const intText = document.querySelector(".interactive-text");
  const interactive = document.querySelector(".home-interactive")
  interactive.setAttribute("style",`width:${body.offsetWidth-100}px`);

  gsap.to(intText,{
    scrollTrigger:{
      trigger: intText,
      start: 'top 100px',
      end: () => `+=${track.scrollHeight} bottom`,
      scrub:true,
      pin:true,
    }
  })
  
  const images = [
    "assets/images/1.jpg",
    "assets/images/2.jpg"
  ]

  const trackItems = document.querySelectorAll(".track-item");
  const imgWrapper = document.querySelector(".img-wrapper");
  


  trackItems.forEach((trackItem,index) =>{
    trackItem.addEventListener( "mouseenter", ()=>{
      const img = document.createElement("img");
      img.src = images[index];
      img.alt = `image ${index+1}`;
      
      imgWrapper.innerHTML = "";
      imgWrapper.appendChild(img);
      img.onload = () =>{imgWrapper.setAttribute("style",`top:${(intText.clientHeight-img.clientHeight)/2}px`);}
    });
  });


})

