/**
 * @file App.jsx
 * @author atom-yang
 */
import React, { Component } from 'react';
// import 'bootstrap/dist/css/bootstrap.min.css';
import 'minireset.css/minireset.min.css';
import '@public/css/bootstrap.min.css';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
// import { Nav, NavBar } from 'react-bootstrap'; // todo: this way is less ideally
import Table from 'react-bootstrap/Table';
import Card from 'react-bootstrap/Card';
import CardDeck from 'react-bootstrap/CardDeck';
import CardColumns from 'react-bootstrap/CardColumns';
import { Map, Marker, InfoWindow } from 'react-amap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons';
import { faFire } from '@fortawesome/free-solid-svg-icons';
import Scrollspy from 'react-scrollspy';
import { Translation } from 'react-i18next';
// import { debounce } from 'debounce';
// import { throttle } from 'throttle-debounce';

import './index.less';
import LOGO from '@img/logo.jpg';
import LOGO_LG from '@img/logo-lg.png';
import Title from '@components/Title/';
import i18n from './i18n';
// const ReactAmap = r => require.ensure([], () => r(require('react-amap')));
// const { Map, Marker, InfoWindow } = ReactAmap;

library.add(fab, faFire);

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

const navTitleGroup = navs.map(item => item.title.toLocaleLowerCase());

const speakers = [
  {
    name: 'alex',
    speakTitle: 'some words'
  },
  {
    name: 'alex',
    speakTitle: 'some words'
  },
  {
    name: 'alex',
    speakTitle: 'some words'
  }
];

const partners = [
  {
    type: 'Participants',
    members: [LOGO, LOGO, LOGO, LOGO, LOGO, LOGO, LOGO, LOGO, LOGO]
  },
  {
    type: 'Medias',
    members: [LOGO, LOGO, LOGO, LOGO, LOGO, LOGO, LOGO, LOGO, LOGO]
  },
  {
    type: 'Community Support',
    members: [LOGO, LOGO, LOGO, LOGO, LOGO, LOGO, LOGO, LOGO, LOGO]
  }
];

const contactMethods = [
  {
    icon: ['fab', 'weixin']
  },
  {
    icon: ['fab', 'facebook']
  },
  {
    icon: ['fab', 'reddit']
  },
  {
    icon: ['fab', 'github']
  },
  {
    icon: ['fab', 'youtube']
  },
  {
    icon: ['fab', 'linkedin']
  },
  {
    icon: ['fab', 'twitter']
  },
  {
    icon: ['fab', 'telegram']
  }
];

const langs = [
  {
    type: 'en',
    displayName: 'En'
  },
  {
    type: 'zh-CN',
    displayName: '中'
  }
];

class SummitNav extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentLang: 'zh-CN',
      isCollapsed: false
    };
  }

  handleAnchorUpdate(ele) {
    const { onAnchorUpdate } = this.props;
    typeof onAnchorUpdate === 'function' ? onAnchorUpdate(ele) : null;
  }

  handleCollapse() {
    const { isCollapsed } = this.state;
    this.setState({ isCollapsed: !isCollapsed });
  }

  render() {
    const { currentLang, isCollapsed } = this.state;

    return (
      <Navbar fixed="top" variant="dark" expand="lg">
        <div className="img-container">
          <img src={LOGO} alt="" />
        </div>
        <Navbar.Toggle
          aria-controls="basic-navbar-nav"
          data-toggle="collapse"
          onClick={this.handleCollapse.bind(this)}
        />
        <Navbar.Collapse id="basic-navbar-nav" in={isCollapsed}>
          <Scrollspy
            className="nav block-center mr-auto"
            items={navTitleGroup}
            currentClassName="is-current"
            onUpdate={this.handleAnchorUpdate.bind(this)}
          >
            {navs.map(nav => (
              <Nav.Item as="li" key={nav.id}>
                <Translation>
                  {t => (
                    <Nav.Link
                      href={`#${nav.title.toLowerCase()}`}
                      onClick={this.handleCollapse.bind(this)}
                    >
                      {t(nav.title)}
                    </Nav.Link>
                  )}
                </Translation>
              </Nav.Item>
            ))}
          </Scrollspy>
          <div className="btn-group">
            {langs.map((lang, index) => {
              const isActive = currentLang === lang.type;
              return (
                <button
                  type="button"
                  key={index}
                  className={`lang-btn ${isActive ? 'selected' : ''}`}
                  disabled={!!isActive}
                  onClick={() => {
                    i18n.changeLanguage(lang.type);
                    this.setState({ currentLang: lang.type });
                  }}
                >
                  {lang.displayName}
                </button>
              );
            })}
          </div>
        </Navbar.Collapse>
      </Navbar>
    );
  }
}

