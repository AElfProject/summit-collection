/**
 * @file App.jsx
 * @author atom-yang
 */
import React from 'react';
import Button from 'react-bootstrap/Button';
import './index.less';
import 'bootstrap/dist/css/bootstrap.css';

const app = () => (
  <div>
    <div className="index-container">
      大会首页
      <Button variant="primary">Primary</Button>
    </div>
  </div>
);
export default React.memo(app);
