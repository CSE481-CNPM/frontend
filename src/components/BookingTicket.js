import React, { useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import Screen from './Screen';
import './BookingTicket.css';

import { AuthContext } from '../shared/context/auth-context';
import axios from 'axios';

function BookingTicket({ movie, setIsLoading, setError }) {
  const auth = useContext(AuthContext);

  const navigate = useNavigate();
  const [province, setProvince] = useState('Hà Nội');
  const [showMenuProvince, setShowMenuProvince] = useState(false);
  const [statusDay, setStatusDay] = useState(0);
  const [chooseTime, setChooseTime] = useState({
    idCinema: '',
    time: '',
  });
  const Day = [
    'Chủ nhật',
    'Thứ hai',
    'Thứ ba',
    'Thứ tư',
    'Thứ năm',
    'Thứ sáu',
    'Thứ bảy',
  ];
  const apiCinema = [
    {
      id: '1',
      name: 'CCV AEON Hà Đông',
      address: 'Tầng 3&4 - TTTM AEON MALL Hà Đông, Dương Nội, Hà Đông, Hà Nội',
      showTime: ['17:00-19:00', '20:00-22:00', '7:00-9:00'],
    },
    {
      id: '2',
      name: 'CCV AEON Long Biên',
      address:
        'Tầng 4 - TTTM AEON MALL Long Biên, 27 Cổ Linh, Long Biên, Hà Nội',
      showTime: ['17:00-19:00', '20:00-22:00', '7:00-9:00'],
    },
    {
      id: '3',
      name: 'CCV Hồ Gươm Plaza',
      address: 'Tầng 3 - Hồ Gươm Plaza, 110 Trần Phú, Mỗ Lao, Hà Đông, Hà Nội',
      showTime: ['17:00-19:00', '20:00-22:00', '7:00-9:00'],
    },
  ];
  const api = [
    {
      day: new Date(movie.movieDay).toLocaleString().split(',')[0],
    },
    {
      day: '08/03/2022',
    },
    {
      day: '08/04/2022',
    },
  ];
  const onGetValueProvine = (e) => {
    setProvince(e.target.innerHTML);
    setShowMenuProvince(false);
  };
  const handleStatusDay = (e) => {
    setStatusDay(e.target.id);
  };

  const [booked, setBooked] = useState([]);

  const [status, setStatus] = useState([]);

  const [bookingNum, setBookingNum] = useState(0);

  console.log(booked, status, bookingNum);

  const fetchSeat = () => {
    setIsLoading(true);
    // console.log(
    //   `/v1/seat?fid=${movie._id}&cid=${chooseTime.idCinema}&st=${
    //     chooseTime.time.splice(0, 2) + '00'
    //   }`
    // );
    axios({
      method: 'get',
      baseURL: process.env.REACT_APP_BACKEND_URL,
      url: `/v1/seat?fid=${'6228e236ad89edcc05b8d6ef'}&cid=${'6224e9cf8e977590a674f4bc'}&st=${'1300'}`,
      headers: {
        Authorization: `Bearer ${auth.token}`,
      },
    })
      .then((res) => {
        setBooked(res.data.seat);
        setIsLoading(false);
      })
      .catch((err) => {
        setIsLoading(false);
        setError(err.response.data.error);
      });
  };

  const onGetShowTime = (e) => {
    const obj = {
      idCinema: e.target.id,
      time: e.target.innerHTML,
    };
    setChooseTime(obj);

    setBooked([]);
    setStatus([]);
    setBookingNum(0);
    fetchSeat();
  };

  const bookingHandler = () => {
    if (
      chooseTime.idCinema === '' ||
      chooseTime.time === '' ||
      status.length === 0
    ) {
      setError('Oops... Có vẻ bạn thiếu thông tin nào đó');
      return;
    }
    console.log({
      filmId: movie._id,
      cinemaId: chooseTime.idCinema,
      showTime: chooseTime.time,
      seat: status[0],
      room: 'P1',
      price: 50000 * bookingNum,
    });
    // setIsLoading(true);
    // axios({
    //   method: 'post',
    //   baseURL: process.env.REACT_APP_BACKEND_URL,
    //   url: `/v1/ticket`,
    //   body: {
    //     filmId: movie._id,
    //     cinemaId: chooseTime.idCinema,
    //     showTime: chooseTime.time,
    //     seat: chosenSeat[0],
    //     room: 'P1',
    //     price: 50000 * bookingNum,
    //   },
    // })
    //   .then((res) => {
    //     setBookedTicket(res.data.seat);
    //     setIsLoading(false);
    //   })
    //   .catch((err) => {
    //     setIsLoading(false);
    //     setError(err.response.data.error);
    //   });
  };

  return (
    <div className="Booking-container">
      <h2>Đặt vé xem phim</h2>
      <div className="booking-ticket">
        <div className="choose-province">
          <h3>Chọn tỉnh</h3>
          <input
            type="text"
            name="province"
            className="province-input"
            readOnly="true"
            value={province}
            onClick={() => setShowMenuProvince(true)}
          />
          {showMenuProvince ? (
            <div className="province-list">
              <p
                className="province-item"
                onClick={(e) => onGetValueProvine(e)}
              >
                Hà Nội
              </p>
              <p
                className="province-item"
                onClick={(e) => onGetValueProvine(e)}
              >
                Thanh Hóa
              </p>
              <p
                className="province-item"
                onClick={(e) => onGetValueProvine(e)}
              >
                Thái Bình
              </p>
              <p
                className="province-item"
                onClick={(e) => onGetValueProvine(e)}
              >
                Nghệ An
              </p>
              <p
                className="province-item"
                onClick={(e) => onGetValueProvine(e)}
              >
                Nghệ An
              </p>

              <p
                className="province-item"
                onClick={(e) => onGetValueProvine(e)}
              >
                Nghệ An
              </p>
            </div>
          ) : null}
        </div>
        <div className="choose-date">
          <h3>Chọn ngày</h3>
          <div className="date">
            {api.map((item, index) => {
              return (
                <div
                  onClick={handleStatusDay}
                  id={index}
                  className={
                    statusDay == index ? 'box-date active' : 'box-date'
                  }
                  key={index}
                >
                  <p id={index}>{item.day}</p>
                  <p id={index}>{Day[new Date(item.day).getDay()]}</p>
                </div>
              );
            })}
          </div>
        </div>
        <div className="choose-cinema">
          <div>
            <p>Tất cả</p>
          </div>
          <div>
            <img
              src="https://play-lh.googleusercontent.com/I26_hScON1NJJgBn3_4hbw4yw00n54PKHEUZxf5HJ2iDyc40O-JHdUPLCqFA7qKOfG8"
              alt=""
            />
          </div>
          <div>
            <img
              src="https://img.favpng.com/13/14/2/logo-lotte-cinema-font-png-favpng-X0z4jTFHKFNUHR8ER8mETcXKU.jpg"
              alt=""
            />
          </div>
          <div>
            <img
              src="https://cdn.tgdd.vn/GameApp/2/224709/Screentshots/lotteria-delivery-ung-dung-dat-ga-ran-lotteria-tai-nha-224709-logo-18-06-2020.png"
              alt=""
            />
          </div>
        </div>
        <div className="choose-time-seat">
          <div className="address-cinema">
            {apiCinema.map((item, index) => {
              return (
                <div className="address-cinema-item" key={item.id}>
                  <div className="header">
                    <h3>{item.name}</h3>
                    <p>{item.address}</p>
                  </div>
                  <div className="showtime-content">
                    {item.showTime.map((time, i) => (
                      <p
                        key={i}
                        className={
                          (chooseTime.idCinema == item.id) &
                          (time === chooseTime.time)
                            ? 'time-active'
                            : ''
                        }
                        id={item.id}
                        onClick={onGetShowTime}
                      >
                        {time}
                      </p>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
          <Screen
            booked={booked}
            status={status}
            setStatus={setStatus}
            setBookingNum={setBookingNum}
          ></Screen>
        </div>
        <div className="payment">
          <div className="payment-info">
            <p>
              Số lượng vé: <span>{bookingNum}</span>
            </p>
            <p>
              Thành tiền: <span>{bookingNum * 50000} VND</span>
            </p>
          </div>
          <div className="payment-btn">
            <p onClick={() => navigate(-1)}>Hủy</p>
            <p onClick={bookingHandler}>Đặt vé</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default BookingTicket;