class Home extends Component {
  render() {
    return (
      <div
        className="home-container"
        id="home"
        style={{ background: 'lightgray', height: '100vh' }}
      >
        <div className="logo-container">
          <img src={LOGO} alt="" width="200" />
        </div>
        <h1 className="summit-title">AElf生态基金启动大会</h1>
        <h2 className="summit-slogen">slogen</h2>
        <div className="summit-date-position">
          <h3 className="date-position-simple-info">
            2019 - 08 - 18 · 北京金茂万丽酒店
          </h3>
          <p className="position-detail">
            （北京市东城区王府井大街57号 北京金茂万丽酒店 xx层xx厅）
          </p>
        </div>
      </div>
    );
  }
}

class About extends Component {
  render() {
    return (
      <div
        className="about-container full-screen-container"
        id="about"
        style={{ height: '100vh' }}
      >
        <Title title={this.constructor.name} />
        <h2 className="text-center about-title">大会简介</h2>
        <Card className="bg-dark text-white summit-intro-card">
          <Card.Img className="bg-img" src={LOGO_LG} alt="Card image" />
          <Card.ImgOverlay>
            <Card.Title>Card title</Card.Title>
            <Card.Text>
              This is a wider card with supporting text below as a natural
              lead-in to additional content. This content is a little bit
              longer.
            </Card.Text>
            <Card.Text>Last updated 3 mins ago</Card.Text>
          </Card.ImgOverlay>
        </Card>
        <section className="charact-group-container">
          {['特色1', '特色2', '特色3'].map((charact, index) => (
            <div className="charact-item-container text-center" key={index}>
              <FontAwesomeIcon icon={['fas', 'fire']} />
              {/* <i className="fas fa-fire" /> */}
              <span>{`  ${charact}`}</span>
            </div>
          ))}
        </section>
      </div>
    );
  }
}

class Speakers extends Component {
  render() {
    return (
      <div
        className="speakers-container full-screen-container"
        id="speakers"
        style={{ background: 'lightgray', minHeight: '100vh' }}
      >
        <Title title={this.constructor.name} />
        <CardDeck className="speakers-cards block-center">
          {speakers.map((speaker, index) => (
            <Card key={index}>
              <Card.Img
                className="summit-speaker-img"
                variant="top"
                src={LOGO}
              />
              <Card.Body>
                <Card.Title>{speaker.name}</Card.Title>
                <Card.Text>{speaker.speakTitle}</Card.Text>
              </Card.Body>
            </Card>
          ))}
        </CardDeck>
      </div>
    );
  }
}

class Agenda extends Component {
  render() {
    return (
      <div
        className="agenda-container full-screen-container"
        id="agenda"
        style={{ background: '#fff', minHeight: '100vh' }}
      >
        <Title title={this.constructor.name} />
        <Table
          responsive="lg"
          variant="dark"
          size="lg"
          style={{ width: '80%', margin: '50px auto 0' }}
        >
          <thead>
            <tr>
              <th colSpan="3">
                <h1
                  style={{
                    textAlign: 'center',
                    width: '100%',
                    display: 'block'
                  }}
                >
                  会议日程
                </h1>
                <p style={{ textAlign: 'center' }}>
                  （2019 - 08 - 18 14:00 ~ 17:00）
                </p>
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
      <section
        className="partners-container full-screen-container bg-gray"
        id="partners"
        style={{ minHeight: '100vh' }}
      >
        {partners.map((groupOfOneType, indexA) => (
          <section className="margin-top-md" key={indexA}>
            <h1 className="text-center">{groupOfOneType.type}</h1>
            <CardColumns className="partici-group block-center">
              {groupOfOneType.members.map((item, indexB) => (
                <Card className="rounded-lg partner-card" key={indexB}>
                  <Card.Img
                    variant="top"
                    src={item}
                    style={{ background: 'gray' }}
                  />
                </Card>
              ))}
            </CardColumns>
          </section>
        ))}
      </section>
    );
  }
}

class Venue extends Component {
  constructor(props) {
    super(props);
    this.markerPosition = { longitude: 116.410027, latitude: 39.921232 };
    this.state = {
      isMaskShow: true
    };
  }

  handleClick() {
    this.setState({ isMaskShow: false });
  }

