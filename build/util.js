/**
 * @file 打包工具
 * @author atom-yang
 */
/* eslint-env node */

const path = require('path');
const glob = require('glob');
const fs = require('fs');

const config = require('./config');

const isProdMode = process.env.NODE_ENV === 'production';

const ROOT = path.resolve(__dirname, '..');

const PUBLIC_PATH = isProdMode ? config.outputPath : '/';

const OUTPUT_PATH = path.resolve(__dirname, '..', 'dist');

const PAGES = glob.sync('src/pages/*/index.jsx').map(page => {
  const name = page
    .slice(4, -10)
    .replace(/\//g, '-')
    .toLowerCase();
  const paths = path.join(ROOT, page);
  const dirName = path.dirname(paths);
  const config = JSON.parse(
    fs.readFileSync(path.resolve(dirName, './config.json')).toString()
  );
  return {
    origin: page,
    path: paths,
    config,
    name
  };
});

const ENTRIES = PAGES.reduce((entries, page) => {
  entries[page.name] = path.resolve(ROOT, page.origin);
  return entries;
}, {});

function getLessVariables(file) {
  var themeContent = fs.readFileSync(file, 'utf-8');
  var variables = {};
  themeContent.split('\n').forEach(function(item) {
    if (item.indexOf('//') > -1 || item.indexOf('/*') > -1) {
      return;
    }
    var _pair = item.split(':');
    if (_pair.length < 2) return;
    var key = _pair[0].replace('\r', '').replace('@', '');
    if (!key) return;
    var value = _pair[1]
      .replace(';', '')
      .replace('\r', '')
      .replace(/^\s+|\s+$/g, '');
    variables[key] = value;
  });
  return variables;
}

module.exports = {
  ROOT,
  PAGES,
  PUBLIC_PATH,
  OUTPUT_PATH,
  isProdMode,
  ENTRIES,
  getLessVariables
};
