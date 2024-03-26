const nav_main = document.querySelector('.navbar');
const nav = document.querySelector('.nav');
const allSections = document.querySelectorAll('section');
console.log(allSections);


const handleHovermain = function (e, opacity) {
  if (e.target.classList.contains('nav-link')) {
    // console.log(e.target);
    const link = e.target;
    // console.log(link);
    const siblings = link.closest('.navbar').querySelectorAll('.nav-link');

    siblings.forEach(el => {
      if (el !== link) el.style.opacity = opacity;
    });
  }
};
const handleHover = function (e, opacity) {
  if (e.target.classList.contains('nav-link')) {
    const click = e.target;

    const childern = click.closest('.nav').querySelectorAll('.nav-link');
    childern.forEach(el => {
      if (el !== click) el.style.opacity = opacity;
    });
  };
}

nav_main.addEventListener('mouseover', function (e) {
  handleHovermain(e, 0.5);
});
nav_main.addEventListener('mouseout', function (e) {
  handleHovermain(e, 1);
});
nav.addEventListener('mouseover', function (e) {
  handleHover(e, 0.5);
});
nav.addEventListener('mouseout', function (e) {
  handleHover(e, 1);
}
);


const revealSection = function (entries, observer) {
  const [entry] = entries;

  if (!entry.isIntersecting) return;

  entry.target.classList.remove('section-hidden');
  observer.unobserve(entry.target);
};

const sectionObserver = new IntersectionObserver(revealSection, {
  root: null,
  threshold: 0.20,
});

allSections.forEach(function (section) {
  sectionObserver.observe(section);
  section.classList.add('section-hidden');
});