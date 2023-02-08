import React, { useEffect,useState } from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import { Link } from 'react-router-dom';
import "./slidermovie.css";
const PopularMovie = () => {
    const [popularMovies,setPopularMovies]=useState([]);
         useEffect(() => {
    // const popular_mov = async () => {
    //   const res = await axios.get("https://api.themoviedb.org/3/movie/popular?api_key=4e44d9029b1270a757cddc766a1bcb63&language=en-US");
    //    console.log(res);
    //   // const popular = await res.json();
    //   // console.log(popular);
    // }
    // popular_mov();
    fetch("https://api.themoviedb.org/3/movie/popular?api_key=4e44d9029b1270a757cddc766a1bcb63&language=en-US")
    .then(data=>data.json())
    .then(res=>setPopularMovies(res.results))
    .catch((error)=>console.log(`Error msg is ${error}`));
  }, []);
  return (
   <>
 <div className='popular'>
 <Carousel
            showThumbs={false}
            autoPlay={true}
            transitionTime={3}
            infiniteLoop={true}
            showStatus={false}>
          
            {
                popularMovies.map((movie,index)=>{
                    return(<>
                     <Link key={index} className="slider-link" style={{textDecoration:"none",color:"white"}} to={`/movie/${movie.id}`}>
                       <div className='posterImage'>
                        <img src={`https://image.tmdb.org/t/p/original${movie && movie.backdrop_path}`} alt="Poster_Img"/>
                       </div>
                       <div className='posterImage__overlay'>
                            <div className='posterImage__title'>{movie ?movie.original_title:""}</div>
                            <div className='posterImage__runtime'>
                                {movie?movie.release_dat:""}
                                <span className='posterImage__rating'>
                                    {movie ?movie.vote_average:""}
                                    <i className='fas fa-star' />
                                </span>
                            </div>
                        <div className='posterImage__description'>
                        {movie?movie.overview:""}

                        </div>
                       </div>
                       </Link>
                    </>)
                })
               
            }
       
</Carousel>

 </div>

   </>
  )
}

export default PopularMovie;