import React from 'react'
import "./navbar.css";
import { Link } from 'react-router-dom';
const Navbar = () => {
   
    return (
        <>
        <div className="btn-group">
            <button type="button" className="btn  dropdown-toggle " data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
             Category
            </button>
            <div className="dropdown-menu ">
              <Link className="dropdown-item" to="/movies/top_rated">TopRated</Link>
              <Link className="dropdown-item" to="/movies/upcoming">UpComing</Link>
              <Link className="dropdown-item" to="/movies/popular">Popular</Link>
              
            </div>
        </div>
        </>
    )
}

export default Navbar;