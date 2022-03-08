import React from 'react';

import './FilmDetail.css';

function FilmDetail() {
  return (
    <div className='film-container'>
      <div className='poster-film'>
        <img
          src='https://photo-baomoi.zadn.vn/w720x480/2019_12_28_180_33466033/4f6c010ce94c0012595d.jpg'
          alt=''
        />
        <div className='icon-play'>
          <img
            src='https://simg.nicepng.com/png/small/11-118375_citekeeper-is-a-crowdsourced-play-icon-white-png.png'
            alt=''
          />
        </div>
      </div>
      <div className='detail-film'>
        <img
          src='https://upload.wikimedia.org/wikipedia/vi/4/42/%C3%81p_ph%C3%ADch_phim_M%E1%BA%AFt_bi%E1%BA%BFc.jpg'
          alt=''
        />
        <div className='detail'>
          <h2>Cô gái đến từ hôm qua</h2>
          <p>Đặt vé</p>
          <div className='content-film'>
            <div className='content-film-1'>
              <p>
                Đạo diễn : <span>Đạo diễn is here</span>
              </p>
              <p>
                Thời lượng: <span>Thời lượng is here</span>
              </p>
              <p>
                Phát hành: <span>Phát hành is here</span>
              </p>
              <p>
                Thể loại:{' '}
                <span>Thể loại is here,Thể loại is here,Thể loại is here</span>
              </p>
              <p>
                Quốc gia : <span>Việt Nam</span>
              </p>
            </div>
            <div className='content-film-2'>
              <h3>Nội dung</h3>
              <p>
                Yêu (Kết Hôn và Ly Dị) 3 tiếp tục kể về những nút thắt và bước
                ngoặt khó lường tiếp tục gây trở ngại cho mối quan hệ đầy sóng
                gió của những cặp đôi đang tìm kiếm hạnh phúc mãi mãi về sau Yêu
                (Kết Hôn và Ly Dị) 3 tiếp tục kể về những nút thắt và bước ngoặt
                khó lường tiếp tục gây trở ngại cho mối quan hệ đầy sóng gió của
                những cặp đôi đang tìm kiếm hạnh phúc mãi mãi về sau
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FilmDetail;
