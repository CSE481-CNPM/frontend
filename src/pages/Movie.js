import React from 'react';

import Navbar from '../shared/components/Navbar';
import Footer from '../shared/components/Footer';
import FilmDetail from '../components/FilmDetail';
import MovieIsPlay from '../components/MovieIsPlay';

import './Movie.css';

const Movie = () => {
  return (
    <React.Fragment>
      <div className="movie-wrapper">
        <Navbar />
        <FilmDetail />
        <MovieIsPlay />
        <Footer />
      </div>
    </React.Fragment>
  );
};

export default Movie;
