const input = document.querySelector("input")
const button = document.querySelector("button")
const parag = document.querySelector("p")
const mainForm = document.querySelector("form")
mainForm.addEventListener("submit",(e) => {
    e.preventDefault()
    let a = input.value
    // console.log(a);
    if (a.length === 11 && a[3] === "-" && a[6] === "-" && !a.includes(" ") && !a.includes(".")) {
        if(+(a.substring(0,3)) !== 0 && +(a.slice(0,3)) !== 666 && +(a.slice(0,3)) < 900 ){
            if (+(a.slice(4,6)) !== 0 && +(a.slice(7,11)) !== 0){
                parag.innerHTML = `Entered SSN Number (${a}) is valid.`
            }
        }else {
            parag.innerText = "SSN Number must include only numbers"
        }
    } else{
        parag.textContent = "SSN must be 11 Charter (9 numbers and two hypens)"
    }
})