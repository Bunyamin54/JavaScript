// //*========================================
// //*             3 - FETCH API
// //*========================================

// //? Dis kaynaklardan veri getirmek icin kullanilan basit bir arabirimdir.
// //? Ag istekleri yapmamizi ve cevaplari yontebilmemize olanak saglar.
// //? Javascript ortaminda en cok kullanilan Asenkron islem orneklerinin basinda
// //? gelmektedir.

// //? fetch() fonksiyonu veri getirmek istediginiz kaynagin yolunu gosteren zorunlu
// //? bir parametre almaktadir ve bu istegin cevabini gosteren bir Promise dondurmektedir.

// console.log("FETCH")

// let veri = ""


// fetch ("https://jsonplaceholder.typicode.com/photos")
// .then(response => response.json())
// .then(responseJson => {console.log(responseJson)})



// fetch("https://jsonplaceholder.typicode.com/photos")
//   .then(response => response.json())
//   .then(responseJson => {
//     responseJson.filter((item) => Number(item.id) > 4000)
//     .foreach((item) => console.log(item)) 
//   });

// fetch("https://jsonplaceholder.typicode.com/photos")
//   .then(response => response.json())
//   .then(responseJson => {
//     const filteredItems = responseJson.filter(item => Number(item.id) > 4000);
//     filteredItems.forEach(item => console.log(item.id));
//   });









//  fetch("https://jsonplaceholder.typicode.com/photos").then(response => response.json()).then(responseJson  => { responseJson.forEach(item =>{

// let liDOM = document.createElement('item')
// liDOM.innerHTML = item.title

// userListDOM.appendChild(liDOM)


// fetch("https://api.github.com/user")
//   .then((res) => {
//     //! Error handling
//     if (!res.ok) {
//       throw new Error("Something went wrong", res.status)
//     }
//     return res.json()
//   })
//   .then((data) => {
    // veri = data
    // console.log(veri)
    showUsers(data)
//   })
//   .catch((err) => console.log(err))

// console.log(veri)

// const showUsers = (users) => {
//   console.log(users)
//   const usersDiv = document.getElementById("users")

//   users.forEach((user) => {
//     console.log(user.login)
//     usersDiv.innerHTML += `
//         <h2>${user.login}</h2>
//         <img class="w-25" src="${user.avatar_url}" alt="" />
//     `
//   })
// }
// let userListDOM = document.querySelector("#userList")
// //* json dosyadan veri cektik api uzerinden url yapisi ile veri cektik 
// fetch("https://jsonplaceholder.typicode.com/albums").then(response => 
// response.json()).then(responseJson => {
//   responseJson.forEach(item => {
    
// let liDOM= document.createElement('li')
// liDOM.innerHTML =item.title
// userListDOM.appendChild(liDOM)

//   })
// })
// let userListDOM = document.querySelector("#userList")

// fetch("https://jsonplaceholder.typicode.com/photos").then(response => response.json()).then(responseJson  => { responseJson.forEach(item =>{

// let liDOM = document.createElement('item')
// liDOM.innerHTML = item.title

// userListDOM.appendChild(liDOM)
// } )

// }) 




//! fetch ("https://jsonplaceholder.typicode.com/photos").then(response => response.json()).then(responseJson => {console.log(responseJson[3])})


// !fetch("https://jsonplaceholder.typicode.com/users").then(response => response.json()).then(responseJson => {console.log(responseJson)})


// !fetch("https://jsonplaceholder.typicode.com/todos").then(response=> response.json()).then(responseJson=> {console.log(responseJson)})

// !fetch("https://jsonplaceholder.typicode.com/posts").then(response=> response.json()).then(responseJson => {console.log(responseJson[3])})


// !fetch("https://jsonplaceholder.typicode.com/albums").then(response=> response.json()).then(responseJson => {console.log(responseJson[2])})

