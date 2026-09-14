const themeSelect = document.getElementById("themeSelect");

// Get saved theme
let savedTheme = localStorage.getItem("theme");

// If there is no saved theme, use light
if (savedTheme === null) {
    savedTheme = "light";
}

// Apply saved theme
if (savedTheme === "dark") {
    document.body.classList.add("dark");
} else {
    document.body.classList.remove("dark");
}
if (savedTheme === "light") {
    document.body.classList.add("light");
} else {
    document.body.classList.remove("light");
}
if (savedTheme === "blue") {
    document.body.classList.add("blue");
} else {
    document.body.classList.remove("blue");
}

// Make dropdown show the saved option
themeSelect.value = savedTheme;


// When dropdown changes
themeSelect.addEventListener("change", function () {

    if (this.value === "dark") {
        document.body.classList.add("dark");
    } else {
        document.body.classList.remove("dark");
    }
    if (this.value === "light") {
        document.body.classList.add("light");
    } else {
        document.body.classList.remove("light");
    }
    if (this.value === "blue") {
        document.body.classList.add("blue");
    } else {
        document.body.classList.remove("blue");
    }

    // Save the choice
    localStorage.setItem("theme", this.value);
});