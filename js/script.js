console.log("Hello world!");
//Set current year
const yearEl = document.querySelector(".year");
const currentYear = new Date().getFullYear();
yearEl.textContent = currentYear;

//Make mobile navigation work
const btnNav = document.querySelector(".btn-mobile-nav");
const mainHeader = document.querySelector(".main-header");

btnNav.addEventListener("click", () => {
  mainHeader.classList.toggle("nav-open");
});

//Smoote scrolling animation
const allLinks = document.querySelectorAll("a:link");
allLinks.forEach((link) => {
  link.addEventListener("click", (e) => {
    e.preventDefault();
    const href = link.getAttribute("href");

    //Scroll back to top
    if (href === "#") window.scrollTo({ top: 20, behavior: "smooth" });
    //Scroll back to top
    else if (href !== "#" && href.startsWith("#")) {
      const sectionEl = document.querySelector(href);
      sectionEl.scrollIntoView({ behavior: "smooth" });
    }
    //Close mobile navigation
    if (link.classList.contains("main-nav-link"))
      mainHeader.classList.toggle("nav-open");
  });
});

///////////////////////////////////////////////////////////
// Sticky navigation
const sectionHeroEl = document.querySelector(".section-hero");
const observer = new IntersectionObserver(
  (entries) => {
    const ent = entries[0];
    if (!ent.isIntersecting) document.body.classList.add("sticky");
    if (ent.isIntersecting) document.body.classList.remove("sticky");
  },
  {
    // In the viewport
    root: null,
    threshold: 0,
    rootMargin: "-80px",
  }
);
observer.observe(sectionHeroEl);

