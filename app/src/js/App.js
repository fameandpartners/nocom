import React, { Component } from 'react';
import autoBind from 'react-autobind';
import { Link } from 'react-router-dom';

// App Components
import SideMenu from './components/shared/SideMenu';
import AppMain from './components/nocom/AppMain';

// Global Styles
import '../css/global/variables.scss';
import '../css/reset.scss';
import '../css/gridlex.scss';
import '../css/utility.scss';
import '../css/layout.scss';
import '../css/typography.scss';
import '../css/components/App.scss';

// var firebase = require('firebase');
// var firebaseui = require('firebaseui');

class App extends Component {
  constructor(props) {
    super(props);
    autoBind(this);
  }
  handleClick() {
    console.warn('javascript working');
  }
  sampleTest() {
    return true;
  }

  render() {
    return (
      <div className="App">
        <header>
          <nav className="nav">
            <Link to="/home">Fame and Partners NoCom</Link>
          </nav>
        </header>
        <SideMenu />
        <AppMain />
      </div>
    );
  }
}

export default App;
