/**
 * @file entry point
 * @author atom-yang
 */
import React from 'react';
import { render } from 'react-dom';
import App from './App';
import Repairing from './Repairing';
const isProdMode = process.env.NODE_ENV === 'production';
const Element = isProdMode ? Repairing : App;

render(<Element />, document.getElementById('app'));
