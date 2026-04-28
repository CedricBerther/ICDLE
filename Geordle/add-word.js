import { initializeApp } from "https://www.gstatic.com/firebasejs/10.11.0/firebase-app.js";
import { getDatabase, ref, push, onValue, query, orderByChild, equalTo, get } from "https://www.gstatic.com/firebasejs/10.11.0/firebase-database.js";

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
const suggestionsRef = ref(db, 'suggestions');

const inputField = document.getElementById('new-word-input');
const addBtn = document.getElementById('add-btn');
const wordList = document.getElementById('word-list');
const countDisplay = document.getElementById('word-count');

addBtn.addEventListener('click', async () => {
    const word = inputField.value.trim().toLowerCase();
    if (word.length < 3) return alert("Das Wort ist zu kurz!");

    const duplicateQuery = query(suggestionsRef, orderByChild('text'), equalTo(word));
    const snapshot = await get(duplicateQuery);

    if (snapshot.exists()) {
        alert(`Das Wort "${word.toUpperCase()}" ist schon vorhanden!`);
        inputField.value = "";
        return;
    }

    push(suggestionsRef, { text: word, timestamp: Date.now() });
    inputField.value = "";
});

onValue(suggestionsRef, (snapshot) => {
    if (!wordList) return;
    wordList.innerHTML = "";
    const data = snapshot.val();
    if (data) {
        const entries = Object.values(data);
        // Korrekte Anzeige von "Wörter"
        countDisplay.textContent = `Vorhandene Wörter: ${entries.length}`;

        entries.sort((a, b) => a.text.localeCompare(b.text)).forEach(item => {
            const li = document.createElement('li');
            li.classList.add('word-item');
            // Sauberer Bullet Point
            li.innerHTML = `<span class="bullet">•</span> ${item.text.toUpperCase()}`;
            wordList.appendChild(li);
        });
    } else {
        countDisplay.textContent = "Vorhandene Wörter: 0";
    }
});