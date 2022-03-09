import React from 'react';

import Navbar from '../shared/components/Navbar';
import Footer from '../shared/components/Footer';
import Carousel from '../components/Carousel';
import MovieIsPlay from '../components/MovieIsPlay';

import './Home.css';

const Home = () => {
  return (
    <React.Fragment>
      <div className="home-wrapper">
        <Navbar />
        <Carousel />
        <MovieIsPlay />
        <Footer />
      </div>
    </React.Fragment>
  );
};

export default Home;
