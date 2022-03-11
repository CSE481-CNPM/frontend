import React from 'react';

import './Cart.css';

function Cart({ movieList }) {
  return (
    <div className="Cart-container">
      <h3>Các vé đã đặt: </h3>
      <div className="Cart">
        {movieList.map((movie) => (
          <div className="ticket-item">
            <div>
              <p>
                Tên Phim: <span>{movie.nameFilm}</span>
              </p>
              <p>
                Ngày chiếu:{' '}
                <span>
                  {new Date(movie.movieDay).toLocaleString().split(',')[0]}
                </span>
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
                Trạng thái: <span className="wait">Chờ xác nhận</span>
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Cart;
