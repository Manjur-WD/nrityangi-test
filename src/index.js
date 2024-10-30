// Lenis smooth scrolling
const lenis = new Lenis({
  duration: 1.2,
});


// Request Animation Frame loop
function raf(time) {
  lenis.raf(time);
  requestAnimationFrame(raf);
}

requestAnimationFrame(raf);

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

const swiper1 = new Swiper("#hero .swiper", {
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
// Class section code

const swiper2 = new Swiper(".class-slider .swiper", {
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

  // Disable pagination (dots)
  pagination: false,
});

// Class section code end

// About Section Start

const aboutPoints = document.querySelectorAll(".about-point");

gsap.registerPlugin(ScrollTrigger);

const animateAboutSection = () => {
  const mm = gsap.matchMedia();

  mm.add("(min-width: 768px)", () => {
    gsap.from(".about-content p", {
      scrollTrigger: {
        trigger: "#about",
        start: "top 70%",
        once: true,
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
        once: true,
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
        once: true,
      },
      opacity: 0,
      y: 20,
      stagger: 0.5,
      duration: 0.5,
      ease: "power2.inOut",
    });
  });

  mm.add("(max-width: 767px)", () => {
    gsap.from([".about-content p", ".about-img", ...aboutPoints], {
      scrollTrigger: {
        trigger: "#about",
        start: "top 80%",
        once: true,
      },
      opacity: 0,
      y: 20,
      stagger: 0.3,
      duration: 0.5,
      ease: "power2.inOut",
    });
  });
};

// About Section End

// Why Choose Us Section Start
const wcupContent = document.querySelectorAll(".wcup-content");

const animateWhyChooseUsSection = () => {
  const mm = gsap.matchMedia();

  mm.add("(min-width: 768px)", () => {
    gsap.from(".why-choose-us-image", {
      scrollTrigger: {
        trigger: "#why-choose-us",
        start: "top 50%",
        once: true,
      },
      opacity: 0,
      scale: 0.5,
      duration: 1,
      ease: "back.inOut",
    });

    gsap.from(wcupContent, {
      scrollTrigger: {
        trigger: "#why-choose-us",
        start: "top 50%",
        once: true,
      },
      opacity: 0,
      scale: 0.9,
      duration: 0.8,
      ease: "back.out",
    });
  });

  mm.add("(max-width: 767px)", () => {
    gsap.from([".why-choose-us-image", ...wcupContent], {
      scrollTrigger: {
        trigger: "#why-choose-us",
        start: "top 80%",
        once: true,
      },
      opacity: 0,
      y: 20,
      duration: 0.5,
      ease: "power2.inOut",
    });
  });
};

// Initialize animations
animateAboutSection();
animateWhyChooseUsSection();

// Why Choose Us Section End

// our featured classes

// Animate the title and paragraph
gsap.from(".our-featured-content h2, .our-featured-content p", {
  scrollTrigger: {
    trigger: "#our-featured-classes",
    start: "top 80%", // Start the animation when the top of the section is 80% from the top of the viewport
    toggleActions: "play none none reverse", // Play the animation on enter and reverse on leave
  },
  y: 50, // Start position
  opacity: 0, // Start opacity
  duration: 1, // Animation duration
  ease: "power2.out",
  stagger: 0.2, // Stagger the animations for title and paragraph
});

// OUR COACHES SECTION

// Animate the title
gsap.from(".our-coach-content h2", {
  scrollTrigger: {
    trigger: ".our-dance-coaches",
    start: "top 80%", // Start the animation when the top of the section is 80% from the top of the viewport
    toggleActions: "play none none reverse", // Play the animation on enter and reverse on leave
  },
  y: 50, // Start position
  opacity: 0, // Start opacity
  duration: 1, // Animation duration
  ease: "power2.out",
});

// Animate coach cards
gsap.utils.toArray(".dance-coach").forEach((card, index) => {
  gsap.from(card, {
    scrollTrigger: {
      trigger: card,
      start: "top 80%",
      toggleActions: "play none none reverse",
    },
    y: 50, // Start position
    opacity: 0, // Start opacity
    duration: 0.5, // Animation duration
    ease: "power2.out",
    delay: index * 0.1, // Staggering animation for each card
  });
});

// ABOUT HORIZONTAL SCROLLER
// Ensure the code runs after the DOM is fully loaded
document.addEventListener("DOMContentLoaded", () => {
  const aboutHorizon = document.querySelector(".about-horizontal-scroller");

  if (aboutHorizon && window.innerWidth > 992) {
    // Calculate the amount to scroll
    const amountToScroll = aboutHorizon.scrollWidth - window.innerWidth;

    console.log("Scroll Width:", aboutHorizon.scrollWidth);
    console.log("Amount to Scroll:", amountToScroll);

    // GSAP animation
    gsap.to(aboutHorizon, {
      x: -amountToScroll,
      ease: "none",
      scrollTrigger: {
        trigger: ".about-section",
        start: "top 5%",
        end: "+=" + amountToScroll,
        scrub: 1,
        pin: true,
      },
    });

    // Optionally, handle window resize
    window.addEventListener("resize", () => {
      // Recalculate the amount to scroll on resize
      const newAmountToScroll = aboutHorizon.scrollWidth - window.innerWidth;
      gsap.getTweensOf(aboutHorizon).forEach((tween) => {
        tween.kill(); // Kill existing tween to prevent conflicts
      });
      gsap.to(aboutHorizon, {
        x: -newAmountToScroll,
        ease: "none",
        scrollTrigger: {
          trigger: ".about-section",
          start: "top 5%",
          end: "+=" + newAmountToScroll,
          scrub: 1,
          pin: true,
        },
      });
    });
  } else {
    console.error("Element not found or window width is less than 992px.");
  }
});

// testimonials

const swiper3 = new Swiper(".testimonial-slider.swiper", {
  direction: "horizontal",
  loop: true,

  // Add autoplay
  autoplay: {
    delay: 3000, // 3 seconds delay between slides
    disableOnInteraction: false, // Continue autoplay after user interaction
  },
  speed: 1000,
  // Navigation arrows
  navigation: {
    nextEl: ".swiper-next",
    prevEl: ".swiper-prev",
  },
  breakpoints: {
    // When window width is <= 1024px (tablets)
    1024: {
      slidesPerView: 2, // Show 2 slides on tablets
      spaceBetween: 20, // Adjust space for tablets
    },
    // When window width is <= 768px (mobile)
    992: {
      slidesPerView: 1, // Show 1 slide on mobile
      spaceBetween: 10, // Adjust space for mobile
    },
  },
});

// GSAP ScrollTrigger Animation
gsap.registerPlugin(ScrollTrigger);

// Select all testimonial cards
const testimonialCards = document.querySelectorAll(".testimonial-card");

testimonialCards.forEach((card) => {
  gsap.from(card, {
    scrollTrigger: {
      trigger: card,
      start: "top 80%", // Trigger animation when the top of the card hits 80% of the viewport height
      toggleActions: "play none none reverse",
    },
    y: 50, // Start with the card 50 pixels lower
    opacity: 0, // Start with 0 opacity
    duration: 0.5, // Animation duration
    ease: "power2.out", // Easing function
  });
});
