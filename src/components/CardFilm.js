import React from 'react';

import './CardFilm.css';

function CardFilm() {
  return (
    <div className='card-film'>
      <div className='card-film-image'>
        <img
          src='https://upload.wikimedia.org/wikipedia/vi/4/42/%C3%81p_ph%C3%ADch_phim_M%E1%BA%AFt_bi%E1%BA%BFc.jpg'
          alt=''
        />
        <a href='#'>Chi tiết</a>
      </div>
      <div className='card-film-content'>
        <h3>Mắt biếc okokokokokokokokokoko</h3>
        <p>Tình cảm , học đường,Tình cảm , học đường,Tình cảm , học đường</p>
      </div>
    </div>
  );
}

export default CardFilm;
