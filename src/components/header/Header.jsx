import React from 'react'
import { Link } from 'react-router-dom';
import "./header.css";
const Header = () => {
  return (
   <>
       <div className="topbar">
        <div className="topContainer">
          <Link to="/" className='top-logo'>SoftFlix</Link>
          <div className='log-reg-btn'>
          <Link to="/register"><button className="topButton">Register</button></Link>
          <Link to="/login"> <button className="topButton">Login</button></Link>
          {/* <Link to="/login"> <i className='fa fa-user text-dark mr-2'></i></Link> */}
           
          </div>

        </div>

      </div>
   </>
  )
}

export default Header;