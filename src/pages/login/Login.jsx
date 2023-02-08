import React,{useState} from 'react'
import "./login.css";
import { Link,useNavigate } from 'react-router-dom';
import Header from '../../components/header/Header';
import Navbar from '../../components/navbar/Navbar';
import { useDispatch } from 'react-redux';
import { actions } from '../../redux/Store';

const Login = () => {
    const dispatch=useDispatch();
    const navigate=useNavigate();
    const [err,setErr]=useState(false);
    const [loginData,setLoginData]=useState({
        email:'',
        password:''
    });
    const handleChange=(e)=>{
        setLoginData({...loginData,[e.target.name]:e.target.value});
    }

    const handleClick=()=>{
        const data= JSON.parse(localStorage.getItem("userData3"));
       
        // console.log(data);
      
        if(data.email===loginData.email && data.password===loginData.password){
            dispatch(actions.loginUser([data]));
            alert("login Successful..");
            navigate("/");
        }
        else{
            setErr(true);
            navigate("/login");
        }
    }
  return (
   <>
   <Header />
   <Navbar />
    <div className="login-div">
            <div className="loginContainer">
                <input
                    type="email"
                    placeholder="username"
                    name="email"
                    onChange={handleChange}
                    className="loginInput"
                  
                />
                
                <input
                    type="password"
                    placeholder="password"
                    name="password"
                    onChange={handleChange}
                    className="loginInput"
                   
                />
                <button
                //  disabled={loading} 
                onClick={handleClick}
                 className="loginButton">
                    Login
                </button>
                {/* {error && <span>{error.message}</span>} */}
                {err===true ? <span style={{ color: "red" }}>Wrong Credentials !!...</span> : <span></span>}
              
                <div>
                <br></br>
                <hr/>
                <h5 className='account-logreg'>Don't have an account ?.</h5>
                <br/>
                <Link to="/register">Register here !.</Link>
                </div>
            </div>
        </div>
   </>
  )
}

export default Login;