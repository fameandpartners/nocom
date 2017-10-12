import React, { Component } from 'react';
import autoBind from 'react-autobind';
import { Link } from 'react-router-dom';

// App Components
import SideMenu from './components/shared/SideMenu';
import AppMain from './components/pdp/AppMain';

// Global Styles
import '../css/global/variables.scss';
import '../css/reset.scss';
import '../css/gridlex.scss';
import '../css/utility.scss';
import '../css/layout.scss';
import '../css/typography.scss';
import '../css/components/App.scss';

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
        <Link to="/welcome">Welcome</Link>
        <SideMenu />
        <AppMain />
      </div>
    );
  }
}

export default App;
