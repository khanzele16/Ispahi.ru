import React from 'react';
import { NavLink } from 'react-router-dom';
import './Header.css';

const Header = () => {
  const [openPopup, setOpenPopup] = React.useState(false);

  function changeOpenPopup() {
    setOpenPopup(!openPopup);
  }

  const nav = React.createRef();

  const [active, setActive] = React.useState(false);

  function changeBurger() {
    if (nav.current.classList.toggle('open')) {
      setActive(true);
    } else {
      setActive(false);
    }
  }
  return (
    <header className="header lockPadding">
      <div className="container">
        <div className="header_nav">
          <NavLink to="/" className="logo">
            IsTour
          </NavLink>
          <nav ref={nav} id="nav" className="nav">
            <ul className="nav_list">
              <li className="nav_item">
                <a
                  href="#ourBlog"
                  onClick={() => {
                    nav.current.classList.toggle('open');
                    setActive(false);
                  }}
                  className="nav_link"
                >
                  Наш Блог
                </a>
              </li>
              <li className="nav_item">
                <a
                  href="#places"
                  onClick={() => {
                    nav.current.classList.toggle('open');
                    setActive(false);
                  }}
                  className="nav_link"
                >
                  Места
                </a>
              </li>
              <li className="nav_item">
                <a
                  href="#about"
                  onClick={() => {
                    nav.current.classList.toggle('open');
                    setActive(false);
                  }}
                  className="nav_link"
                >
                  О нас
                </a>
              </li>
              <li className="nav_item">
                <button type="button" id="tel_btn">
                  <a href="tel:89898979599">Связаться с нами</a>
                </button>
              </li>
            </ul>
            <button onClick={changeBurger} id="nav_btn" className="nav_button">
              <div className="all_arrow">
                <div className={active ? 'top_arrow active_top' : 'top_arrow'}></div>
                <div className={active ? 'middle_arrow active_middle' : 'middle_arrow'}></div>
                <div className={active ? 'bottom_arrow active_bottom' : 'bottom_arrow'}></div>
              </div>
            </button>
          </nav>
        </div>
        <div className="header_row">
          <div className="header_content" data-aos="fade-up">
            <h1 className="header_heading">
              Муртузаева Испахи Абумуслимовна
              <br />
              <span>Гид | Экскурсовод</span>
            </h1>
          </div>

          <div className="header_img" data-aos="fade-left">
            <picture>
              <source media="(max_width: 800px)" srcSet="./img/header/hero_mobile.png" />
              <img src="https://i.ibb.co/NpwxjQC/Ispahi-Header.png" alt="" />
            </picture>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
