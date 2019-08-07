/**
 * @file App.jsx
 * @author atom-yang
 */
import React, { Component } from 'react';
// import 'bootstrap/dist/css/bootstrap.min.css';
import 'minireset.css/minireset.min.css';
import '@public/css/bootstrap.min.css';
import Nav from 'react-bootstrap/Nav';
import NavBar from 'react-bootstrap/NavBar';
import Table from 'react-bootstrap/Table';
import Card from 'react-bootstrap/Card';
// import { Nav, NavBar } from 'react-bootstrap'; // todo: this way didn't work
import { Map, Marker, InfoWindow } from 'react-amap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFire } from '@fortawesome/free-solid-svg-icons';

import './index.less';
import LOGO from '@img/logo.jpg';
import LOGO_LG from '@img/logo-lg.png';
import Title from '@components/Title/';

const navs = [
  {
    id: 1,
    title: 'Home'
  },
  {
    id: 2,
    title: 'About'
  },
  {
    id: 3,
    title: 'Speakers'
  },
  {
    id: 4,
    title: 'Agenda'
  },
  {
    id: 5,
    title: 'Partners'
  },
  {
    id: 6,
    title: 'Venue'
  },
  {
    id: 7,
    title: 'ContactUs'
  }
];

class Home extends Component {
  render() {
    return (
      <div className="home-container" id="home" style={{ background: 'lightgray', height: 1000 }}>
        <div className="logo-container">
          <img src={LOGO} alt="" width="200" />
        </div>
        <h1 className="summit-title">
          AElf生态基金启动大会
        </h1>
        <h2 className="summit-slogen">
          slogen
        </h2>
        <div className="summit-date-position">
          <h3 className="date-position-simple-info">2019 - 08 - 18  · 北京金茂万丽酒店</h3>
          <p className="position-detail">（北京市东城区王府井大街57号 北京金茂万丽酒店 xx层xx厅）</p>
        </div>
      </div>
    );
  }
}

class About extends Component {
  render() {
    return (
      <div className="about-container full-screen-container" id="about" style={{ background: 'lightblue', height: 1000 }}>
        <Title title={this.constructor.name} />
        <h2 className="text-center about-title">大会简介</h2>
        <Card className="bg-dark text-white summit-intro-card">
          <Card.Img className="bg-img" src={LOGO_LG} alt="Card image" />
          <Card.ImgOverlay>
            <Card.Title>Card title</Card.Title>
            <Card.Text>
              This is a wider card with supporting text below as a natural lead-in to
              additional content. This content is a little bit longer.
            </Card.Text>
            <Card.Text>Last updated 3 mins ago</Card.Text>
          </Card.ImgOverlay>
        </Card>
        <section className="charact-group-container">
          {
          ['特色1', '特色2', '特色3'].map((charact, index) => (
            <div className="charact-item-container text-center" key={index}>
              <FontAwesomeIcon icon={faFire} />
              <span>{`  ${charact}`}</span>
            </div>
          ))
        }
        </section>
      </div>
    );
  }
}

class Speakers extends Component {
  render() {
    return (
      <div className="speakers-container full-screen-container" id="speakers" style={{ background: 'lightgray', height: 1000 }}>
        <Title title={this.constructor.name} />
      </div>
    );
  }
}

class Agenda extends Component {
  render() {
    return (
      <div className="agenda-container full-screen-container" id="agenda" style={{ background: 'lightgray', height: 1000 }}>
        <Title title={this.constructor.name} />
        <Table responsive="lg" variant="dark" size="lg" style={{ width: '80%', margin: '50px auto 0' }}>
          <thead>
            <tr>
              <th colSpan="3">
                <h1 style={{ textAlign: 'center', width: '100%', display: 'block' }}>
                  会议日程
                </h1>
                <p style={{ textAlign: 'center' }}>（2019 - 08 - 18     14:00 ~ 17:00）</p>
              </th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>00:00 - 00:00</td>
              <td>开场致辞</td>
              <td>马昊伯</td>
            </tr>
            <tr>
              <td>00:00 - 00:00</td>
              <td>开场致辞</td>
              <td>马昊伯</td>
            </tr>
            <tr>
              <td>00:00 - 00:00</td>
              <td>开场致辞</td>
              <td>马昊伯</td>
            </tr>
          </tbody>
        </Table>
      </div>
    );
  }
}

class Partners extends Component {
  render() {
    return (
      <div className="partners-container full-screen-container" id="partners" style={{ background: 'lightgray', height: 1000 }}>
        <Title title={this.constructor.name} />
      </div>
    );
  }
}

class Venue extends Component {
  constructor(props) {
    super(props);
    this.markerPosition = { longitude: 116.410027, latitude: 39.921232 };
  }

  render() {
    return (
      <div className="venue-container full-screen-container" id="venue" style={{ height: '100vh' }}>
        <Title title={this.constructor.name} />
        <div style={{ height: '50vh', margin: '100px 0' }}>
          <Map amapkey="788e08def03f95c670944fe2c78fa76f" plugins={['ToolBar']} mapStyle="amap://styles/grey">
            <Marker position={this.markerPosition} clickable />
            <InfoWindow
              position={this.markerPosition}
              visible
            // isCustom={false}
              content="北京市东城区王府井大街57号<br/>北京金茂万丽酒店  xx层xx厅"
            />
          </Map>
        </div>
      </div>
    );
  }
}

class ContactUs extends Component {
  render() {
    return (
      <div className="contact-us-container full-screen-container" id="contactus" style={{ background: 'lightgray', height: 1000 }}>
        <Title title={this.constructor.name} />
      </div>
    );
  }
}

const app = () => (
  <div>
    <div className="index-container">
      <NavBar fixed="top" variant="dark">
        <div className="img-container">
          <img src={LOGO} alt="" />
        </div>
        <Nav defaultActiveKey="/home" as="ul">
          {navs.map(nav => (
            <Nav.Item as="li" key={nav.id}>
              <Nav.Link href={`#${nav.title.toLowerCase()}`}>{nav.title}</Nav.Link>
            </Nav.Item>
          ))}
        </Nav>
        <div className="btn-group">
          <button type="button" className="lang-btn selected" disabled>中</button>
          <button type="button" className="lang-btn">En</button>
        </div>
      </NavBar>

      <Home />
      <About />
      <Speakers />
      <Agenda />
      <Partners />
      <Venue />
      <ContactUs />
    </div>
  </div>
);
export default React.memo(app);
