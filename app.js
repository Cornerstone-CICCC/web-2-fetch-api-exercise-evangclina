// YOUR JS CODE HERE
const temperature = document.querySelector(".temperature")
const windSpeed = document.querySelector(".wind-speed")
const location2 = document.querySelector(".location")
const update = document.querySelector(".update")

async function weatherInfo(){
    try{
        const res = await fetch(`https://api.open-meteo.com/v1/forecast?latitude=49.2497&longitude=-123.1193&current=temperature_2m,is_day,rain,showers,wind_speed_10m&timezone=auto&forecast_days=1`)
    const data = await res.json()

    const temp = data.current.temperature_2m
    const speed = data.current.wind_speed_10m
    console.log(speed)
    const timezone = data.timezone
    const time = data.current.time

    const date = new Date(time)
    console.log(date.toLocaleString())

    temperature.textContent = `${temp} ºC`
    windSpeed.innerHTML = `Wind Speed: ${speed} km/h`
    location2.innerHTML = `${timezone}`
    update.innerHTML = `Last updated: ${date.toLocaleString()}`

    }catch(error){
        console.error(error)
    }
}

weatherInfo()