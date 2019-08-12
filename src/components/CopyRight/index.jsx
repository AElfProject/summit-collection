import React, { Component } from 'react';
import './index.less';

function CopyRight(props) {
  const { style } = props;
  return (
    <p className='text-center copyright-container' style={style}>
      <a className='official-website-link' href="https://aelf.io/">Copyright © {new Date().getFullYear()} ælf</a>
    </p>
  );
}

export default CopyRight;
