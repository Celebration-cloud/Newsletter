// import { initializeApp } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-app.js"
// import { getDatabase, ref, push, onValue } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-database.js"

// let appSettings = {
//     "databaseUrl": " https://playground-51efb-default-rtdb.europe-west1.firebasedatabase.app/ "
// }

// const app = initializeApp(appSettings)
// const database = getDatabase(app)
// const newsLetterDb = ref(database, "newsLetterDb")

const emailEL = document.getElementById("email")
const inputEL = document.getElementById("subscribe-btn")
const container = document.getElementById("container")

function successful() {
    let successful = `
        <div id="success">
            <div id="signed"></div>
            <h2>Thanks for subscribing!</h2>
            <p>A confirmation email has been sent to ash@loremcompany.com. <br>
            Please open it and click the button inside to confirm your subscription.</p>
            <button type="reset">Dismiss </button>
        </div>
    `
    container.innerHTML = successful  
}

inputEL.addEventListener("click", function() {
    // let inputValue = emailEL.value
    // inputEL = inputValue
    // push( newsLetterDb, inputEL)
    successful()
})