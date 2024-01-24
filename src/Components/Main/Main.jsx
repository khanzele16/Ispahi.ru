import React from 'react';
import './Main.css';
import Preview from '../PostBlock/Post/Post';
import Contact from './../Contact/Contact';
import Skeleton from './../PostBlock/Post/Skeleton';
import Place from './../PlaceBlock/Place';

const Main = (props) => {
  const body = document.querySelector('body');

  const MassiveOfColors = ['#1eb039', '#b01e1e', '#201eb0', '#1ea6b0'];

  const MassiveOfCategories = ['Другое', 'Места', 'Мысли', 'Познавательное'];

  let Posts = props.dataPost;

  let Places = props.dataPlaces;

  let IsLoadingPost = props.loadPost;

  let IsLoadingPlace = props.loadPlace;

  const items = [...new Array(6)];

  const [openPopup, setOpenPopup] = React.useState(false);

  const [countPost, setCountPost] = React.useState();

  function btnPopup(propsId) {
    setOpenPopup(!openPopup);
    setCountPost(propsId);
  }

  if (openPopup == true) {
    body.classList.add('lock');
  } else {
    body.classList.remove('lock');
  }

  return (
    <>
      {openPopup && (
        <div className="modal">
          <div className="modalWindow">
            <div className="modalWindowExit">
              <button onClick={btnPopup}>
                <svg
                  fill="#000000"
                  height="16px"
                  width="16px"
                  version="1.1"
                  id="Capa_1"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 460.775 460.775"
                >
                  <path
                    d="M285.08,230.397L456.218,59.27c6.076-6.077,6.076-15.911,0-21.986L423.511,4.565c-2.913-2.911-6.866-4.55-10.992-4.55
	c-4.127,0-8.08,1.639-10.993,4.55l-171.138,171.14L59.25,4.565c-2.913-2.911-6.866-4.55-10.993-4.55
	c-4.126,0-8.08,1.639-10.992,4.55L4.558,37.284c-6.077,6.075-6.077,15.909,0,21.986l171.138,171.128L4.575,401.505
	c-6.074,6.077-6.074,15.911,0,21.986l32.709,32.719c2.911,2.911,6.865,4.55,10.992,4.55c4.127,0,8.08-1.639,10.994-4.55
	l171.117-171.12l171.118,171.12c2.913,2.911,6.866,4.55,10.993,4.55c4.128,0,8.081-1.639,10.992-4.55l32.709-32.719
	c6.074-6.075,6.074-15.909,0-21.986L285.08,230.397z"
                  />
                </svg>
              </button>
            </div>
            <div className="modalWindowContent">
              <div className="modalWindowContentTitle">
                <h2>{Posts[countPost].Title}</h2>
              </div>
              <div className="modalWindowContentDescription">
                <div
                  className="modalWindowContentDescriptionDecorate"
                  style={{ backgroundColor: MassiveOfColors[Posts[countPost].Category] }}
                ></div>
                <span>{MassiveOfCategories[Posts[countPost].Category]}</span>
              </div>
              <div className="modalWindowContentText">
                <p>{Posts[countPost].Description}</p>
              </div>
              <div className="modalWindowContentData">
                <p>{Posts[countPost].Data + 'г'}</p>
              </div>
            </div>
          </div>
        </div>
      )}
      <main className="main">
        <section className="services">
          <div className="container-service">
            <div className="main_title">
              <h2 className="title_1">
                <a name="ourBlog">Наш блог</a>
              </h2>
            </div>
            <div className="services_row">
              {IsLoadingPost
                ? Posts.map((el) => (
                    <div className="service_card" data-aos="fade-up">
                      <Preview btnFunction={(propsId) => btnPopup(propsId)} key={el.id} {...el} />
                    </div>
                  ))
                : items.map((el, index) => <Skeleton key={index} />)}
            </div>
          </div>
        </section>
        <section className="portfolio">
          <div className="container">
            <div className="portfolio_title">
              <h2 className="title_1">
                <a name="places">Места</a>
              </h2>
            </div>
            <div className="dataOfProjects">
              {Places.map((obj) => (
                <div className="project">
                  <Place key={obj.id} {...obj} />
                </div>
              ))}
            </div>
          </div>
        </section>
        <section className="about">
          <div className="container">
            <div className="about_title">
              <h2 className="title_1">
                <a name="about">О нас</a>
              </h2>
            </div>
            <div className="aboutContent" data-aos="fade-up">
              <p>
                Расскажем немного о нас... <strong>IsTour</strong> - это турагентство, которое
                работает с 2023 года, а это говорит о том, что мы готовы работать для вас! Почему вы
                должны выбрать нас?
              </p>
              <ul>
                <li>
                  Мы отличаемся компетентностью наших гидов, и работаем только для того, чтобы у вас
                  осталось хорошее впечатление от посещённого места
                </li>
                <li></li>
              </ul>
              <span>😄</span>
            </div>
          </div>
        </section>
      </main>
      <Contact />
    </>
  );
};

export default Main;
