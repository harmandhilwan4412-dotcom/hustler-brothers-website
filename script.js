
// =====================================
// HUSTLER BROTHERS LTD.
// WEBSITE JAVASCRIPT
// =====================================

document.addEventListener("DOMContentLoaded", function () {

    // Smooth scrolling for navigation links
    document.querySelectorAll('a[href^="#"]').forEach(link => {

        link.addEventListener("click", function (event) {

            const targetId = this.getAttribute("href");

            if (targetId === "#") return;

            const target = document.querySelector(targetId);

            if (target) {
                event.preventDefault();

                target.scrollIntoView({
                    behavior: "smooth"
                });
            }

        });

    });


    // Reveal sections when scrolling
    const sections = document.querySelectorAll(
        ".about, .services, .projects, .reviews, .contact"
    );

    const observer = new IntersectionObserver((entries) => {

        entries.forEach(entry => {

            if (entry.isIntersecting) {
                entry.target.classList.add("visible");
                observer.unobserve(entry.target);
            }

        });

    }, {
        threshold: 0.12
    });

    sections.forEach(section => {
        section.classList.add("reveal");
        observer.observe(section);
    });


    // Update footer year automatically
    const footerText = document.querySelector(".footer p:last-child");

    if (footerText) {
        footerText.textContent =
            `© ${new Date().getFullYear()} Hustler Brothers Ltd. All Rights Reserved.`;
    }

});
