const buttonEl = document.getElementById("convert-button")
buttonEl.addEventListener("click", displayConversions)

function displayConversions(){
    const inputEl = document.getElementById("input-el");
    const lengthEl = document.getElementById("length-output-el")
    const massEl = document.getElementById("mass-output-el")
    const volumeEl = document.getElementById("volume-output-el")

    let input = inputEl.value
    let feet = input * 3.281
    let meters = input / 3.281
    let liters = input * 0.264172052
    let gallons = input * 0.0037854118
    let kilos = input * 2.20462262
    let pounds = input / 2.20462262 
    feet = feet.toFixed(3)
    meters = meters.toFixed(3)
    liters = liters.toFixed(3)
    gallons = gallons.toFixed(3)
    kilos = kilos.toFixed(3)
    pounds = pounds.toFixed(3)
    
    const lengthString = `${input} meters = ${feet} feet | ${input} feet = ${meters} meters`
    const volumeString = `${input} liters = ${gallons} gallons | ${input} gallons = ${liters} liters`
    const massString = `${input} kilos = ${pounds} pounds | ${input} pounds = ${kilos} kilos`

    lengthEl.textContent = lengthString
    volumeEl.textContent = volumeString
    massEl.textContent = massString

    inputEl.value = ""
}