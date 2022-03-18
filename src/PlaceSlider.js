const PlaceSlider = () => {
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
      <div className="date">
          <span className="title">DATE</span><span className="value">18 Mar 2022</span>
          <div className="clear"></div>
        </div>
        <div className="temp">
          <span className="title">TEMPERATURE</span><span className="value">29°C</span>
          <div className="clear"></div>
        </div>
        <div className="precipitation">
          <span className="title">PRECIPITATION</span><span className="value">0 %</span>
          <div className="clear"></div>
        </div>
        <div className="humidity">
          <span className="title">HUMIDITY</span><span className="value">34 %</span>
          <div className="clear"></div>
        </div>
        <div className="wind">
          <span className="title">WIND</span><span className="value">0 km/h</span>
          <div className="clear"></div>
        </div>
      </div>
    </div>
    <div className="week-container">
      <ul className="week-list">
        <li className="active">
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
        <img src="https://www.holidify.com/images/cmsuploads/compressed/BangalorePalace16_20190904100428_20190904100439.jpg" className="d-block w-80" alt="..." />
      </div>
      <div className="carousel-item">
        <img src="https://www.holidify.com/images/compressed/attractions/attr_1552.jpg" className="d-block w-80" alt="..." />
      </div>
      <div className="carousel-item">
        <img src="https://www.holidify.com/images/cmsuploads/compressed/BangalorePalace10_20190920110923.jpg" className="d-block w-80" alt="..." />
      </div>
    </div>
    <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
      <span className="carousel-control-prev-icon" aria-hidden="true"></span>
      <span className="visually-hidden">Previous</span>
    </button>
    <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
      <span className="carousel-control-next-icon" aria-hidden="true"></span>
      <span className="visually-hidden">Next</span>
    </button>
  </div>  
        </div>
        </div>
     );
}
 
export default PlaceSlider;