/**
 * @file App.jsx
 * @author atom-yang
 */
import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'minireset.css/minireset.min.css';
import Nav from 'react-bootstrap/Nav';
import NavBar from 'react-bootstrap/NavBar';
// import { Nav, NavBar } from 'react-bootstrap'; // todo: this way didn't work
import { Map, Marker, InfoWindow } from 'react-amap';

import './index.less';
import LOGO from '@img/logo.jpg';

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
      <div className="about-container" id="about" style={{ background: 'lightblue', height: 1000 }}>
        this is About.
      </div>
    );
  }
}

class Speakers extends Component {
  render() {
    return (
      <div className="speakers-container" id="speakers" style={{ background: 'lightgray', height: 1000 }}>
        this is Speakers.
      </div>
    );
  }
}

class Agenda extends Component {
  render() {
    return (
      <div className="agenda-container" id="agenda" style={{ background: 'lightgray', height: 1000 }}>
        this is Agenda.
      </div>
    );
  }
}

class Partners extends Component {
  render() {
    return (
      <div className="partners-container" id="partners" style={{ background: 'lightgray', height: 1000 }}>
        this is partners.
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
      <div className="venue-container" id="venue" style={{ height: '100vh' }}>
        <h2 style={{ textAlign: 'center' }}>Venue</h2>
        <div style={{ height: '50vh', margin: '100px 0' }}>
          <Map amapkey="788e08def03f95c670944fe2c78fa76f" plugins={['ToolBar']}>
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
      <div className="contact-us-container" id="contactus" style={{ background: 'lightgray', height: 1000 }}>
        this is ContactUs.
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
