import React from 'react';
import './Place.css';

const Place = (props) => {
  return (
    <div className="place" data-aos="fade-right">
      <div className="placeImage"><img src={props.Img} /></div>
      <div className="placeDescription">
        <div className="placeDescriptionTitle">
          <h1>{props.Title}</h1>
        </div>
        <div className="placeDescriptionAbout">
          <p>
            {props.Description}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Place;
