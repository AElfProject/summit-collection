import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Scrollspy from 'react-scrollspy';
import { Translation } from 'react-i18next';

import LOGO from '@img/logo.png';
import i18n from '@pages/summit/i18n';
import './index.less';

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

export const navTitleGroup = navs.map(item => item.title.toLocaleLowerCase());

export default class SummitNav extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      currentLang: 'zh-CN',
      isCollapsed: false
    };
    this.handleCollapse = this.handleCollapse.bind(this);
    this.handleAnchorUpdate = this.handleAnchorUpdate.bind(this);
    this.handleChangeLang = this.handleChangeLang.bind(this);
  }

  handleAnchorUpdate(ele) {
    const { onAnchorUpdate } = this.props;
    if (typeof onAnchorUpdate === 'function') onAnchorUpdate(ele);
  }

  handleCollapse() {
    const { isCollapsed } = this.state;
    this.setState({ isCollapsed: !isCollapsed });
  }

  handleChangeLang(lang) {
    i18n.changeLanguage(lang.type);
    this.setState({ currentLang: lang.type });
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
                      this.handleChangeLang(lang);
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
