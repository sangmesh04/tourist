import { useState } from "react";

const PlaceSlider = () => {

  var dt = new Date();
  var dateTime = (("0" + dt.getDate()).slice(-2)) + "." + (("0" + (dt.getMonth() + 1)).slice(-2)) + "." + (dt.getFullYear()) + " || " + (("0" + dt.getHours()).slice(-2)) + "." + (("0" + dt.getMinutes()).slice(-2));
  
  // const [cityName, setCityName] = useState("");
  const [temperature, setTemperature] = useState("");
  const [Placename, setPlacename] = useState("");
  const [descrep, setDescription] = useState("");
  const [humidity, setHumidity] = useState("");
  const [windspeed, setWindSpeed] = useState("");
  const [icon, setIcon] = useState("");
  const [placeImg, SetPlaceImg] = useState("");
  let weather = {
    "apiKey":"ad4c63ac4b41ff78de0e4264cee1c7b1",
    fetchWeather: function(city){
      fetch( 
        "http://api.openweathermap.org/data/2.5/weather?q=" 
        + city 
        +"&units=matric&appid=" 
        + this.apiKey
      )
        .then((Response) => Response.json())
        .then((data) => this.displayWeather(data));
    },
    displayWeather: function(data){
      const { name }  = data;
      const { icon, description } = data.weather[0];
      const { temp, humidity } = data.main;
      const { speed } = data.wind;
      
      setTemperature(temp);
      setDescription(description);
      setPlacename(name);
      setHumidity(humidity);
      setWindSpeed(speed);
      setIcon("http://openweathermap.org/img/wn/" + icon + ".png");
      SetPlaceImg("https://source.unsplash.com/1600x900/?" + name);
      // console.log("temp: ",temperature);
      // console.log(name,icon,description,temp,humidity,speed)
      
      // return name,icon,description,temp,humidity,speed;
      // document.querySelector(".city").innerText = "Weather in " + name;
      // document.querySelector(".icon").src = 
      // "http://openweathermap.org/img/wn/" + icon + ".png";
      // document.querySelector(".description").innerText = description;
      // document.querySelector(".temp").innerText = (temp-273).toFixed(2) + "°C";
      // document.querySelector(".humidity").innerText = "Humidity: " + humidity +"%";
      // document.querySelector(".wind").innerText = "Wind speed: " + speed +"Km/h";
      // document.querySelector(".weather").classList.remove("loading");
      // document.body.style.backgroundImage = "url('https://source.unsplash.com/1600x900/?" + name + "')"
    },

    // search: function(){
    //   this.fetchWeather(document.querySelector(".search-box").value);
    // }
  };
  // document
  // .querySelector(".search button")
  // .addEventListener("click",function(){
  //   weather.search();
  // });
  
  // document
  // .querySelector(".search-box")
  // .addEventListener("keyup", function(event){
  //   if(event.key == "Enter"){
  //     weather.search();
  //   }
  
  // });
  // if(cityName !== ""){
  //   weather.fetchWeather(cityName);
  // }
  weather.fetchWeather("Pune");

    return ( 
      <div>
        <div id="weatherPrediction">
        <div className="container1">
  {/* <div className="weather-side">
    <div className="weather-gradient"></div>
    <div className="date-container">
      <h2 className="date-dayname">
        Tuesday
      </h2>
      <span className="date-day">15 Jan 2019</span><i className="location-icon" data-feather="map-pin"></i><span className="location">Paris, FR</span>
    </div>
    <div className="weather-container">
      <i className="weather-icon" data-feather="sun"></i>
      <h1 className="weather-temp">
        29°C
      </h1>
      <h3 className="weather-desc">
        Sunny
      </h3>
    </div>
  </div> */}
  <div className="info-side">
    <div className="today-info-container">
      <div className="today-info">
      <div className="precipitation">
          <span className="title">PLACE</span><span className="value">{Placename}</span>
          <div className="clear"></div>
      </div>
      <div className="precipitation">
          <span className="title">DESCRIPTION</span><span className="value" style={{textTransform:"capitalize"}}>{descrep}</span>
          <div className="clear"></div>
      </div>
      <div className="date">
          <span className="title">DATE</span><span className="value" id="datetime">{dateTime}</span>
          <div className="clear"></div>
        </div>
        <div className="temp">
          <span className="title">TEMPERATURE</span><span className="value">{(temperature-273).toFixed(2) + " °C"}</span>
          <div className="clear"></div>
        </div>
       
        <div className="humidity">
          <span className="title">HUMIDITY</span><span className="value">{humidity + " %"}</span>
          <div className="clear"></div>
        </div>
        <div className="wind">
          <span className="title">WIND</span><span className="value">{windspeed + " KM/Hr"}</span>
          <div className="clear"></div>
        </div>
      </div>
    </div>
    <div className="week-container">
      <ul className="week-list">
        <li className="active">
          {/* <img src={icon} alt="" /> */}
          <i className="day-icon" data-feather="sun"></i><span className="day-name">Tue</span><span className="day-temp">29°C</span>
        </li>
        <li>
          <i className="day-icon" data-feather="cloud"></i><span className="day-name">Wed</span><span className="day-temp">21°C</span>
        </li>
        <li>
          <i className="day-icon" data-feather="cloud-snow"></i><span className="day-name">Thu</span><span className="day-temp">08°C</span>
        </li>
        <li>
          <i className="day-icon" data-feather="cloud-rain"></i><span className="day-name">Fri</span><span className="day-temp">19°C</span>
        </li>
        <li>
          <i className="day-icon" data-feather="cloud-rain"></i><span className="day-name">Sat</span><span className="day-temp">19°C</span>
        </li>
        <div className="clear"></div>
      </ul>
    </div>
   
    {/* <div className="location-container">
      <button className="location-button"><i data-feather="map-pin"></i><span>Change location</span></button>
    </div> */}
  </div>
</div>

        </div>
        <div className="sliderForPlace">
        <div id="carouselExampleIndicators" className="carousel slide" data-bs-ride="carousel">
    <div className="carousel-indicators">
      <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
      <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
      <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
    </div>
    <div className="carousel-inner">
      <div className="carousel-item active">
        <img src={placeImg} alt="..." />
      </div>
      <div className="carousel-item">
        <img src={placeImg + "/1"} alt="..." />
      </div>
      <div className="carousel-item">
        <img src={placeImg + "/"} alt="..." />
      </div>
    </div>
    <i className="carousel-control-prev bi bi-caret-left" id="slideNext" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
      <span className="carousel-control-prev-icon" aria-hidden="true"></span>
      <span className="visually-hidden">Previous</span>
    </i>
    <i className="carousel-control-next bi bi-caret-right" id="slideNext" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
      <span className="carousel-control-next-icon" aria-hidden="true"></span>
      <span className="visually-hidden">Next</span>
    </i>
  </div>  
        </div>
        </div>
     );
}
 
export default PlaceSlider;