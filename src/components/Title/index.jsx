import React from 'react';
import './index.less';

export default function Title(props) {
  const { title } = props;

  return (
    <div className="title">
      ————————
      &nbsp;
      {title}
      &nbsp;
      ————————
    </div>
  );
}
