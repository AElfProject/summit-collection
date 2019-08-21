/**
 * @file App.jsx
 * @author atom-yang
 */
import React, { Component, PureComponent } from 'react';
import PropTypes from 'prop-types';
// import 'bootstrap/dist/css/bootstrap.min.css'; // default bootstrap css
import 'minireset.css/minireset.min.css';
import '@public/css/bootstrap.min.css'; // bootstrap css with custom theme, eg font-family...
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Card from 'react-bootstrap/Card';
import CardColumns from 'react-bootstrap/CardColumns';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import { Map, Marker, InfoWindow } from 'react-amap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import {
  faFacebook,
  faWeixin,
  faMedium,
  faYoutube,
  faGithub,
  faReddit,
  faLinkedin,
  faTwitter,
  faTelegram
} from '@fortawesome/free-brands-svg-icons';
import { faFire } from '@fortawesome/free-solid-svg-icons';
import Scrollspy from 'react-scrollspy';
import { Translation } from 'react-i18next';
// import { debounce } from 'debounce';
// import { throttle } from 'throttle-debounce';

import './index.less';
import LOGO from '@img/logo.png';
import PARTNER_LOGO from '@img/partner-logo.png';
import WECHAT_QRCODE from '@img/wechat-qrcode-sm.jpg';
import BIYONG_ICON from '@img/biyong-icon.jpg';
import Title from '@components/Title/';
import CopyRight from '@components/CopyRight/';
import { isMac, isPC } from '@utils/tools';
import i18n from './i18n';
// const ReactAmap = r => require.ensure([], () => r(require('react-amap')));
// const { Map, Marker, InfoWindow } = ReactAmap;
import Home from './Home';
import About from './About';
import Speakers from './Speakers';
import Agenda from './Agenda';

library.add(
  faFacebook,
  faWeixin,
  faMedium,
  faYoutube,
  faGithub,
  faReddit,
  faLinkedin,
  faTwitter,
  faTelegram,
  faFire
);

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

const partners = [
  {
    id: 1,
    type: null,
    members: [
      {
        id: 1,
        logo: PARTNER_LOGO
      },
      {
        id: 2,
        logo: PARTNER_LOGO
      },
      {
        id: 3,
        logo: PARTNER_LOGO
      },
      {
        id: 4,
        logo: PARTNER_LOGO
      },
      {
        id: 5,
        logo: PARTNER_LOGO
      },
      {
        id: 6,
        logo: PARTNER_LOGO
      },
      {
        id: 7,
        logo: PARTNER_LOGO
      },
      {
        id: 8,
        logo: PARTNER_LOGO
      },
      {
        id: 9,
        logo: PARTNER_LOGO
      }
    ]
  },
  {
    id: 2,
    type: '媒体',
    members: [
      {
        id: 1,
        logo: PARTNER_LOGO
      },
      {
        id: 2,
        logo: PARTNER_LOGO
      },
      {
        id: 3,
        logo: PARTNER_LOGO
      },
      {
        id: 4,
        logo: PARTNER_LOGO
      },
      {
        id: 5,
        logo: PARTNER_LOGO
      },
      {
        id: 6,
        logo: PARTNER_LOGO
      },
      {
        id: 7,
        logo: PARTNER_LOGO
      },
      {
        id: 8,
        logo: PARTNER_LOGO
      },
      {
        id: 9,
        logo: PARTNER_LOGO
      }
    ]
  },
  {
    id: 3,
    type: '社区支持',
    members: [
      {
        id: 1,
        logo: PARTNER_LOGO
      },
      {
        id: 2,
        logo: PARTNER_LOGO
      },
      {
        id: 3,
        logo: PARTNER_LOGO
      },
      {
        id: 4,
        logo: PARTNER_LOGO
      },
      {
        id: 5,
        logo: PARTNER_LOGO
      },
      {
        id: 6,
        logo: PARTNER_LOGO
      },
      {
        id: 7,
        logo: PARTNER_LOGO
      },
      {
        id: 8,
        logo: PARTNER_LOGO
      },
      {
        id: 9,
        logo: PARTNER_LOGO
      }
    ]
  }
];

