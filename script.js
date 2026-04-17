function reveal() {
    console.log("Checking for cards..."); // This tells us the script is running
    var reveals = document.querySelectorAll(".moment-card");

    for (var i = 0; i < reveals.length; i++) {
        var windowHeight = window.innerHeight;
        var elementTop = reveals[i].getBoundingClientRect().top;
        var elementVisible = 100;

        if (elementTop < windowHeight - elementVisible) {
            reveals[i].style.opacity = "1";
            reveals[i].style.transform = "translateY(0)";
        }
    }
}

// Run when scrolling
window.addEventListener("scroll", reveal);

// Run as soon as the page opens
window.addEventListener("load", reveal);

const menuToggle = document.querySelector(".menu-toggle");
const luxuryNav = document.querySelector(".luxury-nav");
const navLinks = document.querySelectorAll('.luxury-nav a[href^="#"]');

if (menuToggle && luxuryNav) {
    menuToggle.addEventListener("click", function () {
        luxuryNav.classList.toggle("active");
    });

    navLinks.forEach(function (link) {
        link.addEventListener("click", function (e) {
            const targetId = this.getAttribute("href");
            const targetSection = document.querySelector(targetId);

            if (targetSection) {
                e.preventDefault();

                luxuryNav.classList.remove("active");

                setTimeout(function () {
                    targetSection.scrollIntoView({
                        behavior: "smooth",
                        block: "start"
                    });
                }, 200);
            }
        });
    });
}



