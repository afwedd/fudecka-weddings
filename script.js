// Get the button
let scrollTopBtn = document.getElementById("scrollTopBtn");

// Show the button when the user scrolls down 100px from the top of the document
window.onscroll = function() {
    if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
        scrollTopBtn.classList.add("show"); // Add the 'show' class to make it visible
    } else {
        scrollTopBtn.classList.remove("show"); // Remove the 'show' class to hide it
    }
};

// Scroll smoothly to the top of the page when the button is clicked
function scrollToTop() {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
}
