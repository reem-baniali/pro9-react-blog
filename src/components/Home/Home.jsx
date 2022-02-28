import React from 'react';
import ReactDOM from 'react-dom';
import Nav from '../navbar/nav';
import Main from '../mainImage/Main';
import Blog from '../blogs/Blog';
// import './Home.css'
import Footer from '../footer/Footer';

export default function Home() {
  return (
    <div class="home-container">
   <Nav/>
   <Main/>
   <Blog/>
   <Footer/>
    
      {/* <!-- <button class="btn-div">go somewhere</button> --> */}
    {/* </div> */}
  
  </div>
  );
}