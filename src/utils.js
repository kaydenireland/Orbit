// Vars
const textContent = document.getElementById("main");
const titleContent = document.getElementById("title");

const curTheme = document.getElementById("currentTheme");

// Word Count Vars
const wordCountEl = document.getElementById("words");
const charCountEl = document.getElementById("chars");
const linesCountEl = document.getElementById("lines");

// Functions

function updateCounts(){
    const text = textContent.value.trim();

    charCountEl.textContent = text.length;

    const words = text.split(/\s+/).filter(Boolean);
    wordCountEl.textContent = words.length;    

    const lines = text.split("\n");
    linesCountEl.textContent = lines.length;
}

function autoResize(el) {
    el.style.height = "auto";
    el.style.height = el.scrollHeight + "px";
}

function changeTheme(path){
    console.log("Changing path to " + path)
    curTheme.href = path
    document.getElementById("themePath").textContent = path;
}

// Initialization Function Calls

window.changeTheme = changeTheme;

updateCounts()

autoResize(titleContent)
autoResize(textContent);

// Listeners
textContent.addEventListener("input", updateCounts);

titleContent.addEventListener("input", () => autoResize(titleContent))
textContent.addEventListener("input", () => autoResize(textContent));
