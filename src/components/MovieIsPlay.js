import React from 'react';
import CardFilm from './CardFilm';
import Slider from 'react-slick';

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './MovieIsPlay.css';

function MovieIsPlay() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 800,
    slidesToShow: 5,
    slidesToScroll: 1,
  };
  return (
    <div className='MoviePlay'>
      <h2>Phim đang chiếu</h2>
      <Slider {...settings}>
        {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((item, index) => {
          return <CardFilm />;
        })}
      </Slider>
    </div>
  );
}

export default MovieIsPlay;