const contactMethods = [
  {
    id: 1,
    name: 'wechat',
    icon: ['fab', 'weixin'],
    link: null
  },
  {
    id: 2,
    name: 'facebook',
    icon: ['fab', 'facebook'],
    link: 'https://www.facebook.com/aelfofficial/'
  },
  {
    id: 3,
    name: 'medium',
    icon: ['fab', 'medium'],
    link: 'https://medium.com/aelfblockchain'
  },
  {
    id: 4,
    name: 'reddit',
    icon: ['fab', 'reddit'],
    link: 'https://www.reddit.com/r/aelfofficial/'
  },
  {
    id: 5,
    name: 'github',
    icon: ['fab', 'github'],
    link: 'https://github.com/aelfProject'
  },
  {
    id: 6,
    name: 'youtube',
    icon: ['fab', 'youtube'],
    link: 'https://www.youtube.com/c/aelfblockchain'
  },
  {
    id: 7,
    name: 'linkedin',
    icon: ['fab', 'linkedin'],
    link: 'https://www.linkedin.com/company/aelfblockchain/'
  },
  {
    id: 8,
    name: 'twitter',
    icon: ['fab', 'twitter'],
    link: 'https://twitter.com/aelfblockchain'
  },
  {
    id: 9,
    name: 'telegram',
    icon: ['fab', 'telegram'],
    link: 'https://t.me/aelfblockchain'
  },
  {
    id: 10,
    name: 'biyong',
    // icon: ['fab', 'biyong'],
    link: 'https://0.plus/#/aelf_chs',
    iconSrc: BIYONG_ICON
  }
];

const langs = [
  {
    id: 1,
    type: 'zh-CN',
    displayName: '中'
  },
  {
    id: 2,
    type: 'en',
    displayName: 'EN'
  }
];

class SummitNav extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      currentLang: 'zh-CN',
      isCollapsed: false
    };
    this.handleCollapse = this.handleCollapse.bind(this);
    this.handleAnchorUpdate = this.handleAnchorUpdate.bind(this);
  }

  handleAnchorUpdate(ele) {
    const { onAnchorUpdate } = this.props;
    if (typeof onAnchorUpdate === 'function') onAnchorUpdate(ele);
  }

  handleCollapse() {
    const { isCollapsed } = this.state;
    this.setState({ isCollapsed: !isCollapsed });
  }

  render() {
    const { currentLang, isCollapsed } = this.state;

    return (
      <Navbar fixed="top" variant="dark" expand="lg">
        <div className="logo-container">
          <a href="https://aelf.io">
            <div className="img-container">
              <img src={LOGO} alt="" width="200" />
            </div>
            {/* <p className="prod-intro">
            Cloud-Powered Public BlockChain for Business
          </p> */}
          </a>
        </div>
        <Navbar.Toggle
          aria-controls="basic-navbar-nav"
          data-toggle="collapse"
          onClick={this.handleCollapse}
        />
        <Navbar.Collapse id="basic-navbar-nav" in={isCollapsed}>
          <Scrollspy
            className="nav block-center mr-auto"
            items={navTitleGroup}
            currentClassName="is-current"
            onUpdate={this.handleAnchorUpdate}
            offset={-2} // use the offset to fix a bug of ScrollSpy
          >
            {navs.map(nav => (
              <Nav.Item as="li" key={nav.id}>
                <Translation>
                  {t => (
                    <Nav.Link
                      href={`#${nav.title.toLowerCase()}`}
                      // do the judge to avoid nav flash in PC
                      onClick={
                        document.body.clientWidth < 992
                          ? this.handleCollapse
                          : null
                      }
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
                <span className="btn-container" key={lang.id}>
                  {index !== 0 ? <span className="slash">/</span> : null}
                  <button
                    type="button"
                    className={`lang-btn ${isActive ? 'selected' : ''}`}
                    disabled={!!isActive}
                    onClick={() => {
                      i18n.changeLanguage(lang.type);
                      this.setState({ currentLang: lang.type });
                    }}
                  >
                    {lang.displayName}
                  </button>
                </span>
              );
            })}
          </div>
        </Navbar.Collapse>
      </Navbar>
    );
  }
}

