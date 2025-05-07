document.addEventListener("DOMContentLoaded", () => {
  const elements = document.querySelectorAll(".scroll-animate");

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("in-view");
          observer.unobserve(entry.target); // Optional: Only animate once
        }
      });
    },
    {
      threshold: 0.1, // Trigger when 10% visible
    }
  );

  elements.forEach((el) => observer.observe(el));
});
