document.addEventListener("DOMContentLoaded", function () {
    const cards = document.querySelectorAll(".efeito-hover");

    cards.forEach(card => {
        card.addEventListener("mouseover", () => {
            card.style.boxShadow = "0px 4px 10px rgba(0, 0, 0, 0.2)";
        });

        card.addEventListener("mouseleave", () => {
            card.style.boxShadow = "none";
        });
    });
});
