
// ******selectors
// const minus = document.querySelectorAll(".fa-minus")
// const plus = document.querySelectorAll(".fa-plus")
// console.log(minus);
const main = document.querySelector(".main__product")

main.addEventListener("click", (e) => {
    console.log(e.target.classList);

    if(e.target.classList.contains("fa-minus")) {
        if(e.target.nextElementSibling.innerText > 1) {
            e.target.nextElementSibling.innerText --
        }
    } else if (e.target.classList.contains("fa-plus")) {

       e.target.previousElementSibling.innerText ++;

    }
})