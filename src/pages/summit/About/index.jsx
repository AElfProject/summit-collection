import React from 'react';
import './index.less';

export default function About() {
  return (
    <div className="about-container full-screen-height page-padding" id="about">
      <p className="bg-words">ABOUT</p>
      <p className="side-title">XXXX XXXX XXXX </p>
      <h2 className="text-center about-title">大会简介</h2>
      {/* <Card className="bg-dark text-white summit-intro-card">
        <Card.Img className="bg-img" src={LOGO_LG} alt="Card image" />
        <Card.ImgOverlay>
          <Card.Title>Card title</Card.Title>
          <Card.Text>
            This is a wider card with supporting text below as a natural lead-in
            to additional content. This content is a little bit longer.
          </Card.Text>
          <Card.Text>Last updated 3 mins ago</Card.Text>
        </Card.ImgOverlay>
      </Card> */}
      <p className="summit-intro">
        XXXX XXXX XXXX XXXXXXXXX XXXX XXXX XXXXXXXXX XXXX XXXX XXXXXXXXX XXXX
        XXXX XXXXXXXXX XXXX XXXX XXXXXXXXX XXXX XXXX XXXXXXXXX XXXX XXXX
        XXXXXXXXX XXXX XXXX XXXXX
      </p>
      {/* <section className="charact-group-container">
        {['特色1', '特色2', '特色3'].map((charact, index) => (
          <div className="charact-item-container text-center" key={index}>
            <FontAwesomeIcon icon={['fas', 'fire']} />
            <span>{`  ${charact}`}</span>
          </div>
        ))}
      </section> */}
    </div>
  );
}
