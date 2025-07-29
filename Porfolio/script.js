// Clear the response message on page load

function toggleMenu() {
    const navbar = document.querySelector('.navbar');
    navbar.classList.toggle('open');
}

window.addEventListener("DOMContentLoaded", () => {
    const responseMessage = document.getElementById("response");
    if (responseMessage) {
        responseMessage.textContent = "";
        responseMessage.style.display = "none";
    }
});

// Handle form submission
document.getElementById("contact-form").addEventListener("submit", function(event) {
    event.preventDefault();

    const form = event.target;
    const formData = new FormData(form);
    const responseMessage = document.getElementById("response");

    fetch(form.action, {
        method: "POST",
        body: formData,
    })
    .then(response => {
        if (response.ok) {
            alert("Message sent successfully!");
            form.reset();
        } else {
            alert("Error sending message. Please try again.");
        }
    })
    .catch(() => {
        alert("Error sending message. Please try again.");
    });
});
