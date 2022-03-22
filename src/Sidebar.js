import { useState } from "react";
import { Link } from "react-router-dom";

const SideBar = () => {

  function CopyUrlForPlace(placeId) {
    /* Get the text field */
    var copyText = document.getElementById("placeUrl"+placeId);
  
    /* Select the text field */
    copyText.select();
    copyText.setSelectionRange(0, 99999); /* For mobile devices */
  
     /* Copy the text inside the text field */
    navigator.clipboard.writeText(copyText.value);
  
    /* Alert the copied text */
    // alert("Copied the text: " + copyText.value);
  }

  var mainContent = document.getElementById("mainContent");
  var skeleton = document.getElementById("skeleton");
  function hideSkeleton(){
    // mainContent.style.display = "contents";
    console.log("hello");
    skeleton.style.display = "none";
  }
  const ThemeMode = () => {
    var modeSwitch = document.querySelector('.mode-switch');
  
    modeSwitch.addEventListener('click', function () {                     
      document.documentElement.classList.toggle('dark');
      modeSwitch.classList.toggle('active');
    });
    
    var listView = document.querySelector('.list-view');
    var gridView = document.querySelector('.grid-view');
    var projectsList = document.querySelector('.project-boxes');
    
    listView.addEventListener('click', function () {
      gridView.classList.remove('active');
      listView.classList.add('active');
      projectsList.classList.remove('jsGridView');
      projectsList.classList.add('jsListView');
    });
    
    gridView.addEventListener('click', function () {
      gridView.classList.add('active');
      listView.classList.remove('active');
      projectsList.classList.remove('jsListView');
      projectsList.classList.add('jsGridView');
    });
  }

  const [places,Addplace] = useState([
    {time:"December 10, 2020",placename:"Web Designing",placediscrip:"Prototyping",cardBackgroundColor:"#fee4cb",ratingBarWidth:"60%",SubBackGroundColor:"#ff942e", Distance:"2 Km", id:"place1"},
    {time:"December 10, 2020",placename:"Testing",placediscrip:"Prototyping",cardBackgroundColor:"#e9e7fd",ratingBarWidth:"50%",SubBackGroundColor:"#4f3ff0", Distance:"6 Km", id:"place2"},
    {time:"December 10, 2020",placename:"Svg Animations",placediscrip:"Prototyping",cardBackgroundColor:"#cee4fb",ratingBarWidth:"80%",SubBackGroundColor:"#096c86", Distance:"2 Km", id:"place3"},
    {time:"December 10, 2020",placename:"UI Development",placediscrip:"Prototyping",cardBackgroundColor:"#ffd3e2",ratingBarWidth:"20%",SubBackGroundColor:"#df3670", Distance:"1 Km", id:"place4"},
    {time:"December 10, 2020",placename:"Data Analysis",placediscrip:"Prototyping",cardBackgroundColor:"#c8f7dc",ratingBarWidth:"60%",SubBackGroundColor:"#34c471", Distance:"2 Km", id:"place5"},
    {time:"December 10, 2020",placename:"Web Designing 2.0",placediscrip:"Prototyping",cardBackgroundColor:"#d5deff",ratingBarWidth:"40%",SubBackGroundColor:"#4067f9", Distance:"4 Km", id:"place6"},
  ])
    return ( 
        <div>
        <div className="app-container" onLoad={ThemeMode}>
  <div className="app-header">
    <div className="app-header-left">
     <span className="app-icon"></span>
     <Link to="/"><p className="app-name">Portfolio</p>
      </Link>
      <div className="search-wrapper">
        <input className="search-input" type="text" placeholder="Search" />
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="feather feather-search" viewBox="0 0 24 24">
          <defs></defs>
          <circle cx="11" cy="11" r="8"></circle>
          <path d="M21 21l-4.35-4.35"></path>
        </svg>
      </div>
    </div>
    <div className="app-header-right">
      <button className="mode-switch" title="Switch Theme">
        <svg className="moon" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" width="24" height="24" viewBox="0 0 24 24">
          <defs></defs>
          <path d="M21 12.79A9 9 0 1111.21 3 7 7 0 0021 12.79z"></path>
        </svg>
      </button>
      <button className="add-btn" title="Add New Project">
        <svg className="btn-icon" xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" className="feather feather-plus">
          <line x1="12" y1="5" x2="12" y2="19" />
          <line x1="5" y1="12" x2="19" y2="12" /></svg>
      </button>
      {/* <button className="notification-btn">
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-bell">
          <path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9" />
          <path d="M13.73 21a2 2 0 0 1-3.46 0" /></svg>
      </button> */}
      <button className="profile-btn">
        <img src="https://assets.codepen.io/3306515/IMG_2025.jpg" />
        <span>Aybüke C.</span>
      </button>
    </div>
    {/* <button className="messages-btn">
      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-message-circle">
        <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" /></svg>
    </button> */}
  </div>
  <div className="app-content">
    <div className="app-sidebar">
      <Link to="place" className="app-sidebar-link active">
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-home">
          <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
          <polyline points="9 22 9 12 15 12 15 22" /></svg>
      </Link>
    </div>
    <div className="projects-section">
      <div className="projects-section-header">
        {/* <p>Projects</p> */}
        <p className="time"><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-geo-alt-fill" viewBox="0 0 16 16">
  <path d="M8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10zm0-7a3 3 0 1 1 0-6 3 3 0 0 1 0 6z"/>
</svg> Chikkatoguru Main Road, Pragathi Nagar, Chikkathoguru, Bengaluru, 560100, Karnataka, India</p>
      </div>
      <div className="projects-section-line">
        <div className="projects-status">
        <div className="dropdown">
  <button className="view-btn dropdown-toggle" style={{width:"95px"}} type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" className="bi bi-filter" viewBox="0 0 16 16">
  <path d="M6 10.5a.5.5 0 0 1 .5-.5h3a.5.5 0 0 1 0 1h-3a.5.5 0 0 1-.5-.5zm-2-3a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7a.5.5 0 0 1-.5-.5zm-2-3a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11a.5.5 0 0 1-.5-.5z"/>
</svg> Filter
  </button>
  <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
    <li><a className="dropdown-item" href="#">Temple(5)</a></li>
    <li><a className="dropdown-item" href="#">Park(3)</a></li>
    <li><a className="dropdown-item" href="#">Treking Point(1)</a></li>
  </ul>
</div>
        </div>
        <div className="view-actions">
          <button className="view-btn list-view" title="List View">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-list">
              <line x1="8" y1="6" x2="21" y2="6" />
              <line x1="8" y1="12" x2="21" y2="12" />
              <line x1="8" y1="18" x2="21" y2="18" />
              <line x1="3" y1="6" x2="3.01" y2="6" />
              <line x1="3" y1="12" x2="3.01" y2="12" />
              <line x1="3" y1="18" x2="3.01" y2="18" /></svg>
          </button>
          <button className="view-btn grid-view active" title="Grid View">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-grid">
              <rect x="3" y="3" width="7" height="7" />
              <rect x="14" y="3" width="7" height="7" />
              <rect x="14" y="14" width="7" height="7" />
              <rect x="3" y="14" width="7" height="7" /></svg>
          </button>
        </div>
      </div>
      <div className="project-boxes jsGridView">
      <div className="row row-cols-1 row-cols-md-3 g-4" id="skeleton">        
        <div className="project-box-wrapper">
        <div className="card project-box col-md-3" id="skeletonPart" aria-hidden="true">
          {/* <!-- <img src="..." className="card-img-top" alt="..."> --> */}
          <div className="card-body">
            <h5 className="card-title placeholder-glow">
              <span className="placeholder col-6"></span>
            </h5>
            <p className="card-text placeholder-glow">
              <span className="placeholder col-7"></span>
              <span className="placeholder col-4"></span>
              <span className="placeholder col-4"></span>
              <span className="placeholder col-6"></span>
              <span className="placeholder col-8"></span>
            </p>
            
          </div>
        </div>
        </div>
        <div className="project-box-wrapper">
        <div className="card project-box col-md-3" style={{backgroundColor:"#fee4cb"}} id="skeletonPart" aria-hidden="true">
          {/* <!-- <img src="..." className="card-img-top" alt="..."> --> */}
          <div className="card-body">
            <h5 className="card-title placeholder-glow">
              <span className="placeholder col-6"></span>
            </h5>
            <p className="card-text placeholder-glow">
              <span className="placeholder col-7"></span>
              <span className="placeholder col-4"></span>
              <span className="placeholder col-4"></span>
              <span className="placeholder col-6"></span>
              <span className="placeholder col-8"></span>
            </p>
            
          </div>
        </div>
        </div>
        <div className="project-box-wrapper" >
        <div className="card project-box col-md-3" style={{backgroundColor:"#e9e7fd"}} id="skeletonPart" aria-hidden="true">
          {/* <!-- <img src="..." className="card-img-top" alt="..."> --> */}
          <div className="card-body">
            <h5 className="card-title placeholder-glow">
              <span className="placeholder col-6"></span>
            </h5>
            <p className="card-text placeholder-glow">
              <span className="placeholder col-7"></span>
              <span className="placeholder col-4"></span>
              <span className="placeholder col-4"></span>
              <span className="placeholder col-6"></span>
              <span className="placeholder col-8"></span>
            </p>
            
          </div>
          </div>
        </div>
</div>
<div id="mainContent" onLoad={() => this.hideSkeleton()}>
      {places.map((place) =>(
      <div className="project-box-wrapper" key={place.id}>
          <div className="project-box" style={{backgroundColor: place.cardBackgroundColor}}>
            <div className="project-box-header">
              <span>{place.time}</span>
              <div className="more-wrapper">
                <button type="button" className="project-btn-more" data-bs-toggle="modal" data-bs-target={"#"+"modal" + place.id}>
   {/* className="btn btn-lg btn-info" > */}
   <i className="bi bi-share-fill"></i>
                </button>
          </div>
        </div>
        <div className="project-box-content-header">
          <p className="box-content-header">{place.placename}</p>
          <p className="box-content-subheader">{place.placediscrip}</p>
        </div>
        <div className="box-progress-wrapper">
          <p className="box-progress-header">Ratings</p>
          <div className="box-progress-bar">
            <span className="box-progress" style={{width: place.ratingBarWidth, backgroundColor: place.SubBackGroundColor}}></span>
          </div>
          <p className="box-progress-percentage">{place.ratingBarWidth}</p>
        </div>
        <div className="project-box-footer">
          <div className="participants">
            <button className="add-participant" style={{color: place.SubBackGroundColor}}>
              <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" className="feather feather-plus">
                <path d="M12 5v14M5 12h14" />
              </svg>
            </button>
          </div>
          <div className="days-left" style={{color: place.SubBackGroundColor}}>
           {place.Distance} away
          </div>
        </div>
      </div>
      <div className="modal fade" id={"modal" + place.id} tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div className="modal-dialog">
    <div className="modal-content">
      <div className="modal-header">
        <h5 className="modal-title" id="exampleModalLabel">Share this place with your friends ;)</h5>
        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div className="modal-body">
        {place.placename} <br />
        <div className="input-group mb-3">
  <input type="text" className="form-control" id={"placeUrl"+place.id} defaultValue={place.placename} aria-label="Recipient's username" aria-describedby="button-addon2" /> 
  <button className="btn btn-outline-dark" onClick={() => CopyUrlForPlace(place.id)} type="button" id="button-addon2">Copy</button>
</div>
      </div>
    </div>
  </div>
</div>

    </div>
    
      ))}
      </div>
      </div>
</div>
</div>
</div>
  </div>
     );
}
 
export default SideBar;