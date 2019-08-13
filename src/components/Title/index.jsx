import React from 'react';
import './index.less';

export default function Title(props) {
  const { title, subTitleColor } = props;

  return (
    <section className="page-title-container">
      <p className="page-subtitle" style={{ color: subTitleColor }}>
        AELF SUMMIT 2019
      </p>
      <h1 className="page-title">{title}</h1>
    </section>
  );
}
