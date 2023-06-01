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

//?4- yeni elementin Dom tree baglanmasi (append)
//* main bolumunun en sonuna yeni elementi ekler.
const main   =  document.querySelector("main")

main.appendChild(newP)

//* Element.before()  ve Element.after()  appenChild gibi aslinda bir elementi Dom Treeye baglar
//? item list sectionun onune yeni elementi ekler.
const itemListSection = document.querySelector(".item-list")
itemListSection.before(newP)


//! ID, CLASS verme

//? 1) yontem

newP.id = "paragraf"
newP.className = "par center"
newP.name= "deneme"
//? 2. yontem  setAttribute

newP.setAttribute("id", "new-id")
newP.setAttribute("class", "new-class")
newP.setAttribute("name", "new-class")
newP.setAttribute("type", "button")

//? classList  aktiv kullanilan bir yontem
newP.classList.add("bg-danger", "border", "border-2", "border-succes")
console.log(newP.classList.contains("new-class"));

//* clasList.contains . remove
if (newP.classList.contains("new-class")) {
//   newP.classList.add("border-succes")
  newP.classList.remove("new-class")
}

//* classList.toggle()  (bir class varsa kaldirir yoksa ekler)

newP.classList.toggle("bg-danger")