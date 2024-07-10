const apiKey="f28ba665ebe88b8c8471a5222c2d097b";
const apiUrl="https://api.openweathermap.org/data/2.5/weather?&units=metric&q="
const searchBox=document.querySelector(".search input");
const searchBtn=document.querySelector(".search button");
const weatherIcon=document.querySelector(".weather-icon");

async function checkWeather(city){
    const res=await fetch(apiUrl+ city+ `&appid=${apiKey}`);

    if(res.status== 404){
        document.querySelector(".error").style.display="block";
        document.querySelector(".weather").style.display="none";
    }else{
        var data=await res.json();
    
    document.querySelector(".city").innerHTML=data.name;
    document.querySelector(".temp").innerHTML=Math.round(data.main.temp)  + "°C";
    document.querySelector(".humidity").innerHTML=data.main.humidity + "%";
    document.querySelector(".wind").innerHTML=data.wind.speed +"km/h"; 


    if(data.weather[0].main=="clouds"){
        weatherIcon.src="images/clouds.jpeg";
    }else if(data.weather[0].main=="clear"){
        weatherIcon.src="images/clear.png";
    }else if(data.weather[0].main=="rain"){
        weatherIcon.src="images/rain.jpeg";
    }else if(data.weather[0].main=="drizzle"){
        weatherIcon.src="images/drizzle.jpeg";
    }else if(data.weather[0].main=="mist"){
        weatherIcon.src="images/mist.jpeg";
    }


    document.querySelector(".weather").style.display="block";
    document.querySelector(".error").style.display="none";
    }

    //this one is responsible to show data  at the search bar after hitting the search button.initially it wasn't showing anything

}

searchBtn.addEventListener("click",()=>{
    checkWeather(searchBox.value);
})

checkWeather();