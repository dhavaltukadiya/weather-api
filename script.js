const apikey=`b34b03b1682588fbba8a5e8ecbd6dc80`;



async function fetchweather(city){
    const response=await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apikey}`);

const data=await response.json();
console.log(data);
updateweatherUI(data);


}
const cityElement=document.querySelector(".city-date-section");
const temperature=document.querySelector(".temp");
const windSpeed= document.querySelector(".wind-speed");
const humidity= document.querySelector(".humidity");
const visibility= document.querySelector(".visibility-distance");
const description= document.querySelector(".description-text");
const date =document.querySelector(".date");



function updateweatherUI(data){

    cityElement.textContent=data.name;
    temperature.textContent=`${Math.round(data.main.temp)}`;
    windSpeed.textContent=`${(data.wind.speed)}km/h`;
    humidity.textContent=`${(data.main.humidity)}%`;
    visibility.textContent=`${(data.visibility/1000)}km`;
    description.textContent=data.weather[0].description;
    
    const currentDate = new Date();
    date.textContent=currentDate.toDateString();
}


const formElement= document.querySelector('.search-form');
const inputElement= document.querySelector('.city-input')

formElement.addEventListener("submit",function (e){
    e.preventDefault();

   const city= inputElement.value;

   if(city!==""){
    fetchweather(city);
    inputElement.value=""
   }


})
