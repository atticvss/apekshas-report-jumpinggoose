const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.12 });

document.querySelectorAll('.reveal').forEach((element) => observer.observe(element));

document.querySelectorAll('.growth-item').forEach((item) => {
  item.addEventListener('click', () => {
    const isExpanded = item.getAttribute('aria-expanded') === 'true';
    document.querySelectorAll('.growth-item').forEach((row) => row.setAttribute('aria-expanded', 'false'));
    item.setAttribute('aria-expanded', String(!isExpanded));
  });
});
