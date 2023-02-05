import "./App.css";
import {Routes,Route} from "react-router-dom";
import Home from "./components/home/Home";
import MovieList from "./components/movielist/MovieList";
import MovieDetails from "./components/moviedetails/MovieDetails";

function App() {
  return (
    <>
     <div className="App">
  
      <Routes>
        <Route exact path="/" element={<Home/>} />
        <Route exact path="/movies/:category" element={<MovieList />} />
        <Route exact path="/movie/:id" element={<MovieDetails />} />
        <Route exact path="/*" element={<h1>Error Page</h1>} />
      </Routes>
       
    </div>
    </>
   
  );
}

export default App;
