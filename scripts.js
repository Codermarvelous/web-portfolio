// Function to detect when elements are in view
const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
        // If the section is in view, add the 'visible' class to trigger the animation
        if (entry.isIntersecting) {
            entry.target.classList.add("visible");
        } else {
            entry.target.classList.remove("visible"); // Reverse the animation when scrolling up
        }
    });
}, { threshold: 0.1 }); // Trigger when 10% of the section is in the viewport

// Select all sections with the "animate-roll" class and observe them
const sections = document.querySelectorAll('.animate-roll');
sections.forEach(section => {
    observer.observe(section);
});
