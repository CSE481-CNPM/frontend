import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Screen from './Screen';
import './BookingTicket.css';

function BookingTicket() {
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
      address:
        'Tầng 3&4 - TTTM AEON MALL Hà Đông , Dương nội , Hà Đông, Hà Nội',
      showTime: ['17:00-19:00', '20:00-22:00', '7:00-9:00'],
    },
    {
      id: '2',
      name: 'CCV AEON Hà Đông',
      address:
        'Tầng 3&4 - TTTM AEON MALL Hà Đông , Dương nội , Hà Đông, Hà Nội',
      showTime: ['17:00-19:00', '20:00-22:00', '7:00-9:00'],
    },
  ];
  const api = [
    {
      day: '07/03/2022',
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
  const onGetShowTime = (e) => {
    const obj = {
      idCinema: e.target.id,
      time: e.target.innerHTML,
    };
    setChooseTime(obj);
  };

  const bookingHandler = () => {
    console.log('booking...');
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
          <Screen></Screen>
        </div>
        <div className="payment">
          <div className="payment-info">
            <p>
              Số lượng vé: <span>3</span>
            </p>
            <p>
              Thành tiền : <span>150.000 VND</span>
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
