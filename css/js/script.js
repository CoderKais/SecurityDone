```javascript
/*=========================================
  RAPID SECURITY
  SCRIPT.JS
=========================================*/

// ===============================
// AOS Animation
// ===============================

AOS.init({
    duration: 1000,
    once: true,
    offset: 100
});

// ===============================
// Sticky Navbar
// ===============================

const navbar = document.querySelector(".navbar");

window.addEventListener("scroll", () => {

    if (window.scrollY > 80) {
        navbar.classList.add("scrolled");
    } else {
        navbar.classList.remove("scrolled");
    }

});

// ===============================
// Active Navigation
// ===============================

const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll(".navbar .nav-link");

window.addEventListener("scroll", () => {

    let current = "";

    sections.forEach(section => {

        const sectionTop = section.offsetTop - 120;

        if (pageYOffset >= sectionTop) {
            current = section.getAttribute("id");
        }

    });

    navLinks.forEach(link => {

        link.classList.remove("active");

        if (link.getAttribute("href") === "#" + current) {
            link.classList.add("active");
        }

    });

});

// ===============================
// Back To Top Button
// ===============================

const topBtn = document.getElementById("topBtn");

window.addEventListener("scroll", () => {

    if (window.scrollY > 500) {

        topBtn.style.display = "block";

    } else {

        topBtn.style.display = "none";

    }

});

topBtn.addEventListener("click", () => {

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });

});

// ===============================
// Smooth Scroll
// ===============================

document.querySelectorAll('a[href^="#"]').forEach(anchor => {

    anchor.addEventListener("click", function (e) {

        e.preventDefault();

        const target = document.querySelector(this.getAttribute("href"));

        if (target) {

            target.scrollIntoView({
                behavior: "smooth"
            });

        }

    });

});

// ===============================
// Counter Animation
// ===============================

const counters = document.querySelectorAll(".counter");

const startCounter = () => {

    counters.forEach(counter => {

        const target = +counter.getAttribute("data-target");

        let count = 0;

        const speed = target / 150;

        const update = () => {

            count += speed;

            if (count < target) {

                counter.innerText = Math.ceil(count);

                requestAnimationFrame(update);

            } else {

                counter.innerText = target;

            }

        };

        update();

    });

};

const observer = new IntersectionObserver(entries => {

    entries.forEach(entry => {

        if (entry.isIntersecting) {

            startCounter();

            observer.disconnect();

        }

    });

});

const counterSection = document.querySelector(".counter-section");

if (counterSection) {

    observer.observe(counterSection);

}
const toggle = document.getElementById("themeToggle");

if(localStorage.getItem("theme")==="dark"){

document.body.classList.add("dark");

toggle.checked=true;

}

toggle.addEventListener("change",()=>{

document.body.classList.toggle("dark");

if(document.body.classList.contains("dark")){

localStorage.setItem("theme","dark");

}else{

localStorage.setItem("theme","light");

}

});
document.addEventListener("DOMContentLoaded", () => {
    const toggle = document.getElementById("themeToggle");
    if (!toggle) return;

    if (localStorage.getItem("theme") === "dark") {
        document.body.classList.add("dark");
        toggle.checked = true;
    }

    toggle.addEventListener("change", () => {
        document.body.classList.toggle("dark");

        localStorage.setItem(
            "theme",
            document.body.classList.contains("dark") ? "dark" : "light"
        );
    });
});

// ===============================
// Client Logo Auto Scroll
// ===============================

const clientRow = document.querySelector(".clients .row");

if (clientRow) {

    let scrollAmount = 0;

    setInterval(() => {

        scrollAmount += 1;

        clientRow.scrollLeft = scrollAmount;

        if (scrollAmount >= clientRow.scrollWidth / 2) {

            scrollAmount = 0;

        }

    }, 30);

}

// ===============================
// Loading Screen
// ===============================

window.addEventListener("load", () => {

    const loader = document.querySelector(".loader");

    if (loader) {

        loader.style.opacity = "0";

        setTimeout(() => {

            loader.style.display = "none";

        }, 500);

    }

});

// ===============================
// Scroll Reveal Effect
// ===============================

const revealItems = document.querySelectorAll(".service-card, .solution-box, .feature-box");

const reveal = new IntersectionObserver(entries => {

    entries.forEach(entry => {

        if (entry.isIntersecting) {

            entry.target.classList.add("fade-up");

        }

    });

}, {
    threshold: 0.2
});

revealItems.forEach(item => reveal.observe(item));

// ===============================
// Contact Form
// ===============================

const form = document.querySelector("form");

if (form) {

    form.addEventListener("submit", function (e) {

        e.preventDefault();

        alert("Thank you! Your message has been sent successfully.");

        form.reset();

    });
    const nameInput = document.getElementById("name");

nameInput.addEventListener("input", function () {
    this.value = this.value.replace(/[^a-zA-Z .-]/g, "");
});

}
    document.addEventListener("DOMContentLoaded", function () {

    const toggle = document.getElementById("themeToggle");

    if (!toggle) {
        console.log("Theme toggle not found");
        return;
    }

    toggle.addEventListener("change", function () {
        document.body.classList.toggle("dark");
    });

});
document.addEventListener("DOMContentLoaded", function () {

    const popup = document.getElementById("popupOverlay");
    const close = document.getElementById("closePopup");

    // Show popup 1 second after every page load
    popup.classList.add("show");

    // Close when X is clicked
    close.addEventListener("click", function () {
        popup.classList.remove("show");
    });

    // Close when clicking outside the popup
    popup.addEventListener("click", function (e) {
        if (e.target === popup) {
            popup.classList.remove("show");
        }
    });

});

// ===============================
// Hero Button Animation
// ===============================

const heroButtons = document.querySelectorAll(".hero .btn");

heroButtons.forEach(button => {

    button.addEventListener("mouseenter", () => {

        button.style.transform = "translateY(-5px)";

    });

    button.addEventListener("mouseleave", () => {

        button.style.transform = "translateY(0)";

    });

});

// ===============================
// Console Message
// ===============================

console.log("%cRapid Security Website Loaded Successfully!",
"color:#0d6efd;font-size:18px;font-weight:bold;");
```
