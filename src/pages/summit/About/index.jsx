import React from 'react';
import './index.less';

export default function About() {
  return (
    <div className="about-container full-screen-height page-padding" id="about">
      <p className="bg-words">ABOUT</p>
      <p className="side-title">AELF SUMMIT 2019</p>
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
        This year the summit is specifically crafted to bring developers,
        academic professionals, startups, business decision makers and venture
        capitalists together to collaborate, partner, and build solutions that
        create valuable transactions on the VeChainThor Blockchain. releases,
        expertise and insights sharing, interactive tutorials as well as
        immersive entertainment, VeChain Summit 2019 will provide the
        participants with a unique blockchain technology adventure.
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
