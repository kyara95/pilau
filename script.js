function toggleContent(button) {
    const extraContent = button.nextElementSibling;
    if (extraContent.style.display === "none") {
        extraContent.style.display = "block";
        button.textContent = "Read Less";
    } else {
        extraContent.style.display = "none";
        button.textContent = "Read More";
    }
}