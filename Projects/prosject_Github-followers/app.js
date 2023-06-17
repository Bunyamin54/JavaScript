//javascript
const searchInput = document.getElementById("searchText");
const searchBtn = document.querySelector("#button");
const cardsDiv = document.querySelector(".cards");

console.log(searchInput);
console.log(searchBtn);
console.log(cardsDiv);

searchBtn.addEventListener("click", () => {
  if (searchInput.value) {
    console.log(searchInput.value);
    getData(searchInput.value);
  }else{
    alert("Lütfen bir kullanıcı adı giriniz")
  }
});

async function getData(username){
    console.log(username);
    const url = `https://api.github.com/users/${username}/followers?per_page=100`;
    try {
        let response = await fetch(url);
        if(response.ok){
            const data = await response.json()
            console.log(data);
            
        }
        
        
    } catch (error) {
        console.log(error);
        
    }
      
    
}