const apikey="b7a35d6dc44d471de41165277af8d31c"
const apiurl="https://api.openweathermap.org/data/2.5/weather?&units=metric&q=";
const searchBox=document.querySelector("#search input")
const searchBtn=document.querySelector("#search button")
var img=document.querySelector("#imgo")



async function CheckWeather(city){
const response = await fetch(apiurl + city + `&appid=${apikey}`);
var data= await response.json();
console.log(data.weather[0].main);


document.querySelector("#temp h1").innerHTML=data.name;
document.querySelector("#temp h2").innerHTML=`<h2>${Math.floor(data.main.temp)}<sup>0</sup> C</h2>`;
document.querySelector(".humidity h5").innerHTML=`<h5>${data.main.humidity}% <br>Humidity</h5>`;
 document.querySelector(".wind h5").innerHTML= `<h5>${data.wind.speed}Km/h <br>Wind Speed</h5>`;

    if(data.weather[0].main=="Clouds"){
        img.src="/clouds.png";
    }

    else if(data.weather[0].main=="Clear"){
        img.src="/clear.png";
    }
    else if(data.weather[0].main=="Rain"){
        img.src="/rain.png";
    }
    else if(data.weather[0].main=="Drizzle"){
        img.src="/drizzle.png";
    }
    else if(data.weather[0].main=="Mist"){
        img.src="/mist.png";
    }









}


searchBtn.addEventListener("click",function(){
    console.log(searchBox.value)

    CheckWeather(searchBox.value);
    
})

