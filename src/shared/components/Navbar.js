import React, { Fragment, useState } from 'react';
import './Navbar.css';

function Navbar() {
  const token = false;
  const [showMenu, setShowMenu] = useState(false);
  const [tab, setTab] = useState(1);
  return (
    <Fragment>
      <div className="navbar-container">
        <div className="navbar">
          <div className="navbar-logo">
            <img
              src="https://lh3.googleusercontent.com/fife/AAWUweWeYsBEcTdmdhh2HYx--4hDFgdhtdMrRG3gVsJOpAR0omKSl8Idx2D67-PHWsqraqAWYq61bg0CE-gpkugGdNrMP6OWgal7BpKFQnV_Jr96Fqcq9bczYWQbQ0Bswf2mjQwEnchPIKiwkjX0S3eYllr4hydWiLHM7Jb5o1S69py3Lddvsf1LB9q3PuYV4pVMQRq61a_r5GDrmU8G017A_T7iGe9ZEv26EyZ5zIDkc75e1XDtuUsZpGBqhy_zEG78Jq1USSoqrVPQewvVKhTVa0fIzZZ_MhFpFg0nNQzMctoVTQhy2ylZIZk93BuKmlL2kZC8gCl83f-zErvQ-ITbquvTJ8gY1V9BUNtlVtzsNoLow6Qg9OOO2pwuZvm1-Ns8q9SJi1_P5Nk4kXHYsmqC5s-A5MHPWe8AXszORLbEnIDXx6h_pZjaRwxMExH5xx-Z7CneQvf05Yx7syhCRZoSggBWohPeSYtwEumJiUCGE7nyYxIHC1bOdCwtJcZxDMVoJobcBEpbWfBjg3TEXP9jsCfKQm1ueOMMDZtPiTxv0HpQQ4boccSAq3Mhhc-GVSkyA6Ld_UYISAuwW1iKKRVGUNltGPM8Ade4qOkpaZMDmbhh0t8eCk8xeFpqUNVRaW1LzpJ6qgLBffQEE0ppZKhTHOFrP3CxP34U6ATt5rXkbrbhPjVdMWHbVspoeHzWvYEM1dlzacwoaioaLxwe4Gh7rZz6Zx0=w200-h190-p-k-nu"
              alt=""
            />
          </div>
          <div className="navbar-tab">
            <ul>
              <li>
                <a
                  href="#"
                  className={tab === 1 ? 'active' : null}
                  onClick={() => setTab(1)}
                >
                  Trang chủ
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className={tab === 2 ? 'active' : null}
                  onClick={() => setTab(2)}
                >
                  Phim
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className={tab === 3 ? 'active' : null}
                  onClick={() => setTab(3)}
                >
                  Thư viện
                </a>
              </li>
            </ul>
          </div>
          <div className="navbar-auth">
            {token ? (
              <div className="navbar-user">
                <img
                  src="http://cdn.onlinewebfonts.com/svg/img_568656.png"
                  alt=""
                  onClick={() => setShowMenu((e) => !e)}
                />
                {showMenu ? (
                  <div className="nav-menu-box">
                    <p>Thư viên</p>
                    <p>Đăng xuất</p>
                  </div>
                ) : null}
              </div>
            ) : (
              <>
                <a href="#">Đăng kí</a>
                <a href="#" className="active">
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
