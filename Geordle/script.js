import { initializeApp } from "https://www.gstatic.com/firebasejs/10.11.0/firebase-app.js";
import { getDatabase, ref, get } from "https://www.gstatic.com/firebasejs/10.11.0/firebase-database.js";

const firebaseConfig = {
    apiKey: "AIzaSyClmm-JeYn0k9ZhCCht3cRjNzJ0W-veJao",
    authDomain: "geordle-91531.firebaseapp.com",
    projectId: "geordle-91531",
    storageBucket: "geordle-91531.firebasestorage.app",
    messagingSenderId: "1064984433597",
    appId: "1:1064984433597:web:1e5a1a53bbfd7de631f8d4",
    measurementId: "G-QN90Q1SVGY",
    databaseURL: "https://geordle-91531-default-rtdb.firebaseio.com/"
};

const app = initializeApp(firebaseConfig);
const db = getDatabase(app);

const manualOffset = 1;
let targetWords = [];
let targetWord = "";
let WORD_LENGTH = 5;
let dictionary = [];

const keyboard = document.querySelector("[data-keyboard]");
const guessGrid = document.querySelector("[data-guess-grid]");
const alertContainer = document.querySelector("[data-alert-container]");

async function initGame() {
    try {
        const snapshot = await get(ref(db, 'suggestions'));
        if (snapshot.exists()) {
            targetWords = Object.values(snapshot.val()).map(item => item.text.toLowerCase());
        }

        if (targetWords.length === 0) targetWords = ["george"];

        const MAX_LENGTH = Math.max(...targetWords.map(word => word.length));
        WORD_LENGTH = MAX_LENGTH;
        document.documentElement.style.setProperty('--word-length', WORD_LENGTH);

        const paddedTargetWords = targetWords.map(word => word.padEnd(MAX_LENGTH, "-"));
        dictionary = [...targetWords, ...paddedTargetWords];

        const now = new Date();
        const dateSeed = now.getFullYear() * 10000 + (now.getMonth() + 1) * 100 + now.getDate();
        targetWord = paddedTargetWords[(dateSeed + manualOffset) % paddedTargetWords.length];

        createGrid();
        startInteraction();
    } catch (e) {
        console.error("Fehler:", e);
    }
}

function createGrid() {
    guessGrid.innerHTML = "";
    for (let i = 0; i < WORD_LENGTH * 6; i++) {
        const tile = document.createElement("div");
        tile.classList.add("tile");
        guessGrid.appendChild(tile);
    }
}

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
    if (e.key.match(/^[a-zöäü-]$/i)) { pressKey(e.key); return; }
}

function handleMouseClick(e) {
    if (e.target.matches("[data-key]")) { pressKey(e.target.dataset.key); return; }
    if (e.target.matches("[data-enter]")) { submitGuess(); return; }
    if (e.target.closest("[data-delete]")) { deleteKey(); return; }
}

function pressKey(key) {
    const activeTiles = getActiveTiles();
    if (activeTiles.length >= WORD_LENGTH) return;
    const nextTile = guessGrid.querySelector(":not([data-letter])");
    nextTile.dataset.letter = key.toLowerCase();
    nextTile.textContent = key === "-" ? "" : key;
    nextTile.dataset.state = "active";
}

function deleteKey() {
    const activeTiles = [...getActiveTiles()];
    const lastTile = activeTiles[activeTiles.length - 1];
    if (lastTile == null) return;
    lastTile.textContent = "";
    delete lastTile.dataset.state;
    delete lastTile.dataset.letter;
}

function submitGuess() {
    let activeTiles = [...getActiveTiles()];
    while (activeTiles.length < WORD_LENGTH) {
        pressKey("-");
        activeTiles = [...getActiveTiles()];
    }
    const guess = activeTiles.reduce((word, tile) => word + tile.dataset.letter, "");
    if (!dictionary.includes(guess)) {
        showAlert("Nicht in der Liste");
        shakeTiles(activeTiles);
        return;
    }
    stopInteraction();
    activeTiles.forEach((tile, i, arr) => flipTile(tile, i, arr, guess));
}

function flipTile(tile, index, array, guess) {
    const letter = tile.dataset.letter;
    const key = keyboard.querySelector(`[data-key="${letter.toUpperCase()}"]`);
    setTimeout(() => { tile.classList.add("flip"); }, (index * 250));

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
        tiles.forEach((t, i) => setTimeout(() => t.classList.add("dance"), i * 100));
        stopInteraction();
        return;
    }
    if (guessGrid.querySelectorAll(":not([data-letter])").length === 0) {
        showAlert(targetWord.replace(/-/g, "").toUpperCase(), null);
        stopInteraction();
    }
}

initGame();