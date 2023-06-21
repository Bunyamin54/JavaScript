//*  if conditions

//* eger kullanici bilgisi varsa ekrana ismini yazdir.


//* eger (username.length >0) {console.log (username)}

// let userName=prompt("Kullanici adinizi giriniz")

// if (userName.length) {

//     console.log(`Kullanici bilginiz ${userName}`)
// }else {
//     console.log("bilgiyok")
// }

let userName= prompt("Kullanici Adiniz")
let age = prompt("Yasiniz")
let info = document.querySelector("#info")

// if (userName && age >= 18) {

//     console.log("Ehliyet alabilirsiniz")
// }else if (!userName){
//     console.log("Kullanici adiniz yok")
// }else if ( !(age >= 18) ) {


//     console.log("Yas bilginiz yok veya 18 yasindan kucuksunuz")
// }

if (userName && age >= 18) {

    info.innerHTML = "Ehliyet alabilirsiniz" 
}else if (!userName){
    info.innerHTML = "Kullanici adiniz yok"
}else if ( !(age >= 18) ) {


    info.innerHTML = "Yas bilginiz yok veya 18 yasindan kucuksunuz"
} 