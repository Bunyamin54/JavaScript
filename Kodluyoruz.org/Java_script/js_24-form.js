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
}