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
                 <li>
                     <select>
                         <option >Categories</option>
                         <option value="sofa">Popular</option>
                         <option value="chair">TopRated</option>
                         <option value="bed">Upcoming</option>
                         <option value="all">All--</option>
                     </select>
                     </li>

                 <li><Link to="/movie/top_rated">TopRated</Link></li>
                 <li><Link to="/movie/upcoming">Upcoming</Link></li>

             </ul>

         </div>
     </nav>
  </>
  )
}

export default Navbar;