console.log("Bunyamin!!!");

let select_country = document.querySelector("#country");

// select_country.addEventListener("change", function(event){
// 	console.log("event-target: ", event.target.value);
// })


//select_country.innerHTML=`<option>Norway</option><option>Sweden</option><option>Denmark</option>`;

// let countries = [
// 	{id:1 , name:"Norway"},
// 	{id:2 , name:"Sweden"},
// 	{id:3 , name:"Denmark"},
// 	{id:4 , name:"Finland"},
// ] 

// function createOptions(myCountries)
// {

// 	myCountries.forEach(country => 
// 	{
// 		let value =  country.id;
// 		let name = country.name;
	//	createOption(value, name);

// 	});	
// }

function createOption(value, name)
{
	let option;
	option = document.createElement("option");
	//console.log("option: ",option);
	option.setAttribute("value",value);
	option.innerHTML= name;
	select_country.appendChild(option);
}

//createOptions(countries)

select_country.addEventListener("change", function(event)
{
		console.log("Selected-option: ", event.target.value);

		fetch(`https://restcountries.com/v3.1/alpha/${event.target.value}`)
  .then(response => response.json())
  .then(data => {
    // Process the data
    console.log("data::::", data);
	 let country_detail = document.getElementById("country-detail");
	 country_detail.innerHTML= `
	 <h6>Country: ${data[0].name.common}</h6>
	 <h6>Capital:${data[0].capital[0]}</h6>
	 <h6>Population:${data[0].population}</h6>
	
	 <a href='${data[0].maps.googleMaps}'> <img src='${data[0].flags.png}'/></a>
     <a href='${data[0].maps.googleMaps}'><h6>Go-to-GoogleMap</h6></a>
	 
	 `;
//maps.googleMaps

  })
  .catch(error => {
    console.error('Error:', error);
  });
})


const url = 'https://restcountries.eu/rest/v2/all';

const options = {method: 'GET'};


function getMyOptions(myData)
{
	myData.forEach(country=>{
		//	console.log("coutry-name: ", country.name.common);
			console.log("coutry-name: ", country.cioc);
			createOption(country.cioc, country.name.common)
		})
}

function callBack()
{
	getMyOptions(myData)
}

async function getCountries(url, getMyOptions)
{
	try {
	console.log("FETCHDATA")
	
		const response = await fetch(url);
		
		const result = await response.json();
		//console.log("result:",result);
		getMyOptions(result)
		
	
	} catch (error) {
		console.error(error);
	}

}

document.addEventListener("DOMContentLoaded", function(){
	console.log("LOADINGGGGG")
	getCountries("https://restcountries.com/v3.1/all", getMyOptions);
})


//PROMISE.THEN

// fetch('https://restcountries.com/v3.1/all')
//   .then(response => response.json())
//   .then(data => {
    // Process the data
//     console.log(data);
//   })
//   .catch(error => {
//     console.error('Error:', error);
//   });