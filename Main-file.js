function handleResponsive() {
  const circles = document.querySelectorAll(".orbit, .orbit2, .circle, .content1, .content11, .content2, .content22, .content3, .content33, .content4, .content44, .content5, .content55, .content6, .content66");

  if (window.innerWidth < 768) {
    circles.forEach(c => c.style.animation = "none"); // stop
  } else {
    circles.forEach(c => c.style.animation = "rotate 10s linear infinite"); // resume
  }
}

// Run on load
handleResponsive();

// Run on resize
window.addEventListener("resize", handleResponsive);





document.addEventListener("DOMContentLoaded", () => {
    const orbit = document.getElementById("orbit");
    const orbit2 = document.getElementById("orbit2");
    const circle1 = document.getElementById("circle1");
    const circle11 = document.getElementById("circle11");
    const circle2 = document.getElementById("circle2");
    const circle22 = document.getElementById("circle22");
    const circle3 = document.getElementById("circle3");
    const circle33 = document.getElementById("circle33");
    const circle4 = document.getElementById("circle4");
    const circle44 = document.getElementById("circle44");
    const circle5 = document.getElementById("circle5");
    const circle55 = document.getElementById("circle55");
    const circle6 = document.getElementById("circle6");
    const circle66 = document.getElementById("circle66");
  


      // hide big circle initially
      circle11.style.visibility= "hidden";
      circle22.style.visibility= "hidden";
      circle33.style.visibility= "hidden";
      circle44.style.visibility= "hidden";
      circle55.style.visibility= "hidden";
      circle66.style.visibility= "hidden";

      
  

    orbit.addEventListener("mouseenter", () => {  
        // pause ALL rotating elements (orbit + circles)
        document.querySelectorAll(".orbit, .orbit2, .circle, .content1, .content11, .content2, .content22, .content3, .content33, .content4, .content44, .content5, .content55, .content6, .content66")
          .forEach(el => el.style.animationPlayState = "paused");
      });
  
      orbit.addEventListener("mouseleave", () => {
        // resume ALL rotating elements
        document.querySelectorAll(".orbit, .orbit2, .circle, .content1, .content11, .content2, .content22, .content3, .content33, .content4, .content44, .content5, .content55, .content6, .content66")
          .forEach(el => el.style.animationPlayState = "running");
      });
    });





    circle1.addEventListener("mouseenter", () => {
      circle11.style.visibility= "visible";
  });  

  circle2.addEventListener("mouseenter", () => {
    circle22.style.visibility= "visible";
  }); 

  circle3.addEventListener("mouseenter", () => {
    circle33.style.visibility= "visible";
  }); 

  circle4.addEventListener("mouseenter", () => {
    circle44.style.visibility= "visible";
  }); 

  circle5.addEventListener("mouseenter", () => {
    circle55.style.visibility= "visible";
  }); 

  circle6.addEventListener("mouseenter", () => {
    circle66.style.visibility= "visible";
  }); 



  


  circle1.addEventListener("mouseleave", () => {
    circle11.style.visibility= "hidden";  
  });
  circle2.addEventListener("mouseleave", () => {
    circle22.style.visibility= "hidden";  
  });
  circle3.addEventListener("mouseleave", () => {
    circle33.style.visibility= "hidden";  
  });
  circle4.addEventListener("mouseleave", () => {
    circle44.style.visibility= "hidden";  
  });
  circle5.addEventListener("mouseleave", () => {
    circle55.style.visibility= "hidden";  
  });
  circle6.addEventListener("mouseleave", () => {
    circle66.style.visibility= "hidden";  
  });


  