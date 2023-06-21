// //* ilk fonksiyon

// function hello() {

//     console.log("merhaba")
//     helloWorld()
// }


// //! ic ice fonksiyon yapisi olusturabiliriz. 
// //! foknsiyon istedigimiz yerde cagirabiliyotz 

// hello()  //* calistir


// function helloWorld () {

//     console.log("Hello World")
// }



// let firstName = "lorem"

// function greetings (firstName , lastName) {

//     console.log (`Merhaba ${firstName} ${lastName}`)
// }

// greetings("Apple", "Appelsin")

// //* paramtre vererek fonksiyonu cagirma


//*  birden fazla parametre alan yontem


function greetings2 (firstName, lastName){

    let info =(`Merhaba ${firstName} ${lastName}`)
    return info
// }

//* let yapisi blogun icerisnde calisiyor suslulerin icinde

function domId(id, info) {


    let domObject = document.querySelector(`#${id}`)

    domId.innerHTML = info
}


domId('greeting' , greetings2("Ad", "Soyad") )