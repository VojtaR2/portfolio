const toggle = document.getElementById('toggle-dark');
        toggle.addEventListener('click', () => {
            document.body.classList.toggle('dark-mode');
        });

// Animace pro fade-in efekt
document.addEventListener("DOMContentLoaded", function () {
const elements = document.querySelectorAll(".fade-in");

function checkPosition() {
    const triggerBottom = window.innerHeight * 0.9;

    elements.forEach(el => {
        const boxTop = el.getBoundingClientRect().top;

        if (boxTop < triggerBottom) {
            el.classList.add("visible");
        }
    });
}

window.addEventListener("scroll", checkPosition);
checkPosition(); // inicializace
});

