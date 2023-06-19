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
=${units}metric&lang=no `

}