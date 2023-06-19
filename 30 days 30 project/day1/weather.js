const form = document.querySelector('form')
const input = document.querySelector('form #input-alani')


form.addEventListener("submit", (e) => {
    e.preventDefault()

 // * input.value = ""
// * form.reset()
// * e.target.reset()


getData()
e.currentTarget.reset()

    // console.log(e.target)
})

const getData = async () => {
const API_KEY = "929ef530f519c46e95ec303b405eb183"
const cityName = input.value 
const units = "metric"


const URL = `https://api.openweathermap.org/data/2.5/weather?q
=${cityName}Oslo&appid=${API_KEY}929ef530f519c46e95ec303b405eb183&units
=${units}&lang=no `


try {

    const res = await fetch(URL)


 if (!res.ok){
throw new Error(res.status)

 }
const data =await res.json()
console.log(data)
} catch (error) {
    
}



}


//* try catch  yakaliyor-- calismaya devam eder. hatayi atliyor sonraki kodu yazdiyor
// try {
//     let array

// array.forEach(element => {
//     console.log("first")
// });


    
// } catch (error) {
    
// }


// console.log("sonraki kod")