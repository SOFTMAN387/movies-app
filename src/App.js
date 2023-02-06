import "./App.css";
import {Routes,Route} from "react-router-dom";
import Home from "./components/home/Home";
import MovieList from "./components/movielist/MovieList";
import MovieDetails from "./components/moviedetails/MovieDetails";
import Login from "./pages/login/Login";
import Register from "./pages/register/Register";
import AddFav from "./pages/addfav/AddToFav";
import { useSelector } from "react-redux";

function App() {
  const userData=useSelector((state)=>state.currentUser)||[];
 // console.log(movieData);
  return (
    <>
     <div className="App">
  
      <Routes>
        <Route exact path="/" element={<Home/>} />
        <Route exact path="/movies/:category" element={userData && userData.length===1?<MovieList />:<Login />} />
        <Route exact path="/movie/:id" element={ userData && userData.length===1?<MovieDetails />:<Login />} />
        <Route exact path="/login" element={<Login />} />
        <Route exact path="/register" element={<Register />} />
        <Route exact path="/favourite" element={userData && userData.length===1?<AddFav />:<Login />} />
        <Route exact path="/*" element={<h1>Error Page</h1>} />
      </Routes>
       
    </div>
    </>
   
  );
}

export default App;
