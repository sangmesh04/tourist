// import { Link } from "react-router-dom/cjs/react-router-dom.min";
import { Link } from "react-router-dom";
import PlaceSlider from "./PlaceSlider";
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';

const Place = () => {
  function ThemeMode  () {
    var modeSwitch = document.querySelector('.mode-switch');
    // function changeMode() {                     
      document.documentElement.classList.toggle('dark');
      modeSwitch.classList.toggle('active');
    // };
  }

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
      <button className="mode-switch" onClick={ThemeMode} title="Switch Theme">
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
      <a href="" className="app-sidebar-link active">
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-home">
          <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
          <polyline points="9 22 9 12 15 12 15 22" /></svg>
      </a>
      <Link to="locationInfo" className="app-sidebar-link">
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" className="bi bi-geo-alt-fill" viewBox="0 0 16 16">
  <path d="M8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10zm0-7a3 3 0 1 1 0-6 3 3 0 0 1 0 6z"/>
</svg>
      </Link>
      <a href="" className="app-sidebar-link">
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" className="bi bi-cart-fill" viewBox="0 0 16 16">
  <path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .491.592l-1.5 8A.5.5 0 0 1 13 12H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2z"/>
</svg>
      </a>
    <a href="" className="app-sidebar-link">
    <svg xmlns="http://www.w3.org/2000/svg" width="24" fill="currentColor" height="24" viewBox="0 0 33 22.5">
  <path id="Icon_material-hotel" data-name="Icon material-hotel" d="M10.5,19.5A4.5,4.5,0,1,0,6,15,4.494,4.494,0,0,0,10.5,19.5Zm18-9h-12V21H4.5V7.5h-3V30h3V25.5h27V30h3V16.5A6,6,0,0,0,28.5,10.5Z" transform="translate(-1.5 -7.5)"/>
</svg>

</a>
<a href="" className="app-sidebar-link">
<svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" fill="currentColor" viewBox="0 0 34.56 30.295">
  <path id="Icon_map-food" data-name="Icon map-food" d="M35.2,10.911,32.37,33.12H22.8L19.979,10.8H31.662l2.309-7.975,1.309.395-2.215,7.675,2.139.017ZM18.626,23.76s.358-2.88-4.6-2.88h-7.9c-4.955,0-4.6,2.88-4.6,2.88H18.626ZM1.515,30.24s-.351,2.88,4.6,2.88h7.9c4.962,0,4.6-2.88,4.6-2.88H1.515ZM17.884,28.8A1.656,1.656,0,0,0,19.352,27a1.654,1.654,0,0,0-1.468-1.8H2.189A1.657,1.657,0,0,0,.72,27a1.659,1.659,0,0,0,1.469,1.8h15.7Z" transform="translate(-0.72 -2.825)"/>
</svg>      
</a>
</div>

<div className="projects-section">
      <div className="projects-section-header">
        <p><i className="bi bi-caret-right-fill"></i> Bangalore Palace</p>
        <p className="time"><i className="bi bi-geo-alt-fill"></i> Chikkatoguru Main Road, Pragathi Nagar, Chikkathoguru, Bengaluru, 560100, Karnataka, India</p>
      </div>

      <Router>
        <Switch>
          <Route exact path="/place">
          <PlaceSlider />
          </Route>
      </Switch>
      </Router>


</div>
</div>
  </div>
  </div>
     );
}
 
export default Place;