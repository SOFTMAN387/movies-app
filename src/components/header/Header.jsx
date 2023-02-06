import React from 'react'
import { Link } from 'react-router-dom';
import "./header.css";
import { useSelector, useDispatch } from 'react-redux';
import { actions } from '../../redux/Store';
const Header = () => {
  const dispatch = useDispatch();
  const loginData = useSelector((state) => state.currentUser) || [];
  const favLen = useSelector((state) => state.favourite.length);

  //console.log(favLen);
  //  console.log(loginData.length);
  const singOut = () => {
    dispatch(actions.logoutUser());
  }
  return (
    <>
      <div className="topbar">
        <div className="topContainer">
          <Link to="/" className='top-logo'>SoftFlix</Link>
          <div className='log-reg-btn'>{
            loginData && loginData.length === 1 ? (<>
              <span>Hello,{loginData[0].username}</span>
              <button className="topButton" onClick={singOut}>Logout</button>

            </>) : (
              <>
                <Link to="/register"><button className="topButton">Register</button></Link>
                <Link to="/login"> <button className="topButton">Login</button></Link>
              </>
            )
          }

            <Link to="/favourite">
              <button className="cart-btn">

                <i className="fa fa-light fa-heart cart-val-btn" ></i>
                <span className="cart-val">{favLen}</span>
              </button>
            </Link>
            {/* <Link to="/favourite" className='fav-icon'><i className=" fa fa-heart-circle-plus"></i></Link> */}

          </div>

        </div>

      </div>
    </>
  )
}

export default Header;