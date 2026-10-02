/* =========================================
   MOBILE HAMBURGER MENU
========================================= */

const menuBtn = document.getElementById("menuBtn");
const navLinks = document.getElementById("navLinks");

if (menuBtn && navLinks) {

    menuBtn.addEventListener("click", () => {

        navLinks.classList.toggle("mobile-active");

        const icon = menuBtn.querySelector("i");

        if (
            navLinks.classList.contains("mobile-active")
        ) {

            icon.classList.remove("fa-bars");

            icon.classList.add("fa-xmark");

        } else {

            icon.classList.remove("fa-xmark");

            icon.classList.add("fa-bars");
        }

    });


    /* Close menu after clicking navigation */

    const links = navLinks.querySelectorAll("a");

    links.forEach(link => {

        link.addEventListener("click", () => {

            navLinks.classList.remove(
                "mobile-active"
            );

            const icon = menuBtn.querySelector("i");

            icon.classList.remove("fa-xmark");

            icon.classList.add("fa-bars");

        });

    });

}


/* =========================================
   DARK / LIGHT MODE
========================================= */

const themeToggle =
    document.getElementById("themeToggle");


function updateThemeIcon() {

    if (!themeToggle) return;

    const icon =
        themeToggle.querySelector("i");

    if (
        document.body.classList.contains(
            "dark-mode"
        )
    ) {

        icon.classList.remove("fa-moon");

        icon.classList.add("fa-sun");

    } else {

        icon.classList.remove("fa-sun");

        icon.classList.add("fa-moon");
    }
}


if (themeToggle) {

    themeToggle.addEventListener("click", () => {

        document.body.classList.toggle(
            "dark-mode"
        );

        const isDark =
            document.body.classList.contains(
                "dark-mode"
            );

        localStorage.setItem(
            "codenova-theme",
            isDark ? "dark" : "light"
        );

        updateThemeIcon();

    });

}


/* Load saved theme */

const savedTheme =
    localStorage.getItem("codenova-theme");

if (savedTheme === "dark") {

    document.body.classList.add(
        "dark-mode"
    );
}

updateThemeIcon();


/* =========================================
   SMOOTH SCROLL
========================================= */

const internalLinks =
    document.querySelectorAll(
        'a[href^="#"]'
    );


internalLinks.forEach(link => {

    link.addEventListener("click", function (event) {

        const targetId =
            this.getAttribute("href");

        if (
            !targetId ||
            targetId === "#"
        ) {
            return;
        }

        const target =
            document.querySelector(targetId);

        if (target) {

            event.preventDefault();

            target.scrollIntoView({
                behavior: "smooth",
                block: "start"
            });

        }

    });

});


/* =========================================
   ACTIVE NAVIGATION
========================================= */

const sections =
    document.querySelectorAll(
        "section[id]"
    );

const navItems =
    document.querySelectorAll(
        ".nav-links a"
    );


window.addEventListener("scroll", () => {

    let currentSection = "";

    sections.forEach(section => {

        const sectionTop =
            section.offsetTop - 120;

        const sectionHeight =
            section.offsetHeight;

        if (
            window.scrollY >= sectionTop &&
            window.scrollY <
                sectionTop + sectionHeight
        ) {

            currentSection =
                section.getAttribute("id");
        }

    });


    navItems.forEach(link => {

        link.classList.remove("active");

        if (
            link.getAttribute("href") ===
            `#${currentSection}`
        ) {

            link.classList.add("active");
        }

    });

});


/* =========================================
   SCROLL REVEAL
========================================= */

const revealElements =
    document.querySelectorAll(
        ".about-card, .skill-card, .project-card, .journey-card, .progress-card"
    );


const observer =
    new IntersectionObserver(
        entries => {

            entries.forEach(entry => {

                if (
                    entry.isIntersecting
                ) {

                    entry.target.classList.add(
                        "show"
                    );

                    observer.unobserve(
                        entry.target
                    );
                }

            });

        },
        {
            threshold: 0.12
        }
    );


revealElements.forEach(element => {

    element.classList.add("reveal");

    observer.observe(element);

});


/* =========================================
   BUTTON PRESS EFFECT
========================================= */

const buttons =
    document.querySelectorAll(".btn");


buttons.forEach(button => {

    button.addEventListener("click", () => {

        button.classList.add(
            "button-clicked"
        );

        setTimeout(() => {

            button.classList.remove(
                "button-clicked"
            );

        }, 150);

    });

});


/* =========================================
   CONTACT FORM
========================================= */

const contactForm =
    document.querySelector(
        ".contact-form"
    );


if (contactForm) {

    contactForm.addEventListener(
        "submit",
        function (event) {

            event.preventDefault();

            const name =
                document.getElementById(
                    "name"
                ).value.trim();

            const email =
                document.getElementById(
                    "email"
                ).value.trim();

            const message =
                document.getElementById(
                    "message"
                ).value.trim();


            if (!name || !email || !message) {

                alert(
                    "Please fill in all fields."
                );

                return;
            }


            alert(
                `Thank you, ${name}! Your message has been received.`
            );


            contactForm.reset();

        }
    );

}


/* =========================================
   INPUT FOCUS EFFECT
========================================= */

const inputs =
    document.querySelectorAll(
        ".contact-form input, .contact-form textarea"
    );


inputs.forEach(input => {

    input.addEventListener(
        "focus",
        () => {

            input.style.transform =
                "translateY(-1px)";
        }
    );


    input.addEventListener(
        "blur",
        () => {

            input.style.transform =
                "translateY(0)";
        }
    );

});


/* =========================================
   CURRENT YEAR
========================================= */

const copyright =
    document.querySelector(
        ".copyright"
    );


if (copyright) {

    copyright.textContent =
        `© ${new Date().getFullYear()} Kanhaiya Mishra. All rights reserved.`;
}


/* =========================================
   PAGE LOADED
========================================= */

window.addEventListener(
    "load",
    () => {

        document.body.classList.add(
            "page-loaded"
        );

        console.log(
            "Portfolio loaded successfully 🚀"
        );

    }
);