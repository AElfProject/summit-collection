/**
 * @file entry point
 * @author atom-yang
 */
import React from 'react';
import { render, hydrate } from 'react-dom';
import App from './App';
// import Repairing from './Repairing';

// const isProdMode = process.env.NODE_ENV === 'production';
// const Element = isProdMode ? Repairing : App;

const rootElement = document.getElementById('app');
if (rootElement.hasChildNodes()) {
  hydrate(<App />, rootElement);
} else {
  render(<App />, rootElement);
}

// 这是编译的做法，如果项目要上线的话还要重新编译
// 可以整两个page，修改nginx的路径
