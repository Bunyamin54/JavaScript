console.log("***** SELECTORS *****");

//*===========================================
//*            GETELEMENTBYID()
//*===========================================
const myHeader = document.getElementById("header");
console.log(myHeader);

myHeader.style.backgroundColor = "red";
myHeader.style.color = "white";
//* ADD Buton

const addButon = document.getElementById("btn");
console.log(addButon);

addButon.style.backgroundColor = " #bebe";
addButon.style.border = "none";
addButon.style.borderRadius = "1opx";
addButon.style.padding = "0.6rem";

// ? deger atama
addButon.value = "SAVE";

//? h1
const h1 = document.getElementById("heading1");
console.log(h1);

//? Deger atama

h1.textContent = "DOM Introductions";

//? deger okuma
console.log(h1.textContent);

//*===========================================
//*          GETELEMENTSBYTAGNAME()
//*===========================================

//*===========================================
//*          GETELEMENTSBYCLASSNAME()
//*===========================================

//* ========================================
//*              QUERYSELECTOR()
//* ========================================

//* ========================================
//*              QUERYSELECTORALL()
//* ========================================
