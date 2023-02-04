import React from 'react'
import "./navbar.css";
import { Link } from 'react-router-dom';
const Navbar = () => {
  return (
  <>
      <nav className="navbar">
         
         <div className="navbar-container container">
        
             <input type="checkbox" className='chk-box' />
             <div className="hamburger-lines">
                 <span className="line line1"></span>
                 <span className="line line2"></span>
                 <span className="line line3"></span>
             </div>
             <ul className="menu-items">
                 <li><Link to="/">Home</Link></li>
                 <li><Link to="/user/order">Your Favourite</Link></li>
                 <li><Link to="/movies/top_rated">TopRated</Link></li>
                 <li><Link to="/movies/upcoming">Upcoming</Link></li>

             </ul>

         </div>
     </nav>
  </>
  )
}

export default Navbar;