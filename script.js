// Sticky Header Function
function handleStickyHeader() {
  const header = document.querySelector(".site-main-nav");
  const body = document.body;
  const isScrolled = window.scrollY > 0;

  header?.classList.toggle("sticky", isScrolled);
  body.classList.toggle("sticky-nav", isScrolled);
}

// Debounce Function to Optimize Scroll Events
function debounce(func, delay) {
  let timeout;
  return function () {
    clearTimeout(timeout);
    timeout = setTimeout(func, delay);
  };
}

// Scroll Event Listener with Debounce
window.addEventListener("scroll", debounce(handleStickyHeader, 10));

// Intersection Observer for Animation on Scroll
// function observeAnimations() {
//   const demoItems = document.querySelectorAll(".demo-item");
//   const supportsIntersectionObserver = "IntersectionObserver" in window;

//   if (supportsIntersectionObserver) {
//     const observer = new IntersectionObserver((entries, observer) => {
//       entries.forEach((entry) => {
//         if (entry.isIntersecting) {
//           entry.target.style.visibility = "visible";
//           entry.target.style.animationName = "fadeInUp";
//           observer.unobserve(entry.target);
//         }
//       });
//     });

//     demoItems.forEach((item) => {
//       item.style.visibility = "hidden";
//       observer.observe(item);
//     });
//   } else {
//     // Fallback for Older Browsers
//     demoItems.forEach((item) => {
//       item.style.visibility = "visible";
//       item.style.animationName = "fadeInUp";
//     });
//   }
// }

// // Execute Animation Observer on DOM Load
// document.addEventListener("DOMContentLoaded", observeAnimations);
