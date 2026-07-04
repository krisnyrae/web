emailjs.init("xoyzxFrFG-uZnfd45");

const form = document.getElementById("contact-form");

form.addEventListener("submit", function (e) {
    e.preventDefault();

    const button = form.querySelector("button");

    button.disabled = true;
    button.textContent = "Sending...";

    emailjs.sendForm(
        "service_0ukxh8j",
        "template_5qiieex",
        form
    )
        .then(() => {
            button.disabled = false;
            button.textContent = "Send";

            alert("Message sent!");
            form.reset();
        })
        .catch((error) => {
            console.error(error);

            button.disabled = false;
            button.textContent = "Send";

            alert(JSON.stringify(error));
        });
});

document.addEventListener("DOMContentLoaded", () => {
    const openBtn = document.getElementById("news-button");
    const overlay = document.getElementById("news-overlay");
    const closeBtn = document.getElementById("close-news");

    openBtn.addEventListener("click", () => {
        overlay.classList.remove("hidden");
    });

    closeBtn.addEventListener("click", () => {
        overlay.classList.add("hidden");
    });

    overlay.addEventListener("click", (e) => {
        if (e.target === overlay) {
            overlay.classList.add("hidden");
        }
    });
});
