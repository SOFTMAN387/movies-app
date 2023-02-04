import React,{useEffect,useState} from 'react';
import MovieCard from '../moviecard/MovieCard';
import "./movielist.css";
import { useParams } from 'react-router-dom';
//import axios from "axios";
const MovieList = () => {
  const [movieList,setMovieList]=useState([]);
 // console.log(movieList);
  const category =useParams().category;

  useEffect(()=>{
    getData();
  },[]);

  useEffect(()=>{
  
    getData();
  },[category]);

    
  const getData=()=>{

    fetch(`https://api.themoviedb.org/3/movie/${category ? category : "popular"}?api_key=4e44d9029b1270a757cddc766a1bcb63&language=en-US`)
        .then(res => res.json())
        .then(data => setMovieList(data.results))
  }

  return (
    <>
      <div className='movie_list'>
        <h2 className='list_title'>{(category?category:"POPULAR").toUpperCase()}</h2><br />
        <div className='list_cards'>
          {movieList.map((movie,index)=>{
            return(<>
              <MovieCard movie={movie}/>
             
            </>)
          })}
        </div>
      </div><br></br>
      <hr />
    </>
  )
}

export default MovieList;