  render() {
    // const { t } = useTranslation();
    const { currentNav } = this.props;
    const { isMaskShow } = this.state;
    // console.log('t', t(this.constructor.name));

    return (
      <div
        className="venue-container full-screen-container"
        id="venue"
        style={{ height: '100vh' }}
      >
        <Translation>
          {t => <Title title={t(this.constructor.name)} />}
        </Translation>
        <div style={{ height: '50vh', margin: '100px 0' }}>
          <Map
            amapkey="788e08def03f95c670944fe2c78fa76f"
            plugins={['ToolBar']}
            mapStyle="amap://styles/grey"
          >
            <Marker
              position={this.markerPosition}
              clickable
              animation={
                currentNav === 'venue'
                  ? 'AMAP_ANIMATION_DROP'
                  : 'AMAP_ANIMATION_NONE'
              }
            />
            <InfoWindow
              position={this.markerPosition}
              // visible
              // isCustom={false}
              content="北京市东城区王府井大街57号<br/>北京金茂万丽酒店  xx层xx厅"
            />
            {isMaskShow ? (
              <div
                className="zoom-tip-mask"
                role="presentation"
                onClick={this.handleClick.bind(this)}
                onKeyDown={this.handleClick.bind(this)}
              >
                使用双指移动地图
              </div>
            ) : null}
          </Map>
        </div>
      </div>
    );
  }
}

class ContactUs extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activeItem: null
    };
  }

  handleMouseOver(activeItem) {
    this.setState({
      activeItem
    });
  }

  render() {
    const { activeItem } = this.state;

    return (
      <div
        className="contact-us-container full-screen-container bg-gray"
        id="contactus"
      >
        <Title title={this.constructor.name} />
        <section className="contact-methods  margin-top-md">
          <ul
            className="contact-group block-center rounded-lg"
            style={{
              width: 300,
              height: 300,
              position: 'relative'
            }}
          >
            {contactMethods.map((method, index) => {
              const angle = (360 / contactMethods.length) * index;
              return (
                <li
                  className="contact-item"
                  style={{
                    // use transform to make it to be a circle
                    // use translate(-50%, -50%) with left/top: 50% to center the items
                    transform: `rotate(${angle}deg) translate(110px) rotate(${-angle}deg) translate(-50%, -50%)`
                  }}
                  key={index}
                  onMouseOver={this.handleMouseOver.bind(this, method.icon)}
                >
                  <FontAwesomeIcon
                    icon={method.icon}
                    size="3x"
                    className="social-network-icon"
                  />
                  {/* <i
                    className={`${method.icon} social-network-icon`}
                    style={{ fontSize: 50 }}
                  /> */}
                </li>
              );
            })}
          </ul>
          <div className="center-item">
            {/* <i className={`${activeItem} center-item-icon`} /> */}
            <FontAwesomeIcon
              icon={activeItem}
              size="5x"
              color="lightseagreen"
              spin
            />
          </div>
        </section>
        <p className="text-center margin-top-lg">Copyright © 2018 ælf</p>
      </div>
    );
  }
}

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentNav: null
    };
  }

  componentDidMount() {
    // window.addEventListener('scroll', this.handleScroll.bind(this));
    // window.addEventListener('wheel', throttle(1000, this.handleScroll.bind(this)), true);
  }

  onAnchorUpdate(ele) {
    this.setState({
      currentNav: ele.id
    });
  }

  handleScroll(e) {
    const { currentNav } = this.state;

    if (e.deltaY > 20) {
      // debugger;
      const index = navTitleGroup.findIndex(item => item === currentNav);
      let nextIndex = index + 1;
      if (nextIndex >= navTitleGroup.length) nextIndex -= 1;
      const nextNav = navTitleGroup[nextIndex];
      window.location.hash = nextNav;
      return true;
    }
    e.preventDefault();
    return false;
  }

  render() {
    const { currentNav } = this.state;

    return (
      <div>
        <div className="index-container">
          <SummitNav onAnchorUpdate={this.onAnchorUpdate.bind(this)} />
          <Home />
          <About />
          <Speakers />
          <Agenda />
          <Partners />
          {/* TODO: 延迟加载组件的更好方法？ */}
          {['partners', 'venue', 'contactus'].findIndex(
            item => item === currentNav
          ) !== -1 ? (
            <Venue currentNav={currentNav} />
            ) : (
            <div id="venue" style={{ height: '100vh' }} />
            )}
          <ContactUs />
        </div>
      </div>
    );
  }
}

export default React.memo(App);
