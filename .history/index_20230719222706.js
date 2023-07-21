import { initializeApp } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-app.js"
import { getDatabase, ref, push, onValue } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-database.js"

let appSettings = {
    "databaseUrl": " https://playground-51efb-default-rtdb.europe-west1.firebasedatabase.app/ "
}

const emailEL = document.getElementById("email")
const inputEL = document.getElementById("subscribe-btn")
const container = document.getElementById("container")

const app = initializeApp(appSettings)
const database = getDatabase(app)
const newsLetterDb = ref(database, "newsLetterDb")

function s

inputEL.addEventListener("click", function() {
    let inputValue = emailEL.value
    inputEL = inputValue
    push( newsLetterDb, inputEL)
    container.textContent = successful.innerHTML
})

onValue(newsLetterDb, function(snapshot) {
    let information = Object.values(snapshot.val())
})