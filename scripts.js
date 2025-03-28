// Function to detect when elements are in view
const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add("visible");
        } else {
            entry.target.classList.remove("visible"); // Reverse the animation on exit
        }
    });
}, { threshold: 0.5 }); // Trigger when 50% of the section is in view

// Select all sections with the "animate-roll" class and observe them
const sections = document.querySelectorAll('.animate-roll');
sections.forEach(section => {
    observer.observe(section);
});
