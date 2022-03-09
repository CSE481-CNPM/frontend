import React, { useState } from 'react';
import DatePicker from 'react-datepicker';

import 'react-datepicker/dist/react-datepicker.css';
import './AddFilm.css';

function AddFilm() {
  const [startDate, setStartDate] = useState(new Date());

  const [namefilm, setNameFilm] = useState('');
  const [country, SetCountry] = useState('');
  const [poster, setPoster] = useState('');
  const [avatar, setAvatar] = useState('');
  const [actor, setActor] = useState('');
  const [director, setDirector] = useState('');
  const [description, setDescription] = useState('');
  const [category, setCategory] = useState('');
  return (
    <div className='form-addfilm'>
      <div>
        <div className='form-group'>
          <label className='form-label'>Tên phim</label>
          <input
            type='text'
            name='nameFilm'
            className='form-input'
            placeholder='Nhập tên phim'
            value={namefilm}
            onChange={(e) => setNameFilm(e.target.value)}
          />
        </div>
        <div className='form-group'>
          <label className='form-label'>Quốc gia</label>
          <select name='country' id='' className='form-input'>
            <option value='Việt nam'>Việt Nam</option>
            <option value='Nga'>Nga</option>
            <option value='Ukraina'>Ukraina</option>
            <option value='Mỹ'>Mỹ</option>
          </select>
        </div>
        <div className='form-group'>
          <label className='form-label'>Poster</label>
          <input
            type='file'
            name='poster'
            className='form-input'
            onChange={(e) => setPoster(e.target.files[0])}
          />
        </div>
      </div>
      <div className='frame'>
        <div className='form-group'>
          <label className='form-label'>Đạo diễn</label>
          <input
            type='text'
            name='director'
            className='form-input'
            placeholder='Nhập đạo diễn'
            value={director}
            onChange={(e) => setDirector(e.target.value)}
          />
        </div>
        <div className='form-group'>
          <label className='form-label'>Ngày phát hành</label>
          <DatePicker
            selected={startDate}
            onChange={(date) => setStartDate(date)}
            className='form-input'
          />
        </div>
        <div className='form-group'>
          <label className='form-label'>Avatar</label>
          <input
            type='file'
            name='avatar'
            className='form-input'
            onChange={(e) => setAvatar(e.target.files[0])}
          />
        </div>
      </div>
      <div className='frame'>
        <div className='form-group'>
          <label className='form-label'>Diễn viên</label>
          <input
            type='text'
            name='actor'
            className='form-input'
            placeholder='Nhập diễn viên'
            value={actor}
            onChange={(e) => setActor(e.target.value)}
          />
        </div>
        <div className='form-group'>
          <label className='form-label'>Thể loại</label>
          <input
            type='text'
            name='category'
            className='form-input'
            placeholder='Nhập thể loại'
            value={category}
            onChange={(e) => setCategory(e.target.value)}
          />
        </div>
      </div>

      <div className='form-group'>
        <label className='form-label'>Mô tả</label>
        <textarea
          type='text'
          name='description'
          className='form-input-area'
          placeholder='Nhập mô tả'
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
      </div>
      <div className='btn-check'>
        <p>Xác Nhận</p>
      </div>
    </div>
  );
}

export default AddFilm;
