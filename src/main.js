const textContent = document.getElementById("main");
const wordCountEl = document.getElementById("words");
const charCountEl = document.getElementById("chars");
const linesCountEl = document.getElementById("lines");

initialize();

function initialize(){
    update_counts();
    textContent.addEventListener("input", update_counts);
}

function update_counts(){
    const text = textContent.value.trim();

    charCountEl.textContent = text.length;

    const words = text.split(/\s+/).filter(Boolean);
    wordCountEl.textContent = words.length;    

    const lines = text.split("\n");
    linesCountEl.textContent = lines.length;
}