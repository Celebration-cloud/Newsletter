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
const dismiss = document.getElementById("dismiss")

function successful() {
    let successful = `
        
    `
    container.innerHTML = successful  
    // dismiss()
}

inputEL.addEventListener("click", function() {
    // let inputValue = emailEL.value
    // inputEL = inputValue
    // push( newsLetterDb, inputEL)
    successful()
})

// function dismiss() {
//      let content = `

//      `

// }
// dismiss.addEventListener("click", function() {
//     dismiss()
// })