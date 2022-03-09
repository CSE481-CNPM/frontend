import React from 'react';

import Navbar from '../shared/components/Navbar';
import Footer from '../shared/components/Footer';
import MovieIsPlay from '../components/MovieIsPlay';

import './Library.css';

const Library = () => {
  return (
    <React.Fragment>
      <div className="library-wrapper">
        <Navbar />
        <MovieIsPlay />
        <Footer />
      </div>
    </React.Fragment>
  );
};

export default Library;
