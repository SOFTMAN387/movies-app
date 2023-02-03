import "./App.css";
import {Routes,Route} from "react-router-dom";
import Home from "./components/home/Home";
function App() {
  return (
    <>
     <div className="App">
     <Home />
      <Routes>
        <Route exact path="/" element={<h1>helo</h1>} />
        <Route exact path="/movie/:id" element={<h1>helo</h1>} />
        <Route exact path="/movie/:type" element={<h1>helo</h1>} />
        <Route exact path="/movie/:upcoming" element={<h1>helo</h1>} />
        <Route exact path="/*" element={<h1>Error Page</h1>} />
      </Routes>
       
    </div>
    </>
   
  );
}

export default App;
