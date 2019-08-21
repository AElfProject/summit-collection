/**
 * @file App.jsx
 * @author atom-yang
 */
import React, { Component } from 'react';
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

class App extends Component {
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
