

//* for lopp

// let users =["Lorem", "Ipsum", "Dolar"]

// const userListDOM = document.querySelector('#userList')

// for (index = 0 ; index < users.length ; index++) {

//     const liDOM = document.createElement('li')
//     liDOM.innerHTML = users[index]
//     userListDOM.appendChild(liDOM)

// }

// for (let index = 0 ; index < 10; index ++) {

//     console.log(index)
// }


// let index = 0
// for (; index < 10; index ++) {

//     console.log(index)
// }

//  * break  ve continue


// const LOREM_LIST = [

//     'lorem', 'ipsum', 'dolar' , ' amet', 'consectetur', ' adiping', 'elit', 
// ]

// let counter = 0

// for (; counter < 10; counter++) {


//     if(counter === 5 ) {break} //* durdurdu break ile
//     console.log(counter)
// }

// for (; counter < 10; counter++) {


//     if(counter === 5 ) {continue} //* 5 geleen kadar yap 5 i atla demek
//     console.log(counter)
// }

// const UL_DOM = document.querySelector('#userList')

// let index = 0


// for (; index < LOREM_LIST.length; index++) {

//     if(LOREM_LIST[index] =='dolar') {break}
//     let LI_DOM = document.createElement('li')
//     LI_DOM.innerHTML = LOREM_LIST[index]
//     UL_DOM.appendChild(LI_DOM)
// }

//* for (; index < LOREM_LIST.length; index++) {

//     if(LOREM_LIST[index] =='dolar') {continue}
//     let LI_DOM = document.createElement('li')
//     LI_DOM.innerHTML = LOREM_LIST[index]
//     UL_DOM.appendChild(LI_DOM)
// }

//  * while dongusu  sonsuz dongu gibi  - birsey olana kadar

// let counter = 0  ;
// while ( counter < 10) {

//     console.log(counter)
//     counter ++
// }

// let userName ;

// while (!userName  ) {
//   userName = prompt("Kullanici bilginiz giriniz!")
// console.log(userName)
// }


// * for Each  Array icerisnde kullaniyor. 

// const PRODUCTS = ["laptop", "phone", "Spekaer", "Desktop", "Server"]


// PRODUCTS.forEach((product, index, array) => array [index] = `${product.toUpperCase()}`)

// console.log(PRODUCTS) 



// * filter array  product git bi filtre uygula ve bir funksiyon calsitir ve lengti 5 den fazla olanlari sec

//* const new_Produsts = produsct.filter (item => item.length > 5) gibi 

// * map array

const users = ["ayse" , "mehmet", "tugce", "aksel"]

const new_users = users.map (user => user.toUpperCase())

console.log(new_users)