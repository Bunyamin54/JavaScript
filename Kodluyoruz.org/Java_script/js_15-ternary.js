let userName = prompt("Kullanici bilginiz yaziniz")
let info = document.querySelector("#info")

//* ternary kullanimi  
//* kosul ? doruysa : yanlissa

info.innerHTML = ` ${userName.length  > 0 ? userName : "Kullanici bilginiz bulunamadi :("} `