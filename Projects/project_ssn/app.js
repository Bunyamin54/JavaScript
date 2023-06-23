const input = document.querySelector("input")
const button = document.querySelector("button")
const paragraf = document.querySelector("p")

const mainForm = document.querySelector("form")


mainForm.addEventListener("submit", (e) => {
e.preventDefault()
console.log((input.value))


})