import React from 'react';
import  './footer.css';

export default function Footer() {
  return (
    <div className='footer-container '>
        <div className='left'>
        <img className='logoFooter' src="../images/logo.png" alt="logo" />
        </div>
            <div className='center'><br/>copy rights reem bani ali</div>
        <div className='right'>
             <ul>
             <li className="nav_icon" ><a href="facbook.com" ><i class="fa-brands fa-facebook-square"></i></a></li>
             <li className="nav_icon" ><a href="instagram.com"><i class="fa-brands fa-instagram-square"></i></a></li>
             <li className="nav_icon" ><a href="twitter.com"><i class="fa-brands fa-twitter-square"></i></a></li>
            </ul>
            </div>

    </div>
  )
}
