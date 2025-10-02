const themeMenu = document.getElementById("themeMenu");


// Theme Menu
function hideThemeMenu() {
    themeMenu.classList.add("hidden");
}

function toggleThemeMenu() {
    themeMenu.classList.toggle("hidden");
}

// Listen for key commands
window.addEventListener("keydown", (e) => {
    // Ctrl + Alt + P opens/closes theme menu
    if (e.ctrlKey && e.altKey && e.key.toLowerCase() === "p") {
        e.preventDefault();
        toggleThemeMenu();
    }

    // Escape closes whichever menu may be visible
    if (e.key === "Escape") {
    
        if(!themeMenu.classList.contains("hidden")){
            e.preventDefault();
            hideThemeMenu();
        }

    }
});
