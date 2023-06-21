//* clas ekleme veya cikartmak


let greeting = document.querySelector("#greeting")

greeting.classList.add("text-primary")
greeting.classList.add("title")
greeting.classList.add("new-info", "second-class", "third-clas")

console.log(greeting.classList)