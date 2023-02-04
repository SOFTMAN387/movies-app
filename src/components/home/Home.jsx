import React from 'react';
import Header from '../header/Header';
import Navbar from '../navbar/Navbar';
import SliderMovie from '../slider/SliderMovie';
import MovieList from '../movielist/MovieList';
//import axios from 'axios';


const Home = () => {

  return (
    <>
      <Header />
      <Navbar />
      <SliderMovie />
      <MovieList/>
    </>
  )
}

export default Home;