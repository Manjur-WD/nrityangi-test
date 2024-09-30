// This is for header section
const btnMenu = document.querySelector(".btn-menu");
const btnClose = document.querySelector(".btn-close");
const nav = document.querySelector("#nav");
const navTimeline = gsap.timeline();

let currentWindowWidth = window.innerWidth;

const updateNavTimeline = () => {
  navTimeline.clear();
  navTimeline
    .to(nav, {
      clipPath: "circle(100% at 100% 0%)",
      duration: 0.3,
      ease: "power2.inOut",
    })
    .from("nav ul li", {
      opacity: (index, target) => {
        return currentWindowWidth <= 992 ? 0 : 1;
      },
      y: (index, target) => {
        return currentWindowWidth <= 992 ? 20 : 0;
      },
      stagger: {
        each: 0.1,
        from: "start",
        ease: "power2.out",
      },
      duration: 0.2,
      ease: "power2.out",
    });
};

updateNavTimeline();

window.addEventListener("resize", () => {
  if (window.innerWidth !== currentWindowWidth) {
    currentWindowWidth = window.innerWidth;
    updateNavTimeline();
  }
});

navTimeline.pause();

const toggleNavigation = (showClose, playTimeline) => {
  const scaleValues = showClose ? [1, 0] : [0, 1];

  gsap.to([btnClose, btnMenu], {
    scale: (i) => scaleValues[i],
    duration: 0.2,
    ease: "power2.inOut",
  });

  playTimeline ? navTimeline.play() : navTimeline.reverse();
};

btnMenu.addEventListener("click", () => toggleNavigation(true, true));
btnClose.addEventListener("click", () => toggleNavigation(false, false));

// This is for home section

// Hero section code

const swiper = new Swiper("#hero .swiper", {
  // Optional parameters
  direction: "horizontal",
  loop: true,
  // Enable fade effect
  effect: "fade",
  fadeEffect: {
    crossFade: true,
  },
  // Add autoplay
  autoplay: {
    delay: 5000, // 3 seconds delay between slides
    disableOnInteraction: false, // Continue autoplay after user interaction
  },
  speed: 1000,
  // Navigation arrows
  navigation: {
    nextEl: ".swiper-next",
    prevEl: ".swiper-prev",
  },

  // Pagination
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});

// Hero section code end

// About Section Start

const aboutPoints = document.querySelectorAll(".about-point");

gsap.from(".about-content p", {
  scrollTrigger: {
    trigger: "#about",
    start: "top 70%",
  },
  opacity: 0,
  scale: 0.9,
  duration: 0.5,
  ease: "power2.inOut",
});

gsap.from(".about-img", {
  scrollTrigger: {
    trigger: "#about",
    start: "top 70%",
  },
  opacity: 0,
  x: 40,
  duration: 0.5,
  ease: "back.inOut",
});

gsap.from(aboutPoints, {
  scrollTrigger: {
    trigger: "#about",
    start: "top 50%",
  },
  opacity: 0,
  y: 20,
  stagger: 0.5,
  duration: 0.5,
  ease: "power2.inOut",
});

// About Section End

// Why Choose Us Section Start
const wcupContent = document.querySelectorAll(".wcup-content");
console.log(wcupContent);

gsap.from(".why-choose-us-image", {
  scrollTrigger: {
    trigger: "#why-choose-us",
    start: "top 50%",
  },
  opacity: 0,
  scale: 0.5,
  duration: 1,
  ease: "back.inOut",
});

gsap.from(wcupContent, {
  scrollTrigger: {
    trigger: "#about",
    start: "top 50%",
  },
  opacity: 0,
  scale: 0.9,
  duration: 0.8,
  ease: "back.Out",
});

// Why Choose Us Section End

// Audio Control Script

document.addEventListener("DOMContentLoaded", function () {
  const audio = document.getElementById("backgroundAudio");
  const muteButton = document.getElementById("muteButton");
  const muteIcon = document.getElementById("muteIcon");

  // Start playing audio when the page loads
  audio.play();

  muteButton.addEventListener("click", function () {
    if (audio.muted) {
      audio.muted = false;
      muteIcon.classList.remove("ri-volume-mute-line");
      muteIcon.classList.add("ri-volume-up-line");
    } else {
      audio.muted = true;
      muteIcon.classList.remove("ri-volume-up-line");
      muteIcon.classList.add("ri-volume-mute-line");
    }
  });
});
