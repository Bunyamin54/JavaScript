//*  if conditions

//* eger kullanici bilgisi varsa ekrana ismini yazdir.


//* eger (username.length >0) {console.log (username)}

let userName=prompt("Kullanici adinizi giriniz")

if (userName.length) {

    console.log(`Kullanici bilginiz ${userName}`)
}else {
    console.log("bilgiyok")
}