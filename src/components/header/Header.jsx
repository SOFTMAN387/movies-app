import React from 'react'
import { Link } from 'react-router-dom';
import "./header.css";
import { useSelector ,useDispatch} from 'react-redux';
import { actions } from '../../redux/Store';
const Header = () => {
  const dispatch=useDispatch();
 const loginData=useSelector((state)=>state.currentUser) ;
//  console.log(loginData.length);
const singOut=()=>{
dispatch(actions.logoutUser());
}
  return (
   <>
       <div className="topbar">
        <div className="topContainer">
          <Link to="/" className='top-logo'>SoftFlix</Link>
          <div className='log-reg-btn'>{
            loginData.length===1?(<>
              <span>Hello,{loginData[0].username}</span>
              <i className='fa fa-user text-dark mr-2'></i>
              <button className="topButton" onClick={singOut}>Logout</button>
             
            </>):(
              <>
              <Link to="/register"><button className="topButton">Register</button></Link>
              <Link to="/login"> <button className="topButton">Login</button></Link>
              </>
            )
          }
         
          {/* <Link to="/login"> <i className='fa fa-user text-dark mr-2'></i></Link> */}
         
          </div>
         
        </div>
      
      </div>
   </>
  )
}

export default Header;