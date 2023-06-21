// * Dom etkinlikleri ile calismak


let greeting = document.querySelector("#greeting")

// greeting.addEventListener("click",  function() {


//     console.log("tiklandi")
// })

greeting.addEventListener("click", domClick)  

function domClick (){

    
        console.log("etkinlik calisiyor")
        this.style.color == "red" ? this.style.color = "black" : this.style.color= "red"
    }
