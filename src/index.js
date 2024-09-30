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
