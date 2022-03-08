import React, { Fragment, useState } from 'react';
import './Navbar.css';

function Navbar() {
  const token = false;
  const [showMenu, setShowMenu] = useState(false);
  const [tab, setTab] = useState(1);
  return (
    <Fragment>
      <div className='navbar-container'>
        <div className='navbar'>
          <div className='navbar-logo'>
            <img
              src='https://png.pngtree.com/png-clipart/20190604/original/pngtree-business-logo-design-png-image_915991.jpg'
              alt=''
            />
          </div>
          <div className='navbar-tab'>
            <ul>
              <li>
                <a
                  href='#'
                  className={tab === 1 ? 'active' : null}
                  onClick={() => setTab(1)}
                >
                  Trang chủ
                </a>
              </li>
              <li>
                <a
                  href='#'
                  className={tab === 2 ? 'active' : null}
                  onClick={() => setTab(2)}
                >
                  Phim
                </a>
              </li>
              <li>
                <a
                  href='#'
                  className={tab === 3 ? 'active' : null}
                  onClick={() => setTab(3)}
                >
                  Thư viện
                </a>
              </li>
            </ul>
          </div>
          <div className='navbar-auth'>
            {token ? (
              <div className='navbar-user'>
                <img
                  src='http://cdn.onlinewebfonts.com/svg/img_568656.png'
                  alt=''
                  onClick={() => setShowMenu((e) => !e)}
                />
                {showMenu ? (
                  <div className='nav-menu-box'>
                    <p>Thư viên</p>
                    <p>Đăng xuất</p>
                  </div>
                ) : null}
              </div>
            ) : (
              <>
                <a href='#'>Đăng kí</a>
                <a href='#' className='active'>
                  Đăng nhập
                </a>
              </>
            )}
          </div>
        </div>
      </div>
    </Fragment>
  );
}

export default Navbar;
