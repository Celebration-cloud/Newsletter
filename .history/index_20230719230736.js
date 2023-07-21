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
        <div id="success">
            <div id="signed"></div>
            <h2>Thanks for subscribing!</h2>
            <p>A confirmation email has been sent to ash@loremcompany.com. <br>
            Please open it and click the button inside to confirm your subscription.</p>
            <button type="reset" id="dismiss">Dismiss message!</button>
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

function dismiss() {
     let content = `
     <div id="container">
     <div id="home-page">
       <h2 id="news">Stay updated!</h2>
       <p id="content">Join 60,000+ product managers receiving monthly updates on:</p>
       <ul id="features">
         <li>
           <img id="list-icon" src="./assets/images/icon-list.svg" alt="" srcset="">
           <p>Product discovery and building what matters</p>
         </li>
         <li>
           <img id="list-icon" src="./assets/images/icon-list.svg" alt="" srcset="">
           <p>Measuring to ensure updates are a success</p>
         </li>
         <li>
           <img id="list-icon" src="./assets/images/icon-list.svg" alt="" srcset="">
           <p>And much more!</p>
         </li>
       </ul>
       <form action="">
         <label for="email">Email address</label><br>
         <input type="email" name="email" required placeholder="email@company.com" id="email"><br>
         <button id="subscribe-btn" type="submit">Subscribe to monthly newsletter</button>
       </form>
     </div>
     <div id="sign-up"></div>
   </div>
     `
     container.innerHTML = content
}
dismiss.addEventListener("click", function() {
    dismiss()
})