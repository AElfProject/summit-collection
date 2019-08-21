import React from 'react';
import PropTypes from 'prop-types';

import './index.less';

function Title(props) {
  const { title, subTitleColor } = props;

  return (
    <section className="page-title-container">
      <p className="page-subtitle" style={{ color: subTitleColor }}>
        XXXX XXXX XXXX
      </p>
      <h1 className="page-title">{title}</h1>
    </section>
  );
}

Title.propTypes = {
  title: PropTypes.string.isRequired,
  subTitleColor: PropTypes.string
};

Title.defaultProps = {
  subTitleColor: '#fff'
};

export default React.memo(Title);
