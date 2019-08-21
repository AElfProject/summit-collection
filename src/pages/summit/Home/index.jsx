import React from 'react';
import './index.less';

export default function Home() {
  return (
    <div
      className="home-container block-center-both-flex full-screen-height"
      id="home"
    >
      {/* <div className="logo-container">
          <img src={LOGO} alt="" width="200" />
        </div> */}
      <div className="info-container">
        <h1 className="summit-title white">AElf生态峰会</h1>
        <h1 className="summit-sub-title white">AElf Summit 2019</h1>
        <h2 className="summit-slogen white block-center-both-flex">
          暨AELF生态基金启动仪式
        </h2>
      </div>
      <div className="summit-date-position">
        <h3 className="date-position-simple-info white">
          xxxx-xx-xx · 地点
        </h3>
        <p className="position-detail white">
          （地点详情）
        </p>
      </div>
    </div>
  );
}
