import React from 'react';
import './index.less';

function CopyRight(props) {
  const { style } = props;
  return (
    <p className="text-center copyright-container">
      <a
        className="official-website-link"
        href="https://aelf.io/"
        style={style}
      >
        {`Copyright © ${new Date().getFullYear()} ælf`}
      </a>
    </p>
  );
}

export default CopyRight;
