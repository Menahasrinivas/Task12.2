let cities =document.querySelector(".city");
let search =document.querySelector(".search");
let todayTime =document.querySelector(".time");
let area =document.querySelector("#area");
let wState =document.querySelector("#wState");
let temp =document.querySelector("#temp");
let wind =document.querySelector("#wind");

console.log(cities);
search.addEventListener("click",function(){
    let url =
            "https://api.openweathermap.org/data/2.5/weather?q=" +
    cities.value + 
    "&appid=429a23dee47c5972025ec631391cc139";

     //app id:429a23dee47c5972025ec631391cc139
fetch(url)
.then((response)=>response.json())
.then((details)=>{
    let dateTime = new Date().toDateString();
    let cityName = details.name;
    let weatherState = details.weather[0].main;
    let temperature = Math.floor(details.main.temp);
    let windSpeed = details.wind.speed;
    todayTime.innerText = dateTime;
    area.innerText = `${cityName}`;
    if(weatherState === "Clouds"){
        src ="assets/cloud.png";
    }else if(weatherState ==="Rain") src ="assets/rain.png";
else src ="assets/sun.png";
wState.innerHTML = `${weatherState}<img class="cloud"src=${src}>`;
temp.innerHTML = `${temperature -273} &#176; C`;
wind.innerHTML = `${windSpeed} kmph`;

console.log(cityName);
console.log(weatherState);
console.log(temperature);
console.log(windSpeed,"kmph");


})
// .catch((error)=> alert("Wrong Country Name"));

});