import { Link } from 'react-router-dom';

import Navbar from '../shared/components/Navbar';
import Footer from '../shared/components/Footer';

import './NotFound.css';

const NotFound = () => {
  return (
    <div id="notfound">
      <div className="notfound">
        <div className="notfound-404"></div>
        <h1>404</h1>
        <h2>Oops... Có vẻ như trang bạn tìm kiếm không tồn tại...</h2>
        <Link to="/">
          <span>Trang chủ</span>
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
