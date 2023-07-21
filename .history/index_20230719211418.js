import { initializeApp } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-app.js"
import { getDatabase, ref, push, onClick } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-database.js"

let appSettings = {
    "databaseUrl": " https://playground-51efb-default-rtdb.europe-west1.firebasedatabase.app/ "
}

const emailEL = document.getElementById("email")
const inputEL = document.getElementById("subscribe-btn")

const app = initializeApp(appSettings)
const database = getDatabase(app)
const newsLetterDb = ref(database, "newsLetterDb")

inputEL.addEventListener("click", function() {
    let inputValue = emailEL.value
    inputEL = inputValue
    push( newsLetterDb, inputEL)
})

onClick()