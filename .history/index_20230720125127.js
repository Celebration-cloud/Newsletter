// import { initializeApp } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-app.js"
// import { getDatabase, ref, push, onValue } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-database.js"

// let appSettings = {
//     "databaseUrl": " https://playground-51efb-default-rtdb.europe-west1.firebasedatabase.app/ "
// }

// const app = initializeApp(appSettings)
// const database = getDatabase(app)
// const newsLetterDb = ref(database, "newsLetterDb")
let item = []

const emailEL = document.getElementById("email")
const inputEL = document.getElementById("subscribe-btn")
const container = document.getElementById("container")
const dismiss = document.getElementById("dismiss")

function successful() {
    let successful = `
    <div id="success">
        <img id="signed-icon" src="./assets/images/icon-list.svg" alt="" srcset="">
        <h2>Thanks for subscribing!</h2>
        <p>A confirmation email has been sent to <b>ash@loremcompany.com.</b>
        Please open it and click the button inside to confirm your subscription.</p>
        <a href="index.html"><button type="reset" id="dismiss">Dismiss message!</button></a>
    </div>
    `
    container.innerHTML = successful  
    // dismiss()
}
function review(){
    let listEmail = ""
    for (let i = 0; i < item.length; i++){
        listEmail += `${item[i]}`
    }
    
    storage = listEmail
}


inputEL.addEventListener("click", function() {
    // push( newsLetterDb, inputEL)
    item.push(emailEL.value)
    emailEL.value = ""
    localStorage.setItem("email", JSON.stringify(item))
    let storage = localStorage.getItem("email", JSON.parse(item))
    review()
    successful()
})

// function dismiss() {
//      let content = `

//      `

// }
// dismiss.addEventListener("click", function() {
//     dismiss()
// })