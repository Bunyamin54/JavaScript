console.log("**** CREATE NODE ****")

//?1 olustur
const langInput = document.querySelector("#input")
//! olustur creat et 
const newP = document.createElement("p")

//? 2 eger text tabanli bir element ise text dugumunu olustur
const text = document.createTextNode("langInput.value")

//? 3- olusturulan text dugumunu yeni elemente bagla
newP.appendChild(text)


console.log(newP);

//! 2 bagla ata (append)

