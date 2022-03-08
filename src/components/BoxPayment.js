import React from 'react';

import './BoxPayment.css';

function BoxPayment() {
  return (
    <div className='Payment-component'>
      <div className='overlay'></div>
      <div className='payment-detail'>
        <svg
          xmlns='http://www.w3.org/2000/svg'
          width='24'
          height='24'
          className='close'
          focusable='false'
          viewBox='0 0 24 24'
          aria-hidden='true'
        >
          <g data-name='Group 28027' fill='none'>
            <path data-name='Rectangle 4499' d='M0 0h24v24H0z'></path>
            <g
              data-name='Group 28346'
              stroke='currentColor'
              stroke-linecap='round'
              stroke-linejoin='round'
              stroke-width='1.3'
            >
              <path data-name='Line 22' d='M5 5l14 14'></path>
              <path data-name='Line 23' d='M19 5L5 19'></path>
            </g>
          </g>
        </svg>
        <div className='payment-infomation'>
          <div className='info-film'>
            <div className='film-title'>
              <img
                src='https://upload.wikimedia.org/wikipedia/vi/4/42/%C3%81p_ph%C3%ADch_phim_M%E1%BA%AFt_bi%E1%BA%BFc.jpg'
                alt=''
              />
              <div>
                <h3>Linh hồn trú ngụ</h3>
                <p>Kinh dị, tâm lý</p>
              </div>
            </div>
            <div className='detail-film-body'>
              <p>
                Ngày : <span>08/03/2022</span>
              </p>
              <p>
                Thời gian : <span>13:40-17:00</span>
              </p>
              <p>
                Rạp chọn : <span>CGV Aeon Hà Đông</span>
              </p>
              <p>
                Tầng 3& 4 TTTM AEON MALL Hà Đông , Dương nội Hà Đông , Hà Nội
              </p>
            </div>
          </div>
        </div>
        <div className='payment-qr'>
          <p>Quét mã QR bằng MoMo để thanh toán</p>
          <img
            src='https://www.saigonchildren.com/wp-content/uploads/2020/04/MM_QR_CODE_MOMOTUUM20191113-saigonchildren.png'
            alt=''
          />
          <p>Sử dụng app MoMo hoặc ứng dụng Camera hỗ trợ QR code để quét mã</p>
        </div>
      </div>
    </div>
  );
}

export default BoxPayment;
