import React, { useContext } from 'react';
import { AuthContext } from '../shared/context/auth-context';

import './Cart.css';

const CartItem = ({
  setChosenTicket,
  movie,
  setIsLoading,
  setError,
  setModalIsShown,
}) => {
  const cancelHandler = (movieId) => {
    setChosenTicket(movieId);
    setModalIsShown(true);
  };

  return (
    <div className="ticket-item">
      <div>
        <p>
          Tên Phim: <span>{movie.nameFilm}</span>
        </p>
        <p>
          Ngày chiếu:{' '}
          <span>{new Date(movie.movieDay).toLocaleString().split(',')[0]}</span>
        </p>
      </div>
      <div>
        <p>
          Chỗ ngồi: <span>{movie.seat}</span>
        </p>
        <p>
          Giá: <span>50.000</span>
        </p>
      </div>
      <div>
        <p>
          Suất chiếu: <span>{movie.showTime}</span>
        </p>
        <p>
          Rạp: <span>CGV AEON Hà Đông</span>
        </p>
      </div>
      <div>
        <p>
          Trạng thái:{' '}
          {movie.status === 'booked' ? (
            <span className="wait">Đã đặt</span>
          ) : (
            <span className="wait">Đã hủy</span>
          )}
        </p>
      </div>
      <div>
        {movie.status === 'booked' && (
          <button
            className="cancel-btn"
            onClick={() => cancelHandler(movie._id)}
          >
            Hủy vé
          </button>
        )}
      </div>
    </div>
  );
};

export default CartItem;