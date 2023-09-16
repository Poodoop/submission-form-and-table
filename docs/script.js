const tabButtons = document.querySelectorAll(".tab-button");
const tabContent = document.querySelectorAll(".tab-pane");

tabButtons.forEach((button) => {
    button.addEventListener("click", () => {
        tabContent.forEach((content) => {
            content.classList.add("hidden");
        });

        const targetTab = button.getAttribute("data-tab");

        document.getElementById(targetTab).classList.remove("hidden");
    });
});