SummitNav.propTypes = {
  onAnchorUpdate: PropTypes.func.isRequired
};

function Partners() {
  return (
    <section
      className="partners-container full-screen-container bg-gray"
      id="partners"
      style={{ minHeight: '100vh' }}
    >
      <Title title="参与者" subTitleColor="#011088" />
      {partners.map(groupOfOneType => {
        const { type } = groupOfOneType;
        return (
          <section className="margin-top-md" key={groupOfOneType.id}>
            {type ? <h1 className="text-center partner-type">{type}</h1> : null}
            <CardColumns className="partici-group block-center">
              {groupOfOneType.members.map(member => (
                <Card
                  className="rounded-lg partner-card text-center"
                  key={member.id}
                >
                  <Card.Img
                    className="partner-logo"
                    variant="top"
                    src={member.logo}
                  />
                </Card>
              ))}
            </CardColumns>
          </section>
        );
      })}
    </section>
  );
}

class Venue extends PureComponent {
  constructor(props) {
    super(props);
    this.markerPosition = { longitude: 116.410027, latitude: 39.921232 };
    this.state = {
      isMaskShow: true
    };
    this.hasRenderRealComp = false;
    this.shouldDisplay = this.shouldDisplay.bind(this);
  }

  handleClick() {
    this.setState({ isMaskShow: false });
  }

  shouldDisplay() {
    const { currentNav } = this.props;
    return (
      ['agenda', 'partners', 'venue', 'contactus'].findIndex(
        item => item === currentNav
      ) !== -1
    );
  }

  render() {
    const { hasRenderRealComp } = this;
    const { currentNav } = this.props;
    const { isMaskShow } = this.state;
    const displayFlag = this.shouldDisplay();
    if (!hasRenderRealComp && displayFlag) this.hasRenderRealComp = true;

    return (
      <section
        className="venue-container full-screen-container bg-black"
        id="venue"
        style={{ minHeight: '100vh' }}
      >
        {displayFlag || hasRenderRealComp ? (
          <div className="temp-container">
            <Title title="地址" />
            <div style={{ height: '50vh', margin: '100px 0' }}>
              <Map
                amapkey="788e08def03f95c670944fe2c78fa76f"
                plugins={['ToolBar']}
                mapStyle="amap://styles/grey"
                viewMode="3D"
                pitch="45"
                zoom="18"
                center={this.markerPosition}
              >
                <Marker
                  position={this.markerPosition}
                  clickable
                  animation={
                    currentNav === 'venue'
                      ? 'AMAP_ANIMATION_BOUNCE'
                      : 'AMAP_ANIMATION_NONE'
                  }
                />
                <InfoWindow
                  position={this.markerPosition}
                  offset={[150, -10]}
                  visible
                  // isCustom
                  content="北京市东城区王府井大街57号<br/>北京金茂万丽酒店  xx层xx厅"
                  showShadow
                />
                {isMaskShow ? (
                  <div
                    className="zoom-tip-mask"
                    role="presentation"
                    onClick={this.handleClick.bind(this)}
                    onKeyDown={this.handleClick.bind(this)}
                  >
                    {isMac()
                      ? '使用双指移动地图'
                      : '按住 Ctrl 并滚动鼠标滚轮才可缩放地图'}
                  </div>
                ) : null}
              </Map>
            </div>
          </div>
        ) : null}
      </section>
    );
  }
}

