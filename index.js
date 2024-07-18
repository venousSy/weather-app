let city = 'basra'

const cityEntry = document.getElementById('city')
cityEntry.addEventListener('keyup', (event) => {
  // Number 13 is the "Enter" key on the keyboard
  if (event.keyCode === 13) {
    // Cancel the default action, if needed
    event.preventDefault()
    // Trigger the button element with a click
    city = event.target.value
    fetchData(city)
  }
})
const cityName = document.querySelector('[data-city-name]')
const temp = document.querySelector('[data-city-temp]')
const feelslike = document.querySelector('[data-city-feelslike]')
const feelslikemax = document.querySelector('[data-city-feelslikemax]')
const feelslikemin = document.querySelector('[data-city-feelslikemin]')
const conditions = document.querySelector('[data-city-conditions]')
const descriptions = document.querySelector('[data-city-descriptions]')

const fetchData = async (city = 'basra') => {
  const apiData = await fetch(
    `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${city}?key=2ZLRFPC2UNA85KKKD7ME55ZMZ`,
    { mode: 'cors' }
  )
  const data = await apiData.json()

  console.log(data.days[0].feelslikemax)
  cityName.textContent = city
  temp.textContent = data.days[0].temp
  feelslikemax.textContent = data.days[0].feelslikemax
  feelslikemin.textContent = data.days[0].feelslikemin
  conditions.textContent = `${data.days[0].conditions} `
  descriptions.textContent = data.description
}
fetchData()
