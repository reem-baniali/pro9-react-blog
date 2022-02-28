import React  from "react";
import './nav.css'
import { Link } from "react-router-dom";
function Nav(){

    return(


       <nav className="nav">
         <div className="left"><img className="logo" src="../images/logo.png" alt="logo" /></div>
         <div className="center">
           <ul>
           <ul className="center">
             <li className=".nav-links"><Link to="/"> Home </Link></li>
             <li className=".nav-links"><Link to="/Create"> WriteBlog</Link></li>
             {/* <li className=".nav-links"><Link to="/About"> About </Link></li> */}
           </ul>
           </ul>
         </div>
         <div className="right">
           <ul className="top_icons">
             <li className="nav_icon" ><a href="facbook.com" ><i class="fa-brands fa-facebook-square"></i></a></li>
             <li className="nav_icon" ><a href="instagram.com"><i class="fa-brands fa-instagram-square"></i></a></li>
             <li className="nav_icon" ><a href="twitter.com"><i class="fa-brands fa-twitter-square"></i></a></li>
           </ul>
           </div>

           {/* <h3 className="logo">Logo</h3>
          */}

       </nav>

    )
}

export default Nav;