Venue.propTypes = {
  currentNav: PropTypes.string.isRequired
};

class ContactUs extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      // activeItem: null,
      isModalShow: false
    };
    this.showModal = this.showModal.bind(this);
  }

  // handleMouseOver(activeItem) {
  //   this.setState({
  //     activeItem
  //   });
  // }

  showModal() {
    this.setState({ isModalShow: true });
  }

  render() {
    const { isModalShow } = this.state;

    return (
      <div
        className="contact-us-container block-center-both-flex"
        id="contactus"
      >
        {/* <section className="contact-methods  margin-top-md">
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
                </li>
              );
            })}
          </ul>
          {activeItem ? (
            <div className="center-item">
              <FontAwesomeIcon
                icon={activeItem}
                size="5x"
                color="lightseagreen"
                spin
              />
            </div>
          ) : null}
        </section> */}
        <section className="img-container">
          <a href="https://aelf.io">
            <img src={LOGO} alt="" />
          </a>
        </section>
        <section className="contact-methods-container">
          <h1 className="contact-title">联系我们</h1>
          <section className="follow-us-container">
            <p className="follow-word">关注我们</p>
            <ul className="contact-method-group">
              {contactMethods.map(method => {
                const { icon, iconSrc, link } = method;
                return (
                  <li
                    className="contact-method-item"
                    key={method.id}
                    // onMouseOver={this.handleMouseOver.bind(this, method.icon)}
                    onClick={method.name === 'wechat' ? this.showModal : null}
                    onKeyDown={method.name === 'wechat' ? this.showModal : null}
                  >
                    <a href={link}>
                      {icon ? (
                        <FontAwesomeIcon
                          icon={icon}
                          size="3x"
                          className="social-network-icon"
                          color="white"
                        />
                      ) : (
                        <img
                          src={iconSrc}
                          alt=""
                          style={{ marginTop: '-20px' }}
                        />
                      )}
                    </a>
                  </li>
                );
              })}
            </ul>
          </section>
        </section>
        <CopyRight />
        <Modal
          // {...props}
          show={isModalShow}
          size="lg"
          aria-labelledby="contained-modal-title-vcenter"
          centered
        >
          {isPC() ? (
            <Modal.Body>
              <p className="modal-words main-color">
                微信搜索“aelf社区”官方微信公众号，获取更多资讯！
              </p>
              <Button
                className="modal-confirm-btn black-color bg-main-color"
                onClick={() => {
                  this.setState({ isModalShow: false });
                }}
              >
                确认
              </Button>
            </Modal.Body>
          ) : (
            <Modal.Body>
              <div className="img-container">
                <img src={WECHAT_QRCODE} alt="" width="180" />
              </div>
              <p className="modal-words main-color">
                扫码关注“aelf社区”官方微信公众号，了解更多资讯！
              </p>
              <Button
                className="modal-confirm-btn black-color bg-main-color"
                onClick={() => {
                  this.setState({ isModalShow: false });
                }}
              >
                确认
              </Button>
            </Modal.Body>
          )}
        </Modal>
      </div>
    );
  }
}

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentNav: window.location.hash || 'home'
    };
    this.onAnchorUpdate = this.onAnchorUpdate.bind(this);
  }

  componentDidMount() {
    // window.addEventListener('scroll', this.handleScroll.bind(this));
    // window.addEventListener('wheel', throttle(1000, this.handleScroll.bind(this)), true);
  }

  onAnchorUpdate(ele) {
    if (ele) {
      this.setState({
        currentNav: ele.id
      });
    }
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
          <SummitNav onAnchorUpdate={this.onAnchorUpdate} />
          <Home />
          <About />
          <Speakers />
          <Agenda />
          <Partners />
          <Venue currentNav={currentNav} />
          <ContactUs />
        </div>
      </div>
    );
  }
}

export default React.memo(App);
