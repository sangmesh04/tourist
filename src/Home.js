import hero from './img/hero-img.png';
import cli1 from './img/clients/gmaps.png';
import cli2 from './img/clients/uber.png';
import cli3 from './img/clients/client-3.png';
import cli4 from './img/clients/ola.png';
import cli5 from './img/clients/rapidapi.png';
import cli6 from './img/clients/firebase.png';
import count from './img/counts-img.svg';
import test1 from './img/testimonials/testimonials-1.jpg';
import test2 from './img/testimonials/testimonials-2.jpg';
import test3 from './img/testimonials/testimonials-3.jpg';
import test4 from './img/testimonials/testimonials-4.jpg';
import test5 from './img/testimonials/testimonials-5.jpg';
import team1 from './img/team/team-1.jpg';
import team2 from './img/team/team-2.jpg';
import team3 from './img/team/team-3.jpg';
import team4 from './img/team/team-4.jpg';

import React, { useState } from 'react';
// import axios from "axios";
import { Link } from 'react-router-dom';

import Map from "mapmyindia-react";

const Home = () => {


  const [Location,setLocation] = useState('');

  function handleSubmit(e){
    e.preventDefault();
    const locationData = {Location, lat, lng};
    console.log(locationData);
  }
    const MobileToggle = () => {
      var mobileTogggle = document.getElementById("mobileTogl");
      var navbar = document.getElementById("navbar");
      navbar.classList.toggle('navbar-mobile');
      mobileTogggle.classList.toggle('bi-list');
      mobileTogggle.classList.toggle('bi-x');
}

const HideNavbar = () =>{
    var navbar = document.getElementById("navbar");
    if (navbar.classList.contains('navbar-mobile')) {
      navbar.classList.remove('navbar-mobile')
      var mobileTogggle = document.getElementById("mobileTogl");
      mobileTogggle.classList.toggle('bi-list')
      mobileTogggle.classList.toggle('bi-x')
    }
  }

const [lat, setLat] = useState(18.51957);
const [lng, setLng] = useState(73.85535);
const [status, setStatus] = useState(null);

function getLocation () {
  if (!navigator.geolocation) {
    setStatus('Geolocation is not supported by your browser');
  } else {
    setStatus('Locating...');
    navigator.geolocation.getCurrentPosition((position) => {
      setStatus(null);
      setLat(position.coords.latitude);
      setLng(position.coords.longitude);
    }, () => {
      setStatus('Unable to retrieve your location');
    });
  }
}

window.onload = getLocation;

const [company,AddCompany] = useState([
  {image:cli1,id:"img1"},
  {image:cli2,id:"img2"},
  {image:cli3,id:"img3"},
  {image:cli4,id:"img4"},
  {image:cli5,id:"img5"},
  {image:cli6,id:"img6"}
])

const [services,Addservice] = useState([
 {icon:"bx bx-world",title:"Nemo Enim",description:"At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis",id:"1"},
 {icon:"bx bx-tachometer",title:"Magni Dolores",description:"Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia",id:"2"},
 {icon:"bx bx-file",title:"Sed ut perspiciatis",description:"Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore",id:"3"},
 {icon:"bx bxl-dribbble",title:"Lorem Ipsum",description:"Voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi",id:"4"}
])

const [features,AddFeature] = useState([
  {icon:"ri-calendar-todo-line",title:"Sed perspiciatis",id:"feat1"},
  {icon:"ri-bar-chart-box-line",title:"Dolor Sitema",id:"feat2"},
  {icon:"ri-store-line",title:"Lorem Ipsum",id:"feat3"},
  {icon:"ri-paint-brush-line",title:"Magni Dolores",id:"feat4"},
  {icon:"ri-database-2-line",title:"Nemo Enim",id:"feat5"},
  {icon:"ri-gradienter-line",title:"Eiusmod Tempor",id:"feat6"},
  {icon:"ri-file-list-3-line",title:"Midela Teren",id:"feat7"},
  {icon:"ri-price-tag-2-line",title:"Pira Neve",id:"feat8"},
  {icon:"ri-anchor-line",title:"Dirada Pack",id:"feat9"},
  {icon:"ri-disc-line",title:"Moton Ideal",id:"feat10"},
  {icon:"ri-base-station-line",title:"Verdo Park",id:"feat11"},
  {icon:"ri-fingerprint-line",title:"Flavor Nivelanda",id:"feat12"},
])

const [faqs,Addfaq] = useState([
  {quest:"Tempus quam pellentesque nec nam aliquam sem et tortor consequat?",ans:" Molestie a iaculis at erat pellentesque adipiscing commodo. Dignissim suspendisse in est ante in. Nunc vel risus commodo viverra maecenas accumsan. Sit amet nisl suscipit adipiscing bibendum est. Purus gravida quis blandit turpis cursus in",id:"1"},
  {quest:"Ac odio tempor orci dapibus. Aliquam eleifend mi in nulla?",ans:"Aperiam itaque sit optio et deleniti eos nihil quidem cumque. Voluptas dolorum accusantium sunt sit enim. Provident consequuntur quam aut reiciendis qui rerum dolorem sit odio. Repellat assumenda soluta sunt pariatur error doloribus fuga.",id:"2"},
  {quest:"Dolor sit amet consectetur adipiscing elit pellentesque habitant morbi?",ans:"Feugiat pretium nibh ipsum consequat. Tempus iaculis urna id volutpat lacus laoreet non curabitur gravida. Venenatis lectus magna fringilla urna porttitor rhoncus dolor purus non.",id:"3"},
  {quest:"Feugiat scelerisque varius morbi enim nunc faucibus a pellentesque?",ans:" Dolor sit amet consectetur adipiscing elit pellentesque habitant morbi. Id interdum velit laoreet id donec ultrices. Fringilla phasellus faucibus scelerisque eleifend donec pretium. Est pellentesque elit ullamcorper dignissim.",id:"4"},
  {quest:"Non consectetur a erat nam at lectus urna duis?",ans:"Eleifend mi in nulla posuere sollicitudin aliquam ultrices sagittis orci. Faucibus pulvinar elementum integer enim. Sem nulla pharetra diam sit amet nisl suscipit. Rutrum tellus pellentesque eu tincidunt. Lectus urna duis convallis convallis tellus.",id:"5"}
])

    return ( <div className="home">
        <header id="header" className="fixed-top d-flex align-items-center">
    <div className="container d-flex align-items-center justify-content-between">

      <div className="logo">
        <h1><Link to="/result">Fliegen</Link></h1>
        {/* <!-- Uncomment below if you prefer to use an image logo --> */}
        {/* <!-- <a href="index.html"><img src="assets/img/logo.png" alt="" className="img-fluid"></a>--> */}
      </div>

      <nav id="navbar" className="navbar navbar-expand-lg">
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
          <li><a className="nav-link scrollto" onClick={HideNavbar} href="#hero">Home</a></li>
          <li><a className="nav-link scrollto" onClick={HideNavbar} href="#about">About</a></li>
          <li><a className="nav-link scrollto" onClick={HideNavbar} href="#services">Services</a></li>
          <li><a className="nav-link scrollto" onClick={HideNavbar} href="#portfolio">Portfolio</a></li>
          <li><a className="nav-link scrollto" onClick={HideNavbar} href="#team">Team</a></li>
          {/* <li><a className="nav-link scrollto" onClick={HideNavbar} href="#pricing">Pricing</a></li> */}
          {/* <li className="dropdown"><a href="#"><span>Drop Down</span> <i className="bi bi-chevron-down"></i></a>
            <ul>
              <li><a href="#">Drop Down 1</a></li>
              <li className="dropdown"><a href="#"><span>Deep Drop Down</span> <i className="bi bi-chevron-right"></i></a>
                <ul>
                  <li><a href="#">Deep Drop Down 1</a></li>
                  <li><a href="#">Deep Drop Down 2</a></li>
                  <li><a href="#">Deep Drop Down 3</a></li>
                  <li><a href="#">Deep Drop Down 4</a></li>
                  <li><a href="#">Deep Drop Down 5</a></li>
                </ul>
              </li>
              <li><a href="#">Drop Down 2</a></li>
              <li><a href="#">Drop Down 3</a></li>
              <li><a href="#">Drop Down 4</a></li>
            </ul>
          </li> */}
          <li><a className="nav-link scrollto" onClick={HideNavbar} href="#contact">Contact</a></li>
          <li><a className="getstarted scrollto" onClick={HideNavbar} href="#about">Get Started</a></li>
        </ul>
        </div>
        <i className="bi bi-list navbar-toggler mobile-nav-toggle" id='mobileTogl' onClick={MobileToggle} type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation"></i>
      </nav>
      {/* <!-- .navbar --> */}

    </div>
  </header>
  {/* <!-- End Header --> */}

  {/* <!-- ======= Hero Section ======= --> */}
  <section id="hero" className="d-flex align-items-center">

    <div className="container">
      <div className="row">
        <div className="col-lg-6 pt-5 pt-lg-0 order-2 order-lg-1 d-flex flex-column justify-content-center">
          <h1 data-aos="fade-up">Grow your business with Fliegen</h1>
          {/* <h1>Coordinates</h1>
      <p>{status}</p>
      {lat && <p>Latitude: {lat}</p>}
      {lng && <p>Longitude: {lng}</p>} */}
          <h2 data-aos="fade-up" data-aos-delay="400">We are team of talented designers making websites with Bootstrap</h2>
          <form onSubmit={handleSubmit}>
          <div data-aos="fade-up" className='input-group' data-aos-delay="800">
            <input type="text" id="autocomplete" onChange={(e) => setLocation(e.target.value)} className="btn-get-started scrollto" onClick={HideNavbar} />
            <i onClick={getLocation} className="bi bi-geo-alt-fill"></i>
          </div>
          <button type="submit" id="homeSearchBtn" className="btn btn-dark">Search</button>
          </form>
        </div>
        <div id="details">

        </div>
        <div className="col-lg-6 order-1 order-lg-2 hero-img" data-aos="fade-left" data-aos-delay="200">
          {/* <img src={hero} className="img-fluid animated" alt="" /> */}
          <Map
        markers={[
          {
            position: [lat, lng],
            draggable: true,
            title: "Marker title",
            onClick: e => {
              console.log("clicked ");
            },
            onDragend: e => {
              console.log("dragged");
            }
          }
        ]}
      />
        </div>
      </div>
    </div>

  </section>
  {/* <!-- End Hero --> */}

  <main id="main">

    {/* <!-- ======= Clients Section ======= --> */}
    <section id="clients" className="clients clients">
      <div className="container">

        <div className="row">

          {company.map((comp) =>(
            <div className="col-lg-2 col-md-4 col-6" key={comp.id} >
            <img src={comp.image} id={comp.id} className="img-fluid" alt="" data-aos="zoom-in" />
            </div>
          ))}

        </div>

      </div>
    </section>
    {/* <!-- End Clients Section --> */}

    {/* <!-- ======= About Us Section ======= --> */}
    <section id="about" className="about">
      <div className="container">

        <div className="section-title" data-aos="fade-up">
          <h2>About Us</h2>
        </div>

        <div className="row content">
          <div className="col-lg-6" data-aos="fade-up" data-aos-delay="150">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
              magna aliqua.
            </p>
            <ul>
              <li><i className="ri-check-double-line"></i> Ullamco laboris nisi ut aliquip ex ea commodo consequat</li>
              <li><i className="ri-check-double-line"></i> Duis aute irure dolor in reprehenderit in voluptate velit</li>
              <li><i className="ri-check-double-line"></i> Ullamco laboris nisi ut aliquip ex ea commodo consequat</li>
            </ul>
          </div>
          <div className="col-lg-6 pt-4 pt-lg-0" data-aos="fade-up" data-aos-delay="300">
            <p>
              Ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
              velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
              culpa qui officia deserunt mollit anim id est laborum.
            </p>
            <a href="#" className="btn-learn-more">Learn More</a>
          </div>
        </div>

      </div>
    </section>
    {/* <!-- End About Us Section --> */}

    {/* <!-- ======= Counts Section ======= --> */}
    <section id="counts" className="counts">
      <div className="container">

        <div className="row">
          <div className="image col-xl-5 d-flex align-items-stretch justify-content-center justify-content-xl-start" data-aos="fade-right" data-aos-delay="150">
            <img src={count} alt="" className="img-fluid" />
          </div>

          <div className="col-xl-7 d-flex align-items-stretch pt-4 pt-xl-0" data-aos="fade-left" data-aos-delay="300">
            <div className="content d-flex flex-column justify-content-center">
              <div className="row">
                <div className="col-md-6 d-md-flex align-items-md-stretch">
                  <div className="count-box">
                    <i className="bi bi-emoji-smile"></i>
                    <span data-purecounter-start="0" data-purecounter-end="65" data-purecounter-duration="1" className="purecounter"></span>
                    <p><strong>Happy Clients</strong> consequuntur voluptas nostrum aliquid ipsam architecto ut.</p>
                  </div>
                </div>

                <div className="col-md-6 d-md-flex align-items-md-stretch">
                  <div className="count-box">
                    <i className="bi bi-journal-richtext"></i>
                    <span data-purecounter-start="0" data-purecounter-end="85" data-purecounter-duration="1" className="purecounter"></span>
                    <p><strong>Projects</strong> adipisci atque cum quia aspernatur totam laudantium et quia dere tan</p>
                  </div>
                </div>

                <div className="col-md-6 d-md-flex align-items-md-stretch">
                  <div className="count-box">
                    <i className="bi bi-clock"></i>
                    <span data-purecounter-start="0" data-purecounter-end="18" data-purecounter-duration="1" className="purecounter"></span>
                    <p><strong>Years of experience</strong> aut commodi quaerat modi aliquam nam ducimus aut voluptate non vel</p>
                  </div>
                </div>

                <div className="col-md-6 d-md-flex align-items-md-stretch">
                  <div className="count-box">
                    <i className="bi bi-award"></i>
                    <span data-purecounter-start="0" data-purecounter-end="15" data-purecounter-duration="1" className="purecounter"></span>
                    <p><strong>Awards</strong> rerum asperiores dolor alias quo reprehenderit eum et nemo pad der</p>
                  </div>
                </div>
              </div>
            </div>
            {/* <!-- End .content--> */}
          </div>
        </div>

      </div>
    </section>
    {/* <!-- End Counts Section --> */}

    {/* <!-- ======= Services Section ======= --> */}
    <section id="services" className="services">
      <div className="container">

        <div className="section-title" data-aos="fade-up">
          <h2>Services</h2>
          <p>Magnam dolores commodi suscipit eius consequatur ex aliquid fug</p>
        </div>

        <div className="row">
          {services.map((serv)=>(
            <div className="col-md-6 col-lg-3 d-flex align-items-stretch mb-5 mb-lg-0" key={serv.id}>
            <div className="icon-box" data-aos="fade-up" data-aos-delay="100">
              <div className="icon"><i className={serv.icon}></i></div>
              <h4 className="title"><a href="">{serv.title}</a></h4>
              <p className="description">{serv.description}</p>
            </div>
          </div>
          ))}

        </div>

      </div>
    </section>
    {/* <!-- End Services Section --> */}
    {/* <!-- ======= Features Section ======= --> */}
    <section id="features" className="features">
      <div className="container">

        <div className="section-title" data-aos="fade-up">
          <h2>Features</h2>
          <p>Necessitatibus eius consequatur ex aliquid fuga eum quidem</p>
        </div>

        <div className="row" data-aos="fade-up" data-aos-delay="300">
          {features.map((feat)=>(
            <div className="col-lg-3 col-md-4" key={feat.id}>
            <div className="icon-box">
              <i className={feat.icon} id={feat.id}></i>
              <h3><a href="">{feat.title}</a></h3>
            </div>
          </div>
          ))}
        </div>

      </div>
    </section>
    {/* <!-- End Features Section --> */}

    {/* <!-- ======= Testimonials Section ======= --> */}
    <section id="testimonials" className="testimonials section-bg">
      <div className="container">

        <div className="section-title" data-aos="fade-up">
          <h2>Testimonials</h2>
          <p>Magnam dolores commodi suscipit eum quidem consectetur velit</p>
        </div>

        <div id="carouselExampleFade" className="carousel slide carousel-fade" data-bs-ride="carousel">
  <div className="carousel-inner">
    <div className="carousel-item active">
    <div className="swiper-slide">
              <div className="testimonial-wrap">
                <div className="testimonial-item">
                  <img src={test1} className="testimonial-img" alt="" />
                  <h3>Saul Goodman</h3>
                  <h4>Ceo &amp; Founder</h4>
                  <p>
                    <i className="bx bxs-quote-alt-left quote-icon-left"></i>
                    Proin iaculis purus consequat sem cure digni ssim donec porttitora entum suscipit rhoncus. Accusantium quam, ultricies eget id, aliquam eget nibh et. Maecen aliquam, risus at semper.
                    <i className="bx bxs-quote-alt-right quote-icon-right"></i>
                  </p>
                </div>
              </div>
            </div>
    </div>
    <div className="carousel-item">
    <div className="swiper-slide">
              <div className="testimonial-wrap">
                <div className="testimonial-item">
                  <img src={test2} className="testimonial-img" alt="" />
                  <h3>Sara Wilsson</h3>
                  <h4>Designer</h4>
                  <p>
                    <i className="bx bxs-quote-alt-left quote-icon-left"></i>
                    Export tempor illum tamen malis malis eram quae irure esse labore quem cillum quid cillum eram malis quorum velit fore eram velit sunt aliqua noster fugiat irure amet legam anim culpa.
                    <i className="bx bxs-quote-alt-right quote-icon-right"></i>
                  </p>
                </div>
              </div>
            </div>
    </div>
    <div className="carousel-item">
    <div className="swiper-slide">
              <div className="testimonial-wrap">
                <div className="testimonial-item">
                  <img src={test3} className="testimonial-img" alt="" />
                  <h3>Jena Karlis</h3>
                  <h4>Store Owner</h4>
                  <p>
                    <i className="bx bxs-quote-alt-left quote-icon-left"></i>
                    Enim nisi quem export duis labore cillum quae magna enim sint quorum nulla quem veniam duis minim tempor labore quem eram duis noster aute amet eram fore quis sint minim.
                    <i className="bx bxs-quote-alt-right quote-icon-right"></i>
                  </p>
                </div>
              </div>
            </div>
    </div>
  </div>
  <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Previous</span>
  </button>
  <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Next</span>
  </button>
</div>

        {/* <div className="testimonials-slider swiper" data-aos="fade-up" data-aos-delay="100">
          <div className="swiper-wrapper">

            <div className="swiper-slide">
              <div className="testimonial-wrap">
                <div className="testimonial-item">
                  <img src={test1} className="testimonial-img" alt="" />
                  <h3>Saul Goodman</h3>
                  <h4>Ceo &amp; Founder</h4>
                  <p>
                    <i className="bx bxs-quote-alt-left quote-icon-left"></i>
                    Proin iaculis purus consequat sem cure digni ssim donec porttitora entum suscipit rhoncus. Accusantium quam, ultricies eget id, aliquam eget nibh et. Maecen aliquam, risus at semper.
                    <i className="bx bxs-quote-alt-right quote-icon-right"></i>
                  </p>
                </div>
              </div>
            </div>
         

            <div className="swiper-slide">
              <div className="testimonial-wrap">
                <div className="testimonial-item">
                  <img src={test2} className="testimonial-img" alt="" />
                  <h3>Sara Wilsson</h3>
                  <h4>Designer</h4>
                  <p>
                    <i className="bx bxs-quote-alt-left quote-icon-left"></i>
                    Export tempor illum tamen malis malis eram quae irure esse labore quem cillum quid cillum eram malis quorum velit fore eram velit sunt aliqua noster fugiat irure amet legam anim culpa.
                    <i className="bx bxs-quote-alt-right quote-icon-right"></i>
                  </p>
                </div>
              </div>
            </div>
        

            <div className="swiper-slide">
              <div className="testimonial-wrap">
                <div className="testimonial-item">
                  <img src={test3} className="testimonial-img" alt="" />
                  <h3>Jena Karlis</h3>
                  <h4>Store Owner</h4>
                  <p>
                    <i className="bx bxs-quote-alt-left quote-icon-left"></i>
                    Enim nisi quem export duis labore cillum quae magna enim sint quorum nulla quem veniam duis minim tempor labore quem eram duis noster aute amet eram fore quis sint minim.
                    <i className="bx bxs-quote-alt-right quote-icon-right"></i>
                  </p>
                </div>
              </div>
            </div>
         

            <div className="swiper-slide">
              <div className="testimonial-wrap">
                <div className="testimonial-item">
                  <img src={test4} className="testimonial-img" alt="" />
                  <h3>Matt Brandon</h3>
                  <h4>Freelancer</h4>
                  <p>
                    <i className="bx bxs-quote-alt-left quote-icon-left"></i>
                    Fugiat enim eram quae cillum dolore dolor amet nulla culpa multos export minim fugiat minim velit minim dolor enim duis veniam ipsum anim magna sunt elit fore quem dolore labore illum veniam.
                    <i className="bx bxs-quote-alt-right quote-icon-right"></i>
                  </p>
                </div>
              </div>
            </div>
         

            <div className="swiper-slide">
              <div className="testimonial-wrap">
                <div className="testimonial-item">
                  <img src={test5} className="testimonial-img" alt="" />
                  <h3>John Larson</h3>
                  <h4>Entrepreneur</h4>
                  <p>
                    <i className="bx bxs-quote-alt-left quote-icon-left"></i>
                    Quis quorum aliqua sint quem legam fore sunt eram irure aliqua veniam tempor noster veniam enim culpa labore duis sunt culpa nulla illum cillum fugiat legam esse veniam culpa fore nisi cillum quid.
                    <i className="bx bxs-quote-alt-right quote-icon-right"></i>
                  </p>
                </div>
              </div>
            </div>
    

          </div>
          <div className="swiper-pagination"></div>
        </div> */}

      </div>
    </section>
    {/* <!-- End Testimonials Section --> */}

    {/* <!-- ======= Team Section ======= --> */}
    <section id="team" className="team section-bg">
      <div className="container">

        <div className="section-title" data-aos="fade-up">
          <h2>Team</h2>
          <p>Necessitatibus eius consequatur ex aliquid fuga eum quidem</p>
        </div>

        <div className="row">

          <div className="col-lg-3 col-md-6 d-flex align-items-stretch">
            <div className="member" data-aos="fade-up" data-aos-delay="100">
              <div className="member-img">
                <img src={team1} className="img-fluid" alt="" />
                <div className="social">
                  <a href=""><i className="bi bi-twitter"></i></a>
                  <a href=""><i className="bi bi-facebook"></i></a>
                  <a href=""><i className="bi bi-instagram"></i></a>
                  <a href=""><i className="bi bi-linkedin"></i></a>
                </div>
              </div>
              <div className="member-info">
                <h4>Walter White</h4>
                <span>Chief Executive Officer</span>
              </div>
            </div>
          </div>

          <div className="col-lg-3 col-md-6 d-flex align-items-stretch">
            <div className="member" data-aos="fade-up" data-aos-delay="200">
              <div className="member-img">
                <img src={team2} className="img-fluid" alt="" />
                <div className="social">
                  <a href=""><i className="bi bi-twitter"></i></a>
                  <a href=""><i className="bi bi-facebook"></i></a>
                  <a href=""><i className="bi bi-instagram"></i></a>
                  <a href=""><i className="bi bi-linkedin"></i></a>
                </div>
              </div>
              <div className="member-info">
                <h4>Sarah Jhonson</h4>
                <span>Product Manager</span>
              </div>
            </div>
          </div>

          <div className="col-lg-3 col-md-6 d-flex align-items-stretch">
            <div className="member" data-aos="fade-up" data-aos-delay="300">
              <div className="member-img">
                <img src={team3} className="img-fluid" alt="" />
                <div className="social">
                  <a href=""><i className="bi bi-twitter"></i></a>
                  <a href=""><i className="bi bi-facebook"></i></a>
                  <a href=""><i className="bi bi-instagram"></i></a>
                  <a href=""><i className="bi bi-linkedin"></i></a>
                </div>
              </div>
              <div className="member-info">
                <h4>William Anderson</h4>
                <span>CTO</span>
              </div>
            </div>
          </div>

          <div className="col-lg-3 col-md-6 d-flex align-items-stretch">
            <div className="member" data-aos="fade-up" data-aos-delay="400">
              <div className="member-img">
                <img src={team4} className="img-fluid" alt="" />
                <div className="social">
                  <a href=""><i className="bi bi-twitter"></i></a>
                  <a href=""><i className="bi bi-facebook"></i></a>
                  <a href=""><i className="bi bi-instagram"></i></a>
                  <a href=""><i className="bi bi-linkedin"></i></a>
                </div>
              </div>
              <div className="member-info">
                <h4>Amanda Jepson</h4>
                <span>Accountant</span>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
    {/* <!-- End Team Section --> */}

    {/* <!-- ======= F.A.Q Section ======= --> */}
    <section id="faq" className="faq">
      <div className="container">

        <div className="section-title" data-aos="fade-up">
          <h2>Frequently Asked Questions</h2>
        </div>

        {faqs.map((q)=>(
          <div className="row faq-item d-flex align-items-stretch" data-aos="fade-up" data-aos-delay="100" key={q.id}>
          <div className="col-lg-5">
            <i className="ri-question-line"></i>
            <h4>{q.quest}</h4>
          </div>
          <div className="col-lg-7">
            <p>
              {q.ans}
            </p>
          </div>
        </div>
        ))}
          
        {/* <!-- End F.A.Q Item--> */}

      </div>
    </section>
    {/* <!-- End F.A.Q Section --> */}

    {/* <!-- ======= Contact Section ======= --> */}
    <section id="contact" className="contact">
      <div className="container">

        <div className="section-title" data-aos="fade-up">
          <h2>Contact Us</h2>
        </div>

        <div className="row">

          <div className="col-lg-4 col-md-6" data-aos="fade-up" data-aos-delay="100">
            <div className="contact-about">
              <h3>Fliegen</h3>
              <p>Cras fermentum odio eu feugiat. Justo eget magna fermentum iaculis eu non diam phasellus. Scelerisque felis imperdiet proin fermentum leo. Amet volutpat consequat mauris nunc congue.</p>
              <div className="social-links">
                <a href="#" className="twitter"><i className="bi bi-twitter"></i></a>
                <a href="#" className="facebook"><i className="bi bi-facebook"></i></a>
                <a href="#" className="instagram"><i className="bi bi-instagram"></i></a>
                <a href="#" className="linkedin"><i className="bi bi-linkedin"></i></a>
              </div>
            </div>
          </div>

          <div className="col-lg-3 col-md-6 mt-4 mt-md-0" data-aos="fade-up" data-aos-delay="200">
            <div className="info">
              <div>
                <i className="ri-map-pin-line"></i>
                <p>A108 Adam Street<br />New York, NY 535022</p>
              </div>

              <div>
                <i className="ri-mail-send-line"></i>
                <p>info@example.com</p>
              </div>

              <div>
                <i className="ri-phone-line"></i>
                <p>+1 5589 55488 55s</p>
              </div>

            </div>
          </div>

          <div className="col-lg-5 col-md-12" data-aos="fade-up" data-aos-delay="300">
            <form action="forms/contact.php" method="post" role="form" className="php-email-form">
              <div className="form-group">
                <input type="text" name="name" className="form-control" id="name" placeholder="Your Name" required />
              </div>
              <div className="form-group">
                <input type="email" className="form-control" name="email" id="email" placeholder="Your Email" required />
              </div>
              <div className="form-group">
                <input type="text" className="form-control" name="subject" id="subject" placeholder="Subject" required />
              </div>
              <div className="form-group">
                <textarea className="form-control" name="message" rows="5" placeholder="Message" required></textarea>
              </div>
              <div className="my-3">
                <div className="loading">Loading</div>
                <div className="error-message"></div>
                <div className="sent-message">Your message has been sent. Thank you!</div>
              </div>
              <div className="text-center"><button type="submit">Send Message</button></div>
            </form>
          </div>

        </div>

      </div>
    </section>
    {/* <!-- End Contact Section --> */}

  </main>
  {/* <!-- End #main --> */}

  {/* <!-- ======= Footer ======= --> */}
  <footer id="footer">
    <div className="container">
      <div className="row d-flex align-items-center">
        <div className="col-lg-6 text-lg-left text-center">
          <div className="copyright">
            &copy; Copyright <strong>Fliegen</strong>. All Rights Reserved
          </div>
          <div className="credits">
            {/* <!-- All the links in the footer should remain intact. -->
            <!-- You can delete the links only if you purchased the pro version. -->
            <!-- Licensing information: https://bootstrapmade.com/license/ -->
            <!-- Purchase the pro version with working PHP/AJAX contact form: https://bootstrapmade.com/Fliegen-free-bootstrap-template/ -->
            Designed by <a href="https://bootstrapmade.com/">BootstrapMade</a> */}
          </div>
        </div>
        <div className="col-lg-6">
          <nav className="footer-links text-lg-right text-center pt-2 pt-lg-0">
            <a href="#intro" className="scrollto" onClick={HideNavbar}>Home</a>
            <a href="#about" className="scrollto" onClick={HideNavbar}>About</a>
            <a href="#">Privacy Policy</a>
            <a href="#">Terms of Use</a>
          </nav>
        </div>
      </div>
    </div>
  </footer>
  <a href="#" className="back-to-top d-flex align-items-center justify-content-center"><i className="bi bi-arrow-up-short"></i></a>
  </div>
     );
}
 
export default Home;