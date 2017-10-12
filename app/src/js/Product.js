/* eslint-disable */
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

class App extends Component {
  constructor(props) {
    super(props);
    autoBind(this);
  }
  handleClick() {
    console.warn('javascript working');
  }

  getProductInformation(id) {
    // TODO: GET PRODUCT INFO
    console.log('DOUG HERE GET PRODUCT INFORMATION');
    console.log('id', id);
  }

  componentDidMount() {
    this.getProductInformation(this.props.match.params.id);
  }

  render() {
    console.log('this.props', this.props);
    return (
      <div className="Product">
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
