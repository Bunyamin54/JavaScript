// * promt


// ** dokument gorevi nedir 

 console.log(document.location.pathname)  // * lokasyon bilgisi almak host name

console.log(document.URL)  //*  url bilgisi almak

console.log(document.location.hostname)  //* hostname ip adress bildiriyor


console.log(document.body) //* body bilgisi

console.log(document.head)  //* head  header bilgisi

document.body.style.backgroundColor = "aqua"
document.head.style.color= "red"


let fullName = prompt("Lutfen adinizi giriniz:")

let greeting =document.querySelector("#greeting")
//* INNER HTML icerisine yeni bir bilgi eklemek.

greeting.innerHTML = `${greeting.innerHTML} <small style="color:red" >${fullName}</small>`
