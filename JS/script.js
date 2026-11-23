// CONTACT POPUP

const openContact = document.getElementById("openContact");
const closeContact = document.getElementById("closeContact");
const contactOverlay = document.getElementById("contactOverlay");

openContact.addEventListener("click", () => {
    contactOverlay.classList.add("active");
});

closeContact.addEventListener("click", () => {
    contactOverlay.classList.remove("active");
});

contactOverlay.addEventListener("click", (event) => {
    if (event.target === contactOverlay) {
        contactOverlay.classList.remove("active");
    }
});

document.addEventListener("keydown", (event) => {
    if (event.key === "Escape") {
        contactOverlay.classList.remove("active");
    }
});