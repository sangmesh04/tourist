const PlaceSlider = () => {
    return ( 
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
     );
}
 
export default PlaceSlider;