// Function to toggle between light and dark themes
function toggleTheme() {
    const body = document.body;
    body.classList.toggle("dark-mode");
}

// Add an event listener to the theme toggle button
const themeToggle = document.getElementById("theme-toggle");
themeToggle.addEventListener("click", toggleTheme);
