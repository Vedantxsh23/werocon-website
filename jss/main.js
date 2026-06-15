// WeRoCon — shared site behavior

document.addEventListener('DOMContentLoaded', () => {
  // Highlight active nav link based on current page
  const current = document.body.getAttribute('data-page');
  document.querySelectorAll('.nav-links a').forEach(link => {
    if (link.getAttribute('data-page') === current) {
      link.classList.add('active');
    }
  });

  // Mobile nav toggle
  const toggle = document.querySelector('.nav-toggle');
  const links = document.querySelector('.nav-links');
  if (toggle && links) {
    toggle.addEventListener('click', () => {
      links.classList.toggle('open');
    });
  }

  // Doc TOC active state on scroll (IMU page)
  const tocLinks = document.querySelectorAll('.doc-toc a');
  if (tocLinks.length) {
    const headings = Array.from(tocLinks)
      .map(a => document.querySelector(a.getAttribute('href')))
      .filter(Boolean);

    const onScroll = () => {
      let activeIdx = 0;
      headings.forEach((h, i) => {
        if (h.getBoundingClientRect().top - 120 <= 0) activeIdx = i;
      });
      tocLinks.forEach((a, i) => a.classList.toggle('active', i === activeIdx));
    };

    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
  }
});
