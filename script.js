// Selecting the button
const modeToggle = document.getElementById('modeToggle');

// Function to toggle dark mode
modeToggle.addEventListener('click', function () {
    document.body.classList.toggle('dark-mode');

    // Save the mode preference in local storage
    if (document.body.classList.contains('dark-mode')) {
        localStorage.setItem('theme', 'dark');
    } else {
        localStorage.setItem('theme', 'light');
    }
});

// Load the saved theme on page load
window.onload = function () {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'dark') {
        document.body.classList.add('dark-mode');
    }
};