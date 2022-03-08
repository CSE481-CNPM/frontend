import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './Carousel.css';

function Carousel() {
  const apiFilm = [
    {
      filmID: '1',
      nameFilm: 'YÊU (KẾT HÔN VÀ LY DỊ) 3',
      description:
        '  Yêu (Kết Hôn và Ly Dị) 3 tiếp tục kể về những nút thắt và bước ngoặt khó lường tiếp tục gây trở ngại cho mối quan hệ đầy sóng gió của những cặp đôi đang tìm kiếm hạnh phúc mãi mãi về sau.',
      actor:
        'Kang Shin Hyo, Lee Ga Ryeong, Ji Young San, Park Joo Mi,Jeon Soo Kyung, Jeon Noh Min',
      poster:
        'https://ostrichmotion.com/wp-content/uploads/2019/08/httpsostrichmotion.composter-phim-la-gi-nhung-dieu-ban-nen-biet-ve-poster-phim-2.jpg',
    },
    {
      filmID: '2',
      nameFilm: 'YÊU (KẾT HÔN VÀ LY DỊ) 3',
      description:
        '  Yêu (Kết Hôn và Ly Dị) 3 tiếp tục kể về những nút thắt và bước ngoặt khó lường tiếp tục gây trở ngại cho mối quan hệ đầy sóng gió của những cặp đôi đang tìm kiếm hạnh phúc mãi mãi về sau.',
      actor:
        'Kang Shin Hyo, Lee Ga Ryeong, Ji Young San, Park Joo Mi,Jeon Soo Kyung, Jeon Noh Min',
      poster:
        'https://upload.wikimedia.org/wikipedia/vi/4/42/%C3%81p_ph%C3%ADch_phim_M%E1%BA%AFt_bi%E1%BA%BFc.jpg',
    },
    {
      filmID: '3',
      nameFilm: 'YÊU (KẾT HÔN VÀ LY DỊ) 3',
      description:
        '  Yêu (Kết Hôn và Ly Dị) 3 tiếp tục kể về những nút thắt và bước ngoặt khó lường tiếp tục gây trở ngại cho mối quan hệ đầy sóng gió của những cặp đôi đang tìm kiếm hạnh phúc mãi mãi về sau.',
      actor:
        'Kang Shin Hyo, Lee Ga Ryeong, Ji Young San, Park Joo Mi,Jeon Soo Kyung, Jeon Noh Min',
      poster:
        'https://ostrichmotion.com/wp-content/uploads/2019/08/httpsostrichmotion.composter-phim-la-gi-nhung-dieu-ban-nen-biet-ve-poster-phim-2.jpg',
    },
    {
      filmID: '4',
      nameFilm: 'YÊU (KẾT HÔN VÀ LY DỊ) 3',
      description:
        '  Yêu (Kết Hôn và Ly Dị) 3 tiếp tục kể về những nút thắt và bước ngoặt khó lường tiếp tục gây trở ngại cho mối quan hệ đầy sóng gió của những cặp đôi đang tìm kiếm hạnh phúc mãi mãi về sau.',
      actor:
        'Kang Shin Hyo, Lee Ga Ryeong, Ji Young San, Park Joo Mi,Jeon Soo Kyung, Jeon Noh Min',
      poster:
        'https://ostrichmotion.com/wp-content/uploads/2019/08/httpsostrichmotion.composter-phim-la-gi-nhung-dieu-ban-nen-biet-ve-poster-phim-2.jpg',
    },
  ];
  const settings = {
    dots: true,
    infinite: true,
    speed: 800,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    cssEase: 'linear',
  };
  return (
    <div className='carousel-container'>
      <Slider {...settings}>
        {apiFilm.map((item, index) => {
          return (
            <div
              key={item.filmID}
              className='carousel'
              style={{
                backgroundImage: 'URL("' + 'ok' + '")',
              }}
            >
              <img src={item.poster} alt='' />
              <div className='content'>
                <h2>{item.nameFilm}</h2>
                <p className='des'>{item.description}</p>
                <p className='actor'>diễn viên : {item.actor}</p>
                <p className='btn-booking'>
                  <a href='#'>Đặt vé ngay</a>
                </p>
              </div>
            </div>
          );
        })}
      </Slider>
    </div>
  );
}

export default Carousel;
