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

function successful() {
    let successful = document.createElement("div", "h2", "p", "button")

    successful.innerHTML = `
        <div id="success">
            <div id="signed"></div>
            <h2>Thanks for subscribing!</h2>
            <p>A confirmation email has been sent to ash@loremcompany.com. <br>
            Please open it and click the button inside to confirm your subscription.</p>
            <button type="reset">Thanks for subscribing!</button>
        </div>
    `
}

inputEL.addEventListener("click", function() {
    let inputValue = emailEL.value
    inputEL = inputValue
    push( newsLetterDb, inputEL)
    container.textContent = s
})

onValue(newsLetterDb, function(snapshot) {
    let information = Object.values(snapshot.val())
})