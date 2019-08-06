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
    title: 'Info'
  },
  {
    id: 7,
    title: 'Contact us'
  }
];


class Home extends Component {
  render() {
    return (
      <div className="home-container" id="home" style={{ background: 'lightgray', height: 1000 }}>
        this is home.
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


const app = () => (
  <div>
    <div className="index-container">
      <NavBar sticky="top" variant="dark" bg="dark">
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
    </div>
  </div>
);
export default React.memo(app);
