/*
 * @Author: atom-yang, Alfred Yang
 * @Github: https://github.com/cat-walk
 * @Date: 2019-08-17 23:33:03
 * @LastEditors: Alfred Yang
 * @LastEditTime: 2019-08-24 11:52:46
 * @Description: file content
 */
import React, { PureComponent } from 'react';
// import 'bootstrap/dist/css/bootstrap.min.css'; // default bootstrap css
import 'minireset.css/minireset.min.css';
import '@public/css/bootstrap.min.css'; // bootstrap css with custom theme, eg font-family...

// import { debounce } from 'debounce';
// import { throttle } from 'throttle-debounce';

import './index.less';
import './icons';
import Home from './Home';
import About from './About';
import Speakers from './Speakers';
import Agenda from './Agenda';
import Partners from './Partners';
import Venue from './Venue';
import ContactUs from './ContactUs';
import SummitNav, { navTitleGroup } from './SummitNav';

// PureComponent's children component must be pure too
// It requests children to be PureComponent or FunctionComponent after memo
// At here, the children components of App fullfil the requirement
class App extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      currentNav: window.location.hash || 'home'
    };
    this.onAnchorUpdate = this.onAnchorUpdate.bind(this);
  }

  componentDidMount() {
    // window.addEventListener('scroll', this.handleScroll.bind(this));
    // window.addEventListener('wheel', throttle(1000, this.handleScroll.bind(this)), true);
  }

  onAnchorUpdate(ele) {
    if (ele) {
      this.setState({
        currentNav: ele.id
      });
    }
  }

  // Prepare for future use
  handleScroll(e) {
    const { currentNav } = this.state;

    if (e.deltaY > 20) {
      // debugger;
      const index = navTitleGroup.findIndex(item => item === currentNav);
      let nextIndex = index + 1;
      if (nextIndex >= navTitleGroup.length) nextIndex -= 1;
      const nextNav = navTitleGroup[nextIndex];
      window.location.hash = nextNav;
      return true;
    }
    e.preventDefault();
    return false;
  }

  render() {
    const { currentNav } = this.state;

    return (
      <div>
        <div className="index-container">
          <SummitNav onAnchorUpdate={this.onAnchorUpdate} />
          <Home />
          <About />
          <Speakers />
          <Agenda />
          <Partners />
          <Venue currentNav={currentNav} />
          <ContactUs />
        </div>
      </div>
    );
  }
}

export default React.memo(App);
