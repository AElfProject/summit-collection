import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { Map, Marker, InfoWindow } from 'react-amap';
// const ReactAmap = r => require.ensure([], () => r(require('react-amap')));
// const { Map, Marker, InfoWindow } = ReactAmap;

import Title from '@components/Title/';
import { isMac } from '@utils/tools';
import './index.less';

export default class Venue extends PureComponent {
  constructor(props) {
    super(props);
    this.markerPosition = { longitude: 115.410027, latitude: 30.921232 };
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
        className="venue-container full-screen-container bg-black one-screen-height"
        id="venue"
      >
        {displayFlag || hasRenderRealComp ? (
          <div className="temp-container">
            <Title title="XX" />
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
                  content="XXXXXXXXXXXX<br/>XXXXXXXX"
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
