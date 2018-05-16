import React from 'react';
import bgImage from '../images/articles/album-link-bg.jpg';

const albumLink = (props) => {

  return (
    <div className="album-link">
      {/* <p>С остальными фотографиями можно ознакомиться, перейдя по ссылке ниже</p> */}
      <a href={props.href} target="_blank" rel="noopener noreferrer">
        <img src={bgImage} alt="Сантехкомплект"/>
      </a>
    </div>
  );
};

export default albumLink;