import React from 'react';
import Header from './Components/Header/Header';
import Helmet from 'react-helmet';
import Main from './Components/Main/Main';
import { Routes, Route } from 'react-router-dom';
import AOS from 'aos';
import './App.css';

const App = () => {
  React.useEffect(() => {
    AOS.init();
  }, []);

  const [Post, setPost] = React.useState([]);

  const [Places, setPlaces] = React.useState([]);

  const [IsLoadingPost, setIsLoadingPost] = React.useState(false);

  const [IsLoadingPlace, setIsLoadingPlace] = React.useState(false);

  React.useEffect(() => {
    fetch('https://64607fc3fe8d6fb29e31cd6d.mockapi.io/posts')
      .then((res) => {
        return res.json();
      })
      .then((json) => {
        setPost(json);
        setIsLoadingPost(true);
      });
  }, []);

  React.useEffect(() => {
    fetch('https://6425821f7ac292e3cf02aac6.mockapi.io/Places')
      .then((Response) => {
        return Response.json();
      })
      .then((massive) => {
        setPlaces(massive);
        setIsLoadingPlace(true);
      });
  }, []);

  const dataPost = [...Post];

  const dataPlaces = [...Places];

  return (
    <div className="App">
      <div className="AppHelmet">
        <Helmet
          meta={[
            { name: 'viewport', content: 'width=device-width, initial-scale=1.0' },
            {
              rel: 'apple-touch-icon',
              sizes: '72x72',
              href: 'http://mysite.com/img/apple-touch-icon-72x72.png',
            },
          ]}
          link={[
            {
              rel: 'stylesheet',
              href: 'https://cdnjs.cloudflare.com/ajax/libs/aos/2.3.4/aos.css',
              integrity:
                'sha512-1cK78a1o+ht2JcaW6g8OXYwqpev9+6GqOkz9xmBN9iUUhIndKtxwILGWYOSibOKjLsEdjyjZvYDq/cZwNeak0w==',
              crossorigin: 'anonymous',
              referrerpolicy: 'no-referrer',
            },
          ]}
        ></Helmet>
        <Header />
      </div>
      <div className="AppContent">
        <Routes>
          <Route
            path="/"
            element={
              <Main
                loadPlace={IsLoadingPlace}
                loadPost={IsLoadingPost}
                dataPlaces={dataPlaces}
                dataPost={dataPost}
              />
            }
          />
        </Routes>
        <div id="vk_community_messages"></div>
      </div>
    </div>
  );
};

export default App;
