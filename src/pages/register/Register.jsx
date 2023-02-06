import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import "../login/login.css";
import Header from '../../components/header/Header';
import Navbar from '../../components/navbar/Navbar';
const Register = () => {
    const navigate = useNavigate();
    const [err, setErr] = useState();
    const [regData, setRegData] = useState({
        username: "",
        mobile: "",
        email: "",
        password: ""
    });

    const handleChange = (e) => {
        setRegData({ ...regData, [e.target.name]: e.target.value });
    }
    const handleClick = () => {
        const { username, mobile, email, password } = regData;
        if (username === "" || mobile === "" || email === "" || password === "") {
            setErr(true);
            navigate("/register")
        } else {

            localStorage.setItem("userData3", JSON.stringify(regData));
            alert("Registration Succefull.!")
            navigate("/login");

        }



        //    const data= JSON.parse(localStorage.getItem("userData2"))
        //    console.log(data);
    }
    //console.log(regData);
    //   console.log(userData);

    return (
        <>
            <Header />
            <Navbar />
            <div className="login-div">
                <div className="loginContainer">
                    <input
                        type="text"
                        placeholder="username"
                        name="username"
                        onChange={handleChange}
                        className="loginInput"
                        required={true}
                    /> <input
                        type="text"
                        placeholder="Mobile"
                        name="mobile"
                        onChange={handleChange}
                        className="loginInput"
                    /> <input
                        type="email"
                        placeholder="email"
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
                        Register
                    </button>
                    {/* {error && <span>{error.message}</span>} */}
                    {err ? <span style={{ color: "red" }}>Every Fields Required !!...</span> : <span></span>}
                    <div>
                        <br></br>
                        <hr />
                        <h5> have an account ?.</h5>
                        <br />
                        <Link to="/login">SignIn here !.</Link>
                    </div>
                </div>
            </div>

        </>
    )
}

export default Register;