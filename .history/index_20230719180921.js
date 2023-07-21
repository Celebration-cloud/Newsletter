import { initializeApp } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-app.js"
import { getDatabase, ref } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-database.js"

let appSettings = {
    "databaseUrl": " https://playground-51efb-default-rtdb.europe-west1.firebasedatabase.app/ "
}

const emailEL = document.getElementById

const app = initializeApp(appSettings)
const database = getDatabase(app)
const newsLetterDb = ref(database, "newsLetterDb")

