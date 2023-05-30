console.log("**** TRAVERSING DOM ****");

//*===========================================
//*            TRAVERSING DOM
//*===========================================
//? Bir HTML elementi uzerinden baska elementleri secmeye
//? DOM traversing denilir. Ozellikle dinamik olarak degisen
//? (silme veya yeni ekleme gibi) HTML elemanlarinin secerken
//? gerekli olabilir.

//? Secme islemi 3 yonlu yapilabilir.
//? - Yukari yonde (Parent)
//? - Asagi yonde (children)
//? - Yatay yonde (Sibling)

//* 1- Yukari Yonde traverse
//*----------------------------------------------

const addItem = document.querySelector(".add-item");
console.log(addItem);

console.log(addItem.parentElement); //? main
console.log(addItem.parentNode.parentNode); //? body

//! closes (): belirtilen elementin parentlerinin ilk uygun parentini  secer

const list = document.querySelector(".list");

console.log(list.textContent);
console.log(list.closest("section"));
