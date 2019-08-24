import React, { PureComponent } from 'react';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import './index.less';
import CopyRight from '@components/CopyRight/';
import WECHAT_QRCODE from '@img/wechat-qrcode-sm.jpg';
import BIYONG_ICON from '@img/biyong-icon.jpg';
import LOGO from '@img/logo.png';
import { isPC } from '@utils/tools';

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

export default class ContactUs extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      // activeItem: null,
      isModalShow: false
    };
    this.toggleModal = this.toggleModal.bind(this);
  }

  // handleMouseOver(activeItem) {
  //   this.setState({
  //     activeItem
  //   });
  // }

  toggleModal(status) {
    this.setState({ isModalShow: status });
  }

  render() {
    const { isModalShow } = this.state;

    return (
      <div
        className="contact-us-container block-center-both-flex one-screen-height"
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
                    onClick={
                      method.name === 'wechat'
                        ? this.toggleModal.bind(this, true)
                        : null
                    }
                    onKeyDown={
                      method.name === 'wechat'
                        ? this.toggleModal.bind(this, true)
                        : null
                    }
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
                  this.toggleModal(false);
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
                  this.toggleModal(false);
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
