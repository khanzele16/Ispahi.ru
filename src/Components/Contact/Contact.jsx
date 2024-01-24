import React from 'react';
import AOS from 'aos';
import "./Contact.css";

const Contact = () => {

  return(
    <>
    <footer className="contacts">
      <div className="container">
        <div className="contacts_title">
          <h2 className="title_1">Контакты</h2>
        </div>
        <div className="contacts_content" data-aos="fade-down">
          <p>
            Хотите знать больше или просто связаться с нами?<br />
            Мы вас ждем!
          </p>
        </div>
        <div className="contacts_button" data-aos="fade-down">
          <a href="#!" className="btn">Отправить сообщение</a>
        </div>
        <div className="contacts_social" data-aos="zoom-in">
          <a href="https://vk.com/public219473568"
            ><img id="imageVK" src="https://i.ibb.co/PNgV6dj/pngegg-2.png" width="48" alt="ВК"
          /></a>
          <a href="#"
            ><img id="imageInstagram" src="https://i.ibb.co/Qpcr756/pngegg-3.png" width="48" alt="Instargam"
          /></a>
          <a href="https://t.me/istourgid"
            ><img id="imageTelegram" src="https://i.ibb.co/H7Zk0qK/pngegg-1.png" width="48" alt="Telegram"
          /></a>
        </div>
        <div className="contacts_footer" data-aos="fade-up">
          <p>
            Следите за нами в<br />
            VK, Instagram и Telegram
          </p>
          <p></p>
        </div>
      </div>
    </footer>
    </>
  )
};

export default Contact;