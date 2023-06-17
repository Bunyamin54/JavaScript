// //javascript
// const searchInput = document.getElementById("searchText");
// const searchBtn = document.querySelector("#button");
// const cardsDiv = document.querySelector(".cards");

// console.log(searchInput);
// console.log(searchBtn);
// console.log(cardsDiv);

// searchBtn.addEventListener("click", () => {
//   if (searchInput.value) {
//     console.log(searchInput.value);
//     getData(searchInput.value);
//     cardsDiv.innerHTML = "";
//   }else{
//     alert("Lütfen bir kullanıcı adı giriniz")
//   }
// });

// async function getData(username){
//     console.log(username);
//     const url = `https://api.github.com/users/${username}/followers?per_page=100`;
//     try {
//         let response = await fetch(url);
//         console.log(response);
        
//         if(response.ok){
//             const data = await response.json()
//             console.log(data);
//             data.forEach(user => createElem(user))
//         }else{
//             cardsDiv.innerHTML = `<h1 class="text-danger">Kullanıcı bulunamadı👎👎</h1>`
//         }
        
        
//     } catch (error) {
//         console.log(error);
//     }
      
    
// }

// function createElem(user) {
//     const {login,avatar_url,html_url} = user;
//     // const newElem = `
//     // <div class="col">
//     //     <div class="card">
//     //     <img src="${avatar_url}" class="card-img-top" alt="...">
//     //     <div class="card-body">
//     //         <h5 class="card-title">${login}</h5>
//     //         <a href="${html_url}" target="_blank" class="btn btn-dark">View Profile</a>
//     //     </div>
//     //     </div>
//     // </div>
//     // `;
//     // cardsDiv.innerHTML += newElem;

//     let cardCol = document.createElement("div");
//     cardCol.className = "col";
//     let cardDiv = document.createElement("div");
//     cardDiv.className = "card";
//     let cardImg = document.createElement("img");
//     cardImg.src = avatar_url;
//     cardImg.className = "card-img-top";
//     cardImg.alt = login;
//     let cardBody = document.createElement("div");
//     cardBody.className = "card-body";
//     let cardTitle = document.createElement("h5");
//     cardTitle.className = "card-title";
//     cardTitle.innerText = login;
//     let cardBtn = document.createElement("a");
//     cardBtn.className = "btn btn-dark";
//     cardBtn.innerText = "View Profile";
//     cardBtn.target = "_blank";
//     cardBtn.setAttribute("href", html_url);

//     cardCol.appendChild(cardDiv);
//     cardDiv.appendChild(cardImg);
//     cardDiv.appendChild(cardBody);
//     cardBody.appendChild(cardTitle);
//     cardBody.appendChild(cardBtn);

//     cardsDiv.appendChild(cardCol);

    

// }

// // const getData2 = async (){

// // }

// let modal = document.querySelector("#result");
// setTimeout(function () {
// modal.classList.remove("hidden");
// }, 10000);
// console.log("Results shown");

// // Callback queue
// setTimeout(() => console.log("timeout"), 0);
// // Microtask queue
// Promise.resolve().then(() => console.log("promise"));


// function init() {
//   var name = "Mozilla"; // name is a local variable created by init
//   function displayName() {
//     // displayName() is the inner function, that forms the closure
//     console.log(name); // use variable declared in the parent function
//   }
//   displayName();
// }
// init();

// async function f() {
//   let result = 'first!';
//   let pro = new Promise((resolve, reject) => {
//   setTimeout(() => resolve('done!'), 1000);
//   });
//   result = await pro;
//   console.log(result);
//   }
//   f();

// Promise.resolve('Success!')
// .then(data  => {
// console.log(data.toUpperCase());
// })
// .then(data => {
// console.log(data)
// })

const networkReq = new Promise((resolve, reject) =>  {

  const data = {a:1, b:2 }
  const sucess =Math.floor(Math.random() *5)
  if(sucess){
      console.log("Data fetched");
      resolve(data)
  }else{
  
  reject("Network Error")
  
  }
  })