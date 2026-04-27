const targetWords = ["george", "guertel", "guesel", "goebels", "garte"];

// 1. Dynamische Längen & Wort-Auswahl
const MAX_LENGTH = Math.max(...targetWords.map(word => word.length));
const WORD_LENGTH = MAX_LENGTH;
const paddedTargetWords = targetWords.map(word => word.padEnd(MAX_LENGTH, "-"));

// CSS Variable setzen
document.documentElement.style.setProperty('--word-length', WORD_LENGTH);

// Tägliches Wort basierend auf Datum (für alle gleich)
function getDailyWord() {
    const now = new Date();
    // Ein Seed, der sich nur alle 24h ändert
    const dateSeed = now.getFullYear() * 10000 + (now.getMonth() + 1) * 100 + now.getDate();
    return paddedTargetWords[dateSeed % paddedTargetWords.length];
}

const targetWord = getDailyWord();
const dictionary = [...targetWords, ...paddedTargetWords];

const keyboard = document.querySelector("[data-keyboard]");
const guessGrid = document.querySelector("[data-guess-grid]");
const alertContainer = document.querySelector("[data-alert-container]");

const FLIP_ANIMATION_DURATION = 500;
const DANCE_ANIMATION_DURATION = 500;

// 2. Initialisierung
function createGrid() {
    guessGrid.innerHTML = "";
    const totalTiles = WORD_LENGTH * 6;
    for (let i = 0; i < totalTiles; i++) {
        const tile = document.createElement("div");
        tile.classList.add("tile");
        guessGrid.appendChild(tile);
    }
}

createGrid();
startInteraction();

// 3. Logik-Funktionen
function startInteraction() {
    document.addEventListener("click", handleMouseClick);
    document.addEventListener("keydown", handleKeyPress);
}

function stopInteraction() {
    document.removeEventListener("click", handleMouseClick);
    document.removeEventListener("keydown", handleKeyPress);
}

function handleKeyPress(e) {
    if (e.key === "Enter") { submitGuess(); return; }
    if (e.key === "Backspace" || e.key === "Delete") { deleteKey(); return; }
    if (e.key.match(/^[a-z-]$/i)) { pressKey(e.key); return; }
}

function handleMouseClick(e) {
    if (e.target.matches("[data-key]")) { pressKey(e.target.dataset.key); return; }
    if (e.target.matches("[data-enter]")) { submitGuess(); return; }
    if (e.target.matches("[data-delete]") || e.target.closest("[data-delete]")) {
        deleteKey();
        return;
    }
}

function pressKey(key) {
    const activeTiles = getActiveTiles();
    if (activeTiles.length >= WORD_LENGTH) return;

    const nextTile = guessGrid.querySelector(":not([data-letter])");
    nextTile.dataset.letter = key.toLowerCase();
    nextTile.textContent = key === "-" ? "" : key; // Bindestrich logisch da, aber visuell leer
    nextTile.dataset.state = "active";
}

function deleteKey() {
    const activeTiles = getActiveTiles();
    const lastTile = activeTiles[activeTiles.length - 1];
    if (lastTile == null) return;
    lastTile.textContent = "";
    delete lastTile.dataset.state;
    delete lastTile.dataset.letter;
}

function submitGuess() {
    let activeTiles = [...getActiveTiles()];
    if (activeTiles.length === 0) return;

    // Auto-fill mit Bindestrichen falls zu kurz
    if (activeTiles.length < WORD_LENGTH) {
        const diff = WORD_LENGTH - activeTiles.length;
        for (let i = 0; i < diff; i++) {
            pressKey("-");
        }
    }

    activeTiles = [...getActiveTiles()];
    const guess = activeTiles.reduce((word, tile) => word + tile.dataset.letter, "");

    if (!dictionary.includes(guess)) {
        showAlert("Nicht in der Wortliste");
        shakeTiles(activeTiles);
        return;
    }

    stopInteraction();
    activeTiles.forEach((tile, index, array) => flipTile(tile, index, array, guess));
}

function flipTile(tile, index, array, guess) {
    const letter = tile.dataset.letter;
    const key = keyboard.querySelector(`[data-key="${letter.toUpperCase()}"]`);

    setTimeout(() => {
        tile.classList.add("flip");
    }, (index * FLIP_ANIMATION_DURATION) / 2);

    tile.addEventListener("transitionend", () => {
        tile.classList.remove("flip");

        if (targetWord[index] === letter) {
            tile.dataset.state = "correct";
            if (key) key.classList.add("correct");
        } else if (targetWord.includes(letter)) {
            tile.dataset.state = "wrong-location";
            if (key) key.classList.add("wrong-location");
        } else {
            tile.dataset.state = "wrong";
            if (key) key.classList.add("wrong");
        }

        if (index === array.length - 1) {
            tile.addEventListener("transitionend", () => {
                startInteraction();
                checkWinLose(guess, array);
            }, { once: true });
        }
    }, { once: true });
}

function getActiveTiles() { return guessGrid.querySelectorAll('[data-state="active"]'); }

function showAlert(message, duration = 1500) {
    const alert = document.createElement("div");
    alert.textContent = message;
    alert.classList.add("alert");
    alertContainer.prepend(alert);

    // Wenn duration null ist, bleibt die Nachricht ewig stehen
    if (duration == null) return;

    setTimeout(() => {
        alert.classList.add("hide");
        alert.addEventListener("transitionend", () => alert.remove());
    }, duration);
}

function shakeTiles(tiles) {
    tiles.forEach(tile => {
        tile.classList.add("shake");
        tile.addEventListener("animationend", () => tile.classList.remove("shake"), { once: true });
    });
}

function checkWinLose(guess, tiles) {
    if (guess === targetWord) {
        showAlert("Gewonnen! 🎉", 5000);
        danceTiles(tiles);
        stopInteraction();
        return;
    }
    const remainingTiles = guessGrid.querySelectorAll(":not([data-letter])");
    if (remainingTiles.length === 0) {
        showAlert("Lösung: " + targetWord.toUpperCase(), null);
        stopInteraction();
    }
}

function danceTiles(tiles) {
    tiles.forEach((tile, index) => {
        setTimeout(() => {
            tile.classList.add("dance");
            tile.addEventListener("animationend", () => tile.classList.remove("dance"), { once: true });
        }, (index * DANCE_ANIMATION_DURATION) / 5);
    });
}