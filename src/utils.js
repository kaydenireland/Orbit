// Vars
const textContent = document.getElementById("main");
const titleContent = document.getElementById("title");

// Word Count Vars
const wordCountEl = document.getElementById("words");
const charCountEl = document.getElementById("chars");
const linesCountEl = document.getElementById("lines");

// Functions

function update_counts(){
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

// Initialization Function Calls

update_counts()

autoResize(titleContent)
autoResize(textContent);

// Listeners
textContent.addEventListener("input", update_counts);

titleContent.addEventListener("input", () => autoResize(titleContent))
textContent.addEventListener("input", () => autoResize(textContent));
