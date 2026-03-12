const card = document.getElementById("obhavo")
const weatherForm = document.getElementById("form")
const weatherInput = document.getElementById("city")
const apiKey = "b0799d6245bd06b7a28735c89871eb37"


weatherForm.addEventListener("submit" , (evt) =>{
    evt.preventDefault();

    const cityNameValue = weatherInput.value.trim();
    
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cityNameValue}&appid=${apiKey}`)
    
    .then(res => res.json())
    .then(data =>{
        console.log(data);

        const celcium = Math.round(data.main.temp - 273.15)
        card.className = "w-[342px] h-[184px] bg-black  m-auto bg-gradient-to-l from-[#362A84] to-[#5936B4] rounded-[20px] mt-[60px]"
        card.innerHTML =
        `
         <p class="text-[64px] text-white font-normal text-center">${celcium}°C</p>
         <h1 class="">${data.name}</h1>
       
        <p>Weather:${data.weather[0].main}</p>
        
       
        `;
        
        
    })

})
