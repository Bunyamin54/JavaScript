// *Form submit

// let formDOM = document.querySelector("#userForm")
// formDOM.addEventListener('submit', formSubmit)


// function formSubmit(event) {
//     event.preventDefault()  //* default islemi engelledik

//     console.log("islem gerceklesti.")

//     let scoreInputDOM = document.querySelector('#score')
// console.log(scoreInputDOM.value)   // * input icersindeki degeri value almak

// localStorage.setItem('score', scoreInputDOM.value)  // *locaL STORAGE EKELEMEK - inputdaki name bilgisi onemli

// }

// * formlar ile calismak

let userFormDOM = document.querySelector("#userForm")
userFormDOM.addEventListener('submit', formHandler)


function formHandler(event) {
    event.preventDefault()
 const USER_NAME = document.querySelector('#username')
 const SCORE = document.querySelector('#score')
 
 
 if (USER_NAME.value && SCORE.value) {

    addItem(USER_NAME.value, SCORE.value)
    USER_NAME.value = ""   //* gonderdikten sonra resetler sifirlar kulanici bilgilerini
    SCORE.value = ""

 } else {
    console.log("Hatali Giris Yaptiniz!")
 }

}


//* <li class="list-group-item d-flex justify-content-between align-items-start">
//                         Content for list item
//                       <span class="badge bg-primary rounded-pill">14</span>
//                     </li>
     
let userListDOM = document.querySelector('#userList')



const addItem= (userName, score) => {

let liDOM = document.createElement('li')
    liDOM.innerHTML = `   ${userName} 
    <span class="badge bg-primary rounded-pill">${score}</span>
    `

liDOM.classList.add('list-group-item','d-flex', 'justify-content-between','align-items-start')
    userListDOM.append(liDOM)
}